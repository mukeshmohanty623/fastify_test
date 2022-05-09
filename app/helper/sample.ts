import { FastifyReply, FastifyRequest } from "fastify";
import { fetchDomainName } from "../database/getPortal";

export function add(a:number,b:number){
    return a+b;
}

export async function summa(req: FastifyRequest,
    _reply: FastifyReply,){
    let header = req.headers.host;
    console.log(header);
    let res = await fetchDomainName(1,2,112);
    console.log(res);
    return {"a":"b","b":"c"}
    
}