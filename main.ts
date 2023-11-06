import { Application, Router } from 'https://deno.land/x/oak@v12.6.1/mod.ts'
import anime from './routes/anime.ts'

const app = new Application()
const router = new Router()

router.use('/api', anime.routes())
router.use('/api', anime.allowedMethods())

app.use(router.routes())
app.use(router.allowedMethods())

app.use((ctx) => {
  ctx.response.body = 'WELCOME TO THIS API!'
})

await app.listen({ port: 8000 })
