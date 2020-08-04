import React, { useState } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';

export default function Text() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  //   const handleKeyCommand = (command, editorState) => {


  // }

  return (
    <Editor
      editorState={editorState}
      onChange={setEditorState}
      // handleKeyCommand={handleKeyCommand}
    />
  );

}


