import express, {Request, Response} from 'express'

const AdminServer = express();

AdminServer.use(express.static('./Static'));


const port = 3001
AdminServer.listen(port, ()=>{
    console.log(`Servidor rodando na porta:  ${port}`);
})