import { selector } from "recoil";
import { productsState } from "./productRecoil";
import { searchDataText } from "./searchRecoil";
import { productFilterByType } from "./productFilterByType";

export const filterProduct = selector({
    key:'filterProduct',
    get:({get})=>{
        const product = get(productsState)
        const searchText = get(searchDataText)
        const filterItem = get(productFilterByType)
        let filterProductState = [];
        filterProductState = product.filter((product) => product.name.toLowerCase().includes(searchText)).filter((product) => filterItem == "" ? true:product.type == filterItem)
        return filterProductState
    }
})