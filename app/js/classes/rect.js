import { mixin } from '../utils'
import Base from './base'
import RectMixin from '../mixins/rect'

export default class Rect extends mixin(Base, RectMixin) {

  constructor (x = 0, y = 0, w = 0, h = 0) {
    super()
    if (x instanceof Rect) {
      this.x = x.x
      this.y = x.y
      this.w = x.w
      this.h = x.h
    }
    else {
      this.x = x
      this.y = y
      this.w = w
      this.h = h
    }
  }

}

Rect.constructor.prototype.fromArray = a => { return new Rect(a[0], a[1], a[2], a[3]) }
