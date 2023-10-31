import { create } from "zustand";

export type LinkComponent = {
  id: number;
  selectValue: string;
  inputValue: string;
};

type LinkFormStore = {
  components: LinkComponent[];
  addComponent: () => void;
  removeComponent: (id: number) => void;
  moveComponent: (id: number, direction: "up" | "down") => void;
  updateComponent: (
    id: number,
    data: Partial<Omit<LinkComponent, "id">>
  ) => void;
  setComponents: (components: LinkComponent[]) => void;
};

export const useLinkFormStore = create<LinkFormStore>((set) => {
  const initialState: LinkFormStore = {
    components: [
      { id: 1, inputValue: "", selectValue: "" },
      { id: 2, inputValue: "", selectValue: "" },
    ],
    addComponent: () => {
      set((state) => ({
        components: [
          ...state.components,
          { id: state.components.length + 1, inputValue: "", selectValue: "" },
        ],
      }));
    },
    removeComponent: (id) => {
      set((state) => ({
        components: state.components.filter((item) => item.id !== id),
      }));
    },
    moveComponent: (id, direction) => {
      set((state) => {
        const currentIndex = state.components.findIndex((c) => c.id === id);
        const newIndex =
          direction === "up" ? currentIndex - 1 : currentIndex + 1;

        const components = [...state.components];
        [components[currentIndex], components[newIndex]] = [
          components[newIndex],
          components[currentIndex],
        ];

        return { components };
      });
    },
    setComponents: (components) => set({ components }),
    updateComponent: (id, data) =>
      set((state) => ({
        components: state.components.map((c) =>
          c.id === id ? { ...c, ...data } : c
        ),
      })),
  };

  return initialState;
});
