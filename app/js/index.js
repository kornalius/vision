import { h, render, mixin } from './utils'
import Base from './classes/base'
import BaseElement from './classes/base-element'
import Collection from './classes/collection'
import Rect from './classes/rect'
import Select from './mixins/select'
import Set from './mixins/set'
import Observable from './mixins/observable'
import ParentChildren from './mixins/parent-children'
import Test from './components/test.jsx'
import Text from './components/text.jsx'
import Browser from './components/browser.jsx'
import Frame from './components/frame.jsx'

class MyClass extends mixin(Base, Select, ParentChildren, Observable) {

  test () {
    this.arr = []
    this.obj = {}
    this.val = 0

    this.observe('arr')
    this.observe('obj')
    this.observe('val')

    this.on('object.changed', (...args) => {
      console.log('object.changed', this, ...args)
    })
    this.on('object.changed.val', (...args) => {
      console.log('object.changed.val', this, ...args)
    })

    this.arr.push('first')
    this.arr.push('second')
    this.arr.push('third')

    this.val = 10

    this.obj.a = 20
    this.obj.b = 30

    this.on('test-event', (...args) => {
      console.log('test-event', this, ...args)
    })

    this.emit('test-event', 1, 2, 3, 4, 5, 6, 7, 8)
  }

}

class MyClass2 extends mixin(Base, Set) {
}

var o = new MyClass()
console.log(o)
o.selected = true
o.test()

o.defer(o.destroy)


var o2 = new MyClass2()
console.log(o2)
o2.addValidSet('abc', 'def')
o2.set('abc')
console.log(o2.isSet('abc'))
console.log(o2.isSet('def'))
// o2.unset('abc')
o2.abc = false
console.log(o2.isSet('abc'))
console.log(o2.abc)

o2.defer(o2.destroy)


var r = new Rect(10, 10, 100, 100)
console.log(r)


var c = new Collection('test')
console.log(c.$)
c.insert({ text: 'MarsDB is awesome' }).then(docId => {
  console.log(docId)
  c.insertAll([ { text: 'MarsDB' }, { text: 'is' }, { text: 'awesome' } ]).then(docIds => {
    console.log(docIds)
    c.find().then(docs => console.log(docs))
  })
})

class DataTest extends BaseElement {

  get collection () { return c }

  get query () { return this.collection.find({ text: 'MarsDB' }) }

  render (props, { data }) {
    if (this.resolved) {
      return <div class='w100'>
        { data.map(v => {
          return <div class='flex flex-justify ml1 mr1'>
            <span>{ v._id }</span>
            <span>{ v.text }</span>
          </div> })
        }
      </div>
    }
    else {
      return <div></div>
    }
  }

}

window._test = render(<Test />, document.body)
window._text = render(<Text value='This is a sample text' />, document.body)

window._frame = render(<Frame/>, document.body)
window._frame._component.addFrame(
  <Browser>
    <div id='content' class='flex flex-column'>
      <span>Line 1</span>
      <span>Line 2</span>
      <span>Line 3</span>
    </div>
  </Browser>
)

window._frame._component.addFrame(<Browser />)

window._frame._component.addFrame(
  <Browser>
    <DataTest />
  </Browser>
)
