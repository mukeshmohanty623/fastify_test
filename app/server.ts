import app from './app'


const fastify = app({
  ignoreTrailingSlash: true,
  logger: true,
})


fastify.listen(4000, '0.0.0.0', (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
 
export default fastify
