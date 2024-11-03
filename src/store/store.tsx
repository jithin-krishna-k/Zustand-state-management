import { create } from "zustand";

interface CounterStore {
    count: number;
    incrementCounter: () => void;
    decrementCounter: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
    count: parseInt(localStorage.getItem('count') || '0'),    

    incrementCounter: () =>
        set((state) => {
            const newCount = state.count + 1;
            localStorage.setItem('count', newCount.toString())
            return { count: newCount };
        }),

    decrementCounter: () =>
        set((state) => {
            const newCount = Math.max(state.count - 1, 0);
            localStorage.setItem('count', newCount.toString());
            return { count: newCount };
        }),
}));

export default useCounterStore;