export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          avatar_url: string | null;
          email: string | null;
          firstname: string | null;
          id: string;
          lastname: string | null;
          updated_at: string;
        };
        Insert: {
          avatar_url?: string | null;
          email?: string | null;
          firstname?: string | null;
          id: string;
          lastname?: string | null;
          updated_at?: string;
        };
        Update: {
          avatar_url?: string | null;
          email?: string | null;
          firstname?: string | null;
          id?: string;
          lastname?: string | null;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      social_media_links: {
        Row: {
          id: number;
          link: string;
          platform: string;
          user_id: string;
        };
        Insert: {
          id?: number;
          link: string;
          platform: string;
          user_id: string;
        };
        Update: {
          id?: number;
          link?: string;
          platform?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "social_media_links_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
