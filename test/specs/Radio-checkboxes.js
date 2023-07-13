describe("Radio-checkbox", () => {
    xit("radio", async () => {

        await browser.url("https://qavbox.github.io/demo/")
        await browser.maximizeWindow()
        await $('=SignUp Form').click()

        await $('input[type=\'radio\']').scrollIntoView()
        await browser.pause(2000)
        let radiobuttons = await $$('input[type=\'radio\']')
        //console.log("length : " + await radiobuttons.length)
        expect(await radiobuttons.length).toEqual(8)


        radiobuttons.filter(async el => {
            if (await el.getValue() === "two") {
                await el.click()
                console.log("clicked on " + await el.getValue())
                expect(await el.isSelected()).toBe(true)

            }
        })

        let checkboxes = await $$('input[type="checkbox"]')
        expect(await checkboxes.length).toEqual(7)
        checkboxes.filter(async e2 => {
            if ((await e2.getValue()).includes("test") || await e2.getValue() === "html") {//await e2.getValue()).includes("test")
                await e2.waitForClickable({ timeout: 2000 })
                await e2.click()
                expect(await e2.isSelected()).toBe(true)
            }
        })


        await browser.pause(2000)
    })

    it("multi select", async () => {
        await browser.url("https://qavbox.github.io/demo/")
        await browser.maximizeWindow()
        await $('=SignUp Form').click()

        await $('input[type=\'radio\']').scrollIntoView()
        await browser.pause(2000)
        let options = $$("#tools option")

        await options.forEach(async el => {
            console.log("elements" + await el.getText())
            if (await el.getText() === "Jenkins") {
                await el.click()
                expect(await el.isSelected())
            }
        })
        await browser.pause(2000)
    })
})