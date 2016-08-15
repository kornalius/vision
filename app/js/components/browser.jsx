import { h } from '../utils'
import theme from '../themes/index'
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
        height: '30em',
        margin: 4,

        border: '1px solid ' + theme.browser.border,
        background: theme.browser.background,
        color: theme.browser.color,

        fontFamily: theme.browser.font,
        fontSize: theme.browser.fontSize,
        fontWeight: theme.browser.fontWeight,
      }
    })
  }

  render ({ icon, title, shadow, children }) {
    return <div class={ 'flex-column flex-grow' + (shadow ? ' shadow-3' : '') }>

        <Titlebar id='title' class='row flex-start' icon={ icon }>{ title || 'Untitled' }</Titlebar>

        <div id='content' class='row flex-stretch overflow-auto'>
          { children }
        </div>

        <Statusbar id='status' class='row flex-end' text='100%|Modified|Spaces:2'></Statusbar>

      </div>
  }

}
