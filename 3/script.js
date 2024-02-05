const wsUri = "wss://echo-ws-service.herokuapp.com";

const btn = document.querySelector('.btn-js');
const input = document.querySelector('.input');
const output = document.querySelector('.output')
const btnGeolocation = document.querySelector('.geolocation')

let websocket;

function writeToScreen(message, cls) {
    let pre = document.createElement("div");
    pre.classList.add(cls);
    pre.classList.add('message');
    pre.innerHTML = message;
    output.appendChild(pre);
}

websocket = new WebSocket(wsUri);
websocket.onmessage = function(evt) {
    if (evt.data != '[object GeolocationCoordinates]') {
        writeToScreen(
            '<span>' + evt.data + '</span>', 'input_message'
          );
    }    
  };

btn.addEventListener('click', () => {
    const message = input.value;
    writeToScreen('<span>' + message + '</span>', 'output_message');
    websocket.send(message);
});

btnGeolocation.addEventListener('click', () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position;
            writeToScreen(`<a target='_blank' href='https://www.openstreetmap.org/#map=12/${coords.latitude}/${coords.longitude}'>Гео-локация</a>`, 'output_message');
            websocket.send(coords);
        });
    }
})