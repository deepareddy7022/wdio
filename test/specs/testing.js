import test from "../../utils/test"

describe("test", () => {
    it("test2", async () => {
        await browser.url("https://www.google.com")
        let result = new test().getName()
        console.log(result)

    })
})