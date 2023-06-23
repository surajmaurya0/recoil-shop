import { selector } from "recoil";
import { filterProduct } from "./filterRecoil";

export const filterCount = selector({
    key:'filterCount',
    get:({get}) => {
        let filterProductCount = get(filterProduct)
        return filterProductCount.length
    }
})