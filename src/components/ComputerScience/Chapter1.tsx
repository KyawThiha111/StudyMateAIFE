import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChapterOnePage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Chapter 1: Introduction to JavaScript
      </h1>

      {/* Topic 1 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">What is JavaScript?</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            JavaScript is a powerful, high-level programming language that's primarily used to add interactivity, control dynamic content, and handle logic in web pages.
          </p>
          <p>
            It is one of the core technologies of the web alongside HTML and CSS, and is supported by all modern browsers without the need for plugins.
          </p>
        </CardContent>
      </Card>

      {/* Topic 2 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">Setting up the Environment</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>To start writing JavaScript, all you need is:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>A modern web browser (e.g., Chrome, Firefox)</li>
            <li>A code editor (like VS Code)</li>
          </ul>
          <p>
            You can write JavaScript directly in an HTML file using the
            <code className="bg-gray-100 text-sm px-1 rounded mx-1">&lt;script&gt;</code>
            tag or use external JavaScript files with
            <code className="bg-gray-100 text-sm px-1 rounded mx-1">src</code> attribute.
          </p>
        </CardContent>
      </Card>

      {/* Topic 3 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Hello World Example</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>Here is a simple "Hello World" example using JavaScript in HTML:</p>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`<!DOCTYPE html>
<html>
  <head>
    <title>Hello JavaScript</title>
  </head>
  <body>
    <h1>Hello from HTML!</h1>
    <script>
      console.log("Hello, World!");
      alert("Hello, World!");
    </script>
  </body>
</html>`}
          </pre>
          <p>
            This will display an alert box when the page loads and also log the message in the browser console.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChapterOnePage;
