export const SaleBannerState$ = (state) => state.SaleBanner.isShow;
export const CollectionDialogState$ = (state) => state.CollectionDialog.isShow;
export const ProductDialogState$ = (state) => state.ProductDialog.isShow;

//#region Account
export const AccountState$ = (state) => state.Account;

export const AccountMenuState$ = (state) => state.AccountMenu;
export const OrderStatusState$ = (state) => state.OrderStatus.data;

//#endregion

export const SizeGuideDialogState$ = (state) => state.SizeGuideDialog.isShow;
export const QuickViewDialogState$ = (state) => state.QuickViewDialog.isShow;
export const ShoppingCartDrawerState$ = (state) =>
  state.ShoppingCartDrawer.isShow;

export const MessageModalState$ = (state) => state.MessageModal.isShow;
