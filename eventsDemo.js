import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();
function greetHandler(name) {
    console.log('Hello ' + name)
}


function goodbyehandler(name) {
    console.log('Goodbye ' + name);
}


//Register event listeners
myEmitter.on('greet', greetHandler)
myEmitter.on('goodbye', goodbyehandler)

//Emit events
myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye', 'John');


//Error handling
myEmitter.on('error', (err) => {
    console.log('An Error Ocurred:', err);
});

//simulate error
myEmitter.emit('error', new Error('something went wrong'))

