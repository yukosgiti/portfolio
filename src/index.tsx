import { Hono } from 'hono'

const app = new Hono()

const Page = <div>Hello Hono! How are you?</div>

app.get('/', (c) => {
  return c.html(Page)
}).get('/hello', (c) => {
  return c.text('Hello Hono!')
})

export default app
