import { mixin_extend } from '../utils'
import BaseMixin from '../mixins/base'

export default class Base {

  constructor () {
    this._setup()
  }

}

mixin_extend(Base.prototype, BaseMixin)
