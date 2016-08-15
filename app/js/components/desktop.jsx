import { h } from '../utils'
import theme from '../themes/index'
import Frame from './frame.jsx'

export default class Desktop extends Frame {

  style () {
    return this.mergeStyles(super.style(), {
      root: {
        cursor: 'default',

        '-webkit-touch-callout': 'none',
        '-webkit-user-select': 'none',
        'user-select': 'none',

        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,

        padding: 4,

        background: theme.desktop.background,
        color: theme.desktop.color,

        fontFamily: theme.desktop.font,
        fontSize: theme.desktop.fontSize,
      }
    })
  }

  render ({ children }) {
    return <div class='flex-column'>
        { children }
      </div>
  }

}
