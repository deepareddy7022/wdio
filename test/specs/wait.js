

//const Webtable = require("../utils/Webtable.js")

describe("waita", function () {
    it("Implicit wait", async () => {

        await browser.url("https://qavbox.github.io/demo/")
        await browser.maximizeWindow()
        console.log(await browser.capabilities)








    })
})