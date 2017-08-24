import background from './background.jpg';


function getStyles(theme) {
  const styles = {
    ...theme,
    root: {
      height: `calc(100vh - ${theme.appBar.height}px)`,
      background: 'rgba(255,255,255,.5)',
      fontSize: '50px',
      textAlign: 'center',
    },
    rootsmall: {
      fontSize: '25px',
    },
    welcome: {
      backgroundImage: `url("${background}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      height: '100vh',
      color: 'white',
      fontSize: '40px',
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
  };
  return styles;
}

export default getStyles;
