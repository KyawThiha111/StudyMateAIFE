
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChapterSixPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Chapter 6: Loops and Iteration
      </h1>

      {/* Topic 1 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">for loop</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            A `for loop` is used to repeat a block of code a certain number of times. It is commonly used when you know the number of iterations in advance.
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`for (let i = 0; i < 5; i++) {
  console.log(i);
}`}
          </pre>
        </CardContent>
      </Card>

      {/* Topic 2 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">while loop</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            A `while loop` is used to repeat a block of code as long as a specified condition is true. It is often used when the number of iterations is not known in advance.
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}`}
          </pre>
        </CardContent>
      </Card>

      {/* Topic 3 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">for...of and for...in</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            The `for...of` loop is used for iterating over values in iterable objects like arrays. The `for...in` loop is used for iterating over the keys in an object.
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`let arr = [10, 20, 30];
for (let num of arr) {
  console.log(num);  // Output: 10, 20, 30
}

let obj = { a: 1, b: 2 };
for (let key in obj) {
  console.log(key);  // Output: "a", "b"
}`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChapterSixPage;
