import { Config } from "@wdio/sync";

// https://webdriver.io/docs/configurationfile.html
const configObj: Config = {
    automationProtocol: "webdriver",
    runner: 'local',
    specs: [
        // './test/**/*.ts'
        // './test/mocha.ts'
        './test/createAccount.ts'
    ],
    hostname: process.env.SELENIUM_HUB_HOST ?? 'localhost',
    path: '/wd/hub',
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome'
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    baseUrl: 'https://parabank.parasoft.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        [
            "allure",
            {
                outputDir: "allure-results",
                disableMochaHooks: true,
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false
            }
        ]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        // retries: 3,
        // grep: '@SMOKE' // запустить тесты, где в имени указан паттерн @SMOKE
    },
    afterTest: function(test) {
        if (test.error !== undefined) {
            browser.takeScreenshot();
        }
    }
}

if (process.env.DEBUG === "1") {
    console.log("###### RUNNING IN DEBUG MODE! ######");
    // делаем патч конфига
    configObj.maxInstances = 1; // отключаем параллелизацию для упрощения дебага (т.е. одновременно будем дебажить только один тест)
    configObj.execArgv = ["--inspect=127.0.0.1:5858"] //execArgv - аргументы, которые нужно передать в node js, когда webdriver io будет запускать дочерние процессы, они должны открыть наружу дебаг порт
    configObj.mochaOpts.timeout = 60000 * 5; // хорошая практика - увеличить timeout для дебаг запуска, тут увеличиваем до 5 минут
}

export const config = configObj;