ThunderConnector = require('thunder-connector');
ThunderConnector.connect();

var keypress = require('keypress')
  , tty = require('tty');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

missile = require('./index.js');


process.stdin.on('keypress', function (ch, key) {
  //console.log('got "keypress"', key);
  if (key.name == "w") {
    missile.turnUpDegrees(2.3);
  }
  if (key.name == "a") {
    missile.turnLeftDegrees(2.3);
  }
  if (key.name == "s") {
    missile.turnDownDegrees(2.3);
  }
  if (key.name == "d") {
    missile.turnRightDegrees(2.3);
  }
  if (key.name == "f") {
    missile.Fire();
  }
  if (key.name == "w" && key.shift == true) {
    missile.turnUpDegrees(0.5);
  }
  if (key.name == "a" && key.shift == true) {
    missile.turnLeftDegrees(0.5);
  }
  if (key.name == "s" && key.shift == true) {
    missile.turnDownDegrees(0.5);
  }
  if (key.name == "d" && key.shift == true) {
    missile.turnRightDegrees(0.5);
  }
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});

if (typeof process.stdin.setRawMode == 'function') {
  process.stdin.setRawMode(true);
} else {
  tty.setRawMode(true);
}
process.stdin.resume();
