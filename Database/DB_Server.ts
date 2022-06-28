import express from 'express'
import {CreateEncomenda, CreateTerminal, CreateCliente} from './Functions/Creates'
import {ReadOneEncomenda, ReadManyEncomendas, ReadOneTerminal, ReadManyTerminals, 
        ReadOneClients, ReadManyClients, ReadOneEncomendaStatus} from './Functions/Reads'

const DBserver = express();

//creates routes
DBserver.post('/cadastrar/encomenda', CreateEncomenda);
DBserver.post('/cadastrar/cliente', CreateCliente);
DBserver.post('/cadastrar/terminal', CreateTerminal);

//reads routes
DBserver.get('/all-encomendas',);
DBserver.get('/encomenda/:id',);
DBserver.get('/status-encomenda/:id',);

DBserver.get('/all-terminal',);
DBserver.get('/terminal/:id',);
DBserver.get('/clientes',);
DBserver.get('/cliente/:id',);

//updates routes
DBserver.post('/')

DBserver.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000");
})