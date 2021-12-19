export const SaleBannerState$ = (state) => state.SaleBanner.isShow;
export const CollectionDialogState$ = (state) => state.CollectionDialog.isShow;

//#region Account
export const AccountState$ = (state) => state.Account;

export const AccountMenuState$ = (state) => state.AccountMenu;
export const OrderStatusState$ = (state) => state.OrderStatus.data;

//#endregion

export const SizeGuideDialogState$ = (state) => state.SizeGuideDialog.isShow;
export const ShoppingCartDrawerState$ = (state) =>
  state.ShoppingCartDrawer.isShow;
