import { categoriesConstants } from "@/constants/categoriesConstants"

export const getFindCategory = (category: string) => {
    const findCategory = categoriesConstants.find((item) => item.name === category)
    return findCategory?.title
}

export const formatVideoTime =(time:number)=>{
     if (!time || isNaN(time)) {
       return "00:00";
     }

     const minutes = Math.floor(time / 60);
     const seconds = Math.floor(time % 60);
     return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}