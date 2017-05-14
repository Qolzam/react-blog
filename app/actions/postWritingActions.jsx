// - Import post action types
import * as types from 'actionTypes'

// - Post actions
export const openPostWritePage = (writeStatus) => {
  return{
    type: types.OPEN_POST_WRITE_PAGE,
    writeStatus
  }
}

// - Set image on writing post page
export const imagePostWritePage = (image) => {
  return{
    type: types.IMAGE_POST_WRITE,
    image
  }
}

// - Set text on writing post page
export const textPostWritePage = (text) => {
  return{
    type: types.TEXT_POST_WRITE,
    text
  }
}

// - Set tags on writing post page
export const tagsPostWritePage = (tags) => {
  return{
    type: types.TAGS_POST_WRITE,
    tags
  }
}

// - Set post type on writing post page {image:1, video:2, normal:0}
export const typePostWritePage = (typePost) => {
  return{
    type: types.TYPE_POST_WRITE,
    typePost
  }
}

export const clearePostWritePage = () => {
  return{
    type: types.CLEAN_POST_WRITE_PAGE
  }

}
