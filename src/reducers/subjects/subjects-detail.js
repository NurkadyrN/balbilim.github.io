const subjectsDetail = (state, action) => {
  if (state === undefined) {
    return {
      subject: {},
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_SUBJECTS_REQUEST':
      return {
        subject: {},
        loading: true,
        error: null
      };

    case 'FETCH_SUBJECTS_SUCCESS':
      return {
        subject: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_SUBJECTS_FAILURE':
      return {
        subject: {},
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default subjectsDetail;
