import {create} from "zustand";
import {persist} from "zustand/middleware";

type State = {
  token: string,
  userInfo: {
    username: string,
  },
}

type Action = {
  setUserState: (state: Partial<State>) => void,
}

const useUserStore = create<State & Action>()(
  persist(
    (set) => ({
      token: "",
      userInfo: {
        username: "",
      },
      setUserState: (newState) => set((state) => ({...state, ...newState}))
    }),
    {
      name: "userStore",
      // getStorage: () => localStorage,
    }
  )
);

export default useUserStore;