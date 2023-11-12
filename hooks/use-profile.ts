import { UserProfile } from "@/types/definition";
import { create } from "zustand";

interface UserState extends UserProfile {
  setUserData: (data: Partial<UserProfile>) => void;
}

export const useUserState = create<UserState>()((set) => ({
  email: "",
  firstname: "",
  lastname: "",
  avatar_url: "",
  setUserData: (data) => set(data),
}));
