import { create } from 'zustand';

export interface Profile {
  firstname: string;
  lastname: string;
  email: string;
  avatar_url: string;
}

interface ProfileState {
  data: Profile;
  update: (data: Partial<Profile>) => void;
}

export const useProfile = create<ProfileState>()((set) => ({
  data: {
    avatar_url: '',
    email: '',
    firstname: '',
    lastname: '',
  },
  update: (data: Partial<Profile>) => {
    set((state) => ({
      data: {
        ...state.data,
        ...data,
      },
    }));
  },
}));
