describe("Wait For Commands", function () {
    it("WaitForDisplayed", async () => {
        await browser.url("https://qavbox.github.io/demo/delay/")
        await browser.maximizeWindow()
        await $('.btn[name="commit"]').click()
        await (await $('#two')).waitForDisplayed({ timeout: 5500, timeoutMsg: "Element not dislplayed after 5 sec" })


    })
    it("WaitFor not Displayed", async () => {
        await browser.url("https://qavbox.github.io/demo/delay/")
        await browser.maximizeWindow()
        await $('#loaderStart').click()
        await (await $('#loader')).waitForDisplayed({ timeout: 5500, reverse: true, timeoutMsg: "Element not dislplayed after loading" })


    })

    it("WaitForExist", async () => {
        await browser.url("https://qavbox.github.io/demo/delay/")
        await browser.maximizeWindow()
        await $('.btn[name="commit1"]').click()
        await (await $('#delay')).waitForExist({ timeout: 5500, timeoutMsg: "Element not exists in DOM after 5 sec" })
        expect((await $("#delay")).getText()).toContain("I appeared after 5 sec")


    })
    it("WaitForEnabled", async () => {
        await browser.url("https://qavbox.github.io/demo/delay/")
        await browser.maximizeWindow()
        await $('.btn[name="commit2"]').click()
        await (await $('#delay')).waitForEnabled({ timeout: 5500, timeoutMsg: "Element not enabled after 5 sec" })


    })
    it("WaitForClickable", async () => {
        await browser.url("https://qavbox.github.io/demo/delay/")
        await browser.maximizeWindow()
        await $('.btn[name="commit2"]').click()
        await (await $('#delay')).waitForClickable({ timeout: 5500, timeoutMsg: "Element not clickable after 5 sec" })


    })

    it.only("WaitUntil", async () => {
        await browser.url("https://qavbox.github.io/demo/delay/")
        await browser.maximizeWindow()
        await $('.btn[name="commit1"]').click()
        let ele = await $('#delay')
        await ele.waitUntil(async function () {
            return (await ele.getText()) != ''
        }, { timout: 6000, timeoutMsg: "Element not available after 5 secs", interval: 2000 })

        expect(await ele.getText()).toContain("after 5 sec")

    })


})

