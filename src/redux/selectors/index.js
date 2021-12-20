export const SaleBannerState$ = (state) => state.SaleBanner.isShow;

/* #region  Dialogs */
export const CollectionDialogState$ = (state) => state.CollectionDialog.isShow;
export const AddCollectionDialogState$ = (state) => state.AddCollectionDialog.isShow;
export const MixMatchDialogState$ = (state) => state.MixMatchDialog.isShow;
export const ChangeAddressDialogState$ = (state) => state.ChangeAddressDialog.isShow;

/* #endregion */
export const ProductDialogState$ = (state) => state.ProductDialog.isShow;

//#region Auth
export const LoginModalState$ = (state) => state.LoginModal;
export const RegisterModalState$ = (state) => state.RegisterModal;
export const OTPModalState$ = (state) => state.OTPModal;
export const WelcomeModalState$ = (state) => state.WelcomeModal;
//#endregion

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
