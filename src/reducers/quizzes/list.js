const quizzesList = (state, action) => {
  if (state === undefined) {
    return {
      quizzes: {},
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_QUIZZES_LIST_REQUEST':
      return {
        quizzes: {},
        loading: true,
        error: null
      };

    case 'FETCH_QUIZZES_LIST_SUCCESS':
      return {
        quizzes: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_QUIZZES_LIST_FAILURE':
      return {
        quizzes: {},
        loading: false,
        error: action.payload
      };
    case 'SUBJECTS_QUIZZES_OBJECT':
      return {
        quizzes: deleteObject(state.quizzes, action.payload),
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

export default quizzesList;
