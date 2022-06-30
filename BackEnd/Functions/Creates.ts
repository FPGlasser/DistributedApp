import {Request, Response} from 'express'
import { PrismaClient } from '@prisma/client';


export async function CreateEncomenda(req: Request, res: Response){
    const{descricao, endereco, idCliente } = req.body;
    const prisma = new PrismaClient();
    const resultset = await prisma.encomenda.create(
        {
            data:{
                descricao: descricao,
                endereco: endereco,
                id_cliente: idCliente,
                entregue: false
            }
        }
    );

    res.status(201).json({resultset}); 
}

export async function CreateTerminal(req: Request, res: Response){

    const{username, descricao, endereco, cpfadm, password} = req.body;
    const prisma = new PrismaClient();

    const resultset = await prisma.terminal.create(
        {
            data:{      
                user: username,
                descricao: descricao,
                endereco: endereco,
                admin: cpfadm,
                password: password 
            }
        }
    );
    
    res.status(201).json({resultset});
}

export async function CreateCliente(req: Request, res: Response){
    const{cnpjcliente, nomecliente, email, telefone} = req.body;
    const prisma = new PrismaClient();

    const resultset = await prisma.cliente.create({
        data:{
            cnpj: cnpjcliente,
            nome: nomecliente,
            contacto: telefone          
        }
    })

    res.status(201).json({resultset});
}