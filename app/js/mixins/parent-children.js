export default {

  init () {
    this._parent = null
    this._children = []
  },

  shut () {
    this.forEach((c) => {
      c.destroy()
    })
    this.clearChildren()
  },

  get parent () { return this._parent },
  set parent (value) { this._parent = value },

  get children () { return this._children },
  set children (value) { this._children = value },

  get hasParent () { return this._parent !== null },
  get hasChildren () { return this._children.length > 0 },

  root () {
    let p = this._parent
    while (p._parent) {
      p = p._parent
    }
    return p
  },

  clearChildren () {
    this.forEach((child, idx) => { child.emit('object.remove', idx) })
    this._children = []
    return this
  },

  appendChild (c) {
    this._children.push(c)
    this.emit('object.append', c)
    return this
  },

  insertAt (idx, c) {
    if (idx >= 0 && idx < this._children.length - 1) {
      this._children.splice(idx, 0, c)
      this.emit('object.insert', c, idx)
    }
    else if (idx === this._children.length - 1) {
      this.appendChild(c)
    }
    return this
  },

  removeAt (idx) {
    if (idx >= 0 && idx < this._children.length) {
      this._children.splice(idx, 1)
      this.emit('object.delete', idx)
    }
    return this
  },

  insertBefore (before, c) {
    return this.insertAt(this._children.indexOf(before), c)
  },

  insertAfter (after, c) {
    return this.insertAt(this._children.indexOf(after) + 1, c)
  },

  removeChild (c) {
    return this.removeAt(this._children.indexOf(c))
  },

  childIndex (c) {
    return this._children.indexOf(c)
  },

  hasChild (c) {
    return this._children.indexOf(c) !== -1
  },

  forEach (cb) {
    let len = this._children.length
    for (let idx = 0; idx < len; idx++) {
      cb.call(this, this._children[idx], idx)
    }
    return this
  },

}
