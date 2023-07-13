import testing from "../utils/testing.js"

describe("test", () => {
    it("test2", async () => {
        await browser.url("https://www.google.com")
        let result = testing.getName()
        console.log(result)

    })
})