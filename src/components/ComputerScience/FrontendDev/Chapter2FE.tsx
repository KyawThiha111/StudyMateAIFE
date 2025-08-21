import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChapterTwoPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Chapter 2: Styling with CSS
      </h1>

      {/* Topic 1 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">CSS Syntax</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            CSS (Cascading Style Sheets) is used to style and format the layout of web pages. It controls the design and appearance of HTML elements.
          </p>
          <p>
            CSS syntax consists of selectors and declarations. A typical rule looks like this:
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`selector {
  property: value;
}`}
          </pre>
        </CardContent>
      </Card>

      {/* Topic 2 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">Selectors and Properties</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            CSS selectors are patterns used to select HTML elements. You can apply styles to these elements using properties and values.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><b>Class Selector:</b> Selects elements with a specific class. Example: `.class-name`.</li>
            <li><b>ID Selector:</b> Selects an element with a specific ID. Example: `#id-name`.</li>
            <li><b>Element Selector:</b> Selects HTML elements like `div`, `h1`, `p`, etc.</li>
          </ul>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`/* Styling a class */
.class-name {
  color: blue;
  font-size: 20px;
}

/* Styling an ID */
#id-name {
  background-color: yellow;
}`}
          </pre>
        </CardContent>
      </Card>

      {/* Topic 3 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Layout: Flexbox and Grid</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            CSS provides powerful layout systems like Flexbox and Grid to create responsive and flexible web page layouts.
          </p>
          <h3 className="font-semibold">Flexbox</h3>
          <p>
            Flexbox allows you to arrange items within a container with flexible alignment. Here's a basic example:
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`/* Flexbox container */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Flex items */
.item {
  margin: 10px;
}`}
          </pre>
          <h3 className="font-semibold">Grid</h3>
          <p>
            CSS Grid allows for two-dimensional layouts, both horizontally and vertically. It provides greater flexibility than Flexbox in some cases.
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`/* Grid container */
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Grid items */
.item {
  background-color: lightgray;
  padding: 20px;
}`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChapterTwoPage;
