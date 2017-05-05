// - Import components
var uuid = require('uuid');
var moment = require('moment');

// - Import action types
import * as types from 'actionTypes'


// - Default State
var defaultState = []

// - Post reducer

export var postReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.ADD_IMAGE_POST:
    return[
      ...state,
          {
            id: uuid(),
            postTypeId: 1,
            creationDate: moment().unix(),
            deletationDate: undefined,
            score: 0,
            viewCount: 0,
            body: state.post.body,
            ownerUserId: state.post.ownerUserId,
            ownerDisplayName: state.post.ownerDisplayName,
            lastEditDate: undefined,
            tags: state.post.tags,
            commentCounter: 0,
            imageId:state.post.imageId,
            videoId:0,
            deleted:false

          }
    ];

    case types.ADD_VIDEO_POST:
    return[
      ...state,
          {
            id: uuid(),
            postTypeId: 2,
            creationDate: moment().unix(),
            deletationDate: undefined,
            score: 0,
            viewCount: 0,
            body: state.post.body,
            ownerUserId: state.post.ownerUserId,
            ownerDisplayName: state.post.ownerDisplayName,
            lastEditDate: undefined,
            tags: state.post.tags,
            commentCounter: 0,
            imageId:0,
            videoId: state.post.videoId,
            deleted:false

          }
    ];
    case types.ADD_POST:
    return[
      ...state,
          {
            id: uuid(),
            postTypeId: 3,
            creationDate: moment().unix(),
            deletationDate: undefined,
            score: 0,
            viewCount: 0,
            body: state.post.body,
            ownerUserId: state.post.ownerUserId,
            ownerDisplayName: state.post.ownerDisplayName,
            lastEditDate: undefined,
            tags: state.post.tags,
            commentCounter: 0,
            imageId:0,
            videoId:0,
            deleted:false
        }
    ];

    default:
    return state;

  }
}
