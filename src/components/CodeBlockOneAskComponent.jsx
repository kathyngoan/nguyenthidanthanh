import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlockOneAskComponent = () => {
  const taskString = `
    Output: return - summation to n, 
    i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.
  `;
  const codeString = `
  
    var sum_to_n_a = function(n) {
        // your code here
    };

    var sum_to_n_b = function(n) {
        // your code here
    };

    var sum_to_n_c = function(n) {
        // your code here
    };
  `;

  return (
    <div>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-4">Task</h1>
        <p className="text-lg mb-4">
          Provide 3 unique implementations of the following function in
          JavaScript.
        </p>

        <p className="text-lg mb-4">
          <strong>Input</strong>:{" "}
          <code className="text-red-400">n</code> - any integer
        </p>

        <p className="text-lg mb-4">
          <strong>Assumption</strong>: This input will always produce a result
          lesser than
          <code>
            Number.MAX_SAFE_INTEGER.
          </code>
        </p>
        <div>
          <SyntaxHighlighter
            language="css"
            style={solarizedlight}
            className="text-sm"
          >
            {taskString}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={solarizedlight}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CodeBlockOneAskComponent;
