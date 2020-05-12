const useLink = (url, rel = "stylesheet", type = "text/css") => {
    const script = document.createElement('link');
    script.href = url;
    script.rel = rel;
    script.type = type;
    script.async = true;
    document.head.appendChild(script);
    return script;
};

export default useLink;