import { create } from "zustand";

export type LinkInputType = {
  id: number;
  link: string;
  platform: string;
};

type LinkStore = {
  linkInputs: LinkInputType[];
  addLink: () => void;
  removeLink: (id: number) => void;
  moveLink: (id: number, direction: "up" | "down") => void;
  updateLink: (
    id: number,
    property: "link" | "platform",
    value: string
  ) => void;
};

export const useLinkStore = create<LinkStore>((set) => ({
  linkInputs: [{ id: 1, link: "", platform: "" }],
  addLink: () => {
    set((state) => ({
      linkInputs: [
        ...state.linkInputs,
        { id: state.linkInputs.length + 1, link: "", platform: "" },
      ],
    }));
  },
  removeLink: (id) => {
    set((state) => ({
      linkInputs: state.linkInputs.filter((input) => input.id !== id),
    }));
  },
  moveLink: (id, direction) => {
    set((state) => {
      // Find the current index
      const currentIndex = state.linkInputs.findIndex(
        (input) => input.id === id
      );
      // Find last index
      const lastIndex = state.linkInputs.length - 1;

      if (direction === "up" && currentIndex > 0) {
        const updatedInputs = [...state.linkInputs];
        [updatedInputs[currentIndex], updatedInputs[currentIndex - 1]] = [
          updatedInputs[currentIndex - 1],
          updatedInputs[currentIndex],
        ];
        return { linkInputs: updatedInputs };
      } else if (direction === "down" && currentIndex < lastIndex) {
        const updateInputs = [...state.linkInputs];
        [updateInputs[currentIndex], updateInputs[currentIndex + 1]] = [
          updateInputs[currentIndex + 1],
          updateInputs[currentIndex],
        ];
        return { linkInputs: updateInputs };
      }
      return state;
    });
  },
  updateLink: (id, property, value) => {
    set((state) => ({
      linkInputs: state.linkInputs.map((input) =>
        input.id === id ? { ...input, [property]: value } : input
      ),
    }));
  },
}));
