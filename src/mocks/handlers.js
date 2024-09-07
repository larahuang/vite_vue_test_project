//模擬 HTTP 請求
import { http, HttpResponse } from 'msw'
const api = "https://api.agify.io/";
export const restHandlers = [
   http.get(api, (req, res, ctx) =>
   {
      const query = {
           age: 55,
            name: "tope"
      }
      console.log('ctx.json',ctx.json([ query]))
      return res(ctx.status(200), ctx.json([
        query
      ]))
   }),
]
