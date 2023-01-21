let addtodobutton= document.getElementById('add-todo');
let todocontainer =document.getElementById('todos-container');
let inputfiled = document.getElementById('inputfield')

addtodobutton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = inputfiled.value;
    paragraph.classList.add("paragraph-style");
    todocontainer.appendChild(paragraph);
    inputfiled.value=""
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick',function(){
        todocontainer.removeChild(paragraph);
    })
})

