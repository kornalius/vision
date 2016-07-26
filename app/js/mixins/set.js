export default {

  init () {
    this._valids = {}
    this._sets = {}
  },

  get sets () { return this._sets },
  get hasSets () { return Object.keys(this._sets).length > 0 },

  isSet (name) { return this._sets[name] !== undefined },

  validSet (name) { return this._valids[name] !== undefined },

  addValidSet (...names) {
    for (let name of names) {
      this._valids[name] = true
    }
    return this
  },

  set (...names) {
    for (let name of names) {
      if (this.validSet(name) && !this.isSet(name)) {
        this._sets[name] = true
        Object.defineProperty(this, name, {
          enumerable:   true,
          configurable: true,
          // writable:     true,
          get:          () => { return this.isSet(name) },
          set:          value => {
            if (!value) {
              this.unset(name)
            }
          },
        })
      }
    }
    return this
  },

  unset (...names) {
    for (let name of names) {
      if (this.validSet(name) && this.isSet(name)) {
        delete this._sets[name]
        delete this[name]
      }
    }
    return this
  },

  toggle (...names) {
    for (let name of names) {
      if (this.validSet(name)) {
        if (this.isSet(name)) {
          this.unset(name)
        }
        else {
          this.set(name)
        }
      }
    }
    return this
  },

  clearSets () {
    for (let name of Object.keys(this._sets)) {
      this.unset(name)
    }
    return this
  },

}
