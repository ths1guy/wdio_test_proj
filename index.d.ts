declare namespace WebdriverIO {
    // interface Browser {
    //     browserCustomCommand: (arg: any) => void
    // }

    // adding custom waitAndClick function
    interface Element {
        waitAndClick: () => void
    }
}
