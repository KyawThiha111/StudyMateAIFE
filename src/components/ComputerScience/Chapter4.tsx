import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChapterFourPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Chapter 4: Variables and Data Types
      </h1>

      {/* Topic 1 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">let, const, var</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            JavaScript provides three ways to declare variables: `let`, `const`, and `var`.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><b>let</b> - Used for variables that will be reassigned later.</li>
            <li><b>const</b> - Used for variables that will never be reassigned.</li>
            <li><b>var</b> - An older way of declaring variables. It is function-scoped and is generally avoided in modern JavaScript.</li>
          </ul>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`let name = "Alice";  // Can be reassigned
const age = 25;      // Cannot be reassigned
var city = "NYC";    // Function-scoped variable`}
          </pre>
        </CardContent>
      </Card>

      {/* Topic 2 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">Primitive vs Reference Types</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            JavaScript has two main types of data: <b>Primitive</b> and <b>Reference</b> types.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><b>Primitive types:</b> Stored by value. Examples: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`.</li>
            <li><b>Reference types:</b> Stored by reference. Examples: `objects`, `arrays`, and `functions`.</li>
          </ul>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`let number = 10;  // Primitive type
let person = { name: "Alice" };  // Reference type`}
          </pre>
        </CardContent>
      </Card>

      {/* Topic 3 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Type Conversion</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            Type conversion in JavaScript is the process of converting one data type into another.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><b>Implicit conversion:</b> JavaScript automatically converts data types in certain operations (e.g., adding a string to a number).</li>
            <li><b>Explicit conversion:</b> You can manually convert data types using functions like `String()`, `Number()`, or `Boolean()`.</li>
          </ul>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`let str = "123";
let num = Number(str);  // Explicit conversion to number
let bool = Boolean(0);   // Explicit conversion to boolean`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChapterFourPage;


