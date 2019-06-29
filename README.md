# project-api
Building a simple api using array and Express JS.

Challenge description: https://github.com/Rocketseat/bootcamp-gostack-desafio-01/blob/master/README.md

## Routes

- POST  `/projects:`: The route must receive id and title inside body to register a new project within an array in the following format: `{id: "1", title: 'New project', tasks: []};` Be sure to send both the ID and the project title in double quotes string format.

- GET `/projects`: Route that lists all projects and their tasks;

- PUT `/projects/:id`: The route should change only the project title with the id present in the route parameters;

- DELETE `/projects/:id`: The route must delete the project with the id present in the route parameters;

- POST `/projects/:id/tasks`: The route should receive a title field and store a new task in the task array of a specific project chosen through the id present in the route parameters;

### Example

If I call the POST `/projects` route by submitting `{id: 1, title: 'New project'}` and the POST `/projects/1/` tasks route with `{title: 'New task'}`, my array of projects should look like this:

    [
		  {
				id: "1",
				title: 'New project',
				tasks: ['New task']
		  }
    ]

## Middlewares

- Create a middleware that will be used on all routes that receive the project ID in the URL parameters that verifies that the project with that ID exists. If there is no return error, otherwise allow the request to proceed normally;

- Create a global middleware called on every request that prints (console.log) a count of how many requests have been made in the application until then;
