import {create} from "zustand";

type TBearStoreState = {
  bears: number;
  color: string;
  size: string;
  increasePopulation: (num: number) => void;
  removeAllBears: () => void;
};

export const useBearStore = create<TBearStoreState>((set) => ({
  bears: 0,
  color: "#e1dfdf",
  size: "big",
  increasePopulation: (num: number) => set(
    (state) => ({bears: state.bears + num})
  ),
  removeAllBears: () => set({
    bears: 0
  })
}));