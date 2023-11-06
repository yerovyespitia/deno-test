import { Router } from 'https://deno.land/x/oak@v12.6.1/mod.ts'

const router = new Router()

router.get('/anime', (ctx) => {
  ctx.response.body = `/API/ANIME ROUTE`
})

export default router
