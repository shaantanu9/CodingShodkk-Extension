import React, { useState, useEffect, useRef } from 'react';

const TextEditor = () => {
  const [content, setContent] = useState('');
  const editorRef = useRef(null);

  useEffect(() => {
    // Load content from Chrome storage
    chrome.storage.sync.get(['noteContent'], (result) => {
      if (result.noteContent) {
        setContent(result.noteContent);
      }
    });
  }, []);

  useEffect(() => {
    // Save content to Chrome storage
    chrome.storage.sync.set({ noteContent: content });
  }, [content]);

  const handleInput = (e) => {
    setContent(e.target.innerHTML);
  };

  const handleKeyDown = (e) => {
    // Disable default shortcuts
    if (e.ctrlKey || e.metaKey) {
      switch (e.key.toLowerCase()) {
        case 'b': // Ctrl+B or Cmd+B
        case 'i': // Ctrl+I or Cmd+I
        case 'u': // Ctrl+U or Cmd+U
        case 's': // Ctrl+S or Cmd+S
        case 'p': // Ctrl+P or Cmd+P
        case 'r': // Ctrl+R or Cmd+R (refresh)
        case 'f': // Ctrl+F or Cmd+F (find)
        case 'z': // Ctrl+Z or Cmd+Z (undo)
        case 'y': // Ctrl+Y or Cmd+Y (redo)
          e.preventDefault();
          break;
        default:
          break;
      }
    }
  };

  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  const handleImagePaste = (e) => {
    const items = e.clipboardData.items;
    for (let item of items) {
      if (item.type.indexOf('image') !== -1) {
        const blob = item.getAsFile();
        const reader = new FileReader();
        reader.onload = (event) => {
          execCommand('insertImage', event.target.result);
        };
        reader.readAsDataURL(blob);
      }
    }
  };

  return (
    <div style={{ padding: '20px', width: '600px', margin: 'auto' }}>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => execCommand('bold')}><b>B</b></button>
        <button onClick={() => execCommand('italic')}><i>I</i></button>
        <button onClick={() => execCommand('underline')}><u>U</u></button>
        <button onClick={() => {
          const url = prompt('Enter the URL');
          execCommand('createLink', url);
        }}>Link</button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onPaste={handleImagePaste}
        style={{
          minHeight: '200px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          backgroundColor: '#fff',
          color: '#333',
          overflowY: 'auto',
          outline: 'none'
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default TextEditor;
