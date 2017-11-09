export default (theme) => ({
  root: {
    padding: 10,
  },

  event: {
  },

  pagination: {
    display: 'flex',
    justifyContent: 'center',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 33%)',
    gridTemplateRows: 'repeat(3, 33%)',
    gridColumnGap: 10,
    gridRowGap: 10,
    marginBottom: 10,
  }
});
