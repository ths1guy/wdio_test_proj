// This is called pyramid of DOOM (callback hell)

const fs = require("fs"); // импортируем модуль fs (file system) - read file from disk
// fs(1 param - путь к файлу, который хочу прочитать, [2 param - кодировка], 3 param - callback)
// callback вызовется тогда, как файл прочитался и получили контент или ошибку
// в нее передается ошибка если есть и контент самого файла 2 параметром
fs.readFile('./async-demo/async/data/1.json', { encoding: "UTF-8"}, (err, contentFirst) => {
    if (err) {
        throw err;
    }

    console.log("Got first file", contentFirst);

    fs.readFile('./async-demo/async/data/2.json', { encoding: "UTF-8"}, (err, contentSecond) => {
        if (err) {
            throw err;
        }

        console.log("Got second file", contentSecond);

        fs.readFile('./async-demo/async/data/3.json', { encoding: "UTF-8"}, (err, contentThird) => {
            if (err) {
                throw err;
            }
    
            console.log("Got third file", contentThird);
    
        });

    });
});