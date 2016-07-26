import { mixin } from '../utils'

import SizeMixin from '../mixins/size'

class S {}

export default class Size extends mixin(S, SizeMixin) {

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
