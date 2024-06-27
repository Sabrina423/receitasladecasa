const express = require('express');

const app = express();
const port = 3000;

app.use(express.static("app/public/"));

app.set('view engine', 'ejs');
app.set('views',"./app/views");



app.use(express.urlencoded({ extended: true }));
app.use(express.json());



let rotas = require('./app/routes/router')
app.use('/', rotas);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}\nhttp://localhost:${port}`);
});

