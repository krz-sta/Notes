import { Component, inject } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-list',
  standalone: true,
  template: `
    <div class="row g-3">
        @for (note of service.notes(); track note.id) {
        <div class="col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{ note.title }}</h5>
                <p class="card-text flex-grow-1 text-muted">{{ note.content }}</p>
                <div class="mt-3 text-end">
                <button (click)="service.deleteNote(note.id)" class="btn btn-outline-danger btn-sm">
                    Usuń
                </button>
                </div>
            </div>
            </div>
        </div>
        } @empty {
        <div class="col-12 text-center py-5 text-muted">
            <p>Brak notatek.</p>
        </div>
        }
    </div>
    `
})
export class NoteListComponent {
  public service = inject(NoteService);
}