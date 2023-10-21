import { create } from "zustand";

interface TabState {
  tab: string;
  setTabState: (name: string) => void;
}

const useTabStore = create<TabState>()((set) => ({
  tab: "link",
  setTabState: (name) => set({ tab: name }), // Update the tab state with the new name
}));

export default useTabStore;
