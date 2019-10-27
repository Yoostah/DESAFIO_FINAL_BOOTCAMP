import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@subscribe/SUBSCRIBE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@subscribe/SUBSCRIBE_DONE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
