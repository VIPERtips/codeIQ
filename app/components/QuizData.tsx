export interface QuizQuestion {
  language: string;
  question: string;
  answers: string[];
  correctAnswer: string;
}

function shuffle(arr: string[]): string[] {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export const quizData: QuizQuestion[] = [
  // python quizzes
  {
    language: "python",
    question: "What is a function in Python?",
    answers: [
      "A function to print output",
      "A function to read input",
      "A function to define variables",
      "A function to import modules"
    ],
    correctAnswer: "A function to print output"
  },
  {
    language: "python",
    question: "What is the the syntax for a for loop in Python?",
    answers: [
      "for i in range():",
      "for i=0; i<10; i++:",
      "while i < 10:",
      "do while i < 10:"
    ],
    correctAnswer: "for i in range():"
  },
  {
    language: "python",
    question: "What is the output of `print(type(3.14))`?",
    answers: [
      "<class 'int'>",
      "<class 'float'>",
      "<class 'double'>",
      "<class 'decimal'>"
    ],
    correctAnswer: "<class 'float'>"
  },
  {
    language: "python",
    question: "Which of the following is used to create a virtual environment in Python?",
    answers: ["venv", "virtualenv", "pipenv", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    language: "python",
    question: "What does the `__init__` method do in Python?",
    answers: [
      "Initializes a class",
      "Terminates a class",
      "Imports modules",
      "Prints output"
    ],
    correctAnswer: "Initializes a class"
  },
  {
    language: "python",
    question: "What is the correct way to open a file in Python for reading?",
    answers: [
      "open('file.txt', 'r')",
      "open('file.txt', 'w')",
      "open('file.txt', 'a')",
      "open('file.txt', 'x')"
    ],
    correctAnswer: "open('file.txt', 'r')"
  },
  {
    language: "python",
    question: "What is the output of `print('Hello, World!'.split(','))`?",
    answers: [
      "['Hello', 'World!']",
      "['Hello, World!']",
      "['Hello', ' World!']",
      "Error"
    ],
    correctAnswer: "['Hello', ' World!']"
  },
  {
    language: "python",
    question: "Which of the following is a mutable data type in Python?",
    answers: ["List", "Tuple", "String", "Integer"],
    correctAnswer: "List"
  },
  {
    language: "python",
    question: "What is the output of `print(2 ** 3)`?",
    answers: ["6", "8", "9", "16"],
    correctAnswer: "8"
  },
  {
    language: "python",
    question: "What does the `lambda` keyword do in Python?",
    answers: [
      "Defines an anonymous function",
      "Imports a module",
      "Creates a class",
      "Prints output"
    ],
    correctAnswer: "Defines an anonymous function"
  },
  {
    language: "python",
    question: "What is the output of `print('Python'.upper())`?",
    answers: ["PYTHON", "python", "Python", "Error"],
    correctAnswer: "PYTHON"
  },
  {
    language: "python",
    question: "Which of the following is used to handle exceptions in Python?",
    answers: ["try-except", "try-catch", "if-else", "for-else"],
    correctAnswer: "try-except"
  },
  {
    language: "python",
    question: "What is the output of `print(len([1, 2, 3, 4]))`?",
    answers: ["3", "4", "5", "Error"],
    correctAnswer: "4"
  },
  {
    language: "python",
    question: "What is the output of `print(10 / 3)`?",
    answers: ["3", "3.333", "3.0", "Error"],
    correctAnswer: "3.333"
  },
  {
    language: "python",
    question: "Which of the following is used to remove an item from a list in Python?",
    answers: ["remove()", "delete()", "pop()", "Both remove() and pop()"],
    correctAnswer: "Both remove() and pop()"
  },
  {
    language: "python",
    question: "What is the output of `print('Hello' + 'World')`?",
    answers: ["HelloWorld", "Hello World", "Error", "None"],
    correctAnswer: "HelloWorld"
  },
  {
    language: "python",
    question: "What is the output of `print(bool(0))`?",
    answers: ["True", "False", "0", "Error"],
    correctAnswer: "False"
  },
  {
    language: "python",
    question: "Which of the following is used to iterate over a sequence in Python?",
    answers: ["for loop", "while loop", "do-while loop", "repeat-until loop"],
    correctAnswer: "for loop"
  },
  {
    language: "python",
    question: "What is the output of `print(3 * 'abc')`?",
    answers: ["abcabcabc", "abc", "3abc", "Error"],
    correctAnswer: "abcabcabc"
  },
  {
    language: "python",
    question: "What is the output of `print(10 % 3)`?",
    answers: ["1", "3", "0", "Error"],
    correctAnswer: "1"
  },
  {
    language: "python",
    question: "Which of the following is used to define a class in Python?",
    answers: ["class", "def", "struct", "interface"],
    correctAnswer: "class"
  },
  {
    language: "python",
    question: "What is the output of `print('Python'.find('th'))`?",
    answers: ["2", "3", "4", "-1"],
    correctAnswer: "2"
  },
  // java quizzes
  {
    language: "java",
    question: "What is the main method in Java?",
    answers: [
      "The method where the program starts execution",
      "A method to print output",
      "A method to read input",
      "A method to import modules"
    ],
    correctAnswer: "The method where the program starts execution"
  },
  {
    language: "java",
    question: "What is the syntax for a for loop in Java?",
    answers: [
      "for i in range():",
      "for(i=0; i<10; i++)",
      "while i < 10:",
      "do while i < 10:"
    ],
    correctAnswer: "for(i=0; i<10; i++)"
  },
  {
    language: "java",
    question: "What is the output of System.out.println(10 / 3);?",
    answers: ["3", "3.333", "3.0", "Error"],
    correctAnswer: "3"
  },
  {
    language: "java",
    question: "Which keyword is used to define a class in Java?",
    answers: ["class", "struct", "interface", "def"],
    correctAnswer: "class"
  },
  {
    language: "java",
    question: "What is the default value of an int variable in Java?",
    answers: ["0", "null", "1", "undefined"],
    correctAnswer: "0"
  },
  {
    language: "java",
    question: "Which of the following is used to create an object in Java?",
    answers: ["new", "create", "object", "instance"],
    correctAnswer: "new"
  },
  {
    language: "java",
    question: "What is the output of System.out.println(\"Hello\".length());?",
    answers: ["5", "4", "6", "Error"],
    correctAnswer: "5"
  },
  {
    language: "java",
    question: "Which of the following is a valid method signature for the main method in Java?",
    answers: [
      "public static void main(String[] args)",
      "public void main(String[] args)",
      "static void main(String[] args)",
      "public static int main(String[] args)"
    ],
    correctAnswer: "public static void main(String[] args)"
  },
  {
    language: "java",
    question: "What is the output of System.out.println(10 % 3);?",
    answers: ["1", "3", "0", "Error"],
    correctAnswer: "1"
  },
  {
    language: "java",
    question: "What is the output of System.out.println(2 + 3 + \"5\");?",
    answers: ["55", "10", "25", "Error"],
    correctAnswer: "55"
  },
  {
    language: "java",
    question: "Which of these is not a Java primitive type?",
    answers: ["int", "boolean", "char", "String"],
    correctAnswer: "String"
  },
  {
    language: "java",
    question: "What is the size of an int in Java?",
    answers: ["16 bits", "32 bits", "64 bits", "Depends on the machine"],
    correctAnswer: "32 bits"
  },
  {
    language: "java",
    question: "Which operator is used to compare two values in Java?",
    answers: ["=", "==", "equals", "==="],
    correctAnswer: "=="
  },
  {
    language: "java",
    question: "What is the default access modifier for class members in Java if none is specified?",
    answers: ["private", "public", "protected", "package-private"],
    correctAnswer: "package-private"
  },
  {
    language: "java",
    question: "Which keyword is used to inherit a class in Java?",
    answers: ["implements", "extends", "inherits", "super"],
    correctAnswer: "extends"
  },
  {
    language: "java",
    question: "What is the purpose of the 'final' keyword in Java?",
    answers: [
      "To define constants",
      "To allow inheritance",
      "To mark methods that can be overridden",
      "To create abstract classes"
    ],
    correctAnswer: "To define constants"
  },
  {
    language: "java",
    question: "Which collection class in Java maintains insertion order?",
    answers: ["HashSet", "TreeSet", "LinkedHashSet", "HashMap"],
    correctAnswer: "LinkedHashSet"
  },
  {
    language: "java",
    question: "What is the primary difference between ArrayList and LinkedList in Java?",
    answers: [
      "ArrayList supports fast random access",
      "LinkedList supports fast random access",
      "ArrayList can store duplicates",
      "LinkedList cannot store duplicates"
    ],
    correctAnswer: "ArrayList supports fast random access"
  },
  {
    language: "java",
    question: "Which exception is thrown when a thread is interrupted?",
    answers: [
      "IOException",
      "InterruptedException",
      "ArithmeticException",
      "IllegalStateException"
    ],
    correctAnswer: "InterruptedException"
  },
  {
    language: "java",
    question: "Which of the following is used to handle runtime exceptions in Java?",
    answers: [
      "try-catch block",
      "if-else statement",
      "switch statement",
      "for loop"
    ],
    correctAnswer: "try-catch block"
  },
  // react quizzes
  {
    language: "react",
    question: "What is React primarily used for?",
    answers: [
      "Building mobile apps",
      "Building user interfaces",
      "Database management",
      "Operating system development"
    ],
    correctAnswer: "Building user interfaces"
  },
  {
    language: "react",
    question: "Which company developed React?",
    answers: ["Google", "Facebook", "Microsoft", "Twitter"],
    correctAnswer: "Facebook"
  },
  {
    language: "react",
    question: "What is a component in React?",
    answers: [
      "A function or class that returns a React element",
      "A CSS file",
      "A JavaScript library",
      "A backend service"
    ],
    correctAnswer: "A function or class that returns a React element"
  },
  {
    language: "react",
    question: "What is JSX in React?",
    answers: [
      "A syntax extension for JavaScript",
      "A type of CSS",
      "A backend framework",
      "A testing library"
    ],
    correctAnswer: "A syntax extension for JavaScript"
  },
  {
    language: "react",
    question: "What hook is used to manage state in functional components?",
    answers: ["useEffect", "useState", "useRef", "useContext"],
    correctAnswer: "useState"
  },
  {
    language: "react",
    question: "Which hook is used for side effects in React?",
    answers: ["useState", "useEffect", "useContext", "useMemo"],
    correctAnswer: "useEffect"
  },
  {
    language: "react",
    question: "How do you pass data to a child component in React?",
    answers: ["Using props", "Using state", "Using context", "Using hooks"],
    correctAnswer: "Using props"
  },
  {
    language: "react",
    question: "What method is used to render a React component into the DOM?",
    answers: ["ReactDOM.render", "React.render", "ReactDOM.create", "React.create"],
    correctAnswer: "ReactDOM.render"
  },
  {
    language: "react",
    question: "What is a key prop used for in React lists?",
    answers: [
      "To style components",
      "To uniquely identify list elements",
      "To pass state",
      "To make API calls"
    ],
    correctAnswer: "To uniquely identify list elements"
  },
  {
    language: "react",
    question: "What does the useEffect hook do in React?",
    answers: [
      "Manages state",
      "Performs side effects",
      "Updates the DOM",
      "Handles events"
    ],
    correctAnswer: "Performs side effects"
  },
  {
    language: "react",
    question: "How can you optimize performance in React components?",
    answers: [
      "Using keys in lists",
      "Using PureComponent or React.memo",
      "Using inline functions",
      "Using multiple state variables"
    ],
    correctAnswer: "Using PureComponent or React.memo"
  },
  {
    language: "react",
    question: "What is the virtual DOM in React?",
    answers: [
      "A copy of the real DOM",
      "A database",
      "A caching layer",
      "A framework for mobile apps"
    ],
    correctAnswer: "A copy of the real DOM"
  },
  {
    language: "react",
    question: "Which of the following is a state management library for React?",
    answers: ["Redux", "Angular", "Vuex", "Express"],
    correctAnswer: "Redux"
  },
  {
    language: "react",
    question: "What is the primary advantage of using hooks in React?",
    answers: [
      "Class-based component inheritance",
      "Simplifying stateful logic",
      "Writing CSS",
      "Connecting to databases"
    ],
    correctAnswer: "Simplifying stateful logic"
  },
  {
    language: "react",
    question: "Which hook would you use to access context in a functional component?",
    answers: ["useReducer", "useState", "useContext", "useRef"],
    correctAnswer: "useContext"
  },
  {
    language: "react",
    question: "What does the React Fragment component do?",
    answers: [
      "Wraps multiple elements without adding extra nodes",
      "Creates a new state",
      "Fetches data from an API",
      "Styles components"
    ],
    correctAnswer: "Wraps multiple elements without adding extra nodes"
  },
  {
    language: "react",
    question: "How do you conditionally apply a CSS class in React?",
    answers: [
      "Using ternary operators within className",
      "Using if statements in JSX",
      "React does not support conditional styling",
      "Using CSS modules"
    ],
    correctAnswer: "Using ternary operators within className"
  },
  {
    language: "react",
    question: "What is the useCallback hook used for?",
    answers: [
      "To memoize functions",
      "To create context",
      "To style components",
      "To manage global state"
    ],
    correctAnswer: "To memoize functions"
  },
  {
    language: "react",
    question: "When using the useState hook, what do you get back?",
    answers: [
      "A state variable and a function to update it",
      "Only a state variable",
      "Only an update function",
      "A DOM element"
    ],
    correctAnswer: "A state variable and a function to update it"
  },
  {
    language: "react",
    question: "What is a common use case for the useReducer hook in React?",
    answers: [
      "Managing complex state logic",
      "Fetching API data",
      "Styling components",
      "Routing"
    ],
    correctAnswer: "Managing complex state logic"
  },
  // MySQL quizzes
  {
    language: "mysql",
    question: "What is MySQL?",
    answers: [
      "A programming language",
      "A relational database management system",
      "A web server",
      "An operating system"
    ],
    correctAnswer: "A relational database management system"
  },
  {
    language: "mysql",
    question: "Which language is used to interact with MySQL databases?",
    answers: ["Python", "SQL", "JavaScript", "C++"],
    correctAnswer: "SQL"
  },
  {
    language: "mysql",
    question: "What does SQL stand for?",
    answers: [
      "Structured Query Language",
      "Simple Query Language",
      "Sequential Query Language",
      "Server Query Language"
    ],
    correctAnswer: "Structured Query Language"
  },
  {
    language: "mysql",
    question: "Which command is used to retrieve data from a MySQL database?",
    answers: ["SELECT", "INSERT", "UPDATE", "DELETE"],
    correctAnswer: "SELECT"
  },
  {
    language: "mysql",
    question: "Which command is used to add a new row in a MySQL table?",
    answers: ["INSERT INTO", "ADD ROW", "NEW RECORD", "UPDATE"],
    correctAnswer: "INSERT INTO"
  },
  {
    language: "mysql",
    question: "Which command is used to update existing data in a MySQL table?",
    answers: ["UPDATE", "MODIFY", "CHANGE", "ALTER"],
    correctAnswer: "UPDATE"
  },
  {
    language: "mysql",
    question: "Which command is used to remove data from a MySQL table?",
    answers: ["DELETE", "DROP", "REMOVE", "ERASE"],
    correctAnswer: "DELETE"
  },
  {
    language: "mysql",
    question: "Which clause is used to filter records in a SELECT statement?",
    answers: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
    correctAnswer: "WHERE"
  },
  {
    language: "mysql",
    question: "What is the purpose of the GROUP BY clause?",
    answers: ["To sort data", "To aggregate data", "To filter data", "To join tables"],
    correctAnswer: "To aggregate data"
  },
  {
    language: "mysql",
    question: "Which command is used to create a new database in MySQL?",
    answers: ["CREATE DATABASE", "NEW DATABASE", "MAKE DATABASE", "INIT DATABASE"],
    correctAnswer: "CREATE DATABASE"
  },
  {
    language: "mysql",
    question: "What does the AUTO_INCREMENT attribute do?",
    answers: ["Automatically increments a numeric column", "Automatically updates timestamps", "Automatically creates new tables", "Automatically deletes rows"],
    correctAnswer: "Automatically increments a numeric column"
  },
  {
    language: "mysql",
    question: "Which keyword is used to sort the result set in a SELECT statement?",
    answers: ["ORDER BY", "SORT", "GROUP BY", "ARRANGE"],
    correctAnswer: "ORDER BY"
  },
  {
    language: "mysql",
    question: "What is a primary key in MySQL?",
    answers: ["A unique identifier for a row", "A foreign key", "A column that can be null", "A type of index"],
    correctAnswer: "A unique identifier for a row"
  },
  {
    language: "mysql",
    question: "What is a foreign key in MySQL?",
    answers: ["A key that links two tables", "A primary key", "An index", "A column with unique values"],
    correctAnswer: "A key that links two tables"
  },
  {
    language: "mysql",
    question: "What does the JOIN clause do?",
    answers: ["Combines rows from two or more tables", "Deletes rows from tables", "Creates indexes", "Sorts records"],
    correctAnswer: "Combines rows from two or more tables"
  },
  {
    language: "mysql",
    question: "Which join returns all records when there is a match in either left or right table?",
    answers: ["FULL OUTER JOIN", "INNER JOIN", "LEFT JOIN", "RIGHT JOIN"],
    correctAnswer: "FULL OUTER JOIN"
  },
  {
    language: "mysql",
    question: "Which MySQL command is used to modify the structure of a table?",
    answers: ["ALTER TABLE", "MODIFY TABLE", "UPDATE TABLE", "CHANGE TABLE"],
    correctAnswer: "ALTER TABLE"
  },
  {
    language: "mysql",
    question: "What is the purpose of the INDEX in MySQL?",
    answers: ["To speed up queries", "To secure data", "To backup databases", "To format data"],
    correctAnswer: "To speed up queries"
  },
  {
    language: "mysql",
    question: "Which function is used to count the number of rows in a MySQL query?",
    answers: ["COUNT()", "SUM()", "TOTAL()", "NUMROWS()"],
    correctAnswer: "COUNT()"
  },
  {
    language: "mysql",
    question: "What does the DISTINCT keyword do in a SELECT statement?",
    answers: ["Removes duplicate records", "Sorts records", "Limits the number of records", "Filters null values"],
    correctAnswer: "Removes duplicate records"
  }
].map((question: QuizQuestion) => ({
  ...question,
  answers: shuffle(question.answers),
}));
