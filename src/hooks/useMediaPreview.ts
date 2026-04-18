import { useState } from "react";
import type { FieldValues, Path, UseFormSetValue, PathValue } from "react-hook-form";

export const useMediaPreview = <T extends FieldValues>({
    name,
    setValue
}: {
    name: Path<T>,
    setValue: UseFormSetValue<T>
}) => {
    const [mediaPreview, setMediaPreview] = useState<string | null>(null);

    const addPreviewMedia = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            const file = e.target.files[0];
            setValue(name, file as PathValue<T, Path<T>>, {
                shouldValidate: true,
                shouldDirty: true,
            });
            if (file) {
                const reader = new FileReader();
                reader.readAsDataURL(file);

                await new Promise((resolve) => {
                    // 2. -> 를 => 로 수정
                    reader.onload = () => {
                        setMediaPreview(reader.result as string);
                        resolve(null);
                    };
                });
            }
        }
    };
    return { mediaPreview, addPreviewMedia };
};