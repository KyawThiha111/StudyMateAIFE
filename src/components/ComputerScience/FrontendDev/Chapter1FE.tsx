import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChapterOnePage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Chapter 1: Introduction to HTML
      </h1>

      {/* Topic 1 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">What is HTML?</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            HTML (<b>HyperText Markup Language</b>) is the standard language used to create and design web pages.  
            It provides the structure and content of a webpage using a series of elements or <code>tags</code>.
          </p>
          <p>
            HTML is commonly used with <code>CSS</code> (for styling) and <code>JavaScript</code> (for interactivity).
          </p>
        </CardContent>
      </Card>

      {/* Topic 2 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">Basic HTML Tags</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>HTML tags define elements in a document. Some basic tags include:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><code>&lt;h1&gt; to &lt;h6&gt;</code> - Header tags for headings</li>
            <li><code>&lt;p&gt;</code> - Paragraph tag for text</li>
            <li><code>&lt;a&gt;</code> - Anchor tag for links</li>
            <li><code>&lt;img&gt;</code> - Image tag for images</li>
            <li><code>&lt;div&gt;</code> - Division tag to group content</li>
          </ul>

          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`<h1>Welcome to HTML!</h1>
<p>This is an example paragraph.</p>
<a href="https://www.example.com">Click Here</a>`}
          </pre>
        </CardContent>
      </Card>

      {/* Topic 3 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Creating a Basic Web Page</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            To create a web page, structure it using the main HTML tags: <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code>.
          </p>

          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Web Page</title>
</head>
<body>
  <h1>Welcome to My Web Page</h1>
  <p>This is a simple HTML page.</p>
</body>
</html>`}
          </pre>

          <p>This gives you a basic webpage with a title and some content visible in the browser.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChapterOnePage;
