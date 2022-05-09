import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import {summa} from '../helper/sample'

export default async function userController(fastify: FastifyInstance) {
    fastify.get("/", async (_req: FastifyRequest, reply: FastifyReply) => {
        reply.send('Hii Test');
    })
    fastify.get("/enroll", async (req: FastifyRequest, reply: FastifyReply) => {
        await summa(req,reply);
        reply.send('Hii Test');
    })
}