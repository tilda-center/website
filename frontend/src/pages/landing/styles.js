function getStyles(theme) {
  const styles = {
    ...theme,
    root: {
      height: 300 - theme.appBar.height,
    },
    firstpage: {
      backgroundImage: 'url("https://static.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg")',
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
