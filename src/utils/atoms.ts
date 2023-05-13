import { atom } from "recoil";
import { v4 } from "uuid";

export const isDarkModeState = atom<boolean>({
  key: "isDarkMode",
  default: false,
});
