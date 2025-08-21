import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChapterThreePage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Chapter 3: JavaScript in the Browser
      </h1>

      {/* Topic 1 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">DOM Manipulation</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            DOM (Document Object Model) manipulation is one of the primary tasks JavaScript performs in the browser. It allows us to access, modify, and delete HTML elements on a webpage.
          </p>
          <p>
            For example, you can change the content of an element, update styles, or even create new HTML elements dynamically using JavaScript.
          </p>
        </CardContent>
      </Card>

      {/* Topic 2 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">Event Listeners</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            Event listeners allow us to add interactivity to our web pages by listening for specific user actions such as clicks, mouse movements, or key presses.
          </p>
          <p>
            Here’s an example of adding an event listener to a button:
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`<button id="clickMe">Click Me!</button>

<script>
  const button = document.getElementById("clickMe");
  button.addEventListener("click", function() {
    alert("Button clicked!");
  });
</script>`}
          </pre>
          <p>
            In this example, when the button is clicked, an alert will be shown to the user.
          </p>
        </CardContent>
      </Card>

      {/* Topic 3 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Creating Interactive UI</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            JavaScript allows you to dynamically change the content and style of HTML elements to create interactive UIs. You can show or hide elements, change colors, and update text dynamically based on user interactions.
          </p>
          <p>
            Here’s an example of changing the background color of a page using JavaScript when a button is clicked:
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`<button id="changeColor">Change Background Color</button>

<script>
  const button = document.getElementById("changeColor");
  button.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
  });
</script>`}
          </pre>
          <p>
            When the user clicks the button, the background color of the page changes to light blue.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChapterThreePage;