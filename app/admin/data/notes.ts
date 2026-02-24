export interface Note {
  id: string;
  text: string;
  done: boolean;
}

export const notes: Note[] = [
  { id: "1", text: "Set up Formspree account with proper form ID", done: false },
  { id: "2", text: "Get custom domain for portfolio", done: false },
  { id: "3", text: "Add OpenGraph image for social sharing", done: false },
  { id: "4", text: "Post on local KC business Facebook groups", done: false },
  { id: "5", text: "Reach out to 5 local businesses this week", done: false },
];
