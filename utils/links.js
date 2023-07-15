import fetch from 'node-fetch';

const isLinkBroken = async (url) => {

    console.log("utilclass", url)
    try {
        const response = await fetch(url);
        console.log("Response", response)
        return !(response.status >= 200 && response.status < 300);
    } catch (error) {
        return true;
    }
}

export default isLinkBroken

// module.exports = {
//     isLinkBroken,
// }