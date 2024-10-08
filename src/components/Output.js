import React from 'react';

const Output = ({ output }) => {
  return (
    <div className="output-container">
      <h3>Output</h3>
      <iframe
        title="output"
        srcDoc={output}
        sandbox="allow-scripts"
        className="output-frame"
      ></iframe>
    </div>
  );
};

export default Output;
