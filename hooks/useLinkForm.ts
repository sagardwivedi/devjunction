import { create } from "zustand";

export type LinkInput = {
  id: number;
  link: string;
  platform: string;
};

type LinkStoreState = {
  linkInputs: LinkInput[];
  savedData: LinkInput[];
  addLinkInput: () => void;
  removeLinkInput: (id: number) => void;
  moveUp: (id: number) => void;
  moveDown: (id: number) => void;
  updateLinkInput: (
    id: number,
    updatedValues: Partial<Omit<LinkInput, "id">>
  ) => void;
  saveData: () => void;
};

export const useLinkStore = create<LinkStoreState>()((set) => {
  let nextId = 1;

  return {
    linkInputs: [
      { id: nextId++, link: "", platform: "" },
      { id: nextId++, link: "", platform: "" },
    ],
    savedData: [],

    addLinkInput: () => {
      set((state) => {
        const id = nextId++;
        const newLinkInput: LinkInput = { id, link: "", platform: "" };
        state.linkInputs.push(newLinkInput);
        return { linkInputs: [...state.linkInputs] };
      });
    },

    removeLinkInput: (id) => {
      set((state) => {
        state.linkInputs = state.linkInputs.filter(
          (linkInput) => linkInput.id !== id
        );
        return { linkInputs: [...state.linkInputs] };
      });
    },

    moveUp: (id) => {
      set((state) => {
        const index = state.linkInputs.findIndex(
          (linkInput) => linkInput.id === id
        );
        if (index > 0) {
          [state.linkInputs[index - 1], state.linkInputs[index]] = [
            state.linkInputs[index],
            state.linkInputs[index - 1],
          ];
        }
        return { linkInputs: [...state.linkInputs] };
      });
    },

    moveDown: (id) => {
      set((state) => {
        const index = state.linkInputs.findIndex(
          (linkInput) => linkInput.id === id
        );
        if (index < state.linkInputs.length - 1) {
          [state.linkInputs[index], state.linkInputs[index + 1]] = [
            state.linkInputs[index + 1],
            state.linkInputs[index],
          ];
        }
        return { linkInputs: [...state.linkInputs] };
      });
    },

    updateLinkInput: (id, updatedValues) => {
      set((state) => {
        state.linkInputs = state.linkInputs.map((linkInput) =>
          linkInput.id === id ? { ...linkInput, ...updatedValues } : linkInput
        );
        return { linkInputs: [...state.linkInputs] };
      });
    },

    saveData: () => {
      set((state) => {
        const nonEmptyInputs = state.linkInputs.filter(
          (input) => input.link.trim() !== "" && input.platform.trim() !== ""
        );

        if (nonEmptyInputs.length > 0) {
          state.savedData = nonEmptyInputs;
          console.log("Data saved successfully.");
        } else {
          console.log("No valid data to save.");
        }

        return { savedData: [...state.savedData] };
      });
    },
  };
});
