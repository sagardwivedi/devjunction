import { Link } from '@/types/definition';
import { create } from 'zustand';

type Direction = 'up' | 'down';

interface UseMultipleInputStore {
  inputFields: Link[];
  setInputFields: (newFields: Link[]) => void;
  addInputField: () => void;
  removeInputField: (id: number) => void;
  moveInputField: (id: number, direction: Direction) => void;
  updateInputField: (id: number, updatedField: Partial<Link>) => void;
}

export const useMultipleInput = create<UseMultipleInputStore>()((set) => ({
  inputFields: [
    { id: 1, platform: '', link: '' },
    { id: 2, link: '', platform: '' },
  ],

  setInputFields: (newFields: Link[]) => {
    set((state) => ({ inputFields: newFields }));
  },

  addInputField: () => {
    set((state) => ({
      inputFields: [
        ...state.inputFields,
        { id: state.inputFields.length + 1, link: '', platform: '' },
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

      const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;

      if (newIndex < 0 || newIndex >= state.inputFields.length) return state;

      const updatedFields = [...state.inputFields];
      [updatedFields[currentIndex], updatedFields[newIndex]] = [
        updatedFields[newIndex],
        updatedFields[currentIndex],
      ];

      return { inputFields: updatedFields };
    });
  },

  updateInputField: (id: number, updatedField: Partial<Link>) => {
    set((state) => ({
      inputFields: state.inputFields.map((field) =>
        field.id === id ? { ...field, ...updatedField } : field,
      ),
    }));
  },
}));
