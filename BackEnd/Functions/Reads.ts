import {Request, Response} from 'express'
import {PrismaClient} from '@prisma/client'

export async function ReadManyEncomendas(req: Request, res: Response){
    
    const prisma = new PrismaClient();
   
    try{
        const resultset = await prisma.encomenda.findMany();

        if(resultset !== null && resultset !== undefined)
        {
            res.status(200).json(resultset);
        }
        else{
            res.status(404).send("Lista vazia nenhuma encomenda encontrado");
        }
    }
    catch{
        res.status(500).send("Erro do servidor");
    }
    finally{
        prisma.$disconnect();
    }
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export async function ReadOneEncomenda(req: Request, res: Response)
{
    const { id } = req.params;
    const prisma = new PrismaClient();

    try{
        const resultset = prisma.encomenda.findUnique({
            where:{
                id_encomenda: parseInt(id)
            }
        })

        if(resultset !== null && resultset !== undefined)
        {
            res.status(200).json(resultset);
        }
        else{
            res.status(404).send("Encomenda não encontrado");
        }
    }
    catch{
        res.status(500).send("Erro do servidor");
    }
    finally{
        prisma.$disconnect();
    }
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export async function ReadManyTerminals(req: Request, res: Response){
    
    const prisma = new PrismaClient()
    try{
        const resultset = await prisma.terminal.findMany();

        if(resultset !== null && resultset !== undefined)
        {
            res.status(200).json(resultset);
        }
        else{
            res.status(404).send("Lista vazia! nenhum terminal encontrado...");
        }
        
    }
    catch{
        res.status(500).send("Erro de servidor");
    }
    finally{
        prisma.$disconnect();
    }
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export async function ReadOneTerminal(req: Request, res: Response)
{
    const {id} = req.params
    const prisma = new PrismaClient();

    try{

        const resultset = await prisma.terminal.findUnique({
            where:{
                id_terminal: parseInt(id)
            }
        })

        if(resultset !== null && resultset !== undefined)
        {
            res.status(200).json(resultset);
        }
        else{
            res.status(404).send("Terminal não encontrado");
        }
    }
    catch{
        res.status(500).send("Erro de servidor");
    }
    finally{
        prisma.$disconnect()
    }

}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export async function ReadManyClients(req: Request, res: Response){
    
    const prisma = new PrismaClient();

    try{

        const resultset = await prisma.cliente.findMany();

        if(resultset !== null && resultset !== undefined)
        {
            res.status(200).json(resultset);
        }
        else{
            res.status(404).send("Lista de clientes vazia...");
        }
    }
    catch{
        res.status(500).send("Erro de servidor...");
    }
    finally{
        prisma.$disconnect();
    }
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export async function ReadOneClient(req: Request, res: Response)
{
    const {id} = req.params

    const prisma = new PrismaClient();

    try{
        const resultset = await prisma.cliente.findUnique({
            where:{
                cnpj: parseInt(id)      
            }
        })

        if(resultset !== null && resultset !== undefined)
        {
            res.status(200).json(resultset);
        }
        else{
            res.status(404).send("Cliente não encontrado");
        }
    }
    catch{
        res.status(500).send("Erro do servidor");
    }
    finally{
        prisma.$disconnect();
    }
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export async function ReadOneEncomendaStatus(req: Request, res: Response){
    const {id} = req.params
    const prisma = new PrismaClient();

    try{
        const resultset = await prisma.status.findMany({
            where:{
                encomenda: parseInt(id)
            }
        })

        if(resultset !== null && resultset !== undefined)
        {
            res.status(200).json(resultset);
        }
        else{
            res.status(404).send("Consulta não encontrada");
        }
    }
    catch{
        res.status(500).send("Erro do servidor");
    }
    finally{
        prisma.$disconnect();
    }
}