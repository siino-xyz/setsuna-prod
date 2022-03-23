import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: 'kp822wg687',
  apiKey: process.env.MICROCMS_API_KEY
})