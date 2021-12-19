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


export const showProductDialog = createAction("SHOW_PRODUCT_DIALOG");
export const hideProductDialog = createAction("HIDE_PRODUCT_DIALOG");


export const showSizeGuideDialog = createAction("SHOW_SIZEGUIDE_DIALOG");
export const hideSizeGuideDialog = createAction("HIDE_SIZEGUIDE_DIALOG");

export const showMixMatchDialog = createAction("SHOW_MIXMACTCH_DIALOG");
export const hideMixMatchDialog = createAction("HIDE_MIXMATCH_DIALOG");

export const showQuickViewDialog = createAction("SHOW_QUICKVIEW_DIALOG");
export const hideQuickViewDialog = createAction("HIDE_QUICKVIEW_DIALOG");
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

//#region Auth
export const openLoginModal = createAction("OPEN_LOGIN_MODAL");
export const closeLoginModal = createAction("CLOSE_LOGIN_MODAL");
export const openRegisterModal = createAction("OPEN_REGISTER_MODAL");
export const closeRegisterModal = createAction("CLOSE_REGISTER_MODAL");

//#endrigion

//#region Account
export const login = createAction("LOGIN");
export const logout = createAction("LOGOUT");

export const getAccount = createAction("GET_ACCOUNT");
export const expandMenu = createAction("EXPAND_MENU");
export const collapseMenu = createAction("COLLAPSE_MENU");
export const setOrderStatus = createAction("SET_ORDER_STATUS");

//#endregion

export const showShoppingCartDrawer = createAction("SHOW_SHOPPING_CART_DRAWER");
export const hideShoppingCartDrawer = createAction("HIDE_SHOPPING_CART_DRAWER");

export const setMessageModal = createAction("SET_MESSAGE_MODAL");
