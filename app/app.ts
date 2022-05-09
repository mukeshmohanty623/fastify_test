import fastify from 'fastify'
import router from "./routes/home";
import fastifyPostgres from "@fastify/postgres";
import {ENV} from '../env'

export default function build(opts={}){
	const app = fastify(opts);
	app.register(fastifyPostgres, {
		connectionString: `postgres://${ENV.db.user}:${ENV.db.userPassword}@${ENV.db.host}:${ENV.db.port}/${ENV.db.name}`,
	  });
	app.register(router);
	return app;
};
