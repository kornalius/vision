import { h, uuid } from '../utils'
import Frame from './frame.jsx'

export default class Slot extends Frame {

  constructor (state) {
    super(state)
    _.extend(this.state, {
      id: uuid.v4(),
      lib_id: null,
      value: null,
      comment: null,
      ref: null,
    })
  }

  style () {
    return _.merge({}, super.style(), {
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

  render ({ data, children }) {
    return <div>
      { data ? { children } : <span id='text' class='row center'>Add...</span> }
    </div>
  }

}
