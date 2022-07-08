import {Request, Response} from 'express'
import { PrismaClient } from '@prisma/client'

export async function CreateEncomenda(req: Request, res: Response){
    console.log(req.body);
    const{ descricao, endereco, idCliente } = req.body;

    const prisma = new PrismaClient();

    try{

        const resultset = await prisma.encomenda.create({
            data:{
                descricao: descricao,
                endereco: endereco,
                id_cliente: parseInt(idCliente),
                entregue: false
            }
        });

        res.status(201).json({resultset}); 
    }catch(err){
        res.status(409).json("Erro ao tentar cadastrar encomenda")
    }
    finally{
        prisma.$disconnect();
    }

}

export async function CreateTerminal(req: Request, res: Response){
    console.log(req.body);
    const{username, descricao, endereco, cpfadm, password} = req.body;
    const prisma = new PrismaClient();
    try{
        const resultset = await prisma.terminal.create({
            data:{      
                user: username,
                descricao: descricao,
                endereco: endereco,
                admin: cpfadm,
                password: password 
            }
        })

        res.status(201).json({resultset});
    }
    catch{
        res.status(409).send("Erro ao tentar cadastra terminal");
    }
    finally{
        prisma.$disconnect();
    }
    
    
}

export async function CreateCliente(req: Request, res: Response){

    const{cnpj, nomecliente, telefone} = req.body;
    const prisma = new PrismaClient();

    try{
        const resultset = await prisma.cliente.create({
            data:{
                cnpj: parseInt(cnpj),
                nome: nomecliente,
                telefone: parseInt(telefone)          
            }
        })

    res.status(201).json(resultset);
    
    }catch(err){
        res.status(409).send("erro ao tentar cadastrar o cliente");
    }
    finally{
        prisma.$disconnect();
    }
    
}