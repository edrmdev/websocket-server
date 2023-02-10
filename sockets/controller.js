

const socketController = ( socket ) =>{

    socket.on('disconnect', () => {
        console.log( 'Cliente desconectado ', socket.id );
    })

    socket.on( 'enviar-mensaje', ( payload, callback ) => {
        const id = 123456; 
        callback( id );
        // ? Este evento solo se disparara en caso de que se envien mensajes a todos los usuarios conectados
        socket.broadcast.emit('enviar-mensaje', payload );
    })
}

module.exports = {
    socketController
}