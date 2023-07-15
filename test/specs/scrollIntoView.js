describe("ScrollIntoView", function () {
    it("autoscroll", async () => {

        await browser.url("https://qavbox.github.io/demo/signup/")
        await $("//input[@value= 'manualtesting']").scrollIntoView()
        await browser.pause(3000)

    })
    it("smoothscroll", async () => {

        await browser.url("https://qavbox.github.io/demo/signup/")
        await $("//input[@value= 'manualtesting']").scrollIntoView({ behavior: "smooth" })
        await browser.pause(3000)

    })
    it.only("smoothscroll", async () => {

        await browser.url("https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView")
        await browser.maximizeWindow()
        await $("#examples").scrollIntoView(true)
        await browser.pause(3000)

        // alignToTop:  Optional
        // A boolean value: true/false

        // If true, the top of the element will be aligned to the top of the visible area of the scrollable ancestor. Corresponds to scrollIntoViewOptions: {block: "start", inline: "nearest"}. This is the default value.
        // If false, the bottom of the element will be aligned to the bottom of the visible area of the scrollable ancestor. Corresponds to scrollIntoViewOptions: {block: "end", inline: "nearest"}.


    })

})