export default {

  init () {
    this._keydown = {}
    this._keys = {
      BACKSPACE:   8,
      TAB:         9,
      ENTER:       13,
      PAUSE:       19,
      CAPS:        20,
      ESC:         27,
      SPACE:       32,
      PAGE_UP:     33,
      PAGE_DOWN:   34,
      END:         35,
      HOME:        36,
      LEFT_ARROW:  37,
      UP_ARROW:    38,
      RIGHT_ARROW: 39,
      DOWN_ARROW:  40,
      INSERT:      45,
      DELETE:      46,
      0:           48,
      1:           49,
      2:           50,
      3:           51,
      4:           52,
      5:           53,
      6:           54,
      7:           55,
      8:           56,
      9:           57,
      A:           65,
      B:           66,
      C:           67,
      D:           68,
      E:           69,
      F:           70,
      G:           71,
      H:           72,
      I:           73,
      J:           74,
      K:           75,
      L:           76,
      M:           77,
      N:           78,
      O:           79,
      P:           80,
      Q:           81,
      R:           82,
      S:           83,
      T:           84,
      U:           85,
      V:           86,
      W:           87,
      X:           88,
      Y:           89,
      Z:           90,
      NUMPAD_0:    96,
      NUMPAD_1:    97,
      NUMPAD_2:    98,
      NUMPAD_3:    99,
      NUMPAD_4:    100,
      NUMPAD_5:    101,
      NUMPAD_6:    102,
      NUMPAD_7:    103,
      NUMPAD_8:    104,
      NUMPAD_9:    105,
      MULTIPLY:    106,
      ADD:         107,
      SUBSTRACT:   109,
      DECIMAL:     110,
      DIVIDE:      111,
      F1:          112,
      F2:          113,
      F3:          114,
      F4:          115,
      F5:          116,
      F6:          117,
      F7:          118,
      F8:          119,
      F9:          120,
      F10:         121,
      F11:         122,
      F12:         123,
      SHIFT:       16,
      CTRL:        17,
      ALT:         18,
      PLUS:        187,
      COMMA:       188,
      MINUS:       189,
      PERIOD:      190,
      PULT_UP:     29460,
      PULT_DOWN:   29461,
      PULT_LEFT:   4,
      PULT_RIGHT:  5
    }

    this._keyboardDispatch = this.keyboardDispatch.bind(this)
    this._resetKeyDown = this.resetKeyDown.bind(this)

    document.body.addEventListener('keydown', this._keyboardDispatch)
    document.body.addEventListener('keyup', this._keyboardDispatch)
    window.addEventListener('blur', this._resetKeyDown)
  },

  shut () {
    document.body.removeEventListener('keydown', this._keyboardDispatch)
    document.body.removeEventListener('keyup', this._keyboardDispatch)
    window.removeEventListener('blur', this._resetKeyDown)
  },

  get keydown () { return this._keydown },
  get keys () { return this._keys },

  resetKeyDown () {
    for (var k in this._keys) {
      if (this._keydown[this._keys[k]]) {
        this.emit('key.up', this._keys[k])
      }
    }
    this._keydown = {}
  },

  keyboardDispatch (e) {
    let original = e
    let evnt = {}
    let props = 'char charCode keyCode type shiftKey ctrlKey metaKey timestamp'.split(' ')
    let i = props.length
    while (i >= 0) {
      var prop = props[--i]
      evnt[prop] = original[prop]
    }
    evnt.which = original.charCode !== null ? original.charCode : original.keyCode
    evnt.key = original.keyCode || original.which
    evnt.originalEvent = original
    e = evnt

    if (e.type === 'keydown') {
      if (this._keydown[e.key] !== true) {
        this._keydown[e.key] = true
        this.emit('key.down', e)
      }
    }

    else if (e.type === 'keyup') {
      delete this._keydown[e.key]
      this.emit('key.up', e)
    }
  },

}
