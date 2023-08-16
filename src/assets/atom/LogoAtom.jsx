import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const LogoAtom = atom({
  key: "LogoAtom",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
