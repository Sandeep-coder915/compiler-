import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import Output from './components/Output';
import TabSwitcher from './components/TabSwitcher';
import './styles.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('web'); // 'web', 'python', 'cpp'
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [pythonCode, setPythonCode] = useState('');
  const [cppCode, setCppCode] = useState('');
  const [output, setOutput] = useState('');

  // Run code based on active tab
  const runCode = () => {
    if (activeTab === 'web') {
      const compiledCode = `
        <html>
        <head><style>${cssCode}</style></head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
        </html>
      `;
      setOutput(compiledCode);
    } else if (activeTab === 'python') {
      runPythonCode();
    } else if (activeTab === 'cpp') {
      runCppCode();
    }
  };

  // Function to call the backend API for Python
  const runPythonCode = async () => {
    try {
      const response = await fetch('/api/compile/python', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: pythonCode })
      });
      const data = await response.json();
      setOutput(data.output);
    } catch (error) {
      console.error(error);
      setOutput('Error running Python code');
    }
  };

  // Function to call the backend API for C++
  const runCppCode = async () => {
    try {
      const response = await fetch('/api/compile/cpp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: cppCode })
      });
      const data = await response.json();
      setOutput(data.output);
    } catch (error) {
      console.error(error);
      setOutput('Error running C++ code');
    }
  };

  return (
    <div className="app-container">
      <h1 style={{color:'white'}}>Online Compiler</h1>
      <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === 'web' && (
        <>
          <CodeEditor language="HTML" code={htmlCode} setCode={setHtmlCode} />
          <CodeEditor language="CSS" code={cssCode} setCode={setCssCode} />
          <CodeEditor language="JavaScript" code={jsCode} setCode={setJsCode} />
        </>
      )}

      {activeTab === 'python' && (
        <CodeEditor language="Python" code={pythonCode} setCode={setPythonCode} />
      )}

      {activeTab === 'cpp' && (
        <CodeEditor language="C++" code={cppCode} setCode={setCppCode} />
      )}

      <button onClick={runCode} className="run-button">Run Code</button>
      <Output output={output} />
    </div>
  );
};

export default App;
