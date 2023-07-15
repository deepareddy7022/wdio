import { url, printMessage, add, subtract } from "../pageobjects/import-export.js"



describe("test", () => {
    it("tesrtt", () => {

        console.log(url)
        printMessage("Hi")
        add(10, 20)
        subtract(30, 10)


    })
})