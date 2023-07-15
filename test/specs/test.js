
//import data from "..//..//data/testFiles//test.json"
//const data = require("../../data/testFiles")

import data from '../../data/testFiles/test.json' assert { type: 'json' }
import credentials from "../../data/testFiles/credentials.js"



describe("test", () => {
    it("read data from json", async () => {
        // await browser.url("https://www.google.com")
        // let result = testing.getName()
        console.log(data.email)

    })
    it("read data from array of objects", async () => {
        // await browser.url("https://www.google.com")
        // let result = testing.getName()
        console.log(credentials.qa)

    })
})