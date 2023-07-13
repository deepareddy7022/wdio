describe("Alerts", function () {
    it("alert- Ok", async () => {
        await browser.url("https://qavbox.github.io/demo/")
        await browser.maximizeWindow()
        await $("=Alerts").click()
        await $("input[name='commit']").click()
        let alertText = await browser.getAlertText()
        console.log(alertText)
        expect(alertText).toEqual("Have a nice day!!!");
        await browser.acceptAlert()
        await browser.pause(5000)
    })

    it("alert- Delay", async () => {
        await browser.url("https://qavbox.github.io/demo/")
        await browser.maximizeWindow()
        await $("=Alerts").click()
        await $("#delayalert").click()
        await browser.pause(5000)
        let alertText = await browser.getAlertText()
        console.log(alertText)
        expect(alertText).toEqual("I appeared after 5 seconds!");
        await browser.acceptAlert()
        await browser.pause(5000)
    })
    it("alert- prompt", async () => {
        await browser.url("https://qavbox.github.io/demo/")
        await browser.maximizeWindow()
        await $("=Alerts").click()
        await $("#prompt").click()
        console.log(await browser.getAlertText())
        await browser.sendAlertText("Deepa Reddy")
        await browser.acceptAlert()
        expect(await (await $("#Parademo")).getText()).toContain("Deepa");
        await browser.pause(5000)
    })
    it("alert- accept/cancel", async () => {
        await browser.url("https://qavbox.github.io/demo/")
        await browser.maximizeWindow()
        await $("=Alerts").click()
        await $("#confirm").click()
        console.log(await browser.getAlertText())
        await browser.acceptAlert()
        expect(await (await $("#Parademo")).getText()).toContain("OK");
        await browser.pause(5000)

        await $("#confirm").click()
        await browser.dismissAlert()
        expect(await (await $("#Parademo")).getText()).toContain("Cancel");
        await browser.pause(5000)
    })

})