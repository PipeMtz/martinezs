
const events = require('events');

function Saludar(){
    const emisor = new events.EventEmitter();
    setTimeout(()=>emisor.emit('saluda','Juan'),5000)
    return emisor
}

// emisor.on('saluda',(nombre)=>{
//     console.log('Hola '+nombre)
// })

// emisor.addListener('saluda',(nombre)=>{
//     console.log('Hola '+nombre)
// })

let sal = Saludar()

sal.on('saluda',(nombre)=>{
    console.log('Hola '+nombre)
})
//emisor.emit('saluda','Juan')
