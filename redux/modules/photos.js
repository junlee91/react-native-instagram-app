// imports

import { API_URL } from "../../constants";
import { actionCreators as userActions } from "./user";

// Actions

const SET_FEED = "SET_FEED";
const SET_SEARCH = "SET_SEARCH";
const SET_PHOTO = "SET_PHOTO";

// Action Creators

function setFeed(feed) {
  return {
    type: SET_FEED,
    feed
  };
}

function setSearch(search) {
  return {
    type: SET_SEARCH,
    search
  };
}

function setPhoto(photoDetail) {
  return {
    type: SET_PHOTO,
    photoDetail
  }
}

// API Actions

function getFeed() {
  return (dispatch, getState) => {
    const { user: { token } } = getState();

    fetch(`${API_URL}/images/`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logout());
        } else {
          return response.json();
        }
      })
      .then(json => {
        dispatch(setFeed(json));
      });
  };
}

function getPhoto(photoId){
  return (dispatch, getState) => {
    const { user: {token }} = getState();

    fetch(`${API_URL}/images/${photoId}/`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logout());
        } else {
          return response.json();
        }
      })
      .then(json => {
        dispatch(setPhoto(json));
      });
  }
}


function getSearch() {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    fetch(`${API_URL}/images/search/`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logOut());
        } else {
          return response.json();
        }
      })
      .then(json => dispatch(setSearch(json)));
  };
}

function searchByHashtag(hashtag) {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    fetch(`${API_URL}/images/search/?hashtags=${hashtag}`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logOut());
        } else {
          return response.json();
        }
      })
      .then(json => dispatch(setSearch(json)));
  };
}

function likePhoto(photoId) {
  return (dispatch, getState) => {
    const { user: { token } } = getState();

    return fetch(`${API_URL}/images/${photoId}/likes/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logout());
      } else if (response.ok) {
        return true;
      } else {
        return false;
      }
    });
  };
}

function unlikePhoto(photoId) {
  return (dispatch, getState) => {
    const { user: { token } } = getState();

    return fetch(`${API_URL}/images/${photoId}/unlikes/`, {
      method: "DELETE",
      headers: {
        Authorization: `JWT ${token}`
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logout());
      } else if (response.ok) {
        return true;
      } else {
        return false;
      }
    });
  };
}

// Initial State

const initialState = {};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
    case SET_SEARCH:
      return applySetSearch(state, action);
    case SET_PHOTO:
      return applySetPhoto(state, action);
    default:
      return state;
  }
}

// Reducer Functions

function applySetFeed(state, action) {
  const { feed } = action;

  return {
    ...state,
    feed
  };
}

function applySetSearch(state, action) {
  const { search } = action;

  return {
    ...state,
    search
  };
}

function applySetPhoto(state, action) {
  const { photoDetail } = action;

  //console.log(photoDetail);
  return {
    ...state,
    photoDetail
  }
}

// Exports

const actionCreators = {
  getFeed,
  getPhoto,
  getSearch,
  searchByHashtag,
  likePhoto,
  unlikePhoto
};

export { actionCreators };

// Default Reducer Export

export default reducer;
