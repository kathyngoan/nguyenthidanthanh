import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlockOneAnsweComponent = () => {

  const codeString = `
  
    var sum_to_n_a = function(n) {
      let sum = 0;
      for (let i = 1; i <= n; i++) {
          sum += i;
      }
      return sum;
    };

    var sum_to_n_b = function(n) {
      return (n * (n + 1)) / 2;
    };

    var sum_to_n_c = function(n) {
      if (n <= 1) return n;
      return n + sum_to_n_c(n - 1);
    };
  `;

  return (
    <div>
      <div className="mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-4">Answer</h1>
        <p className="text-lg mb-4">
          Provide 3 unique implementations of the following function in
          JavaScript.
        </p>

        <div>
          <SyntaxHighlighter language="javascript" style={solarizedlight}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CodeBlockOneAnsweComponent;
