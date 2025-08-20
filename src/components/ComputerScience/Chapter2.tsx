import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChapterTwoPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Chapter 2: Math Operations in JavaScript
      </h1>

      {/* Topic 1: Arithmetic Operations */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">Arithmetic Operations</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>JavaScript supports all the basic arithmetic operators:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><code>+</code> Addition</li>
            <li><code>-</code> Subtraction</li>
            <li><code>*</code> Multiplication</li>
            <li><code>/</code> Division</li>
            <li><code>%</code> Modulus (Remainder)</li>
            <li><code>**</code> Exponentiation</li>
          </ul>

          <p>Example:</p>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000`}
          </pre>
        </CardContent>
      </Card>

      {/* Topic 2: String vs Number */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">String vs Number</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>JavaScript can behave differently when dealing with strings and numbers, especially with the <code>+</code> operator.</p>

          <p>
            If either operand is a string, JavaScript will treat the <code>+</code> as string concatenation:
          </p>

          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`let num = 10;
let str = "5";

console.log(num + str); // "105" (number + string = string)
console.log(num - str); // 5 (string converted to number)
console.log(str * 2);   // 10 (string converted to number)
console.log(str + 2);   // "52"`}
          </pre>

          <p>
            Use <code>Number()</code> or <code>parseInt()</code> to safely convert strings to numbers when needed:
          </p>

          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`let str = "10";
let converted = Number(str);

console.log(converted + 5); // 15`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChapterTwoPage;
