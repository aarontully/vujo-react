import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { StarterKit } from "@tiptap/starter-kit";
import EditorToolbar from './EditorToolbar';
import BubblePopup from './BubblePopup';
import { updatePage } from '../utilities/firebaseService';
import CharacterCount from '@tiptap/extension-character-count';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import Document from '@tiptap/extension-document';

import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import pwsh from 'highlight.js/lib/languages/powershell';
import cs from 'highlight.js/lib/languages/csharp';
import python from 'highlight.js/lib/languages/python';
import { lowlight } from 'lowlight';

lowlight.registerLanguage('html', html);
lowlight.registerLanguage('css', css);
lowlight.registerLanguage('js', js);
lowlight.registerLanguage('ts', ts);
lowlight.registerLanguage('cs', cs);
lowlight.registerLanguage('pwsh', pwsh);
lowlight.registerLanguage('python', python);

const CustomDocument = Document.extend({
  content: 'heading block*',
})

const Main = ({ selectedPage, setCharacterCount, setWordCount }) => {
  const { content } = selectedPage || {};

  const editor = useEditor({
    extensions: [
      CustomDocument,
      StarterKit.configure({
        codeBlock: false,
        document: false,
      }),
      CharacterCount,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') {
            return "Give it a Title";
          } else if (node.type.name === 'paragraph'){
            return "Words are the brushes, paint your masterpiece...";
          }
        }
      }),
      Underline,
    ],
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
    content: content,
    onUpdate: async ({ editor }) => {
      const currentCharacterCount = editor.storage.characterCount.characters();
      setCharacterCount(currentCharacterCount);
      const currentWordCount = editor.storage.characterCount.words();
      setWordCount(currentWordCount);

      const html = editor.getHTML();
      selectedPage.content = html;

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const title = doc.querySelector('h1').innerText;
      selectedPage.title = title;

      await updatePage(selectedPage)
    }
  }, [selectedPage])

  return (
    <main className="main">
      {selectedPage ? (
        <>
          {editor &&
            <BubblePopup editor={editor} Underline={Underline} />
          }
          <EditorToolbar editor={editor} Underline={Underline} />
          <EditorContent className="editor" editor={editor} spellCheck={false} />
        </>
      ) : null}
    </main>
  )
}

export default Main;
