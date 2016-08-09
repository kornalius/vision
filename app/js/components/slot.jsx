import { h } from '../utils'
import Frame from './frame.jsx'

export default class Slot extends Frame {

  style () {
    return this.mergeStyles(super.style(), {
      root: {
        background: '#eee',
        minHeight: '1em',
        maxHeight: '1em',
        overflowY: 'auto',
        border: '1px dashed #888',
        borderRadius: 8,
        padding: 4,
        marginBottom: 2,

        '& #text': {
          fontFamily: 'Helvetica',
          color: '#888',
        }
      }
    })
  }

  render ({ children }) {
    return <div>
        { children }
      </div>
  }

}
