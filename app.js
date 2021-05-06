const fs = require("fs");




fs.writeFile("user-data.txt", "username=MALLYBO", err => {
  if (err) {
    console.log(err);
  } else {
    console.log("wrote to file");
  }
});


fs.readFile('user-data.txt', (err, data) => {
    if (err) {
        console.log(err.toString());
        return;
    } else {
        console.log(data.toString());
    } 
});



