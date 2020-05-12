const classroomOptions = (state, action) => {
  if (state === undefined) {
    return {
      options: [],
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_CLASSROOM_OPTIONS_REQUEST':
      return {
        options: [],
        loading: true,
        error: null
      };

    case 'FETCH_CLASSROOM_OPTIONS_SUCCESS':
      return {
        options: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_CLASSROOM_OPTIONS_FAILURE':
      return {
        options: [],
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default classroomOptions;
