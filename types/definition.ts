export interface UserProfile {
  firstname: string;
  lastname: string;
  email: string;
  avatar_url: string;
}

export interface UserProfileSocial extends UserProfile {
  socialMedia: Link[];
}

export interface Link {
  id: number;
  link: string;
  platform: string;
}
