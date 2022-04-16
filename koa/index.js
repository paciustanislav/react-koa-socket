
const koa = require( 'koa' )
const koaSocket = require( 'koa-socket-2' )
const koaCors = require( '@koa/cors' )

const port = 4001
const app = new koa()
const io = new koaSocket({
	ioOptions: {
		cors: {
			origin: '*'
		}
	}
})

io.attach( app )

io.use( async ( ctx, next ) => {
	await next()
})

io.on( 'message', async ( ctx, data ) => console.log( 'client sent data to message endpoint', data ) )

app.use( koaCors() )
app.use( ctx => ctx.body = { success: true } )
app.listen( port, () => console.log( `http server listen on port: ${port}` ) )
