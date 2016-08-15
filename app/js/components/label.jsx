import { h } from '../utils'
import Frame from './frame.jsx'

export default class Label extends Frame {

  // componentWillReceiveProps (nextProps) {
  //   super.componentWillReceiveProps(nextProps)
  // }

  // componentDidMount () {
    // super.componentDidMount()
  // }

  // componentWillUnmount () {
  //   super.componentWillUnmount()
  // }

  // valueChanged (doc, change) {
    // if (this.props.onChange && change.origin !== 'setValue') {
      // this.props.onChange(doc.getValue())
    // }
  // }

  style () {
    return this.mergeStyles(super.style(), {
      root: {
      }
    })
  }

  render ({ children }) {
    return <span>{ children }</span>
  }

}
