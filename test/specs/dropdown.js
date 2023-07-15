
import { Key } from 'webdriverio';

import commonFunctions from "../../utils/commonFunctions"

describe("Handlign different dropdowns", () => {
    xit("Dropdown with select by index", async () => {
        await browser.url("https://www.zoho.com/commerce/free-demo.html")
        let countries = await $("#zcf_address_country")
        await countries.selectByIndex(4)
        console.log(await countries.getValue())
        await browser.pause(5000)
    })
    xit("Dropdown with select by value", async () => {
        await browser.url("https://www.zoho.com/commerce/free-demo.html")
        let countries = await $("#zcf_address_country")
        await countries.selectByVisibleText("Italy")
        console.log(await countries.getValue())
        await browser.pause(5000)
    })
    xit("Dropdown with select by Attribute ", async () => {
        await browser.url("https://www.zoho.com/commerce/free-demo.html")
        await $("#zcf_address_country").selectByAttribute("value", "Andorra")
        expect((await $("#zcf_address_country")).getValue()).toEqual("Andorra")
        await browser.pause(5000)
    })


    xit("Dropdown without selct/option tag ", async () => {
        await browser.url("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        await browser.maximizeWindow()
        await $("#billing_address_1").scrollIntoView()
        expect(await $("#select2-billing_country-container").isDisplayed()).toBe(true)
        await $("#select2-billing_country-container").click()
        await $(".select2-search__field").setValue("Iran")
        await browser.keys('Enter')
        console.log((await $("#select2-billing_country-container")).getText())
        expect(await $("#select2-billing_country-container").getText()).toEqual("Iran")
        await browser.pause(5000)
    })
    xit("Dropdown with Autosuggestion ", async () => {
        await browser.url("https://www.wikipedia.org/")
        await browser.maximizeWindow()
        await $("#searchInput").setValue("Testing")
        await $(`(//h3[@class = "suggestion-title"])[2]`).click()
        expect(await $(".mw-page-title-main").getText()).toEqual("Testing cosmetics on animals")
        await browser.pause(5000)

    })
    it("multiselect ", async () => {
        await browser.url("https://qavbox.github.io/demo")
        await browser.maximizeWindow()
        await $('=SignUp Form').click()
        await $("#tools").scrollIntoView()
        let options = await $$("#tools option")
        console.log(await options.length)
        let selectedText = []

        await options.forEach(async ele => {
            // console.log("logging", await ele.selectByVisibleText("Jenkins"))
            await ele.selectByIndex(2);
            if (await ele.isSelected())
                selectedText.push(await ele.getValue())
        })
        for (let j of selectedText) { console.log(selectedText[j]) }
        await browser.pause(10000)




    })
})