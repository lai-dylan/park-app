import {create} from "zustand";
import {persist} from "zustand/middleware";
import {MenuBackend} from "@/components/xMenu";

type State = {
  menuList: MenuBackend[]
}

type Action = {
  setState: (state: Partial<State>) => void,
}

const useSystemStore = create<State & Action>()(
  persist(
    (set) => ({
      menuList: [],
      setState: (newState) => set((state) => ({...state, ...newState}))
    }),
    {
      name: "systemStore",
    }
  ));

export default useSystemStore;