import { generateHonoObject } from "hono-do";

export const rateLimiter = generateHonoObject("*", async (app, state) => {
  const { storage } = state;
});
