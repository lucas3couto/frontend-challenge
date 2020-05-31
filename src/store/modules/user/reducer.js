import produce from "immer";

const INITIAL_STATE = {
  profile: null,
  social: null
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@auth/SIGN_IN_SUCCESS": {
        draft.profile = action.payload.user;
        draft.social = action.payload.social;
        break;
      }
      case "@user/UPDATE_PROFILE_SUCCESS": {
        draft.profile = action.payload.user;
        draft.social = action.payload.social;
        break;
      }
      case "@auth/SIGN_OUT": {
        draft.profile = null;
        draft.social = null;
        break;
      }
      case '@auth/AUTH_SHOPIFY_SUCCESS': {
        draft.store = action.payload.store
      }
      case '@auth/PERMISSIONS_SHOPIFY_SUCCESS': {
        draft.store = action.payload.store
      }
      default:
    }
  });
} 