import { h } from '../utils'
import Frame from './frame.jsx'
import Inputs from './inputs.jsx'
import Titlebar from './titlebar.jsx'
import Statusbar from './statusbar.jsx'

export default class Browser extends Frame {

  style () {
    return this.mergeStyles(super.style(), {
      root: {
        cursor: 'default',

        '-webkit-touch-callout': 'none',
        '-webkit-user-select': 'none',
        'user-select': 'none',

        justifyContent: 'space-between',
        border: '1px solid #777',
        background: '#fcfcfc',
        height: '30em',
        margin: 4,
      }
    })
  }

  render ({ title, children }) {
    return <div class='flex-column flex-grow'>

        <Inputs class='row flex-start'></Inputs>

        <Titlebar id='title' class='row flex-start' text={ title || 'Untitled' }></Titlebar>

        <div id='content' class='row flex-stretch overflow-auto'>
          { children }
        </div>

        <Statusbar id='status' class='row flex-end' text='100%|Modified|Spaces:2'></Statusbar>

      </div>
  }

}
