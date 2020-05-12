const subjectsList = (state, action) => {
    if (state === undefined) {
        return {
            subjects: {},
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case 'FETCH_SUBJECTS_LIST_REQUEST':
            return {
                subjects: {},
                loading: true,
                error: null
            };

        case 'FETCH_SUBJECTS_LIST_SUCCESS':
            return {
                subjects: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_SUBJECTS_LIST_FAILURE':
            return {
                subjects: {},
                loading: false,
                error: action.payload
            };
        case 'FETCH_SUBJECTS_LIST_ADD_SUBJECT':
            return {
                subjects: addSubjects(state.subjects, action.payload),
                loading: false,
                error: null
            };
        case 'SUBJECTS_DELETE_LIST_OBJECT':
            return {
                subjects: deleteObject(state.subjects, action.payload),
                loading: false,
                error: null
            };

        default:
            return state;
    }
};

const addSubjects = (subjects, subject) => {
    const {objects} = subjects;
    let newObjects = []
    if (objects) {
        const index = objects.findIndex(({id}) => id === subject.id)
        if (index === -1) {
            newObjects = [subject, ...objects]
        } else {
            newObjects = [...objects.slice(0, index), subject, ...objects.slice(index + 1)]
        }
    }
    return {...subjects, objects: newObjects}
}

const deleteObject = (subjects = {}, objId) => {
    const {objects} = subjects;
    if (objects) {
        let newObjects = [...objects];
        console.log(objId,'ww')
        const index = objects.findIndex(({id}) => id === objId)
        console.log(index,'sdddss')
        if (index !== -1) {
            console.log(newObjects,'sss')
            newObjects = [...objects.slice(0, index), ...objects.slice(index + 1)]
        }
        console.log(newObjects)
        return {...subjects, objects: newObjects}
    }
    return subjects;
}

export default subjectsList;
