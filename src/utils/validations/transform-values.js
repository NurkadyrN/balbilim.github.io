const transformValues = (value) => {
    const formData = new FormData();
    if (value) {
        Object.keys(value).map((key) => {
                const field = value[key];
                if (Array.isArray(field)) {
                    field.map((item) => {
                        if (item.value) {
                            formData.append(key, item.value)
                        } else {
                            formData.append(key, item)
                        }

                    })
                } else if (field instanceof Object && field.value) {
                    formData.append(key, field.value)
                } else if (field instanceof Date) {

                    // console.log(field.toFormat('YYYY-MM-DD hh:mm:ss'))
                    formData.append(key, field.toJSON())
                } else {
                    formData.append(key, field)
                }
            }
        );
    }
    return formData;
};

export default transformValues;
