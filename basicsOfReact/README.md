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
6. then it will ask for Start with npm you have to select yes.

Now we have to install the node modules : npm install 
To run our code we use: npm run dev


UnderStanding of our folder Structure:


Creating COMPONENT: 

function Title(){
  return(
    <div>
      <h2>I am the title 1</h2>
      <h3>I am the title 2</h3>
    </div>
  )
}

first we have to export it.
two ways:
1. Default export: export default Title;
2. Named export : export {Title};
                  import {Title} from "./Title.jsx" ;

Note : Named export are useful when you want to export multiple values and import them with their specific names.
       while Default exports are handing for exporting a single value and giving it a custom name when importing.


JSX RULES:
1. We should return a single Parent Element.
2. In Jsx we must close all the tags.
3. we should you className intead of class. because class is a reserved keyword in javaScript.
4. Component names must start with camelCase.
5. inside jsx if we want to write javaScript values or expression then we need to use {}. if we use {} and writting any js
   expression inside curly braces it will treated as pure javsScript.
   

Ract Props: props are the information that you pass to a js tag.

File1:Product.jsx

import "./Product.css";

function Product({ title, price = 1 }) { //This line contains three important concepts 1.Functional components.(Product:desProp)
                                                                                         2.Props:{ title, price = 1 }
                                                                                         3.Destructuring with a default value.
        return (
        <div className="Product">     //here we have created a single reusable component to use multiple time.
            <h3>{title}</h3>          //Why are we writing {title} instead of simply writing title?
                                      //Because JSX uses curly braces to embed JavaScript expressions.
            <h5>Price: ₹{price}</h5>
        </div>
    );
}
export default Product;


//What are props: Props are inputs passed from a parent component to a child component.
we do like this also 
function Product(props) {    //React passes the props as an object.
    return (
        <div>
            <h3>{props.title}</h3>
            <h5>Price: {props.price}</h5>
        </div>
    );
}


// <Product title="Phone" price={150000} />
the component receives an object like this:
{
    title: "Phone",
    price: 150000
}

can access its values using:
props.title
props.price

Note upper we have simplify this using destructuring.





File 2: ProductTab

import Product from "./Product.jsx"
function ProductTab(){
    return (                     // Instead of writing the same HTML-like code three times, you create
                                //  one reusable component called Product and reuse it for each
                               //   product. This is called Component Reusability.
        <div>
            <Product title="Phone" price={150000/2} />  
            <Product title="Laptop" price={50000}/>
            <Product title="Pen" price={undefined}/>
        </div>
    );
}

export default ProductTab;



 






