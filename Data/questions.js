const questions=[
    {
        "id": 1,
        "question": "What does the `require()` function do in Node.js?",
        "options": {
          "A": "Compiles a program",
          "B": "Imports a module",
          "C": "Exports a module",
          "D": "Starts a server"
        },
        "answer": "Imports a module"
      },
      {
        "id": 2,
        "question": "Which of the following is an example of a Node.js core module?",
        "options": {
          "A": "lodash",
          "B": "express",
          "C": "fs",
          "D": "mongoose"
        },
        "answer": "fs"
      },
      {
        "id": 3,
        "question": "What is the event loop in Node.js?",
        "options": {
          "A": "A programming construct that waits for and dispatches events or messages in a program",
          "B": "A loop that automatically restarts a Node.js application when it crashes",
          "C": "A series of user-generated events",
          "D": "A loop that handles asynchronous callbacks"
        },
        "answer": "A programming construct that waits for and dispatches events or messages in a program"
      },
      {
        "id": 4,
        "question": "What is a callback in Node.js?",
        "options": {
          "A": "A synchronous function",
          "B": "An asynchronous function passed as an argument to another function",
          "C": "A function that calls itself",
          "D": "A return statement in a function"
        },
        "answer": "An asynchronous function passed as an argument to another function"
      },
      {
        "id": 5,
        "question": "How can you avoid callback hell in Node.js?",
        "options": {
          "A": "Using event emitters",
          "B": "Using synchronous functions",
          "C": "Using promises or async/await",
          "D": "There is no way to avoid callback hell"
        },
        "answer":"Using promises or async/await",
      },
      {
        "id": 6,
        "question": "What is the purpose of module.exports in Node.js?",
        "options": {
          "A": "To import required modules into a file",
          "B": "To store private variables",
          "C": "To expose functions or objects to other files",
          "D": "To update the Node.js version"
        },
        "answer":"To expose functions or objects to other files"
      },
      {
        "id": 7,
        "question": "Which method is used to create a server in Node.js?",
        "options": {
          "A": "http.createServer()",
          "B": "server.create()",
          "C": "http.newServer()",
          "D": "createServer.http()"
        },
        "answer": "http.createServer()"
      },
      {
        "id": 8,
        "question": "What is npm in the context of Node.js?",
        "options": {
          "A": "A Node.js version manager",
          "B": "A Node.js package manager",
          "C": "A Node.js server",
          "D": "A Node.js testing framework"
        },
        "answer": "A Node.js package manager"
      },
      {
        "id": 9,
        "question": "What is the default scope of a module in Node.js?",
        "options": {
          "A": "Global",
          "B": "Local to the file",
          "C": "Local to the directory",
          "D": "Local to the function"
        },
        "answer": "Local to the file"
      },
      {
        "id": 10,
        "question": "Which of the following is true about Node.js?",
        "options": {
          "A": "Node.js is a front-end framework",
          "B": "Node.js is multi-threaded",
          "C": "Node.js is suitable for CPU-intensive operations",
          "D": "Node.js is designed for building scalable network applications"
        },
        "a":  "Node.js is designed for building scalable network applications"
      }
]
module.exports=questions