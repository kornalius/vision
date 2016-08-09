import { mixin } from '../utils'
import Base from './base'
import RangeMixin from '../mixins/range'

export default class Range extends mixin(Base, RangeMixin) {

  constructor (start = 0, end = 0) {
    super()
    if (start instanceof Range) {
      this.start = start.start
      this.end = start.end
    }
    else {
      this.start = start
      this.end = end
    }
  }

}

Range.constructor.prototype.fromArray = a => { return new Range(a[0], a[1]) }
