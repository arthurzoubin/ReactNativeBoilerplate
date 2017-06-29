import { contains } from 'ramda'

export const isEnv = (...environmentStrings) =>
  contains(process.env.NODE_ENV)(environmentStrings)
