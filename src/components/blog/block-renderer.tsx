'use client'

import { useEffect, useState } from 'react'
import { Block, BlockNoteEditor } from '@blocknote/core'

export default function BlockRenderer({ blocks }: {blocks: Block[]}) {
  const [html, setHtml] = useState<string | null>(null)

  useEffect(() => {
    const renderBlocks = async () => {
      const editor = BlockNoteEditor.create()
      const renderedHtml = await editor.blocksToFullHTML(blocks)
      setHtml(renderedHtml)
    }

    renderBlocks()
  }, [blocks])

  if (!html) {
    return <div> {"Loading..."} </div>
  }

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
