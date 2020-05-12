const defaultErrorMessages = (status) => {
    let message;
    switch (status) {
        case 404:
            message = 'Это страниса не сушествует';
            break;
        case 403:
            message = 'Вам доступ запрешон';
            break;
        case 500:
            message = 'Ошибка в сергере';
            break;
        default:
            message = 'Ошибка';
    }

    return {status, message}
};

export default defaultErrorMessages;
