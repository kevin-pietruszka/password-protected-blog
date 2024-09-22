"use client";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";
import "@/styles/editor.css";
import { useTheme } from "next-themes";

export default function Editor() {
  const editor = useCreateBlockNote();
  const theme = useTheme();
  const currentTheme: 'dark' | 'light' = theme.theme === 'dark' ? 'dark' : 'light';

  return (
    <BlockNoteView
      editor={editor}
      theme={currentTheme}
    />
  );
}
