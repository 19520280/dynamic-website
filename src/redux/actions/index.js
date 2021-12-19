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

export const showSizeGuideDialog = createAction("SHOW_SIZEGUIDE_DIALOG");
export const hideSizeGuideDialog = createAction("HIDE_SIZEGUIDE_DIALOG");

export const showMixMatchDialog = createAction("SHOW_MIXMACTCH_DIALOG");
export const hideMixMatchDialog = createAction("HIDE_MIXMATCH_DIALOG");
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

//#region Account
export const getAccount = createAction("GET_ACCOUNT");
export const expandMenu = createAction("EXPAND_MENU");
export const collapseMenu = createAction("COLLAPSE_MENU");
export const setOrderStatus = createAction("SET_ORDER_STATUS");

//#endregion

export const showShoppingCartDrawer = createAction("SHOW_SHOPPING_CART_DRAWER");
export const hideShoppingCartDrawer = createAction("HIDE_SHOPPING_CART_DRAWER");
