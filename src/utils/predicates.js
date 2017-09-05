import { PixelRatio } from 'react-native'
import { contains } from 'ramda'

export const isEnv = (...environmentStrings) =>
  contains(process.env.NODE_ENV)(environmentStrings)

export const pixel = 1 / PixelRatio.get()
