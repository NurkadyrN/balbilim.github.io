const urlAddSubUrl = (url = '', subUrl = '') => {
    subUrl = subUrl.toString();
    url = url.toString();
    if (url.endsWith('/')) url = url.slice(0, -1);
    if (subUrl.endsWith('/')) subUrl = subUrl.slice(0, -1);
    if (url.startsWith('/')) url = url.slice(1);
    if (subUrl.startsWith('/')) subUrl = subUrl.slice(1);
    url = url ? '/' + url + '/' : '/'
    subUrl = subUrl ? subUrl + '/' : ''
    return url + subUrl;

}

export default urlAddSubUrl;
