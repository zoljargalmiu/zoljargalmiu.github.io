const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

var count = 0;
var recursiveAsyncReadLine = function () {
  readline.question("Enter some number? ", (number) => {
    if (number === "stop") {
      console.log("stopped!");
      count = 0;
    } else {
      count += parseInt(number);
      console.log(count);
      recursiveAsyncReadLine();
    }
  });
};
recursiveAsyncReadLine();
