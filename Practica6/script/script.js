// --- Selección de elementos ---
const form = document.getElementById('noteForm');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const notesContainer = document.getElementById('notesContainer');

let editId = null; // Controla si se está editando una nota

// --- Cargar notas guardadas ---
document.addEventListener('DOMContentLoaded', loadNotes);

// --- Evento para agregar o editar notas ---
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (!title || !content) return;

    if (editId) {
    updateNote(editId, title, content);
    } else {
    const note = { id: Date.now(), title, content };
    saveNote(note);
    displayNote(note);
    }

    form.reset();
    editId = null;
});

// --- Guardar nota en localStorage ---
function saveNote(note) {
    const notes = getNotes();
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
}

// --- Obtener notas del almacenamiento ---
function getNotes() {
    return JSON.parse(localStorage.getItem('notes')) || [];
}

// --- Mostrar todas las notas guardadas ---
function loadNotes() {
    notesContainer.innerHTML = '';
    const notes = getNotes();
    notes.forEach(displayNote);
}

// --- Mostrar una nota en pantalla ---
function displayNote(note) {
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    noteDiv.innerHTML = `
    <div class="note-buttons">
        <button class="edit-btn" onclick="editNote(${note.id})"></button>
        <button class="delete-btn" onclick="deleteNote(${note.id})">×</button>
    </div>
    <h2>${note.title}</h2>
    <p>${note.content}</p>
    `;
    notesContainer.appendChild(noteDiv);
}

// --- Eliminar nota ---
function deleteNote(id) {
    let notes = getNotes().filter(note => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(notes));
    loadNotes();
}

// --- Editar nota ---
function editNote(id) {
    const notes = getNotes();
    const note = notes.find(n => n.id === id);

    if (note) {
    titleInput.value = note.title;
    contentInput.value = note.content;
    editId = id;

    const btn = form.querySelector('button');
    btn.textContent = 'save changes';
    btn.style.background = '#28a745';
    }
}

// --- Actualizar nota existente ---
function updateNote(id, title, content) {
    let notes = getNotes();
    const index = notes.findIndex(n => n.id === id);
    notes[index] = { id, title, content };
    localStorage.setItem('notes', JSON.stringify(notes));
    loadNotes();

    const btn = form.querySelector('button');
    btn.textContent = 'Add Note';
    btn.style.background = '#007bff';
}
