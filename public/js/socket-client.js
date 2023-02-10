
const socket = io();
const lblConectado = document.querySelector('#lblConectado');
const lblDesconectado = document.querySelector('#lblDesconectado');
const btnEnviar = document.querySelector('#btnEnviar');
const txtMensaje = document.querySelector('#txtMensaje');

socket.on('connect', () => {

    console.log( 'Cliente conectado' );

    lblDesconectado.style.display = 'none';
    lblConectado.style.display = '';
});

socket.on('disconnect', () => {
    
    lblConectado.style.display = 'none';
    lblDesconectado.style.display = '';
    
    console.log( 'Cliente desconectado' );
});

btnEnviar.addEventListener( 'click', () => {

    const mensaje = txtMensaje.value;
    console.log( mensaje );

    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    }

    socket.emit( 'enviar-mensaje', payload, ( id ) => {
        console.log( 'Desde el server', id );
    });
});

socket.on( 'enviar-mensaje', (response) => {
    console.log( response );
})