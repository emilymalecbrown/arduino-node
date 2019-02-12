const five =  require('johnny-five');

const board = new five.Board();

board.on('ready', () => {
  const led = new five.Led(13);
  led.pulse();

  // Stop and turn off the led pulse loop after
  // 10 seconds (shown in ms)
  this.wait(10000, () => {
    led.stop().off();
  });
});
