import express, {Request, Response} from 'express';
import {AdmAuthorization, TerminalAthorization, AdmAndTerminalAuthorization} from './Auth/AcessAuthorization';
import {CreateEncomenda, CreateTerminal, CreateCliente} from './Functions/Creates';
import {ReadOneEncomenda, ReadManyEncomendas, ReadOneTerminal, ReadManyTerminals, 
        ReadOneClients, ReadManyClients, ReadOneEncomendaStatus} from './Functions/Reads';
import {UpdateClient, UpdateEncomenda, UpdateTerminal, UpdateStatusEncomenda} from './Functions/Updates';

const DBserver = express();

DBserver.use(express.json());

//creates routes
DBserver.post('/cadastrar-encomenda', TerminalAthorization, CreateEncomenda);
DBserver.post('/cadastrar-cliente', AdmAuthorization, CreateCliente);
DBserver.post('/cadastrar-terminal',AdmAuthorization, CreateTerminal);

//reads routes
DBserver.get('/all-encomendas', AdmAuthorization, ReadManyEncomendas);
DBserver.get('/encomenda/:id', AdmAndTerminalAuthorization, ReadOneEncomenda);
DBserver.get('/status-encomenda/:id', ReadOneEncomendaStatus);//public route
DBserver.get('/all-terminal', AdmAuthorization, ReadManyTerminals);
DBserver.get('/terminal/:id', AdmAuthorization, ReadOneTerminal);
DBserver.get('/clientes', AdmAuthorization, ReadManyClients);
DBserver.get('/cliente/:id', AdmAndTerminalAuthorization, ReadOneClients );

//updates routes
DBserver.get('/update-client', AdmAuthorization, UpdateClient);
DBserver.get('/update-terminal', AdmAuthorization, UpdateTerminal);
DBserver.get('/update-encomenda', AdmAuthorization, UpdateEncomenda);
DBserver.post('/updatestatusencomenda',TerminalAthorization, UpdateStatusEncomenda);

DBserver.all('/*',(req: Request, res: Response)=>{
    res.status(404).send("invalid route server");
});

DBserver.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000");
})