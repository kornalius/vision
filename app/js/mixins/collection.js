import MarsCollection from 'marsdb'
// import LocalForageManager from 'marsdb-localforage';

// MarsCollection.defaultStorageManager(LocalForageManager);

export default {

  init () {
    this.$ = null
  },

  shut () {
    delete this.$
  },

  $open (name) {
    this.$ = new MarsCollection(name, { inMemory: true })
  },

}
