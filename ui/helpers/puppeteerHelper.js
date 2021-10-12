export async function ifElementExist(selector, page, timeout) {
    try {
        await page.waitForSelector(selector, { visible: true, timeout });
        return true
    }
    catch {
        return false;
    }
}