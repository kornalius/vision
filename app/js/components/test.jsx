import { h, mixin } from '../utils'

import BaseElement from '../classes/base-element'

import ParentChildren from '../mixins/parent-children'

export default class Test extends mixin(BaseElement, ParentChildren) {

  constructor () {
    super({ count: 0 })
  }

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

  // shouldComponentUpdateStylesheet () {
    // return true
  // }

  render (props, state) {
    return <div>
             <span>Preact Element, Works! <span class='test'>{ state.count }</span></span>
           </div>
  }

}
