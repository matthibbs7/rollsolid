import React from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { Editor } from '@tiptap/react';
import { BiBold, BiCodeAlt, BiHeading, BiItalic, BiListOl, BiListUl, BiParagraph, BiStrikethrough } from 'react-icons/bi';
import { MdOutlineFormatClear } from 'react-icons/md';

interface EditorBarProps {
    editor: Editor | null
}

const EditorBar = ({ editor }: EditorBarProps) =>  {
    if (!editor) {
        return null;
    }

    return (
        <Flex align='center' w='100%' h='34px' pl={1} bg='black' border='1px solid #434343' borderBottom='1px solid black'>
            <Button className={editor.isActive('bold') ? 'is-active' : ''} minW='28px' h='22px' px='2px' bg='none' borderRadius='0' _hover={{bg: '#131313'}} disabled={!editor.can().chain().focus().toggleBold().run()} onClick={() => editor.chain().focus().toggleBold().run()}><BiBold fontSize='18px' /></Button>
            <Button className={editor.isActive('italic') ? 'is-active' : ''} w='10px' minW='28px' h='22px' px='2px' bg='none' borderRadius='0' _hover={{bg: '#131313'}} disabled={!editor.can().chain().focus().toggleItalic().run()} onClick={() => editor.chain().focus().toggleItalic().run()}><BiItalic fontSize='18px' /></Button>
            <Button className={editor.isActive('strike') ? 'is-active' : ''} w='10px' minW='28px' h='22px' px='2px' bg='none' borderRadius='0' _hover={{bg: '#131313'}} disabled={!editor.can().chain().focus().toggleStrike().run()} onClick={() => editor.chain().focus().toggleStrike().run()}><BiStrikethrough fontSize='18px' /></Button>
            <Button className={editor.isActive('code') ? 'is-active' : ''} w='10px' minW='28px' h='22px' px='2px' bg='none' borderRadius='0' _hover={{bg: '#131313'}} disabled={!editor.can().chain().focus().toggleCode().run()} onClick={() => editor.chain().focus().toggleCode().run()}><BiCodeAlt fontSize='18px' /></Button>
            <Button w='10px' minW='28px' h='22px' px='2px' bg='none' borderRadius='0' _hover={{bg: '#131313'}} onClick={() => editor.chain().focus().unsetAllMarks().run()}><MdOutlineFormatClear fontSize='18px' /></Button>
            <Button className={editor.isActive('paragraph') ? 'is-active' : ''} w='10px' minW='28px' h='22px' px='2px' bg='none' borderRadius='0' _hover={{bg: '#131313'}} onClick={() => editor.chain().focus().setParagraph().run()}><BiParagraph fontSize='18px' /></Button>
            <Button className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''} w='10px' minW='28px' h='22px' px='2px' bg='none' borderRadius='0' _hover={{bg: '#131313'}} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}><BiHeading fontSize='18px' /></Button>
            <Button className={editor.isActive('bulletList') ? 'is-active' : ''} w='10px' minW='28px' h='22px' px='2px' bg='none' borderRadius='0' _hover={{bg: '#131313'}} onClick={() => editor.chain().focus().toggleBulletList().run()}><BiListUl fontSize='18px' /></Button>
            <Button className={editor.isActive('orderedList') ? 'is-active' : ''} w='10px' minW='28px' h='22px' px='2px' bg='none' borderRadius='0' _hover={{bg: '#131313'}} onClick={() => editor.chain().focus().toggleOrderedList().run()}><BiListOl fontSize='19px' /></Button>
            
        </Flex>
    );
};

export default EditorBar;