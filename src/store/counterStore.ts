import {create} from 'zustand';

interface CounterState {
  counter: number;
  setCounter: (counter: number) => void;
  incrementCounter: () => void;
}

const counterStore = create<CounterState>((set) => ({
  counter: 0,
  setCounter: (num: number) => set((state) => ({
    counter: state.counter + num
  })),
  incrementCounter: () => set((state) => ({
    counter: state.counter + 1,
  }))
}));

export default counterStore;