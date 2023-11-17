import { create } from "zustand";

type Direction = "up" | "down";

interface Link {
  id: number;
  link: string;
  platform: string;
}

interface UseMultipleInputStore {
  inputFields: Link[];
  addInputField: () => void;
  removeInputField: (id: number) => void;
  moveInputField: (id: number, direction: Direction) => void;
}

export const useMultipleInput = create<UseMultipleInputStore>((set) => ({
  inputFields: [],
  addInputField: () => {
    set((state) => ({
      inputFields: [
        ...state.inputFields,
        { id: state.inputFields.length + 1, link: "", platform: "" },
      ],
    }));
  },
  removeInputField: (id: number) => {
    set((state) => ({
      inputFields: state.inputFields.filter((field) => field.id !== id),
    }));
  },
  moveInputField: (id: number, direction: Direction) => {
    set((state) => {
      const currentIndex = state.inputFields.findIndex(
        (field) => field.id === id,
      );
      if (currentIndex === -1) return state;

      const newIndex =
        direction === "up"
          ? currentIndex - 1
          : direction === "down"
            ? currentIndex + 1
            : currentIndex;

      if (newIndex < 0 || newIndex >= state.inputFields.length) return state;

      const updatedFields = [...state.inputFields];
      [updatedFields[currentIndex], updatedFields[newIndex]] = [
        updatedFields[newIndex],
        updatedFields[currentIndex],
      ];

      return { inputFields: updatedFields };
    });
  },
}));
