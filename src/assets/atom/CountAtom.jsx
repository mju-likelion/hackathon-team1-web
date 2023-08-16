import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const CountAtom = atom({
  key: "CountAtom",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
