import { mixin } from '../utils'
import Base from './base'
import SizeMixin from '../mixins/size'

export default class Size extends mixin(Base, SizeMixin) {

  constructor (w = 0, h = 0) {
    super()
    if (w instanceof Size) {
      this.w = w.w
      this.h = w.h
    }
    else {
      this.w = w
      this.h = h
    }
  }

}

Size.constructor.prototype.fromArray = a => { return new Size(a[0], a[1]) }
