'use strict';

const tareasUl = document.querySelector(".js-tareas");
const boton = document.querySelector(".js-button");
const filtroInput = document.querySelector(".js-filtroInput");

const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];

function pintarHTML(tareas) {
  tareasUl.innerHTML = "";
  for (const tarea of tareas) {
    if (tarea.completed === true) {
      tareasUl.innerHTML += `<div class="check"><input checked class="js-checkbox checkbox" type="checkbox" id=${tarea.id}/> <li class="tachado">${tarea.name}</li></div>`;
    } else {
      tareasUl.innerHTML += `<div class="check"><input class="js-checkbox checkbox" type="checkbox" id=${tarea.id}/> <li> ${tarea.name}</li></div>`;
    }
  }
} 

/*   function pintarHTML(tareas) {
    tareasUl.innerHTML = "";
    for (const tarea of tareas) {
      tareasUl.innerHTML += `
        <div class="check">
          <input class="js-checkbox checkbox" type="checkbox" id=${tarea.id} ${tarea.completed ? " checked" : ""}/>
          <li class="${tarea.completed ? "tachado" : ""}">${tarea.name}</li>
        </div>
      `;
    }
  } */
  
pintarHTML(tasks);

const handleClickTareasUl = (event) => { 
  console.log(event.target);
  const taskId = parseInt(event.target.id); // Obtengo el id del checkbox clickado por la usuaria
  console.log(taskId);
  if (!taskId) return; // Si no ha pulsado en el checkbox, no queremos hacer nada y salimos de la función

  const found = tasks.find(task => task.id === taskId) 
/* 
  if(found.completed == true){ found.completed = false
  }
  else {found.completed = true
  } */

  found.completed = !found.completed // hace lo mismo que el if anterior
  
  console.log(found);
  pintarHTML(tasks);
   
};

const handleButton = (event) => {
  event.preventDefault();
  tasks.filter((tareaFiltro) =>  { })
  }

  //recoger el valor de input filtroInput.value
  //tarea.name contiene el valor de input
  // retornar SOLO las taeras que contengan ese input


tareasUl.addEventListener("click", handleClickTareasUl);

boton.addEventListener("click", handleButton)






