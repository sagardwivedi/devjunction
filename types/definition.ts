export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
  socialMedia: Link[];
}

interface Link {
  id: number;
  link: string;
  platform: string;
}
