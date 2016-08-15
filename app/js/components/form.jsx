import { h } from '../utils'
import Frame from './frame.jsx'

export default class Browser extends Frame {

  getInitialState () { return { resolved: false, data: null } }

  componentWillReceiveProps (nextProps) {
    super.componentWillReceiveProps(nextProps)
    let c = nextProps.collection
    let q = nextProps.query
    debugger;
    if (c && q) {
      this.setState({ resolved: false, data: null })
      q.on('update', result => this.setState({ resolved: true, data: result }))
      this._executeQuery(q)
    }
  }

  _executeQuery (q) {
    this.setState({ resolved: false, data: null })
    if (q) {
      q.exec().then(result => this.setState({ resolved: true, data: result }))
    }
  }

  render ({ children }, state) {
    return super.render({ children }, state)
  }

}
