const fs = require("fs");
const util = require("util");

// promisify принимает функцию, которая работает на коллбеках, а возвращает функцию работающую на промисах
// т.е. получаем ту же функцию readFile, но работающую на промисах
const readFile = util.promisify(fs.readFile);

// объявление функции, работающей с асинхронным кодом как async

async function print3Files() {
    try {
        console.log("Reading file async 1.json");
        // ждем результат асинхронной функции readFile, ставя перед ней await
        // это заблокирует поток исполнения, до тех пор пока чтение файла не закончится
        // успешно или с ошибкой и мы не получим какой то результат
        // в самой переменной content будет уже какой то объект
        let content = await readFile("./async-demo/async/data/1.json");
        // если await что то вернуло ошибку, идем в блок catch
        console.log("File 1.json returned", content);

        console.log("Reading file async nonexist.json");
        let content2 = await readFile("./async-demo/async/data/nonexist.json");
        console.log("File 2.json returned", content2);

        console.log("Reading file async nonexist.json");
        let content3 = await readFile("./async-demo/async/data/3.json");
        console.log("File 3.json returned", content3);

        console.log("Done executing async commands");
    } catch (err) {
        console.log("Oh no, we have an error!");
        console.log(err);
        throw err
    }
}

print3Files(); // тоже возвращает промис