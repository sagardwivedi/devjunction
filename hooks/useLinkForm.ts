import { create } from "zustand";

export type LinkInputProps = {
  id: number;
  linkURL: string;
  platform: string;
};

type LinkInputStore = {
  linkInputs: LinkInputProps[];
  addLinkInput: () => void;
  removeLinkInput: (id: number) => void;
  moveLinkInput: (id: number, direction: "up" | "down") => void;
  updateLinkURL: (id: number, linkURL: string) => void;
  updatePlatform: (id: number, platform: string) => void;
};

export const useLinkInputStore = create<LinkInputStore>()((set) => ({
  linkInputs: [
    { id: 1, linkURL: "", platform: "" },
    { id: 2, linkURL: "", platform: "" },
  ],
  addLinkInput: () => {
    set((state) => ({
      linkInputs: [
        ...state.linkInputs,
        { id: state.linkInputs.length + 1, linkURL: "", platform: "" },
      ],
    }));
  },
  removeLinkInput: (id) => {
    set((state) => ({
      linkInputs: state.linkInputs.filter((input) => input.id !== id),
    }));
  },
  moveLinkInput: (id, direction) => {
    set((state) => {
      const currentIndex = state.linkInputs.findIndex(
        (input) => input.id === id
      );
      if (direction === "up" && currentIndex > 0) {
        const updatedInputs = [...state.linkInputs];
        [updatedInputs[currentIndex], updatedInputs[currentIndex - 1]] = [
          updatedInputs[currentIndex - 1],
          updatedInputs[currentIndex],
        ];
        return { linkInputs: updatedInputs };
      } else if (
        direction === "down" &&
        currentIndex < state.linkInputs.length - 1
      ) {
        const updatedInputs = [...state.linkInputs];
        [updatedInputs[currentIndex], updatedInputs[currentIndex + 1]] = [
          updatedInputs[currentIndex + 1],
          updatedInputs[currentIndex],
        ];
        return { linkInputs: updatedInputs };
      }
      return state;
    });
  },
  updateLinkURL: (id, linkURL) => {
    set((state) => ({
      linkInputs: state.linkInputs.map((input) =>
        input.id === id ? { ...input, linkURL } : input
      ),
    }));
  },
  updatePlatform: (id, platform) => {
    set((state) => ({
      linkInputs: state.linkInputs.map((input) =>
        input.id === id ? { ...input, platform } : input
      ),
    }));
  },
}));
