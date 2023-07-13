describe("window Rect", function () {
    it("Get window Rect", async () => {
        await browser.url("https://www.google.com")
        await browser.maximizeWindow()
        await browser.setWindowSize(600, 800)//w,h
        //console.log("beforemxi", await browser.getWindowRect())
        // console.log(await browser.getWindowRect())//height, widht, x, y
        //await browser.setWindowRect(2000, 210, 800, 600)//x,y, width, height
        // console.log("after setwindowrect", await browser.getWindowRect())
        await browser.pause(5000)
    })
})