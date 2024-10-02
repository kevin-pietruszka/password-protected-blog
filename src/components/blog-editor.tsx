import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";
import "@/styles/editor.css";

import { useTheme } from "next-themes";

interface EditorProps {
  onContentChange: (content: string) => void | undefined
}

export default function Editor({onContentChange }: EditorProps) {
  const editor = useCreateBlockNote();
  const theme = useTheme();
  const currentTheme: 'dark' | 'light' = theme.theme === 'dark' ? 'dark' : 'light';
  
  const onChange = async () => {
    const html = await editor.blocksToFullHTML(editor.document)
    onContentChange(html)
  }

  return (
    <BlockNoteView
      editor={editor}
      theme={currentTheme}
      onChange={onChange}
    />
  );
}
