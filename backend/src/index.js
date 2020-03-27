const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333);



/**
 * Rota / Recurso
 */

/**
 * Tipos de Parametros:
 * 
 * Query Params: Parâmetros nomeados enviados na rotas após "?" (Filtros, paginação).
 * Route Params: Parâmetros utilizados para identificar recursos.
 * Request Body: Corpo da Requisição, utilizado para criar ou alterar recursos.
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where('')
  */

