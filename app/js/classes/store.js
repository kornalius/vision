import { _, mixin_extend, uuid } from '../utils'
import Freezer from 'freezer-js'
import jsonQuery from 'json-query'
import BaseMixin from '../mixins/base'

export default class Store {

  constructor () {
    this._setupBase()

    this._collections = {}
  }

  get collections () { return this._collections }

  addCollection (name, data = {}) {
    this._collections[name] = new Freezer(data)
    let c = this.collection(name)
    c.on('update', (currentState, prevState) => {
      console.log('I was updated', prevState, currentState)
    })
  }

  removeCollection (name) {
    delete this._collections[name]
  }

  collection (name) { return this._collections[name] }

  get (name, id = null) {
    let c = this.collection(name)
    if (c) {
      let r = c.get()
      return id ? r[id] : r
    }
    return null
  }

  set (name, value) {
    let r = this.get(name)
    return r ? r.set(value) : null
  }

  toArray (name) {
    let l = []
    let r = this.get(name)
    if (r) {
      for (let id in r) {
        l.push(_.extend({}, r, { id }))
      }
    }
    return l
  }

  toJS (name) {
    let r = this.get(name)
    return r ? r.toJS() : null
  }

  find (name, fn) {
    let r = this.get(name)
    if (r) {
      if (_.isString(fn)) {
        let res = jsonQuery(fn, { data: r })
        return res.map(i => _.extend({}, i.value, { id: i.key }))
      }
      for (let id in r) {
        if (fn(r, id)) {
          return _.extend({}, r, { id })
        }
      }
    }
    return null
  }

  findAll (name, fn) {
    let l = []
    let r = this.get(name)
    if (r) {
      if (_.isString(fn)) {
        let res = jsonQuery(fn, { data: r })
        return res.map(i => _.extend({}, i.value, { id: i.key }))
      }
      for (let id in r) {
        if (fn(r, id)) {
          l.push(_.extend({}, r, { id }))
        }
      }
    }
    return l
  }

  findById (name, id) {
    let r = this.get(name)
    return r ? r[id] : null
  }

  insert (name, value) {
    let r = this.get(name)
    if (r) {
      r.set(uuid.v4(), value)
    }
    return this
  }

  update (name, id, value) {
    let r = this.findById(name, id)
    if (r) {
      r.set(id, value)
    }
    return this
  }

  remove (name, id) {
    let r = this.get(name)
    if (r) {
      r.remove(id)
    }
    return this
  }

}

mixin_extend(Store.prototype, BaseMixin)
