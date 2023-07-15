describe("Test Scenario1", () => {
  it("Test Case 1", async () => {

    browser.url("https://qavbox.github.io/demo/")
    await $("*=SignUp Form").click()
    //await browser.debug()
    const allCookies = await browser.getCookies()
    console.log(allCookies);

    await $('#username').setValue("Deepa")
    expect(await $('#username').getValue()).toEqual("Deepa")
    await $('#username').clearValue()
    expect(await $('#username').getValue()).toEqual("")

    //await $('a*=WebTable').click()
    //await $('table[id=\'table01\'] tbody tr:first-child td:nth-child(2)').getText() //css
    //await $('//table[@id=\'table01\']//tbody//tr[1]//td[2]').getText()//xpath
    await browser.pause(2000)

  })
})