const express = require("express");

//Iniciar o servidor express
const server = express();

server.use(express.json());

//Middleware global contador
server.use((req, res, next) => {
  next();
  console.count();
});

//Iniciando 1 projeto
const projects = [
  {
    id: "0",
    title: "Projeto 1",
    tasks: ["Tarefa 1"]
  }
];

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.get("/projects/:id", checkIfProjectExists, (req, res) => {
  return res.json(req.project);
});

server.post("/projects", (req, res) => {
  const newProject = req.body;

  projects.push(newProject);

  return res.json(projects);
});

server.post("/projects/:id/tasks", checkIfProjectExists, (req, res) => {
  const { task } = req.body;

  req.project.tasks.push(task);

  return res.json(projects);
});

server.put("/projects/:id", checkIfProjectExists, (req, res) => {
  const { title } = req.body;
  const { id } = req.params;

  const project = projects.find(p => p.id === id);
  project.title = title;

  return res.json(projects);
});

server.delete("/projects/:id", checkIfProjectExists, (req, res) => {
  const { id } = req.params;

  const index = projects.find(p => p.id === id).index;

  projects.splice(index, 1);

  return res.json(projects);
});

function checkIfProjectExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    return res.status(400).json({ erro: "The project does not exist." });
  }

  req.project = project;

  return next();
}

server.listen(3200);
