import { windowsState } from '@/atoms/windowsAtom';
import { WindowState } from '@/types/windows';
import { Flex } from '@chakra-ui/react';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import EditorBar from './EditorBar';

interface NotesProps {
  processId: number;
}

const Notes = ({ processId}: NotesProps) =>  {

    const [minimizedWindows, setMinimizedWindows] = useRecoilState(windowsState);

    const [notesContent, setNotesContent] = useState(minimizedWindows.stack.filter((w: WindowState) => w.processId === processId)[0].textContent ? minimizedWindows.stack.filter((w: WindowState) => w.processId === processId)[0].textContent : '<p>Edit this text...</p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>');

    useEffect(() => {
        console.log('test');
        const newMinimizedStack = minimizedWindows.stack.map((w: WindowState) => {
            if (w.processId === processId) {
                return {
                    ...w,
                    textContent: notesContent,
                };
            } else {
                return w;
            }
        });

        setMinimizedWindows((prevState) => ({
            ...prevState,
            stack: newMinimizedStack,
        }));
    }, [notesContent]);
    
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
                    
                },
            }),
        ],
        content: notesContent,
        onUpdate({ editor }) {
            
            setNotesContent(editor.getHTML());
            console.log(notesContent);
        }
    });
    return (
        <>
            <Flex direction='column' w='100%' h='10%' maxH='34px'>
                <Flex overflowX='scroll' overflowY='hidden' w='100%' h='100%' bg='black'>
                    <EditorBar editor={editor} />
                </Flex>
            </Flex>
            <Flex direction='column' w='100%' h='74%' maxH='74%' mb='100px' p={5} bg='black' border='1px solid #424242'>
                
                <Flex w='100%' h='95%'>
                    <EditorContent spellCheck='false' className='editor-field' style={{minWidth: '100%', resize: 'none', height: '100%', minHeight: '100%', maxHeight: '100%', overflowY: 'scroll'}} editor={editor} />
                </Flex>
            </Flex>

        </>
    );
};

export default Notes;