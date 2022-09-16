import express  from "express";


const app = express()


app.get('/ads', (request, response) => {
    console.log('acessou');
    return response.json([
        {id: 1, name: 'Anúncio 1'},
        {id: 1, name: 'aandre'},
        {id: 1, name: 'aandre'},
        {id: 1, name: 'aandre'},
    ])
})
app.listen(3333)
