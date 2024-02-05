export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      dht11: {
        Row: {
          created_at: string
          Humidity: number | null
          id: number
          room_id: string | null
          Temperature: number | null
        }
        Insert: {
          created_at?: string
          Humidity?: number | null
          id?: number
          room_id?: string | null
          Temperature?: number | null
        }
        Update: {
          created_at?: string
          Humidity?: number | null
          id?: number
          room_id?: string | null
          Temperature?: number | null
        }
        Relationships: []
      }
      ldr: {
        Row: {
          created_at: string
          id: number
          room_id: string | null
          status: string | null
          value: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          room_id?: string | null
          status?: string | null
          value?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          room_id?: string | null
          status?: string | null
          value?: number | null
        }
        Relationships: []
      }
      pir: {
        Row: {
          created_at: string
          id: number
          room_id: string | null
          status: string | null
          value: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          room_id?: string | null
          status?: string | null
          value?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          room_id?: string | null
          status?: string | null
          value?: number | null
        }
        Relationships: []
      }
      rfid: {
        Row: {
          code: string | null
          created_at: string
          id: number
          Result: string | null
          room_id: string | null
          username: string | null
        }
        Insert: {
          code?: string | null
          created_at?: string
          id?: number
          Result?: string | null
          room_id?: string | null
          username?: string | null
        }
        Update: {
          code?: string | null
          created_at?: string
          id?: number
          Result?: string | null
          room_id?: string | null
          username?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
