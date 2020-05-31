export function updateProfileRequest(data) {
    return {
      type: "@user/UPDATE_PROFILE_REQUEST",
      payload: { data }
    };
  }
  
  export function updateProfileSuccess(user, social) {
    return {
      type: "@user/UPDATE_PROFILE_SUCCESS",
      payload: { user, social }
    };
  }
  
  export function updateProfileFailure() {
    return {
      type: "@user/UPDATE_PROFILE_REQUEST"
    };
  }