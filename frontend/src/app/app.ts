import { Component, inject, OnInit } from '@angular/core';
import { NoteService } from './note.service';
import { NoteListComponent } from './components/note-list.component';
import { NoteFormComponent } from './components/note-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NoteListComponent, NoteFormComponent],
  template: `
    <nav class="navbar navbar-dark bg-primary mb-4">
      <div class="container">
        <span class="navbar-brand mb-0 h1">Notes</span>
      </div>
    </nav>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <app-note-form />
          <app-note-list />
        </div>
      </div>
    </div>
  `
})
export class App implements OnInit {
  private noteService = inject(NoteService);

  ngOnInit() {
    this.noteService.fetchNotes();
  }
}