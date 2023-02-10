import CodeIcon from '@mui/icons-material/Code';
import FormatClearIcon from '@mui/icons-material/FormatClear';
import LayersClearIcon from '@mui/icons-material/LayersClear';
import FormatTextdirectionLToRIcon from '@mui/icons-material/FormatTextdirectionLToR';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import DataObjectIcon from '@mui/icons-material/DataObject';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import { IconButton } from "@mui/material";
import { Tooltip } from '@mui/material';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const EditorToolbar = ({ editor, Underline }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="bubble-menu">
      <Tooltip title="Bold">
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
      </Tooltip>
      <Tooltip title="Italic">
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
      </Tooltip>
      <Tooltip title="Underline">
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
      </Tooltip>
      <Tooltip title="Strikethrough">
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
      </Tooltip>
      <Tooltip title="Code">
        <IconButton onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleCode()
              .run()
          }
          className={`btn ${editor.isActive('code') ? 'is-active' : ''}`}>
          <CodeIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Clear Formatting">
        <IconButton onClick={() => editor.chain().focus().unsetAllMarks().run()}>
          <FormatClearIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Clear Special Formatting">
        <IconButton onClick={() => editor.chain().focus().clearNodes().run()}>
          <LayersClearIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Paragraph">
        <IconButton onClick={() => editor.chain().focus().setParagraph().run()}
          className={`btn ${editor.isActive('paragraph') ? 'is-active' : ''}`}>
          <FormatTextdirectionLToRIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Heading 1">
        <IconButton onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`btn ${editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}`}>
          H1
        </IconButton>
      </Tooltip>
      <Tooltip title="Heading 2">
        <IconButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`btn ${editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}`}>
          H2
        </IconButton>
      </Tooltip>
      <Tooltip title="Heading 3">
        <IconButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`btn ${editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}`}>
          H3
        </IconButton>
      </Tooltip>
      <Tooltip title="Heading 4">
        <IconButton onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={`btn ${editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}`}>
          H4
        </IconButton>
      </Tooltip>
      <Tooltip title="Heading 5">
        <IconButton onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={`btn ${editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}`}>
          H5
        </IconButton>
      </Tooltip>
      <Tooltip title="Heading 6">
        <IconButton onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          className={`btn ${editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}`}>
          H6
        </IconButton>
      </Tooltip>
      <Tooltip title="Bullet List">
        <IconButton onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`btn ${editor.isActive('bulletList') ? 'is-active' : ''}`}>
          <FormatListBulletedIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Ordered List">
        <IconButton onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`btn ${editor.isActive('orderedList') ? 'is-active' : ''}`}>
          <FormatListNumberedIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Code Block">
        <IconButton onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`btn ${editor.isActive('codeBlock') ? 'is-active' : ''}`}>
          <DataObjectIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Block Quote">
        <IconButton onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`btn ${editor.isActive('blockquote') ? 'is-active' : ''}`}>
          <FormatQuoteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Horizontal Rule">
        <IconButton onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <HorizontalRuleIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Return">
        <IconButton onClick={() => editor.chain().focus().setHardBreak().run()}>
          <KeyboardReturnIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Undo">
        <IconButton onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }>
          <UndoIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Redo">
        <IconButton onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }>
          <RedoIcon />
        </IconButton>
      </Tooltip>
    </div>
  )
}

export default EditorToolbar;
