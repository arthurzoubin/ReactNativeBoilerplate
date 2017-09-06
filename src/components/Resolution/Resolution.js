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

  static get(fixedWidth = true) {
    return fixedWidth ? { ...resolutionProps.fw } : { ...resolutionProps.fh }
  }

  static setProps(designWidth = 375, designHeight = 667, dim = 'window') {
    const designSize = {
      width: designWidth,
      height: designHeight,
    }
    const statusBarHeight = 0
    const pixelRadio = PixelRatio.get()
    let { width, height } = Dimensions.get(dim)
    if(dim !== 'screen') {
      height = height - statusBarHeight
    }
    const widthPixel = PixelRatio.getPixelSizeForLayoutSize(width)
    const heightPixel = PixelRatio.getPixelSizeForLayoutSize(height)

    const fwDesignScale = designSize.width / widthPixel
    const fwWidth = designSize.width
    const fwHeight = heightPixel * fwDesignScale
    const fwScale = 1 / pixelRadio / fwDesignScale

    const fhDesignScale = designSize.height / heightPixel
    const fhWidth = widthPixel * fhDesignScale
    const fhHeight = designSize.height
    const fhScale = 1/ pixelRadio / fhDesignScale

    resolutionProps.fw = { width: fwWidth, height: fwHeight, scale: fwScale, statusBarHeight }
    resolutionProps.fh = { width: fhWidth, height: fhHeight, scale: fhScale, statusBarHeight }
  }

  static FixedWidthView = props => {
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

  static FixedHeightView = props => {
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
