import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const LanguageAtom = atom({
  key: "LanguageAtom",
  default: "KOR",
  effects_UNSTABLE: [persistAtom],
});
