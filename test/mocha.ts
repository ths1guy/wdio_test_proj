class Counter {
    innerC;
    constructor() {
        this.innerC = 0;
    }
    get c() {
        this.innerC = this.innerC + 1;
        return this.innerC;
    }
}

let counter = new Counter();

console.log(`${counter.c} - file parsing`);

describe(`Parent describe block`, () => {
    console.log(
        `${counter.c} - file parsing - reading content of describe block`
    );

    before(function() {
        console.log(
            `${counter.c} - beforeAll execution`
        );
    });

    before(function() {
        console.log(
            `${counter.c} - beforeAll execution - executed in declaration order`
        );
    });

    beforeEach(function() {
        console.log(
            `${counter.c} - Nested beforeEach executed`
        );
    });

    after(function() { 
        console.log(
            `${counter.c} - afterAll execution`
        );
    });

    afterEach(function() {
        console.log(
            `${counter.c} - afterEach execution`
        );
    });

    describe(`Nested describe block`, function() {
        console.log(
            `${counter.c} - file parsing - reading nested describe blocks as well`
        );

        it(`NESTED TEST`, function() {
            console.log(
                `${counter.c} - Nested test executed`
            );
        });
    }); 

    // DATA PROVIDER
    let dataCollection = [1, 2, 3, 4, 5];
    dataCollection.map(data => {
        it(`${counter.c} TEST for ${data}`, function() {
            console.log(`TEST number ${data} executed!`);
        });
    });
});

console.log(`${counter.c} - file parsing finished`);

// как в webdriver io происходит исполнение кода
//