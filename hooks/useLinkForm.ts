import { create } from "zustand";

export type LinkInput = {
  id: number;
  link: string;
  platform: string;
};

type LinkStoreState = {
  inputs: LinkInput[];
  nextId: number;
  addInput: () => void;
  removeInput: (id: number) => void;
  moveUp: (id: number) => void;
  moveDown: (id: number) => void;
  updateInput: (id: number, updatedInput: Partial<LinkInput>) => void;
  getUniquePlatforms: (state: LinkStoreState) => string[];
};

export const useLinkStore = create<LinkStoreState>((set) => {
  return {
    inputs: [
      { id: 1, link: "", platform: "" },
      { id: 2, link: "", platform: "" },
    ],
    nextId: 3,

    addInput: () => {
      set((state) => {
        const id = state.nextId;
        const newInput: LinkInput = { id, link: "", platform: "" };
        state.inputs.push(newInput);
        state.nextId++;
        return { inputs: [...state.inputs], nextId: state.nextId };
      });
    },

    removeInput: (id) => {
      set((state) => {
        state.inputs = state.inputs.filter((input) => input.id !== id);
        return { inputs: [...state.inputs] };
      });
    },

    moveUp: (id) => {
      set((state) => {
        const index = state.inputs.findIndex((input) => input.id === id);
        if (index > 0) {
          [state.inputs[index - 1], state.inputs[index]] = [
            state.inputs[index],
            state.inputs[index - 1],
          ];
        }
        return { inputs: [...state.inputs] };
      });
    },

    moveDown: (id) => {
      set((state) => {
        const index = state.inputs.findIndex((input) => input.id === id);
        if (index < state.inputs.length - 1) {
          [state.inputs[index], state.inputs[index + 1]] = [
            state.inputs[index + 1],
            state.inputs[index],
          ];
        }
        return { inputs: [...state.inputs] };
      });
    },

    updateInput: (id, updatedInput) => {
      set((state) => {
        const index = state.inputs.findIndex((input) => input.id === id);
        if (index !== -1) {
          state.inputs[index] = { ...state.inputs[index], ...updatedInput };
        }
        return { inputs: [...state.inputs] };
      });
    },

    getUniquePlatforms: (state: LinkStoreState) => {
      const platformsSet = new Set<string>();
      state.inputs.forEach((input) => {
        const platform = input.platform;
        if (platform) {
          platformsSet.add(platform);
        }
      });
      return Array.from(platformsSet);
    },
  };
});
