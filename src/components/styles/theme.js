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
    colorDanger: '#ad0c0c',
    colorAlert: '#c4c408'
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
    colorDanger: '#ad0c0c',
    colorAlert: '#c4c408'
  },
  sea: {
    id: 'sea',
    name: 'Sea',
    mainThemeColor: '#32a885',
    boxShadow: '0px 2px 20px -10px #999',
    textGreyColor: '#777',
    textColor: '#111',
    textColorInverted: '#fff',
    textColorWhite: '#fff',
    colorDanger: '#ad0c0c',
    colorAlert: '#c4c408'
  },
  blue: {
    id: 'blue',
    name: 'Blue',
    mainThemeColor: '#1b77e0',
    boxShadow: '0px 2px 20px -10px #999',
    textGreyColor: '#777',
    textColor: '#111',
    textColorInverted: '#fff',
    textColorWhite: '#fff',
    colorDanger: '#ad0c0c',
    colorAlert: '#c4c408'
  },
}

export const getTheme = (id = 'violet') => {
  const chosenTheme = Object.values(theme).find(item => item.id === id)

  return chosenTheme
}

export const getThemeData = () => {
  const themeData = Object.values(theme).map(item => {
    return {
      id: item.id,
      name: item.name,
      mainColor: item.mainThemeColor
    }
  })
  return themeData
  // console.log(themeData)
}
