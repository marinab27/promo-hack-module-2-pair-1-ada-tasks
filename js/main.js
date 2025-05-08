const tareasUl = document.querySelector(".js-tareas");

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
  for (const tarea of tareas) {
    if (tarea.completed === true) {
      tareasUl.innerHTML += `<div class="check"><input class="js-checkbox checkbox" type="checkbox" id=${tarea.id}/> <li class="tachado">${tarea.name}</li></div>`;
    } else {
      tareasUl.innerHTML += `<div class="check"><input class="js-checkbox checkbox" type="checkbox" id=${tarea.id}/> <li>${tarea.name}</li></div>`;
    }
  }
}

pintarHTML(tasks);

const handleClickTareasUl = (event) => {
  console.log(event.target);
  const taskId = parseInt(event.target.id); // Obtengo el id del checkbox clickado por la usuaria
  console.log(taskId);
  if (!taskId) return; // Si no ha pulsado en el checkbox, no queremos hacer nada y salimos de la función

  // Busca la tarea que tenga el id `taskId` en el array `tasks`
  // Una vez que has obtenido la tarea, actualiza la propiedad `completed`
  // Pinta de nuevo las tareas en el html
};

tareasUl.addEventListener("click", handleClickTareasUl);
