const events = require('events')

let emitter = new events.EventEmitter()

// emitter.on('test-event', () => {
//     console.log('testEvent has been emitted')
// })
//
// setTimeout( () => {
//     console.log('1s....')
// },1000)
//
// setTimeout( () => {
//     console.log('2s....')
// },2000)
//
// setTimeout( () => {
//     emitter.emit('test-event')
// },2000)
//
// let emitter2 = new events.EventEmitter()
// emitter2.on('test-event2', (param1,param2) => {
//     console.log('params: ' + param1,param2)
// })
//
// setTimeout( () => {
//     emitter2.emit('test-event2','deejay','0921')
// },2000)
//
// console.log(emitter2.listeners('test-event2'))
// let num = events.listenerCount(emitter2,'test-event2')
// console.log('num:' + num)

// emitter.on('error', () => {
//     console.log('someThing wrong')
// })
// emitter.emit('error')