// import code here
import fs from 'fs';



function writeFiles(array) {
    for (let i = 0; i < array.length; i++) {
        const fileName = array[i][0];
        const data = array[i][1];
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved successfully!");
        });
    }
}


function parseCsv(file) {
    const lines = file.split("\r\n");
    for (let i = 0; i < lines.length; i++) {
        lines[i] = lines[i].split(",");
    }

    return lines;

}

function createFiles(dataFile) {

    fs.readFile(dataFile, 'utf-8', (err, val) => {
        if (err) {
            console.log(error);
        }
        else {
            const arr = parseCsv(val);
            writeFiles(arr);
        }
    });
}


createFiles('data.csv');