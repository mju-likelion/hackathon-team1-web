import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const HeaderAtom = atom({
  key: "HeaderAtom",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
