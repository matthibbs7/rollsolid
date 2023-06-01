import { Flex } from '@chakra-ui/react';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import EditorBar from './EditorBar';

const Notes:React.FC = () =>  {
    const editor = useEditor({
        extensions: [
            Color.configure({ types: [TextStyle.name, ListItem.name] }),
            // TextStyle.configure({ types: [ListItem.name] }),
            StarterKit.configure({
                bulletList: {
                    keepMarks: true,
                    keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
                },
                orderedList: {
                    keepMarks: true,
                    keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
                },
            }),
        ],
        content: `
          <h1>
            Welcome to Rollsolid
          </h1>
          <h2>
            Hi there,
          </h2>
          <p>
            this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
          </p>
          <ul>
            <li>
              That’s a bullet list with one …
            </li>
            <li>
              … or two list items.
            </li>
          </ul>
          <p>
            Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
          </p>
          <pre><code class="language-css">body {
      display: none;
    }</code></pre>
          <p>
            I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
          </p>
          <blockquote>
            Wow, that’s amazing. Good work, boy! 👏
            <br />
            — Mom
          </blockquote>
        `,
    });
    return (
        <>
            <Flex direction='column' w='100%' h='10%' maxH='34px'>
                <Flex overflowX='scroll' overflowY='hidden' w='100%' h='100%' bg='black'>
                    <EditorBar editor={editor} />
                </Flex>
            </Flex>
            <Flex direction='column' w='100%' h='74%' maxH='74%' mb='100px' p={5} bg='black' border='1px solid #424242'>
                
                <Flex w='100%' h='90%'>
                    <EditorContent className='editor-field' style={{resize: 'none', height: '100%', minHeight: '100%', maxHeight: '100%', overflowY: 'scroll'}} editor={editor} />
                </Flex>
            </Flex>

        </>
    );
};

export default Notes;