import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NoteService {
  notes = signal<any[]>([]);
  private apiUrl = 'http://localhost:3000/api/notes';

  async fetchNotes() {
    try {
      const res = await fetch(this.apiUrl);
      this.notes.set(await res.json());
    } catch (e) { console.error(e); }
  }

  async addNote(title: string, content: string) {
    const res = await fetch(this.apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    });
    if (res.ok) {
      const newNote = await res.json();
      this.notes.update(all => [...all, newNote]);
    }
  }

  async deleteNote(id: number) {
    const res = await fetch(`${this.apiUrl}/${id}`, { method: 'DELETE' });
    if (res.ok) {
      this.notes.update(all => all.filter(n => n.id !== id));
    }
  }
}