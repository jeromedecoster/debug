// ansi regex from https://github.com/chalk/ansi-regex
const re = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g

module.exports = function (namespace) {

  const enabled = process.env.DEBUG &&
    process.env.DEBUG.split(',')
    .filter(function (e) { return e == '*' || e == namespace }).length

  var prev

  var fn = function () {
    if (!enabled) return
    var d = new Date()

    if (prev) {
      var elapsed = d - prev
      if (elapsed > 9999) elapsed = '>9.999'
      else {
        var s = String(elapsed)
        if (elapsed > 999) elapsed = '+' + s.charAt(0) + '.' + s.substr(1)
        else elapsed = '+0.' + pad(elapsed, true)
      }
    } else elapsed = '      '
    prev = d

    var t = pad(d.getMinutes()) + ':' + pad(d.getSeconds()) + '.' + pad(d.getMilliseconds(), true)
    t = yellow(t) + ' ' + white(elapsed) + ' ' + cyan(namespace)

    var a = Array.prototype.slice.call(arguments).map(function(e, i) {
      if (i == 0) return e
      if (i == 1) return magenta(e)
      if (i == 2) return blue(e)
      if (i == 3) return green(e)
      if (i == 4) return gray(e)
      return e
    })

    console.log.apply(null, [t].concat(a))
  }

  fn.black   = function () { return fn.call(null, color(arguments, black)) }
  fn.red     = function () { return fn.call(null, color(arguments, red)) }
  fn.green   = function () { return fn.call(null, color(arguments, green)) }
  fn.yellow  = function () { return fn.call(null, color(arguments, yellow)) }
  fn.blue    = function () { return fn.call(null, color(arguments, blue)) }
  fn.magenta = function () { return fn.call(null, color(arguments, magenta)) }
  fn.cyan    = function () { return fn.call(null, color(arguments, cyan)) }
  fn.white   = function () { return fn.call(null, color(arguments, white)) }
  fn.gray    = function () { return fn.call(null, color(arguments, gray)) }
  // aliases
  fn.pink    = fn.magenta
  fn.grey    = fn.gray

  return fn
}

function pad (value, three) {
  value = String(value)
  var lng = three == true ? 3 : 2
  while (value.length < lng)
    value = '0' + value
  return value
}

function color (args, fn) {
  return fn(Array.prototype.slice.call(args).join(' '))
}

function black   (str) { return '\u001b[30m' + strip(str) + '\u001b[39m' }
function red     (str) { return '\u001b[31m' + strip(str) + '\u001b[39m' }
function green   (str) { return '\u001b[32m' + strip(str) + '\u001b[39m' }
function yellow  (str) { return '\u001b[33m' + strip(str) + '\u001b[39m' }
function blue    (str) { return '\u001b[34m' + strip(str) + '\u001b[39m' }
function magenta (str) { return '\u001b[35m' + strip(str) + '\u001b[39m' }
function cyan    (str) { return '\u001b[36m' + strip(str) + '\u001b[39m' }
function white   (str) { return '\u001b[37m' + strip(str) + '\u001b[39m' }
function gray    (str) { return '\u001b[90m' + strip(str) + '\u001b[39m' }

function strip (str) {
  return typeof str == 'string' ? str.replace(re, '') : str
}
