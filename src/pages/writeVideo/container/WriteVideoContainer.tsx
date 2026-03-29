import { useForm } from "react-hook-form"
import WriteVideo from "../WriteVideo"
import { writeVideoSchema, type WriteVideoFormType } from "@/schema/writeVideo.schema";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useCallback } from "react";

const WriteVideoContainer = () => {
  const {
      register,
      handleSubmit,
      watch,
      setValue,
      formState:{errors}} = useForm<WriteVideoFormType>({
        resolver:zodResolver(writeVideoSchema),
        defaultValues:{
          categories:"movie"
        }
      });
    
      const onSubmit = useCallback(
        (data:WriteVideoFormType) => {
          console.log(data);
        },
        [],
      );

      const currentCategory = watch('categories');
      
  return (
    <WriteVideo 
      register={register}
      errors={errors}
      currentCategory={currentCategory}
      onSubmit={onSubmit}
      setValue={setValue}
      handleSubmit={handleSubmit}

    />
  )
}

export default WriteVideoContainer