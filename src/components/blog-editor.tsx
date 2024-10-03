import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";
import "@/styles/editor.css";

import { useTheme } from "next-themes";

interface EditorProps {
  onContentChange: (content: Promise<string>) => void | undefined
}

export default function Editor({onContentChange }: EditorProps) {
  const editor = useCreateBlockNote();
  const theme = useTheme();
  const currentTheme: 'dark' | 'light' = theme.theme === 'dark' ? 'dark' : 'light';
  
  const onChange = async () => {
    const htmlPromise = editor.blocksToFullHTML(editor.document).then((document) => document)
    onContentChange(htmlPromise)
  }

  return (
    <BlockNoteView
      editor={editor}
      theme={currentTheme}
      onChange={onChange}
    />
  );
}
