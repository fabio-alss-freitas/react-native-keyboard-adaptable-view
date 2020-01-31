import React, { PureComponent } from "react"
import { Dimensions, Keyboard, ScrollView, StyleSheet } from "react-native"

const { width, height } = Dimensions.get("window")

class KeyboardAdaptableView extends PureComponent {
  heights = {}

  constructor(props) {
    super(props)

    this.state = {
      paddingBottom: 0
    }
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this.keyboardDidShow
    )
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this.keyboardDidHide
    )
  }

  keyboardDidShow = e => {
    this.setState({
      paddingBottom: e.endCoordinates.height + 35
    })
  }

  keyboardDidHide = () => {
    this.setState({ paddingBottom: 0 })
  }

  handleOnFocus = (ref, event) => {
    const height = this.heights[ref]
    if (height != null) {
      setTimeout(() => {
        this.scrollView.scrollTo({
          y: height - 100,
          animated: true
        })
      }, 100)
    }
  }

  updateChildren = () => {
    const { children } = this.props

    return React.Children.map(children, (child, index) => {
      if (
        child != null &&
        child.props != null &&
        child.props.adjustOnKeyboardShow
      ) {
        return React.cloneElement(child, {
          onFocus: event => this.handleOnFocus(`adjust_${index}`, event),
          ref: r => {
            this[`adjust_${index}`] = r
          },
          onLayout: ({
            nativeEvent: {
              layout: { x, y, width, height }
            }
          }) => {
            setTimeout(() => {
              this.heights[`adjust_${index}`] = y
            }, 100)
          }
        })
      } else {
        return child
      }
    })
  }

  render() {
    const { paddingBottom } = this.state
    const { style, contentContainerStyle } = this.props

    return (
      <ScrollView
        ref={r => {
          this.scrollView = r
        }}
        {...this.props}
        style={{ ...styles.container, ...style }}
        contentContainerStyle={{
          ...styles.content,
          ...contentContainerStyle,
          ...{ paddingBottom }
        }}
      >
        {this.updateChildren()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: { width, height },
  content: {
    flexGrow: 1
  }
})

export default KeyboardAdaptableView
