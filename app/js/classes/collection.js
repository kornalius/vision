import { mixin_extend } from '../utils'

import BaseMixin from '../mixins/base'

import MarsCollection from 'marsdb'
import LocalForageManager from 'marsdb-localforage'
MarsCollection.defaultStorageManager(LocalForageManager)

export default class Collection extends MarsCollection {

}

mixin_extend(Collection.prototype, BaseMixin)
