const classroomsList = (state, action) => {
  if (state === undefined) {
    return {
      classrooms: {},
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_CLASSROOM_LIST_REQUEST':
      return {
        classrooms: {},
        loading: true,
        error: null
      };

    case 'FETCH_CLASSROOM_LIST_SUCCESS':
      return {
        classrooms: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_CLASSROOM_LIST_FAILURE':
      return {
        classrooms: {},
        loading: false,
        error: action.payload
      };
    case 'CLASSROOM_DELETE_OBJECT':
      return {
        classrooms: deleteObject(state.classrooms, action.payload),
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

export default classroomsList;
