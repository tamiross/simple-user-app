export const styles = {
  base: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 32,
    '@media (min-width: 992px)': {
      marginTop: 50
    }
  },

  wrap: {
    flexWrap: 'wrap'
  },

  noWrap: {
    flexWrap: 'wrap',
    '@media (min-width: 992px)': {
      flexWrap: 'nowrap'
    }
  }
}