const theme = {
  violet: {
    id: 'violet',
    name: 'Violet',
    mainThemeColor: '#636be0',
    boxShadow: '0px 2px 20px -10px #999',
    textGreyColor: '#777',
    textColor: '#111',
    textColorInverted: '#fff',
    textColorWhite: '#fff',
  },
  pumpkin: {
    id: 'pumpkin',
    name: 'Pumpkin',
    mainThemeColor: '#bf631d',
    boxShadow: '0px 2px 20px -10px #999',
    textGreyColor: '#777',
    textColor: '#111',
    textColorInverted: '#fff',
    textColorWhite: '#fff',
  }
}

export const getTheme = (id = 'violet') => {
  const chosenTheme = Object.values(theme).find(item => item.id === id)

  return chosenTheme
}
