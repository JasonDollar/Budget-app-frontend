import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    id: string;
    name: string;
    mainThemeColor: string;
    boxShadow: string;
    boxShadowColor: string;
    textGreyColor: string;
    textColor: string;
    textColorInverted: string;
    textColorWhite: string;
    colorDanger: string;
    colorAlert: string;
    backgroundColor: string;
  }
}