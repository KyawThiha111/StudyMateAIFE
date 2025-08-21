import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChapterThreePage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Chapter 3: Functions in JavaScript
      </h1>

      {/* Topic 1 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">Function Declaration</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            A function declaration is the most common way of defining a function in JavaScript. It includes the function keyword followed by the function name, parameters, and the body of the function.
          </p>
          <p>
            The general syntax of a function declaration is:
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`function functionName(parameter1, parameter2) {
  // function body
}`}
          </pre>
          <p>
            Here's an example of a simple function declaration:
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Alice")); // Output: Hello, Alice`}
          </pre>
          <p>
            This function `greet` takes a `name` parameter and returns a greeting message.
          </p>
        </CardContent>
      </Card>

      {/* Topic 2 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">Function Expressions</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            A function expression is another way of defining a function. It is an anonymous function assigned to a variable, and it can be invoked only after it is defined.
          </p>
          <p>
            The syntax of a function expression looks like this:
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`const functionName = function(parameter1, parameter2) {
  // function body
}`}
          </pre>
          <p>
            Here's an example of a function expression:
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`const greet = function(name) {
  return "Hello, " + name;
};

console.log(greet("Bob")); // Output: Hello, Bob`}
          </pre>
          <p>
            In this example, the function is assigned to the variable `greet`, and it behaves just like a function declaration. The key difference is that a function expression is anonymous and cannot be hoisted.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChapterThreePage;
