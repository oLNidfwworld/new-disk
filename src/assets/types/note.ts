export interface NoteFields {
  title: string
  content: string
}

export type NoteRecord = NoteFields & { id: number }
