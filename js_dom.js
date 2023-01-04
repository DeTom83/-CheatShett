//Inspired by this video: https://youtu.be/5fb2aPlgoys thy freeCodeCamp.org
//https://developer.mozilla.org/en-US/docs/Web/API/Element
//https://www.w3schools.com/jsref/dom_obj_all.asp


//----------------------SELECT ELEMENT(s) --------------------------------------------------
//https://www.w3schools.com/jsref/dom_obj_document.asp

//GetElementById()
  const title = document.getElemenentById('main-heading'); //<h1 id="main-heading">Welcome</h1>
  console.log(title);
  
//GetElementByClassName()
  const listItem = documentElementByClassName('list-items');//<li class=list-items>Home</li>
  console.log(listItem);

//GetElementByTagName()
  const listItems = documentElementByTagName('li');//<li class=list-items>Home</li>
  console.log(listItems);

//querySelector()
  const container = document.querySelector('div');
  console.log(container);

//querySelectorAll()
  const container2 = document.querySelectorAll('div');
  console.log(container2);


//---------------------- DOM manipulation --------------------------------------------------
//https://www.w3schools.com/jsref/dom_obj_attributes.asp 

//Styling an Element
  const mainTitle = document.querySelector('#main-heading');
  mainTitle.style.color = 'red'; //it is work one elemenet. inline style method

  const listItems3 = document.querySelectorAll('.list-items');//if you have one more
  for(i=0; i<=listItems3.length; i++){
    listItems3[i].style.fontSize = '2rem';
  }

//Creating Element
  const ul = document.querySelector('ul');
  const li = document.createElement('li');

//Adding
  ul.append(li);
  console.log(ul);

  const body = document.body;
  body.append('Hello World',' Bye');

//Modifying the text
  li.innerText = 'X-men';
  console.log(ul);

  const firstListItem = document.querySelector('list-items');
  console.log(firstListItem.innerText); //show simplify text
  console.log(firstListItem.innerHTML); //show full text with html tage
  console.log(firstListItem.textContent); //show new line

  //Modifying Attributes & Classes
  //https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
    li.setAttribute('id', 'main-heading');
    li.removeAttribute('id');
    li.setAttribute('class', 'list-items');
    li.classList.add('list-items');
    console.log(li.getAttribute('class'));//list-items
    console.log(li.classList.contains('list-items'));//true
    li.classList.remove('list-items');
    console.log(li.getAttribute('class'));//''
    console.log(li.classList.contains('list-items'));//false

    //Remove Elemenets
    li.remove();

// ---------------------------- Node / Traverse the DOM ----------------------------------------
//Parent Node Traversal
  let ul2 = document.querySelector('ul');
  console.log(ul2.parentElement); 
  console.log(ul2.parentNode);
  console.log(ul2.parentNode.parentNode);


//Child Node Traversal
  let ul3 = document.querySelector('ul');
  console.log(ul3.childNodes);
  console.log(ul3.firstChild);
  console.log(ul3.lastChild);

  console.log(ul.children);
  console.log(ul.firstElementChild);
  console.log(ul.lastElementChild);


//Sibling Node Taversal
  let ul4 = document.querySelector('ul');

  console.log(ul4.previousSibling);
  console.log(ul4.nextSibling);
  console.log(ul4.previousElementSibling);
  console.log(ul4.nextElementSibling);

// ---------------------------- Event Listenser ----------------------------------------
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
//element.addEvenListener(type,function,options)
//element.addEventListener(type, listener, useCapture)


  const btn = document.querySelector('.btn');
  btn.addEventListener('click', alert('Hello Word'));
  btn.addEventListener('mouseover',()=>{
    btn.style.backgroundColor = 'blue';
  });

  const panel = document.querySelector('.panel');
  panel.addEventListener('click',()=>{
    if(panel.classList.contains('active')){
      panel.classList.remove('active');
    }else{
      panel.classList.add('active');
    }
  });
  //panel.classList.contains('active')? panel.classList.remove('active') : panel.classList.add('active');
  //panel.classList.toggle('active');

  //Event probagation: https://www.youtube.com/watch?v=5fb2aPlgoys&t=3016s
  //3 phases
  //-------------------
  //1. Event capturing
  //2. Target
  //3. Event Bubbling
    window.addEventListener('click', function (){
      console.log('Windows');
    },true); //true is a useCapture - as if running the command
  
    document.querySelector('button').addEventListener('click',(e)=>{
      console.log(e.target);
    },true);

    //--------------------------------------
    <ul id='sports'>
      <li id='football'>Football</li>
      <li id='Basketball'>Basketball</li>
      <li id='tennis'>tennis</li>
    </ul>

    document.querySelector('#sports').addEventListener('click',function(e){
      console.log(e.target.getAttribute('id') + ' is clicked');
      const target = e.target;
      if(target.matches('li')){
        target.style.backgroundColor ='lightgray';
      }
    });