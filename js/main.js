const tareas = document.querySelector(".js-tareas");
const checkbox = document.querySelector(".js-checkbox");

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

function pintarHTML(tarea) {
  tareas.innerHTML += `<input class="js-checkbox checkbox" type="checkbox" />
          <li>${tarea.name}</li>`;
}

for (const task of tasks) {
  pintarHTML(task);
}
