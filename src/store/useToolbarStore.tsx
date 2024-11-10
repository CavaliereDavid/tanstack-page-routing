import { create } from "zustand";

interface ToolbarState {
  components: React.ComponentType[];
  addComponent: (component: React.ComponentType) => void;
  removeComponent: (component: React.ComponentType) => void;
}

const useToolbarStore = create<ToolbarState>((set) => ({
  components: [],
  addComponent: (component: React.ComponentType) =>
    set((state) => ({ components: [...state.components, component] })),
  removeComponent: (component: React.ComponentType) =>
    set((state) => ({
      components: state.components.filter((c) => c !== component),
    })),
}));

export default useToolbarStore;
