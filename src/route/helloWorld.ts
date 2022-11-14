import { FastifyInstance, RouteOptions } from 'fastify'

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
export async function helloWorld(fastify: FastifyInstance, options: RouteOptions) {
    fastify.get('/', async (request, reply) => {
      return { hello: 'world' }
    })

    fastify.post(
      '/',
      {
        schema: {
          body: {
            type: 'object',
            properties: {
              someKey: { type: 'string' },
              someOtherKey: { type: 'number' }
            }
          }
        }
      },
      async (request, reply) => {
        return { hello: 'world', req: request.body }
      })
  }

export default helloWorld
