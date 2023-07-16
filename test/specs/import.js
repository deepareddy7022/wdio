import { url, printMessage, add, subtract } from "../pageobjects/import-export.js"

import 'dotenv/config'

describe("test", () => {
    it("tesrtt", () => {

        console.log(url)
        console.log("read data from secrets github actions", process.env.QA)
        printMessage("Hello")
        add(10, 20)
        subtract(30, 10)


    })
})
