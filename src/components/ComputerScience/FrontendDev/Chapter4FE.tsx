import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChapterFourPage: React.FC = () => {
  return(
        <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Chapter 4: Introduction to React
      </h1>

      {/* Topic 1 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">What is React?</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            React is a popular JavaScript library for building user interfaces, primarily for single-page applications. It allows developers to create large web applications that can change data, without reloading the page.
          </p>
          <p>
            React makes it easy to build interactive UIs by breaking down the user interface into reusable components. It focuses on the "view" in the MVC (Model-View-Controller) architecture.
          </p>
        </CardContent>
      </Card>

      {/* Topic 2 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">JSX Basics</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code inside your JavaScript code, making it easy to create React elements.
          </p>
          <p>
            Here’s an example of JSX in React:
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}`}
          </pre>
          <p>
            JSX gets transpiled into JavaScript code that creates React elements. The h1 tag in the JSX above will be transformed into a React element that the browser can render.
          </p>
        </CardContent>
      </Card>

      {/* Topic 3 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">Components and Props</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            React applications are built using components. A component is a reusable piece of UI that can be used across your application.
          </p>
          <p>
            Props (short for properties) are used to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component.
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Alice" />;
}`}
          </pre>
          <p>
            In this example, the `Greeting` component receives a `name` prop and displays a greeting message. The `App` component passes the value of the `name` prop to the `Greeting` component.
          </p>
        </CardContent>
      </Card>

      {/* Topic 4 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">State and useState</CardTitle>
        </CardHeader>
        <CardContent className="text-base text-gray-700 space-y-3">
          <p>
            State is a way to store data in a React component. It is mutable, meaning it can change over time, typically as a result of user interactions.
          </p>
          <p>
            The `useState` hook is used to create state variables in functional components. It allows you to add state to your components and trigger re-renders when the state changes.
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
{`import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}`}
          </pre>
          <p>
            In this example, the `Counter` component uses the `useState` hook to keep track of a `count` variable. When the button is clicked, the `increment` function updates the state, which triggers a re-render to display the updated count.
          </p>
        </CardContent>
      </Card>
    </div>
  )
};

export default ChapterFourPage;
