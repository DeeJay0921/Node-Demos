const log = (str) => {
    console.log(str);
};

const EventEmitter = require('events').EventEmitter;
const event = new EventEmitter();

event.on('testEvent',(...args) => {
    log('hanlder1   ' + args);
})
event.on('testEvent', (...args) => {
    log('handler2   ' + args)
})

setTimeout( () => {
    event.emit('testEvent','1','2','3');
});