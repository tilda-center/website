const priceBox = {
  width: '100%',
  height: 800,
  margin: 5,
  textAlign: 'left',
  transition: 'all 0.3s ease-in-out',
  overflow: 'hidden',
}


export default (backgroundColor = null) => {
  const styles = {
    price: {
      ...priceBox,
      maxHeight: 64,
      focused: {
        ...priceBox,
        maxHeight: 750,
      },
    },

    content: {
      padding: 10,
    },

    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    title: {
      color: 'rgba(0, 0, 0, 0.4)',
      fontWeight: 'bold',
    },
  }
  if (backgroundColor) {
    styles.toolbar.backgroundColor = backgroundColor
  }
  return styles
}