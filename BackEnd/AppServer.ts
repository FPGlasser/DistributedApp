import express, {Request, Response} from 'express';
import Bodyparser from 'body-parser' 
import {AdmAuthorization, TerminalAthorization, AdmAndTerminalAuthorization} from './Auth/AcessAuthorization';
import {CreateEncomenda, CreateTerminal, CreateCliente} from './Functions/Creates';
import {ReadOneEncomenda, ReadManyEncomendas, ReadOneTerminal, ReadManyTerminals, 
        ReadOneClient, ReadManyClients, ReadOneEncomendaStatus} from './Functions/Reads';
import {UpdateClient, UpdateEncomenda, UpdateTerminal, UpdateStatusEncomenda} from './Functions/Updates';

const AppServer = express();

//middlewars
AppServer.use(express.json());
AppServer.use(Bodyparser.json());

//creates routesalo
AppServer.post('/cadastrar-encomenda', TerminalAthorization, CreateEncomenda);
AppServer.post('/cadastrar-cliente', AdmAuthorization, CreateCliente);
AppServer.post('/cadastrar-terminal',AdmAuthorization, CreateTerminal);

//reads routes
AppServer.get('/all-encomendas', AdmAuthorization, ReadManyEncomendas);
AppServer.get('/encomenda/:id', AdmAndTerminalAuthorization, ReadOneEncomenda);
AppServer.get('/status-encomenda/:id', ReadOneEncomendaStatus);//public route
AppServer.get('/all-terminal', AdmAuthorization, ReadManyTerminals);
AppServer.get('/terminal/:id', AdmAuthorization, ReadOneTerminal);
AppServer.get('/clientes', AdmAuthorization, ReadManyClients);
AppServer.get('/cliente/:id', AdmAndTerminalAuthorization, ReadOneClient );

//updates routes
AppServer.put('/update-client', AdmAuthorization, UpdateClient);
AppServer.put('/update-terminal', AdmAuthorization, UpdateTerminal);
AppServer.put('/update-encomenda', AdmAuthorization, UpdateEncomenda);
AppServer.post('/updatestatusencomenda',TerminalAthorization, UpdateStatusEncomenda);


AppServer.all('/*', async(res: Response)=>{
    res.status(404).send("invalid route server");
});

AppServer.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000");
})