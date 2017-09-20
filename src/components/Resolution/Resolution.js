// @flow

import { Component } from 'react'
import {
  Dimensions,
  PixelRatio,
  Platform,
  StatusBar,
  View,
} from 'react-native'

const resolutionProps = {}

export default class Resolution extends Component {

  static get(fixedWidth: boolean = true): Object {
    return fixedWidth ? { ...resolutionProps.fw } : { ...resolutionProps.fh }
  }

  static setProps(designWidth: number = 375, designHeight: number = 667, dim: string = 'window'): void {
    const designSize = {
      width: designWidth,
      height: designHeight,
    }
    const statusBarHeight = 0
    const pixelRadio: number = PixelRatio.get()
    let { width, height }: Object = Dimensions.get(dim)
    if(dim !== 'screen') {
      height = height - statusBarHeight
    }
    const widthPixel: number = PixelRatio.getPixelSizeForLayoutSize(width)
    const heightPixel: number = PixelRatio.getPixelSizeForLayoutSize(height)

    const fwDesignScale: number = designSize.width / widthPixel
    const fwWidth: number = designSize.width
    const fwHeight: number = heightPixel * fwDesignScale
    const fwScale: number = 1 / pixelRadio / fwDesignScale

    const fhDesignScale: number = designSize.height / heightPixel
    const fhWidth: number = widthPixel * fhDesignScale
    const fhHeight: number = designSize.height
    const fhScale: number = 1/ pixelRadio / fhDesignScale

    resolutionProps.fw = { width: fwWidth, height: fwHeight, scale: fwScale, statusBarHeight }
    resolutionProps.fh = { width: fhWidth, height: fhHeight, scale: fhScale, statusBarHeight }
  }

  static FixedWidthView = (props: { children: Object }) => {
    const { width, height, scale, statusBarHeight } = resolutionProps.fw
    return (
      <View
        {...props}
        style={{
          marginTop: statusBarHeight,
          width: width,
          height: height,
          backgroundColor: 'transparent',
          transform: [
            { translateX: -width * .5 },
            { translateY: -height * .5 },
            { scale: scale },
            { translateX: width * .5 },
            { translateY: height * .5 },
          ],
        }}
      >
        {props.children}
      </View>
    )
  }

  static FixedHeightView = (props: { children: Object }) => {
    const { width, height, scale, statusBarHeight } = resolutionProps.fh
    return (
      <View
        {...props}
        style={{
          marginTop: statusBarHeight,
          width: width,
          height: height,
          backgroundColor: 'transparent',
          transform: [
            { translateX: -width * .5 },
            { translateY: -height * .5 },
            { scale: scale },
            { translateX: width * .5 },
            { translateY: height * .5 },
          ],
        }}
      >
        {props.children}
      </View>
    )
  }
}
// Resolution init
Resolution.setProps()
