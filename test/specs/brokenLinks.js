import fetch from 'node-fetch';
import isLinkBroken from "../../utils/links.js"

describe('Test the broken links', () => {
    it('Verify if the links are working fine', async () => {

        await browser.url("https://qavbox.github.io/demo")
        let baseurl = "https://qavbox.github.io/demo"
        await $('=Links').click()
        await browser.pause(3000)
        const allLinks = await $$('a')
        await allLinks.forEach(async (link) => {
            //console.log(await link)
            // console.log("relative url before baseurl", await link.getAttribute("href"))
            const href = await link.getAttribute("href")
            //console.log("href validation", href)
            if (!await href.startsWith('http')) {
                let relativeUrl = `${baseurl}${href}`
                console.log("Testing", relativeUrl)
                const LinksBroken = await isLinkBroken(relativeUrl);
                console.log("result", LinksBroken)

            }
            else {

                const LinksBroken = await isLinkBroken(rurl);
                console.log(LinksBroken)
            }


        })
        // console.log(await link.getAttribute('href'))
        // if (await link.getAttribute("href")) {



        //     let url = await browser.getUrl()
        //     console.log("Deepa", url)
        //     const LinksBroken = await isLinkBroken(url);
        //     console.log(`Is the link broken ${LinksBroken}`);
        // if (LinksBroken) {
        //     arr.push(url)
        // }


        // }
        // for (let i in arr) {
        //     console.log(arr[i])

    })


})





// let relativeUrl;
//         urls.forEach(async (url) => {

//             if (!await url.startsWith('http')) {
//                 relativeUrl = new URL(url, baseurl)
//             }



//             const requests = relativeUrl.map(rurl => fetch(rurl));

//             const responses = await Promise.all(requests);

//             const statusCodes = responses.map(response => response.status);

//             statusCodes.forEach(statusCode => {
//                 console.log(statusCodes)
//                 expect(statusCode).to.be.below(400);
//             })


