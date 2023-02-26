"use client"
import { $getRoot, $getSelection, EditorState, LexicalEditor } from 'lexical';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';

// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!
function onChange(editorState: EditorState, editor: LexicalEditor) {
    editorState.read(() => {
        // Read the contents of the EditorState here.
        const root = $getRoot();
        const selection = $getSelection();

        console.log(root, selection);
        console.log(JSON.stringify(editor.getEditorState()));
    });
}
// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: Error) {
    console.error(error);
  }

  
function Editor() {
    const initialConfig = {
        namespace: 'yLeader',
        onError,
    };

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <PlainTextPlugin
                contentEditable={<ContentEditable />}
                placeholder={<div>Enter some text...</div>}
                ErrorBoundary={LexicalErrorBoundary}
            />
            <OnChangePlugin onChange={onChange} />
            <HistoryPlugin />
        </LexicalComposer>
    );
}

export default Editor