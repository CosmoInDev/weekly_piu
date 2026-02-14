/**
 * Supabase DB types (align with specs/erd.sql).
 * Regenerate with: npx supabase gen types typescript --project-id <id> > src/types/database.ts
 */
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string | null;
          avatar_url: string | null;
          updated_at: string;
        };
        Insert: {
          id: string;
          username?: string | null;
          avatar_url?: string | null;
          updated_at?: string;
        };
        Update: {
          id?: string;
          username?: string | null;
          avatar_url?: string | null;
          updated_at?: string;
        };
      };
      tasks: {
        Row: {
          id: number;
          title: string;
          start_date: string;
          end_date: string;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          title: string;
          start_date: string;
          end_date: string;
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          title?: string;
          start_date?: string;
          end_date?: string;
          is_active?: boolean;
          created_at?: string;
        };
      };
      jobs: {
        Row: {
          id: number;
          task_id: number;
          song_name: string;
          level_type: 'S' | 'D';
          level_number: number;
          sort_order: number | null;
        };
        Insert: {
          task_id: number;
          song_name: string;
          level_type: 'S' | 'D';
          level_number: number;
          sort_order?: number | null;
        };
        Update: {
          task_id?: number;
          song_name?: string;
          level_type?: 'S' | 'D';
          level_number?: number;
          sort_order?: number | null;
        };
      };
      submissions: {
        Row: {
          id: number;
          job_id: number;
          user_id: string;
          image_url: string;
          comment: string | null;
          status: 'pending' | 'approved' | 'rejected';
          created_at: string;
        };
        Insert: {
          job_id: number;
          user_id: string;
          image_url: string;
          comment?: string | null;
          status?: 'pending' | 'approved' | 'rejected';
          created_at?: string;
        };
        Update: {
          job_id?: number;
          user_id?: string;
          image_url?: string;
          comment?: string | null;
          status?: 'pending' | 'approved' | 'rejected';
          created_at?: string;
        };
      };
    };
  };
}
