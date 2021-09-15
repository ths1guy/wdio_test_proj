class Counter {
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
    console.log(`${counter.c} - file parsing - reading content of describe block`);
    before(function () {
        console.log(`${counter.c} - beforeAll execution`);
    });
    before(function () {
        console.log(`${counter.c} - beforeAll execution - executed in declaration order`);
    });
    beforeEach(function () {
        console.log(`${counter.c} - Nested beforeEach executed`);
    });
    after(function () {
        console.log(`${counter.c} - afterAll execution`);
    });
    afterEach(function () {
        console.log(`${counter.c} - afterEach execution`);
    });
    describe(`Nested describe block`, function () {
        console.log(`${counter.c} - file parsing - reading nested describe blocks as well`);
        it(`NESTED TEST`, function () {
            console.log(`${counter.c} - Nested test executed`);
        });
    });
    // DATA PROVIDER
    let dataCollection = [1, 2, 3, 4, 5];
    dataCollection.map(data => {
        it(`${counter.c} TEST for ${data}`, function () {
            console.log(`TEST number ${data} executed!`);
        });
    });
});
console.log(`${counter.c} - file parsing finished`);
// как в webdriver io происходит исполнение кода
//
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jaGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0L21vY2hhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTztJQUVUO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksQ0FBQztRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Q0FDSjtBQUVELElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFM0MsUUFBUSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsRUFBRTtJQUNuQyxPQUFPLENBQUMsR0FBRyxDQUNQLEdBQUcsT0FBTyxDQUFDLENBQUMscURBQXFELENBQ3BFLENBQUM7SUFFRixNQUFNLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUNQLEdBQUcsT0FBTyxDQUFDLENBQUMsd0JBQXdCLENBQ3ZDLENBQUM7SUFDTixDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQ1AsR0FBRyxPQUFPLENBQUMsQ0FBQyx3REFBd0QsQ0FDdkUsQ0FBQztJQUNOLENBQUMsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFDO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FDUCxHQUFHLE9BQU8sQ0FBQyxDQUFDLCtCQUErQixDQUM5QyxDQUFDO0lBQ04sQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUNQLEdBQUcsT0FBTyxDQUFDLENBQUMsdUJBQXVCLENBQ3RDLENBQUM7SUFDTixDQUFDLENBQUMsQ0FBQztJQUVILFNBQVMsQ0FBQztRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQ1AsR0FBRyxPQUFPLENBQUMsQ0FBQyx3QkFBd0IsQ0FDdkMsQ0FBQztJQUNOLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLHVCQUF1QixFQUFFO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQ1AsR0FBRyxPQUFPLENBQUMsQ0FBQywwREFBMEQsQ0FDekUsQ0FBQztRQUVGLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUNQLEdBQUcsT0FBTyxDQUFDLENBQUMseUJBQXlCLENBQ3hDLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBRUgsZ0JBQWdCO0lBQ2hCLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdEIsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsYUFBYSxJQUFJLEVBQUUsRUFBRTtZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsSUFBSSxZQUFZLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUVwRCxnREFBZ0Q7QUFDaEQsRUFBRSJ9