// selecting specific elements
let userinput = document.getElementById('inputbutton');
let submit = document.getElementById('submitbtn');
let ul = document.querySelector('ul');

// adding eventlistener to listen for a click event and then perform addli function
submit.addEventListener('click', addli);
// addli funcvtion
function addli(e) {
    // to prevent the default behaviour of the function
    e.preventDefault();
    // creating a new input element
    let input = document.createElement('input');
    input.type = 'checkbox';
    // creating an li element
    let li = document.createElement('li');
    // creating a delete button and adding text to it
    let delbutton = document.createElement('button');
    delbutton.textContent = 'Delete It';
    // button to change color 
    let color = document.createElement('button');
    color.textContent = 'Change Color Here';
    // button to change order
    let changeOrder = document.createElement('button');
    changeOrder.textContent = 'Move To bottom';
    let text = userinput.value;
    let txtnode = document.createTextNode(text);
    //appending  text to li,and other buttons to li and then li to input,
    input.appendChild(li);
    li.appendChild(txtnode);
    li.appendChild(color);
    li.appendChild(changeOrder);
    li.appendChild(delbutton);
    ul.appendChild(input);
    ul.appendChild(li);
    // tried using checbox checked but did not worked
    //if (document.querySelectorAll('input').checked = 'true'){
    //  console.log('djhcvdhjcnjkhhc');
    // changecolor();
    changeOrder.onclick = changeorder;
    color.onclick = changecolor;
    delbutton.onclick = deletefunction;
    userinput.focus();

}
// function to delete any element
function deletefunction(e) {
    e.preventDefault();
    alert('Are you Sure you want to delete ?');
    let closestli = e.target.closest('li');
    let inputcheck = e.target.parentElement.previousSibling;
    console.log(inputcheck);
    inputcheck.remove();
    closestli.remove();
}
// function to change color
function changecolor(e) {
    e.preventDefault();
    let p = e.target.parentElement;
    p.style.color = 'red';
}
// function to change order
function changeorder(e) {
    e.preventDefault();
    let clicked = e.target.parentElement;
    let checkbox = e.target.parentElement.previousSibling;
    ul.appendChild(checkbox);
    ul.appendChild(clicked);
}
