import { categoriesConstants } from "@/constants/categoriesConstants"

export const getFindCategory = (category: string) => {
    const findCategory = categoriesConstants.find((item) => item.name === category)
    return findCategory?.title
}