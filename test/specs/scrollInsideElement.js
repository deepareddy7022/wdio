describe("ScrollInsideElement", () => {
    it("scrollInsideTable", async () => {
        await browser.url("https://qavbox.github.io/demo/webtable/")
        await browser.maximizeWindow()
        await $("#table02").scrollIntoView()



        while (!(await $("//td[normalize-space()='Charde Marshall']")).isDisplayedInViewport()) {
            await browser.execute(() => {
                var el = document.querySelector('#table02')
                el.scrolltop = el.scrolltop + 100

            })
        }

        await browser.pause(5000)



    })
    it("scrollInsidedropdown", async () => {
        await browser.url("https://qavbox.github.io/demo/signup/")
        await browser.maximizeWindow()
        await $("#tools").scrollIntoView()



        // while (!(await $("//option[@value = 'codedui']")).isDisplayedInViewport()) {
        //     await browser.execute(() => {
        //         var el = document.querySelector("//option[@value = 'codedui']")
        //         el.scrolltop = el.scrolltop + 100

        //     })
        // }
        // await browser.pause(5000)
        await $("#tools").selectByVisibleText("CodedUI")
        await browser.pause(5000)





    })

    it.only("scrollInsidedropdown", async () => {
        await browser.url("https://qavbox.github.io/demo/signup/")
        await browser.maximizeWindow()
        //await $("#tools").scrollIntoView()
        await browser.execute(() => {
            document.getElementById('username').style.border = "thick solid #0000FF"
        })
        await browser.pause(5000)





    })
})