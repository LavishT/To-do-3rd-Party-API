let userinput = document.getElementById('inputbutton');
let submit = document.getElementById('submitbtn') ;
let ul = document.querySelector('ul');



submit.addEventListener('click', addli);

//submit.addEventListener('click', changeOrder);

function addli(e) {
    e.preventDefault();
    let input = document.createElement('input');
    input.type = 'checkbox';
    let li = document.createElement('li');
    let delbutton = document.createElement('button');
    delbutton.textContent = 'Delete It';
    let color = document.createElement('button');
    color.textContent = 'Change Color Here';
    let changeOrder = document.createElement('button');
    changeOrder.textContent = 'Move To bottom';
    let text = userinput.value;
    let txtnode = document.createTextNode(text);
    input.appendChild(li);
    li.appendChild(txtnode);
    li.appendChild(color);
    li.appendChild(changeOrder);
    li.appendChild(delbutton);
    ul.appendChild(input);
    ul.appendChild(li);
    //if (document.querySelectorAll('input').checked){
      //  console.log('djhcvdhjcnjkhhc');
       // changecolor();
    changeOrder.onclick = changeorder;
    color.onclick = changecolor;
    delbutton.onclick = deletefunction;
    userinput.focus();
    
}

function deletefunction(e) {
    e.preventDefault();
    alert('Are you Sure you want to delete '+ userinput.value+' ?');
   let closestli = e.target.closest('li');
   let inputcheck = e.target.parentElement.previousSibling;
   console.log(inputcheck);
   inputcheck.remove();
   closestli.remove();
}

function changecolor(e){
    e.preventDefault();
    let p = e.target.parentElement;
    p.style.color = 'red';

}
function changeorder(e){
    e.preventDefault();
    let clicked = e.target.parentElement;
    let checkbox =  e.target.parentElement.previousSibling;
    ul.appendChild(checkbox);
    ul.appendChild(clicked);
}

