
// Rota : Endereço completo da requisição
// Recurso : Qual entidade estamos acessando do sistema

// GET : Buscar uma ou mais informações do backend
// POST : Criar uma nova informação no backend
// PUT : Atualizar uma informação no backend
// DELETE : Remover uma informação do backend

// Request Param : Parametros que vem na propria rota que identificam um recurso
// Query param : Parametros que vem na propria rota geralmente opcionais  para filtros e paginação
// Request Body : Parametros para criação e atualização de informação

import express from 'express'
import cors from 'cors'
import path from 'path'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333)
