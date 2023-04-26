const fs = require('fs');

exports.readFileSync = (dataPath) => {
    let doesExist = fs.existsSync(dataPath);
    if (!doesExist) writeFileSync(dataPath, []);

    let jsonData = fs.readFileSync(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
    });

    if(jsonData === ''){
      writeFileSync(dataPath, []);
      return readFileSync(dataPath);
    }
    
    return JSON.parse(jsonData);
  };