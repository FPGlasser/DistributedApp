import {Request, Response, NextFunction} from 'express'

export async function serverAccessAuthorization(req: Request, res: Response, next: NextFunction){
    next();
}

export async function AdmAuthorization(req: Request, res: Response, next: NextFunction ){
    console.log("Adm authenticated");
    next();
}

export async function TerminalAthorization(req: Request, res: Response, next: NextFunction){
    next();
}

export async function AdmAndTerminalAuthorization(req: Request, res: Response, next: NextFunction){
    next();
}