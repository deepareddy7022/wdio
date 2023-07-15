import fetch from 'node-fetch';

describe('broken link test', function () {
    it('should check the page for broken links', async function () {
        await browser.url('http://the-internet.herokuapp.com/status_codes');

        // get all the links on the page
        const links = $$('a');
        console.log(await links)

        const urls = links.map(link => link.getAttribute('href'));
        console.log(await urls)

        const requests = urls.map(url => fetch(url));

        const responses = await Promise.all(requests);

        const statusCodes = responses.map(response => response.status);

        statusCodes.forEach(statusCode => {
            expect(statusCode).to.be.below(400);
        })
    });
});