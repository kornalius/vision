import { h } from '../utils'
import theme from '../themes/index'
import Frame from './frame.jsx'

export default class Titlebar extends Frame {

  style () {
    return this.mergeStyles(super.style(), {
      root: {
        background: theme.browser.titlebar.background,
        color: theme.browser.titlebar.color,
        height: theme.browser.titlebar.height || 32,
        minHeight: theme.browser.titlebar.height || 32,
        maxHeight: theme.browser.titlebar.height || 32,
        borderBottom: '1px solid ' + theme.browser.titlebar.border,
        fontSize: theme.browser.titlebar.fontSize,

        '& #title': {
          fontFamily: theme.browser.titlebar.font,
          fontSize: theme.browser.titlebar.fontSize,
          fontWeight: theme.browser.titlebar.fontWeight,
        },

        '& #buttons': {
          fontSize: theme.browser.titlebar.buttonSize,
        },

        '& #icon': {
          fontSize: theme.browser.titlebar.iconSize,
        }
      }
    })
  }

  render ({ icon, children }) {
    return <div class='flex-center p1'>
        <div class="flex flex-auto flex-center">
          <span id='icon' class={ icon ? 'ic-' + icon : '' }></span>
          <span id='title' class='ml1'>{ children }</span>
        </div>
        <div id='buttons' class='flex flex-center'>
          <div class='btn btn-small'><span id='expand' class='ic-terminal'></span></div>
          <div class='btn btn-small'><span id='close' class='ic-x'></span></div>
        </div>
      </div>
  }

}
