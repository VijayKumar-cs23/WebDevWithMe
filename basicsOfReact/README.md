React JS : It is a open source JavaScript library developed by meta(facebook) specially for building fast and inteactive user Interfaces(UI), specially for single page web applications.

COMPONENT : A React Component is an independent, reusable piece of UI that contains its own structure and logic. Components help developers build complex user interfaces by combining smaller, reusable parts.
A Component can be as small as a button or as large as entire page.

What is JSX:
"JSX is a JavaScript syntax extension used by React that allows us to write HTML-like UI syntax inside JavaScript. JSX is not HTML, and browsers cannot understand JSX directly, so it is transformed into JavaScript by a JSX compiler or transformation tool such as Babel."

If we can write React code using JavaScript, why do we use JSX?

Without JSX: Writing React using JavaScript
Suppose you want to display a heading on your webpage.


import React from 'react';

function App() {
    React.createElement('h1', null, 'Hello World!');
}

export default App;

Argument	      Meaning
'h1'	          The HTML element to create
null	          No additional props or attributes
'Hello World!'	  The content inside the heading


The output displayed in the browser will be:

Hello World!


With JSX: Writing React in an easier way

function App() {
    return (
        <h1>Hello World!</h1>
    );
}

export default App;


Why is JSX better?
Readability: JSX looks similar to HTML, so the UI structure is easier to understand.
Less code: You don't need to write repeated React.createElement() calls.
Easy nesting: You can place elements inside other elements naturally.
JavaScript integration: You can insert JavaScript expressions directly into JSX using curly braces {}.
Maintainability: Large user interfaces are generally easier to develop and maintain using JSX.


TO SETUP LOCAL ENVOIRNMENT for REACT:

we main mainly two popular tools:

1. Create-React-App
2. Vite

Using Vite
1. we have to create a folder : npm create vite@latest 
2. then it will ask for vite Project Name : basic-react-app
3. then it will ask for  Select a framework : 'React' we have to choose
4. then it will ask for  Select a varient : 'javaScript' we have to select
5. then it will ask for Which linter to use : we have to select ES lint which is widely use.
A linter is a tool that checks your code for potential errors, coding mistakes, and code-quality issues.
6.then it will ask for Start with npm you have to select yes


