import { create } from "zustand";

interface Profile {
  image: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface ProfileStoreState {
  profile: Profile;
  updateProfile: (data: Partial<Profile>) => void;
}

export const useProfileStore = create<ProfileStoreState>()((set) => ({
  profile: {
    image: "",
    firstName: "",
    lastName: "",
    email: "",
  },
  
  updateProfile: (data) => {
    set((state) => ({
      profile: { ...state.profile, ...data },
    }));
  },
}));
