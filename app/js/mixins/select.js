export default {

  init () {
    this._selected = false
  },

  get selected () { return this._selected },
  set selected (value) {
    if (_.isFunction(this.emit)) {
      this.emit('object.' + value ? 'select' : 'unselect')
    }
    this._selected = value
  },

  select (selected) {
    this.selected = selected
    return this
  },

  toggleSelect () {
    this.selected = !this.selected
    return this
  },

}
