import Webtable from "../utils/Webtable.js"

//const Webtable = require("../utils/Webtable.js")

describe("Table", function () {
    it("Table- Get all rows and columns", async () => {

        await browser.url("https://qavbox.github.io/demo/")
        await browser.maximizeWindow()
        await $("=WebTable").click()
        await browser.pause(2000)

        // console.log("getrowcount", await Webtable.getRowCount())
        // console.log("getcolumncount", await Webtable.getColumnsCount())
        // console.log("getcellvalue", await Webtable.getCellValue(1, 2))

        // expect(await Webtable.getRowCount()).toBe(3)

        // expect(await Webtable.getColumnsCount()).toBe(5)

        // expect(await Webtable.getCellValue(1, 2)).toEqual("Functional")

        //expect(await Webtable.getCellValues()).toBeElementsArrayOfSize(9)
        // expect(await Webtable.getCellValues()).toHaveTextContaining("test")
        expect(await Webtable.getCellValues()).includes("GUI")








    })
})