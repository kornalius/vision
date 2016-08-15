import { h } from '../utils'
import Frame from './frame.jsx'
const CodeMirror = require('codemirror')

export default class Text extends Frame {

  // componentWillReceiveProps (nextProps) {
  //   super.componentWillReceiveProps(nextProps)
  //   this.defer(() => {
  //     if (this._cm && !_.isUndefined(nextProps.text) && this._cm.getValue() !== nextProps.text) {
  //       this._cm.setValue(nextProps.text)
  //     }
  //     if (_.isObject(nextProps.options)) {
  //       for (let optionName in nextProps.options) {
  //         if (nextProps.options.hasOwnProperty(optionName)) {
  //           this._cm.setOption(optionName, nextProps.options[optionName])
  //         }
  //       }
  //     }
  //   })
  // }

  componentDidMount () {
    super.componentDidMount(...arguments)
    this._cm = CodeMirror(this.element)
    this._cm.on('change', this.textChanged.bind(this))
    // this._cm.on('focus', this.focusChanged.bind(this, true))
    // this._cm.on('blur', this.focusChanged.bind(this, false))
    this._cm.setValue(this.props.default || this.props.text || '')
  }

  textChanged (doc, change) {
    if (this.props.onChange) {
      this.props.onChange(doc.getValue())
    }
  }

  style () {
    return this.mergeStyles(super.style(), {
      root: {
        display: 'block',
        width: '400px',
        height: '200px',
        '& .CodeMirror': {
          height: '100%',
        }
      }
    })
  }

  render () {
    return <div></div>
  }

}
