import { authRouter } from "./routers/authRouter"
import { router } from "./trpc"

export const appRouter = router({
  authRouter,
})

export type AppRouter = typeof appRouter
