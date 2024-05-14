/* AuthState */
export interface AuthState {
  routeName: string;
  authButtonList: {
    [key: string]: string[];
  };
  authMenuList: Menu.MenuOptions[];
}

/* UserState */
export interface UserState {
  token: string;
  userInfo: { name: string };
}
