import React from 'react';

const CodeEditor = ({ language, code, setCode }) => {
  return (
    <div className="editor-container">
    
      <h3>{language} Editor</h3>
      <textarea 
        
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder={`Write ${language} code here`}
        className="code-editor"
       
      ></textarea>
    </div> 
  );
};

export default CodeEditor;
