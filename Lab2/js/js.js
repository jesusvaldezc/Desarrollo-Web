let enter_newitem = document.getElementById('newitem');
let listItems = Array.from(document.querySelectorAll('li'));
let tasks = [];

listItems.forEach(
    (item) => {
        const span = item.querySelector('span');
        const input = item.querySelector('input');
        input.addEventListener('change', toggleDone);
        tasks.push(
            {
                span,
                input,
                done: input.checked
            }
        );
    }
);

function toggleDone(event) {
    const input = event.target;
    const index = input.value;

    tasks[index].done = !tasks[index].done;

    if (tasks[index].done) {
        tasks[index].span.classList.add('done');
    } else {
        tasks[index].span.classList.remove('done');
    }
}

enter_newitem.addEventListener('keyup', function(e) {
    
    if(e.keyCode === 13 && enter_newitem.value)
    {
       var local = document.createElement("span");
       var prueba = document.createElement("input");
       var node = document.createElement("li");
       prueba.setAttribute("type","checkbox");
       prueba.setAttribute("name", "todo");
       prueba.setAttribute("value", tasks.length);
       prueba.addEventListener('change', toggleDone);

       node.appendChild(prueba);
       node.appendChild(local);

       var textNode = document.createTextNode(enter_newitem.value)
       document.getElementById('lista').appendChild(node).appendChild(prueba).appendChild(local)
       local.appendChild(textNode)
       node.appendChild(local)
       enter_newitem.value = "";

       tasks.push(
           {
               span: local,
               input: prueba,
               done: prueba.checked
           }
       );
    }
})
