import { useToastStore } from "@/store/useToastStore";
import type { FieldErrors, FieldValues } from "react-hook-form";

export const useOnInvalid = <T extends FieldValues>() => {
  const { addToast } = useToastStore();
  const onInvalid = (errors: FieldErrors<T>) => {
    const firstError = Object.values(errors)[0];

    if (firstError && firstError.message) {
      console.log('errors',errors)
      addToast(firstError.message as string);
    }
  };

  return { onInvalid };
};
