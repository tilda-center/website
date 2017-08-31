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
      backgroundImage: 'url("")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '50% 100%',
      backgroundColor: 'red',
      height: '100vh',
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
    },
    title: {
      fontSize: '50px',
    },
  };
  return styles;
}

export default getStyles;
