import React from 'react';
import { IconButton } from "@mui/material";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { BubbleMenu } from "@tiptap/react";

const BubblePopup = ({ editor, Underline }) => {
  if (!editor) {
    return null;
  }

  return (
    <BubbleMenu className="bubble-popup" editor={editor} tippyOptions={{ duration: 100 }}>
              <IconButton onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={
                  !editor.can()
                    .chain()
                    .focus()
                    .toggleBold()
                    .run()
                }
                className={`btn ${editor.isActive('bold') ? 'is-active' : ''}`}>
                <FormatBoldIcon />
              </IconButton>
              <IconButton onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={
                  !editor.can()
                    .chain()
                    .focus()
                    .toggleItalic()
                    .run()
                }
                className={`btn ${editor.isActive('italic') ? 'is-active' : ''}`}>
                <FormatItalicIcon />
              </IconButton>
              <IconButton onClick={() => editor.chain().focus().toggleUnderline().run()}
                disabled={
                  !editor.can()
                    .chain()
                    .focus()
                    .toggleUnderline()
                    .run()
                }
                className={`btn ${editor.isActive('underline') ? 'is-active' : ''}`}>
                <FormatUnderlinedIcon />
              </IconButton>
              <IconButton onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={
                  !editor.can()
                    .chain()
                    .focus()
                    .toggleStrike()
                    .run()
                }
                className={`btn ${editor.isActive('strike') ? 'is-active' : ''}`}>
                <StrikethroughSIcon />
              </IconButton>
            </BubbleMenu>
  )
}

export default BubblePopup;
