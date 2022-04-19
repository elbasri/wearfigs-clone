import DOMpurify from 'dompurify';


export const santitize = (content) => {
    return process.browser ? DOMpurify.sanitize(content) : content;
}