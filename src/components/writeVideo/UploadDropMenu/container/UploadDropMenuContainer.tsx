import type { UseFormSetValue } from 'react-hook-form';
import UploadDropMenu from '../UploadDropMenu'
import type { WriteVideoFormType } from '@/schema/writeVideo.schema';
import { useCallback, useState } from 'react';
interface Props{
  currentCategory:string;
  setValue:UseFormSetValue<WriteVideoFormType>;
}
const UploadDropMenuContainer = ({currentCategory,setValue}:Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen = useCallback(
      () => {
       setIsOpen((prev)=>!prev); 
      },
      [],
    )
    
  return (
    <UploadDropMenu
      currentCategory={currentCategory}
      setValue={setValue}
    />
  )
}

export default UploadDropMenuContainer