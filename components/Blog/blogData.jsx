const blogData = [
  {
    id: 1,
    title: "Mastering React: A Comprehensive Guide for Beginners",
    paragraph:
      "React has become one of the most popular libraries for building user interfaces. In this article, we will cover everything you need to know to get started with React and build your first application.",
    content: `
  # Introduction to React
  
  React is a JavaScript library for building user interfaces, primarily for single-page applications. It's used for handling the view layer for web and mobile apps. React allows you to design simple views for each state in your application.
  
  ## How to Install React
  
  First, you need to have Node.js and npm (Node Package Manager) installed. Once you have these installed, you can set up a React application by first installing the create-react-app command line tool:
  
  \`\`\`bash
  npm install -g create-react-app
  \`\`\`
  
  After that, you can create a new application by running:
  
  \`\`\`bash
  create-react-app my-app
  \`\`\`
  
  This will set up a new React application named "my-app". You can start the application by navigating into the directory and running \`npm start\`.
  
  For more details, see the [official React documentation](https://reactjs.org/docs/getting-started.html).
  
  ## React Components
  
  Components are the building blocks of any React application, and a single app usually consists of multiple components. A component is essentially a piece of the user interface.
  
  Here's an example of a simple React component:
  
  \`\`\`jsx
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  \`\`\`
  
  This is a simple component called "Welcome" that returns an HTML heading. You can use this component in other parts of your application like this:
  
  \`\`\`jsx
  function App() {
    return <Welcome name="Sara" />;
  }
  \`\`\`
  
  This would display "Hello, Sara" on the page.
    `,
    image: "/images/test.jpg",
    author: {
      name: "Ram Karan",
      image: "/images/profile.jpg",
      designation: "MERN Stack Developer",
    },
    tags: ["React", "JavaScript", "Web Development"],
    publishDate: "June 2023",
  },

  {
    id: 2,
    title: "Understanding React Hooks: useState and useEffect guide for beginners",
    paragraph:
      "React Hooks are a revolutionary feature that simplify your code, making it easy to read, maintain, test in isolation and re-use in your projects. In this article, we will dive deep into understanding the useState and useEffect hooks in React.",
    content: `
  # Understanding React Hooks: useState and useEffect
  
  ## Introduction to Hooks
  
  Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
  
  ## useState Hook
  
  The **useState** is a Hook (we'll talk about what this means in a moment) that allows you to add React state to function components. Here is an example:
  
  \`\`\`jsx
  import React, { useState } from 'react';
  
  function Example() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  \`\`\`
  
  In the above example, the \`useState\` hook takes the initial state as a parameter (0 in this case) and returns an array containing the current state and a function to update it. We can then use the \`setCount\` function to update the state.
  
  ## useEffect Hook
  
  The Effect Hook, \`useEffect\`, adds the ability to perform side effects from a function component. It serves the same purpose as \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\` in React classes, but unified into a single API. Here is an example:
  
  \`\`\`jsx
  import React, { useState, useEffect } from 'react';
  
  function Example() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      document.title = \`You clicked count times\`;
    });
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  \`\`\`
  `,
    image: "/images/test.jpg",
    author: {
      name: "Ram Karan",
      image: "/images/profile.jpg",
      designation: "MERN Stack Developer",
    },
    tags: ["React", "Hooks", "Web Development"],
    publishDate: "June 2023",
  },
  {
    id: 3,
    title: "Exploring the MERN Stack: MongoDB, Express, React, and Node.js",
    paragraph:
      "The MERN stack is a popular choice for building web applications. This stack is a combination of MongoDB, Express, React, and Node.js. In this article, we will dive into each technology and see how they work together to build scalable, full-stack applications.",
    content: `
  # Exploring the MERN Stack: MongoDB, Express, React, and Node.js
  
  ## Introduction to the MERN Stack
  
  The MERN Stack is a JavaScript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: MongoDB, Express, React and Node.js. It is designed to make the development process smoother and easier.
  
  ## MongoDB
  
  MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.
  
  ## Express
  
  Express.js, or simply Express, is a back end web application framework for Node.js. It is designed for building web applications and APIs. It is the de facto standard server framework for Node.js.
  
  ## React
  
  React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces or UI components.
  
  ## Node.js
  
  Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
  
  ## Building a MERN Application
  
  Building an application using this stack involves the following steps:
  
  1. Set up a MongoDB database using a platform like MongoDB Atlas.
  2. Create a Node.js server with Express.
  3. Connect the Node.js server to the MongoDB database.
  4. Build the React application and connect it to the Node.js server.
  
  In the next articles, we will look at each of these steps in detail.
  `,
    image: "/images/test.jpg",
    author: {
      name: "Ram Karan",
      image: "/images/profile.jpg",
      designation: "MERN Stack Developer",
    },
    tags: [
      "MERN Stack",
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Web Development",
    ],
    publishDate: "June 2023",
  },

  {
    id: 4,
    title:
      "Getting Started with TypeScript: A Static Typing Solution for JavaScript",
    paragraph:
      "JavaScript is a dynamically typed language, which can sometimes lead to errors that are difficult to diagnose and debug. TypeScript is a statically typed superset of JavaScript that addresses this problem. In this article, we will explore TypeScript and see how it can benefit your JavaScript projects.",
    content: `
  # Getting Started with TypeScript: A Static Typing Solution for JavaScript
  
  ## Introduction to TypeScript
  
  TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. It is an open-source programming language developed and maintained by Microsoft. TypeScript extends JavaScript by adding types and some other features.
  
  ## Why Use TypeScript?
  
  There are several reasons to use TypeScript:
  
  1. **Static typing**: This is the main reason most people start using TypeScript. Static typing allows you to catch errors at compile-time instead of at run-time.
  
  2. **IDE support**: Thanks to static types, IDEs can provide richer support, like auto-completion, navigation, and refactoring tools.
  
  3. **Better documentation**: Types can serve as documentation because they allow you to see what values a function accepts and what it returns.
  
  ## Getting Started with TypeScript
  
  First, you need to install TypeScript. You can do this by using npm:
  
  \`\`\`bash
  npm install -g typescript
  \`\`\`
  
  After that, you can write your TypeScript code in .ts files. To compile these files to JavaScript, you can use the \`tsc\` command:
  
  \`\`\`bash
  tsc my-file.ts
  \`\`\`
  
  This will create a \`my-file.js\` file with the compiled JavaScript.
  
  ## A Simple TypeScript Example
  
  Here's an example of a simple TypeScript function:
  
  \`\`\`ts
  function greet(name: string) {
      return "Hello, " + name;
  }
  
  console.log(greet("TypeScript"));  // Output: Hello, TypeScript
  \`\`\`
  
  In this example, the \`name\` parameter is typed as a string. If you try to call this function with a non-string argument, TypeScript will throw an error at compile-time.
  `,
    image: "/images/test.jpg",
    author: {
      name: "Ram Karan",
      image: "/images/profile.jpg",
      designation: "MERN Stack Developer",
    },
    tags: ["TypeScript", "JavaScript", "Web Development"],
    publishDate: "June 2023",
  },
];

export default blogData;
