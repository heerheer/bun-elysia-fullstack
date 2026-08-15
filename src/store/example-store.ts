import { create } from 'zustand';

type ExampleState = {
  clicks: number;
  increment: () => void;
};

export const useExampleStore = create<ExampleState>((set) => ({
  clicks: 0,
  increment: () => set((state) => ({ clicks: state.clicks + 1 }))
}));
