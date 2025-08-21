import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChapterFivePage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Chapter 5: Control Flow
      </h1>

      {/* Topic 1 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">if-else statements</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            The `if-else` statement is used to perform conditional checks in JavaScript. It executes a block of code if a specified condition is `true`, otherwise it executes the `else` block.
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`let age = 20;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}`}
          </pre>
        </CardContent>
      </Card>

      {/* Topic 2 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">switch-case</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            The `switch-case` statement is used to perform multiple conditional checks based on the value of a variable. It is more efficient when you have several conditions to check.
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Weekend is near");
    break;
  default:
    console.log("Midweek");
}`}
          </pre>
        </CardContent>
      </Card>

      {/* Topic 3 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Ternary Operator</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            The ternary operator is a shorthand for `if-else` statements. It allows you to perform a conditional check in a single line.
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChapterFivePage;
