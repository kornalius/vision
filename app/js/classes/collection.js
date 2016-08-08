import { _, mixin } from '../utils'
import Base from './base'
import CollectionMixin from '../mixins/collection'

export default class Collection extends mixin(Base, CollectionMixin) {

  constructor (name) {
    super()
    if (_.isString(name)) {
      this.$open(name)
    }
  }

}
