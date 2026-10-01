// API (APPLICATION PROGRAMMING INTERFACE) :- 
// A web api in javaScript is a set of built in features and functions provided by the web browser
// to extend the functionality of the core javaScript language.
// web APIs are not the part of the javaScript language they are built in into java like chrome, safari and firefox.

// Brwoser has a lot of the web api but the most commonly api are.
// 1. DOM(Document Object Model) API
// 2. Fetch API
// 3. WEB Storage API
// 4. GeoLocation API

// DOM(Document Object Model) API -> DOM API allows to manipulate html and css.
//            BY using DOM API we can dynaically add, delete, or change the elements on web page.

// HOW DOM WORKS -> 
// DOM is structural representation of the html file as an object.
// Once the web page is loaded to the browser, then dom tree will create inside the element tab. where all the elements will be treated as objects.
// Once the dom tree in created, we can access the elements by using js syntax and then perform the manipulations.
// To interact with the dom tree we use document object which is the property of window object.


//console.dir(document);



//getElementById -> return the elements and object or null(if not found).

      //document.getElementById(img1);// treated as variable
      document.getElementById("img1");// treated as object
      let imgObj = document.getElementById("img1");
      //console.log(imgObj);
      //console.dir(imgObj);
      //imgObj.src -> print the img link
      //imgObj.id  -> print the img id
      imgObj.src = "../basicsOfCSS/OIP.jpeg" ; // img changed.

      //NOTE- if you are trying to access any value that not exist it will return as null.

      //.....................................................................................................//

      //getElementByClassName -> return the elements as an html collection or empty collection.(if not found).
      
      let imgOBj = document.getElementsByClassName("oldIMG");
      console.log(imgOBj);

      for(let i =0;i<imgOBj.length;i++){
        console.dir(imgOBj[i].src)
      }

      //NOTE- if you are trying to access any value that not exist it will return as emplty htmlcollection.
      console.log(document.getElementsByClassName("sgdqege"));

      //........................................................................................................//

      //getElementByTagName-> Returns the element as an HTML collection or empty collection(if NOT Found)
      console.log(document.getElementsByTagName("img"));

      //NOTE- if you are trying to access any value that not exist it will return as emplty htmlcollection.

      //........................................................................................................//

    
     //Query SELECTORS -> Allow us to use any css Selectors.
     console.log(document.querySelector('p'));//select first p element.
     console.log(document.querySelector('#img1'));//select first id element.
     console.log(document.querySelector('.oldIMG'));//select first class element.
     console.log(document.querySelectorAll('.oldIMG'));//select all class element.

     //.......................................................................................................//

     // innerText -> Shows the visible text in a NODE.
     // textContent -> shows the full text(hidden also like display:none).
     // innerHtml  -> shows the full markup.

     let par = document.querySelector('p');
     console.log(par);
     console.log(par.innerText);
     console.log(par.textContent);
     console.log(par.innerHTML);//here wecan apply tags as well,it wii recognise it and changes will made.

     //..........................................................................................................//

     //Manipulating Attribute-
     // 1. obj.getAttribute(attr)
     // 2. obj.setAttribute(attr,val)

     let img = document.querySelector('img');
     console.log(img);
     console.log(img.getAttribute('id'));
     console.log(img.getAttribute('id','mainIMG'));
     console.log(img);

     //..................................................................................................................//

     //Manipulating Styles  // inline property


     
     //..................................................................................................................//

     //obj.classList  -> list of all the classes for a given object.

     let img1 = document.querySelector('img');
     console.log(img1.classList);

     //classlist.add() -> to add new Classes.
     //classlist.remove() -> to remove new Classes.
     //classlist.contains() -> to check if class exist.
     //classlist.toggle() -> to toggle between add and remove.
 
     //other class of peoperties will be applicable...
     img.classList.add('tmg');
      console.log(img1.classList);
       img.classList.remove('tmg');
           console.log(img1.classList);

     //...................................................................................................................//

     //Navigation ON Page

     //Parent element
     //child
     //PreviousElementSibiling/NextElementSibiling

     //childElementCount

     let h1 = document.querySelector('h1');
     console.log(h1.parentElement);
     console.log(h1.children);
     console.log(document.querySelector('body').children);
     console.log(document.querySelector('body').childElementCount);
     console.log(h1.nextElementSibling);
      console.log(h1.previousElementSibling);

      //..................................................................................................................//

      //AddingElement 

      //document.createElement('p');
      //appendChild(element)  //make changes at last to selected element.   
      //append(element)       //make changes at last to selected element. 
      //prepend(element)      //make changes at first to selected element. 
      //insertAdjacent(where,element);

      let newPara = document.createElement('p');
      console.log(newPara);// it will not show anywhere first you have to append it.
      newPara.innerText = "hi, I am a adding new paragrapf here.";

      let body = document.querySelector('body');
      console.log(body.appendChild(newPara));

      let btn = document.createElement('button');
      btn.innerText="newSubmit";
      btn.append("Click me!");  // next text is added inside the button.
      console.log(body.append(btn));
      console.log(body.prepend(btn));

      
      console.log(newPara.insertAdjacentElement('beforebegin',btn));
      console.log(newPara.insertAdjacentElement('afterbegin',btn));
      console.log(newPara.insertAdjacentElement('beforeend',btn));
      console.log(newPara.insertAdjacentElement('afterend',btn));

      //...................................................................................................................//

      //REMOVING ELEMENT.

      //removeChild(element);
      //remove(element);

      //body.removeChild(btn);
      //body.remove(h1);
      
     







