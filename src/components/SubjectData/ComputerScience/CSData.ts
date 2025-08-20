
/* export interface ChapterType {
  chapter: number;
  title: string;
  route:string;
  content: string[];
} */
/* interface SubSubjectType {
  name: string;
  chapter: ChapterType[];
} */
 export interface SubjectDataType {
  subject: string;
  subSubject: SubSubjectType[];
} 
//MUST BE FETCHED AS JSON DATA
export interface ChapterType {
  chapter: number;
  title: string;
  route: string;
  content: string[];
}

export interface SubSubjectType {
  name: string;
  chapter: ChapterType[];
}

export interface SubjectDataType {
  subject: string;
  subSubject: SubSubjectType[];
}

// MUST BE FETCHED AS JSON DATA
const ComputerScienceData: SubjectDataType = {
  subject: "Computer Science",
  subSubject: [
    {
      name: "Javascript",
      chapter: [
        {
          chapter: 1,
          title: "Introduction to JavaScript",
          route: "/computerscience/javascript/1",
          content: [
            "What is JavaScript?",
            "Setting up the Environment",
            "Hello World Example",
          ],
        },
        {
          chapter: 2,
          title: "Math Operations in JavaScript",
          route: "/computerscience/javascript/2",
          content: ["Arithmetic operations", "String vs Number"],
        },
        {
          chapter: 3,
          title: "Functions in JavaScript",
          route: "/computerscience/javascript/3",
          content: ["Function Declaration", "Function Expressions"],
        },
        {
          chapter: 4,
          title: "Variables and Data Types",
          route: "/computerscience/javascript/4",
          content: [
            "let, const, var",
            "Primitive vs Reference Types",
            "Type Conversion",
          ],
        },
        {
          chapter: 5,
          title: "Control Flow",
          route: "/computerscience/javascript/5",
          content: ["if-else statements", "switch-case", "Ternary Operator"],
        },
        {
          chapter: 6,
          title: "Loops and Iteration",
          route: "/computerscience/javascript/6",
          content: ["for loop", "while loop", "for...of and for...in"],
        },
      ],
    },
    {
      name: "Frontend development",
      chapter: [
        {
          chapter: 1,
          title: "Introduction to HTML",
          route: "/computerscience/frontend-development/1",
          content: [
            "What is HTML?",
            "Basic HTML tags",
            "Creating a basic web page",
          ],
        },
        {
          chapter: 2,
          title: "Styling with CSS",
          route: "/computerscience/frontend-development/2",
          content: [
            "CSS Syntax",
            "Selectors and Properties",
            "Layout: Flexbox and Grid",
          ],
        },
        {
          chapter: 3,
          title: "JavaScript in the Browser",
          route: "/computerscience/frontend-development/3",
          content: [
            "DOM Manipulation",
            "Event Listeners",
            "Creating Interactive UI",
          ],
        },
        {
          chapter: 4,
          title: "Introduction to React",
          route: "/computerscience/frontend-development/4",
          content: [
            "What is React?",
            "JSX Basics",
            "Components and Props",
            "State and useState",
          ],
        },
      ],
    },
    {
      name: "Introduction to Backend Development with Nodejs and Express",
      chapter: [
        {
          chapter: 1,
          title: "Getting Started with Node.js",
          route: "/computerscience/backend-development-with-nodeandexpress/1",
          content: [
            "What is Node.js?",
            "Installing Node and npm",
            "Running your first script",
          ],
        },
        {
          chapter: 2,
          title: "Core Modules in Node.js",
          route: "/computerscience/backend-development-with-nodeandexpress/2",
          content: [
            "File System (fs)",
            "Path Module",
            "Creating a basic server with http",
          ],
        },
        {
          chapter: 3,
          title: "Introduction to Express",
          route: "/computerscience/backend-development-with-nodeandexpress/3",
          content: [
            "What is Express?",
            "Creating your first Express app",
            "Routing Basics",
          ],
        },
        {
          chapter: 4,
          title: "Building REST APIs with Express",
          route: "/computerscience/backend-development-with-nodeandexpress/4",
          content: [
            "GET, POST, PUT, DELETE routes",
            "Request and Response objects",
            "Using Postman for testing",
          ],
        },
      ],
    },
  ],
};




export default ComputerScienceData;
