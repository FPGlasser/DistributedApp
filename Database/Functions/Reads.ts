import {Request, Response} from 'express'
import {PrismaClient} from '@prisma/client'

export async function ReadManyEncomendas(req: Request, res: Response){
    const prisma = new PrismaClient();

    const resultset = await prisma.encomenda.findMany();   
    res.status(200).json(resultset);
}

export async function ReadOneEncomenda(req: Request, res: Response){
    const { id } = req.params;
    const prisma = new PrismaClient();

    const resultset = prisma.encomenda.findUnique({
        where:{
            id_encomenda: parseInt(id)
        }
    })

    res.status(200).json(resultset);
}

export async function ReadManyTerminals(req: Request, res: Response){
    
    const prisma = new PrismaClient()
    const resultset = await prisma.terminal.findMany();

    res.status(200).json(resultset);
}

export async function ReadOneTerminal(req: Request, res: Response){
    const {id} = req.params
    const prisma = new PrismaClient();

    const resultset = await prisma.terminal.findUnique({
        where:{
            id_terminal: parseInt(id)
        }
    })
}

export async function ReadManyClients(req: Request, res: Response){
    const prisma = new PrismaClient();
    
    const resultset = await prisma.cliente.findMany();

    res.status(200).json(resultset);
}

export async function ReadOneClients(req: Request, res: Response){
    const {id} = req.params

    const prisma = new PrismaClient();
    const resultset = await prisma.cliente.findUnique({
        where:{
            id: parseInt(id)      
        }
    })
}

export async function ReadOneEncomendaStatus(req: Request, res: Response){
    const {id} = req.params
    const prisma = new PrismaClient();
    const resultset = await prisma.status.findMany({
        where:{
            encomenda: parseInt(id)
        }})
    
    res.status(200).json(resultset);
}