import { create } from 'zustand';

interface Profile {
  firstname?: string;
  lastname?: string;
  email?: string;
  photo?: string;
}

interface ProfileState {
  data: Profile;
  update: (data: Profile) => void;
}

export const useProfile = create<ProfileState>()((set) => ({
  data: {},
  update: (data) => set({ data: { ...data } }),
}));
