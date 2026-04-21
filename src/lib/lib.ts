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

export const formatDateWithTimezone = (isoString: string): string => {
  if (!isoString) return "";
  const date = new Date(isoString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};