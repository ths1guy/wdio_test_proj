"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// https://webdriver.io/docs/configurationfile.html
exports.config = {
    runner: 'local',
    specs: [
        // './test/**/*.ts'
        // './test/mocha.ts'
        './test/createAccount.ts'
    ],
    hostname: (_a = process.env.SELENIUM_HUB_HOST) !== null && _a !== void 0 ? _a : 'localhost',
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
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        // retries: 3,
        // grep: '@SMOKE' // запустить тесты, где в имени указан паттерн @SMOKE
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Rpby5jb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vd2Rpby5jb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxtREFBbUQ7QUFDdEMsUUFBQSxNQUFNLEdBQVc7SUFDMUIsTUFBTSxFQUFFLE9BQU87SUFDZixLQUFLLEVBQUU7UUFDSCxtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLHlCQUF5QjtLQUM1QjtJQUNELFFBQVEsRUFBRSxNQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLG1DQUFJLFdBQVc7SUFDdEQsSUFBSSxFQUFFLFNBQVM7SUFDZixZQUFZLEVBQUUsQ0FBQztJQUNmLFlBQVksRUFBRSxDQUFDO1lBQ1gsV0FBVyxFQUFFLFFBQVE7U0FDeEIsQ0FBQztJQUNGLDJFQUEyRTtJQUMzRSxRQUFRLEVBQUUsTUFBTTtJQUNoQixPQUFPLEVBQUUsK0JBQStCO0lBQ3hDLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLHNCQUFzQixFQUFFLE1BQU07SUFDOUIsb0JBQW9CLEVBQUUsQ0FBQztJQUN2QixTQUFTLEVBQUUsT0FBTztJQUNsQixTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDbkIsU0FBUyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEtBQUs7UUFDVCxPQUFPLEVBQUUsS0FBSztRQUNkLGNBQWM7UUFDZCx1RUFBdUU7S0FDMUU7Q0FDSixDQUFBIn0=