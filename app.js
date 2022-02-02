// get element using dom
let taskvalue = document.querySelector('#createtask');
let frm = document.querySelector('#frm');
let todoincul = document.querySelector('#todoincul');
let todocul = document.querySelector('#todocul');


// functions
let addtask = (task) => {
	let listitem = document.createElement('li');
	let checkbox = document.createElement('input');
	let label = document.createElement('label');

	label.innerText = task; 
	checkbox.type = 'checkbox';
	listitem.appendChild(checkbox);
	listitem.appendChild(label);

	return listitem;
}
let createtask = (event) => {
	event.preventDefault();
	let listitem = addtask(taskvalue.value);
	todoincul.appendChild(listitem);
	taskvalue.value = "";

	bindinctask(listitem,comtask);
} 

let comtask = function() {
	let listitem = this.parentNode;
	let delbtn = document.createElement('button');
	delbtn.innerText = "Delete";
	delbtn.className = 'dlbtn';
	listitem.appendChild(delbtn);
	let checkbox = listitem.querySelector('input[type="checkbox"]');
	checkbox.remove();
	todocul.appendChild(listitem);

	bindctask(listitem,deltask);
}

let deltask = function(){
	let listitem = this.parentNode;
	let ul = listitem.parentNode;
	ul.removeChild(listitem);
}

let bindinctask = (taskitem,chcekclick) => {
	let checkbox = taskitem.querySelector('input[type="checkbox"]');
	checkbox.onchange = chcekclick;
}

let bindctask = (taskitem, delbtncheck) => {
	let delbtn = taskitem.querySelector('.dlbtn');
	delbtn.onclick = delbtncheck;
}

// static element bind with for loop
for (var i = 0; i < todoincul.children.length; i++) {
	bindinctask(todoincul.children[i],comtask);
}
for (var i = 0; i < todocul.children.length; i++) {
	bindctask(todocul.children[i],deltask);
}


frm.addEventListener('submit',createtask);