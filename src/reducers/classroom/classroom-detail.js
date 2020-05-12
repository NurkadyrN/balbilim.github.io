const classroomDetail = (state, action) => {
  if (state === undefined) {
    return {
      classroom: {},
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_CLASSROOM_REQUEST':
      return {
        classroom: {},
        loading: true,
        error: null
      };

    case 'FETCH_CLASSROOM_SUCCESS':
      return {
        classroom: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_CLASSROOM_FAILURE':
      return {
        classroom: {},
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default classroomDetail;
