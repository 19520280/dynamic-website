import { createAction, createActions } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

// export const updatePost = createActions({
//     updatePostRequest: (payload) => payload,
//     updatePostSuccess: (payload) => payload,
//     updatePostFailure: (err) => err,
//   });

export const showSaleBanner = createAction("SHOW_SALE_BANNER");
// export const hideModal = createAction('HIDE_CREATE_POST_MODAL');


export const showCollectionDialog = createAction("SHOW_COLLECTION_DIALOG");
export const hideCollectionDialog = createAction("HIDE_COLLECTION_DIALOG");
/*
  getType(getPosts.getPostSuccess)
  =>  
  {
    type: 'getPostSuccess',
    payload: {
      name: 'Test'
    }
  }
*/
