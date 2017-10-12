import background from './background.jpg';
import contactbackground from './contact.jpg';


function getStyles(theme) {
  const styles = {
    ...theme,
    root: {
      height: `calc(100vh - ${theme.appBar.height}px)`,
      background: 'rgba(255,255,255,.6)',
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
      backgroundColor: '',
      height: '100vh',
      padding: 30,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      osm: {
        height: '100%',
        width: '45%',
      },
      addr: {
        width: '45%',
      },
      text: {
        fontSize: '27px',
      },
    },
    contact: {
      backgroundImage: `url("${contactbackground}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      height: '100vh',
      overlay: {
        background: 'rgba(255,255,255,.6)',
        height: 'calc(100% - 60px)',
        padding: 30,
      },
    },
    iframe: {
      border: '1px solid rgb(0,188,212)',
      borderRadius: 15,
      '-webkit-mask-image': 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)', // eslint-disable-line max-len
      boxShadow: '0px 0px 15px rgba(0, 188, 212, 0.7)',
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
