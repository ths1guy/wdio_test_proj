describe('Smoke test', () => {
    it.skip('ducks should be alive', () => {
        browser.url('/')
        // ниже идет проверка
        expect(browser).toHaveUrlContaining('saucedemo');
    })
})