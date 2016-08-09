import { h } from '../utils'
import Frame from './frame.jsx'
import Slot from './slot.jsx'

export default class Inputs extends Frame {

  style () {
    return this.mergeStyles(super.style(), {
      root: {
        flex: 'none',
        minHeight: '1em',
        maxHeight: '10em',
        overflowY: 'auto',
        margin: '2px 2px 0px 2px',
      }
    })
  }

  render ({ slots }) {
    return <div class='flex-column'>
        { slots ? slots.map(s => <Slot class='row flex-start' data={ s }></Slot>) : null }
        <Slot class='row'></Slot>
      </div>
  }

}
