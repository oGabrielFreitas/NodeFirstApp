const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({message: 'Home'});
});

// Requisições para Projetos

//GET
app.get('/projects', (request, response) => {

    const query = request.query;
    console.log(query);

    //Desestruturação
    const {title, owner} = request.query;

    console.log('Title = ', title);
    console.log('Owner = ', owner); 

    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});

//POST
app.post('/projects', (request, response) => {

    const body = request.body;
    console.log(body);

    //Desestruturação
    const {title, owner} = request.body;

    console.log('Title = ', title);
    console.log('Owner = ', owner);


    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ])
});

//PUT
app.put('/projects/:id', (request, response) => {

    const params = request.params;
    console.log(params);

    //Desestruturação
    const {id} = request.params;
    console.log('ID = ', id);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 4',
    ])
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 3',
    ])
});

app.listen(3333, () => {
    console.log('🚀 Back-end Started!')
});

