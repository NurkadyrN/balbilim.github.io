const defaultList = (state, action) => {
    if (state === undefined) {
        return {
            data: {},
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case 'FETCH_LIST_REQUEST':
            return {
                data: {},
                loading: true,
                error: null
            };

        case 'FETCH_LIST_SUCCESS':
            return {
                data: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_LIST_FAILURE':
            return {
                data: {},
                loading: false,
                error: action.payload
            };
        case 'DELETE_OBJECT_FROM_LIST':
            return {
                data: deleteObject(state.data, action.payload),
                loading: false,
                error: null
            };

        default:
            return state;
    }
};

const deleteObject = (data = {}, objId) => {
    const {results: {objects} = {}} = data;
    if (objects) {
        let newObjects = [...objects];
        let newCount = data.count;
        const index = objects.findIndex(({id}) => id === objId)
        if (index !== -1) {
            newObjects = [...objects.slice(0, index), ...objects.slice(index + 1)]
            newCount = data.count - 1
        }
        const newResult = {...data.results, objects: newObjects}
        return {...data, results: newResult,count:newCount}
    }
    return data;
}

export default defaultList;
