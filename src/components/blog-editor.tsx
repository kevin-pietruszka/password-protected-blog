import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";

import { useTheme } from "next-themes";

interface EditorProps {
  onContentChange: (content: any[]) => void | undefined
  initialContent: any[]
}

export default function Editor({onContentChange, initialContent }: EditorProps) {
  const editor = useCreateBlockNote({
    initialContent: initialContent
  });
  const theme = useTheme();
  const currentTheme: 'dark' | 'light' = theme.theme === 'dark' ? 'dark' : 'light';
  
  const onChange = async () => {
    onContentChange(editor.document)
  }

  return (
    <BlockNoteView
      editor={editor}
      theme={currentTheme}
      onChange={onChange}
    />
  );
}
