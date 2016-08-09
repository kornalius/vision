import { h } from '../utils'

import BaseElement from '../classes/base-element'

export default class Test extends BaseElement {

  getInitialState () { return { count: 0 } }

  destroy () {
    super.destroy()
    this.clearChildren()
  }

  componentDidMount () {
    super.componentDidMount()
    this.timer = setInterval(() => { this.setState({ count: this.state.count + 1 }) }, 1000)
  }

  componentWillUnmount () {
    super.componentWillUnmount()
    clearInterval(this.timer)
  }

  style () {
    return this.mergeStyles(super.style(), {
      root: {
        '& span': {
          fontSize: 20,
          fontFamily: 'Helvetica'
        },
        '& .test': {
          color: 'red',
        }
      }
    })
  }

  render (props, { count }) {
    return <div>
        <span>Preact Element, Works! <span class='test'>{ count }</span></span>
      </div>
  }

}
