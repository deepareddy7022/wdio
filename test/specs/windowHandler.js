

describe("Multi tab/window handlers", () => {
    it("Tab", async () => {
        await browser.url("https://qavbox.github.io/demo/links/")
        console.log(await browser.getTitle())

        let parentWindow = await browser.getWindowHandle()
        // await browser.newWindow("https://qavalidation.com/demo-form/")
        // console.log(await browser.getTitle())

        // // await browser.switchToWindow(parentWindow)
        // // await browser.pause(5000)
        // // console.log(await browser.getTitle())
        // await browser.newWindow("https://qavalidation.com/category/appium/")
        // console.log(await browser.getTitle())

        // await browser.switchWindow("Demo")
        // await browser.pause(5000)
        // console.log(await browser.getTitle())
        // await $("#g4072-fullname").setValue("Deepa Reddy")

        //await browser.navigateTo("https://qavbox.github.io/demo/links/")
        await $('//input[@name="multiple"]').click()

        let windows = await browser.getWindowHandles()

        for (let window of windows) {

            if (parentWindow != window) {
                await browser.switchToWindow(window)
                console.log(await browser.getTitle())
                await browser.closeWindow()
            }
        }

        await browser.switchToWindow(parentWindow)
        console.log(await browser.getTitle())







    })
})