import { h } from '../utils'
import theme from '../themes/index'
import Frame from './frame.jsx'

export default class Statusbar extends Frame {

  style () {
    return this.mergeStyles(super.style(), {
      root: {
        background: theme.browser.statusbar.background,
        color: theme.browser.statusbar.color,
        height: theme.browser.statusbar.height || 22,
        minHeight: theme.browser.statusbar.height || 22,
        maxHeight: theme.browser.statusbar.height || 22,
        borderTop: '1px solid ' + theme.browser.statusbar.border,

        justifyContent: 'space-between',

        '& .section': {
          margin: '0 4px',
          fontFamily: theme.browser.statusbar.font,
          fontSize: theme.browser.statusbar.fontSize,
          fontWeight: theme.browser.statusbar.fontWeight,
        }
      }
    })
  }

  render ({ text }) {
    return <div class='flex-center'>
        { text.split('|').map(i => <span class='section'>{ i }</span>) }
      </div>
  }

}
