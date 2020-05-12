const unitsDetail = (state, action) => {
  if (state === undefined) {
    return {
      unit: {},
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_UNITS_REQUEST':
      return {
        unit: {},
        loading: true,
        error: null
      };

    case 'FETCH_UNITS_SUCCESS':
      return {
        unit: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_UNITS_FAILURE':
      return {
        unit: {},
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default unitsDetail;
