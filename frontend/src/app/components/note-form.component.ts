import { Component, inject } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-form',
  standalone: true,
  template: `
    <div class="card shadow-sm mb-4">
        <div class="card-body">
        <h5 class="card-title mb-3">Nowa notatka</h5>
        <div class="mb-3">
            <input #titleInput type="text" class="form-control" placeholder="Tytuł">
        </div>
        <div class="mb-3">
            <textarea #contentInput class="form-control" rows="3" placeholder="Treść..."></textarea>
        </div>
        <button (click)="handleAdd(titleInput, contentInput)" class="btn btn-primary w-100">
            Dodaj notatkę
        </button>
        </div>
    </div>
    `
})
export class NoteFormComponent {
  private service = inject(NoteService);

  async handleAdd(titleEl: HTMLInputElement, contentEl: HTMLTextAreaElement) {
    if (!titleEl.value || !contentEl.value) return;

    await this.service.addNote(titleEl.value, contentEl.value);
    
    titleEl.value = '';
    contentEl.value = '';
  }
}