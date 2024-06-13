import { authRouter } from "./routers"
import { router } from "./trpc"

export const appRouter = router({
  authRouter,
})

export type AppRouter = typeof appRouter
