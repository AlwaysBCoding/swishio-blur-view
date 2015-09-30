'use strict'

var React = require('react-native')
var PropTypes = require('ReactPropTypes')
var ReactNativeViewAttributes = require('ReactNativeViewAttributes')
var createReactNativeComponentClass = require('createReactNativeComponentClass')
var NativeMethodsMixin = require('NativeMethodsMixin')

var { View, requireNativeComponent, PropTypes, NativeModules } = React

var BLUR_REF = "BLUR"

var BlurView = React.createClass({

  propTypes: {
    blurType: PropTypes.string,
  },

  getDefaultProps() {
    return {
      blurType: "light",
    }
  },

  setNativeProps(props) {
    this.refs[BLUR_REF].setNativeProps(props)
  },

  render() {
    var nativeProps = Object.assign({}, this.props, {style: this.props.style})

    return (
      <View
        {... nativeProps}
        ref={BLUR_REF}
        blurType={this.props.blurType}>

      {this.props.children}

      </View>
    )
  }
})

// var SwishBlurView = requireNativeComponent('SwishBlurView', BlurView)

module.exports = BlurView
