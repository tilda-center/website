import background from './background.jpg';


function getStyles(theme) {
  const styles = {
    ...theme,
    root: {
      height: `calc(100vh - ${theme.appBar.height}px)`,
      background: 'rgba(255,255,255,.5)',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rootsmall: {
      fontSize: '25px',
      marginTop: 10,
    },
    welcome: {
      backgroundImage: `url("${background}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      height: '100vh',
      color: 'white',
    },
    about: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundImage: 'url("")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '50% 100%',
      backgroundColor: 'rgb(0,188,212)',
      height: '100vh',
      padding: 30,
      text: {
        width: '50%',
        fontSize: '22px',
        color: 'white',
        textAlign: 'justify',
        textJustify: 'inter-word',
        paddingRight: 50,
      },
      image: {
        width: '50%',
      },
    },
    address: {
      backgroundImage: 'url("")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 50%',
      backgroundColor: 'green',
      height: '100vh',
    },
    contact: {
      backgroundImage: 'url("")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 50%',
      backgroundColor: 'red',
      height: '100vh',
    },
    iframe: {
      border: '1px solid black',
    },
    firstbutton: {
      marginTop: 30,
      flexbox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    title: {
      fontSize: '50px',
    },
  };
  return styles;
}

export default getStyles;
