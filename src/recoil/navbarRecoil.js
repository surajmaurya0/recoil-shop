import { atom } from "recoil";
const url = window.location.href;
const productUrl = url.split('/').pop()
export const NavbarRecoil = atom({
    key:'NavbarRecoil',
    default:productUrl
})