import background from './background.jpg';


function getStyles(theme) {
  const styles = {
    ...theme,
    root: {
      height: 300 - theme.appBar.height,
      background: 'rgba(255,255,255,.5)',
      fontSize: '30px',
    },
    firstpage: {
      backgroundImage: `url("${background}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      height: `calc(100vh - ${theme.appBar.height}px)`,
      color: 'white',
      fontSize: '40px',
    },
    secondpage: {
      backgroundImage: 'url("https://static.pexels.com/photos/57767/pexels-photo-57767.jpeg")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '50% 100%',
      height: '100vh',
    },
  };
  return styles;
}

export default getStyles;
