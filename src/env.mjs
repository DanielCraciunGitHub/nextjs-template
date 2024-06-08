import { createEnv } from "@t3-oss/env-nextjs"
import dotenv from "dotenv"
import { z } from "zod"

dotenv.config({ path: ".env.local" })

export const env = createEnv({
  client: {},
  server: {
    UPSTASH_REDIS_REST_URL: z.string().min(1),
    UPSTASH_REDIS_REST_TOKEN: z.string().min(1),

    NODEMAILER_EMAIL: z.string(),
    NODEMAILER_PASSWORD: z.string(),

    AUTH_SECRET: z.string().min(1),
    AUTH_GOOGLE_ID: z.string().min(1),
    AUTH_GOOGLE_SECRET: z.string().min(1),

    TURSO_AUTH_TOKEN: z.string().min(1),
    TURSO_DATABASE_URL: z.string().min(1),
  },
})
