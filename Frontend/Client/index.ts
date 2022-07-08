import express, {Request, Response} from 'express'

const ClientApp = express();




const networkPort = 3003
ClientApp.listen(networkPort, ()=>{
    console.log(`aplicação cliente rodando... na porta ${networkPort}`);
})