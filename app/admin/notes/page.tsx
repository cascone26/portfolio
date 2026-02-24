"use client";

import { useState, useEffect } from "react";
import AdminCard from "../components/admin-card";
import { notes as defaultNotes, type Note } from "../data/notes";

const STORAGE_KEY = "admin-notes";

function loadNotes(): Note[] {
  if (typeof window === "undefined") return defaultNotes;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try { return JSON.parse(stored); } catch { /* fall through */ }
  }
  return defaultNotes;
}

function saveNotes(notes: Note[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>(defaultNotes);
  const [newText, setNewText] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setNotes(loadNotes());
    setMounted(true);
  }, []);

  function update(updated: Note[]) {
    setNotes(updated);
    saveNotes(updated);
  }

  function toggleNote(id: string) {
    update(notes.map((n) => (n.id === id ? { ...n, done: !n.done } : n)));
  }

  function addNote() {
    const text = newText.trim();
    if (!text) return;
    const id = String(Date.now());
    update([...notes, { id, text, done: false }]);
    setNewText("");
  }

  function deleteNote(id: string) {
    update(notes.filter((n) => n.id !== id));
  }

  const open = notes.filter((n) => !n.done);
  const done = notes.filter((n) => n.done);

  if (!mounted) return null;

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-6">Notes</h1>

      {/* Add note */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addNote()}
          placeholder="Add a note..."
          className="flex-1 px-4 py-2.5 rounded-lg input-field text-sm text-foreground placeholder:text-muted/50"
        />
        <button
          onClick={addNote}
          disabled={!newText.trim()}
          className="btn-gradient px-4 py-2.5 rounded-lg text-sm font-medium text-white disabled:opacity-30"
        >
          Add
        </button>
      </div>

      {/* To-do */}
      <AdminCard className="mb-6">
        <h2 className="text-sm font-semibold text-foreground mb-4">To-Do</h2>
        {open.length === 0 ? (
          <p className="text-sm text-muted">All caught up.</p>
        ) : (
          <ul className="space-y-2">
            {open.map((n) => (
              <li key={n.id} className="flex items-center gap-3 text-sm group">
                <button
                  onClick={() => toggleNote(n.id)}
                  className="w-4 h-4 rounded border border-white/[0.15] shrink-0 hover:border-accent/40 transition-colors"
                />
                <span className="text-foreground flex-1">{n.text}</span>
                <button
                  onClick={() => deleteNote(n.id)}
                  className="opacity-0 group-hover:opacity-100 text-muted hover:text-red-400 transition-all text-xs"
                >
                  remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </AdminCard>

      {/* Done */}
      {done.length > 0 && (
        <AdminCard>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold text-foreground">Done</h2>
            <button
              onClick={() => update(notes.filter((n) => !n.done))}
              className="text-xs text-muted hover:text-red-400 transition-colors"
            >
              Clear done
            </button>
          </div>
          <ul className="space-y-2">
            {done.map((n) => (
              <li key={n.id} className="flex items-center gap-3 text-sm group">
                <button
                  onClick={() => toggleNote(n.id)}
                  className="w-4 h-4 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0 hover:bg-emerald-500/30 transition-colors"
                >
                  <svg className="w-2.5 h-2.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </button>
                <span className="text-muted line-through flex-1">{n.text}</span>
                <button
                  onClick={() => deleteNote(n.id)}
                  className="opacity-0 group-hover:opacity-100 text-muted hover:text-red-400 transition-all text-xs"
                >
                  remove
                </button>
              </li>
            ))}
          </ul>
        </AdminCard>
      )}

      <p className="text-xs text-muted mt-6">Notes are saved in your browser. Default items come from app/admin/data/notes.ts.</p>
    </div>
  );
}
