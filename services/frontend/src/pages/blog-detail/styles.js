const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}


export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  date: {
    fontSize: '0.8em',
    color: '#777',
  },

  image: {
    float: 'left',
    height: 100,
    width: 100,
  },

  comment: {
    ...center,
    form: {
      ...center,
      flexDirection: 'column',
      maxWidth: 500,
      width: '100%',
    },
    button: {
      marginTop: 10,
    },
  },
}
