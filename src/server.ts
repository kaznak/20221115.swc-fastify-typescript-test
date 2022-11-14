import fastify from 'fastify'

// initiate fastify
const server = fastify({
    logger: true
})


// 1. ecosystem plugins
// https://github.com/fastify/fastify-sensible
server.register(import('@fastify/sensible'))
// 2. project plugins
// 3. decorators
// 4. hooks
// 5. project services
server.register(import('./route/helloWorld'))

// start the server
server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    server.log.error(err, "an error occurs.")
    process.exit(1)
  }
})
