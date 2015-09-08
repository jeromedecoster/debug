const one = require('./')('one')
const multiple = require('./')('multiple')
const color = require('./')('color')
const delay = require('./')('delay')

one('lorem')
one('lorem ipsum')
one('lorem ipsum dolor')
one('lorem ipsum dolor sit')
one('lorem ipsum dolor sit amet')
one('lorem ipsum dolor sit amet consectetur')
one('lorem ipsum dolor sit amet consectetur adipiscing')
one('lorem ipsum dolor sit amet consectetur adipiscing elit')


setTimeout(function() {
  multiple('lorem')
  multiple('lorem', 'ipsum')
  multiple('lorem', 'ipsum', 'dolor')
  multiple('lorem', 'ipsum', 'dolor', 'sit')
  multiple('lorem', 'ipsum', 'dolor', 'sit', 'amet')
  multiple('lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur')
  multiple('lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing')
  multiple('lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit')
}, 500)


setTimeout(function() {
  color.black('lorem ipsum dolor sit amet in black')
  color.black('lorem', 'ipsum', 'dolor', 'sit', 'amet', 'in black')
  color.red('lorem ipsum dolor sit amet in red')
  color.red('lorem', 'ipsum', 'dolor', 'sit', 'amet', 'in red')
  color.green('lorem ipsum dolor sit amet in green')
  color.green('lorem', 'ipsum', 'dolor', 'sit', 'amet', 'in green')
  color.yellow('lorem ipsum dolor sit amet in yellow')
  color.yellow('lorem', 'ipsum', 'dolor', 'sit', 'amet', 'in yellow')
  color.blue('lorem ipsum dolor sit amet in blue')
  color.blue('lorem', 'ipsum', 'dolor', 'sit', 'amet', 'in blue')
  color.magenta('lorem ipsum dolor sit amet in magenta')
  color.magenta('lorem', 'ipsum', 'dolor', 'sit', 'amet', 'in magenta')
  color.cyan('lorem ipsum dolor sit amet in cyan')
  color.cyan('lorem', 'ipsum', 'dolor', 'sit', 'amet', 'in cyan')
  color.white('lorem ipsum dolor sit amet in white')
  color.white('lorem', 'ipsum', 'dolor', 'sit', 'amet', 'in white')
  color.gray('lorem ipsum dolor sit amet in gray')
  color.gray('lorem', 'ipsum', 'dolor', 'sit', 'amet', 'in gray')
  // aliases
  color.pink('lorem ipsum dolor sit amet in pink')
  color.pink('lorem', 'ipsum', 'dolor', 'sit', 'amet', 'in pink')
  color.grey('lorem ipsum dolor sit amet in grey')
  color.grey('lorem', 'ipsum', 'dolor', 'sit', 'amet', 'in grey')
}, 650)


function delayed (ms) {
  setTimeout(function() {
    delay('after ' + ms + ' ms')
  }, ms)
}

delayed(800)
delayed(900)
delayed(1200)
delayed(2500)
delayed(12500)
