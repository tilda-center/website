import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, MemoryRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import store from 'store'
import theme from 'theme'

// Atoms
import protectedService from 'components/atoms/protected/service'


protectedService.refresh = jest.fn(() => ({
  expire: 900,
}))


const createComponent = (urls, path, Component) => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <MemoryRouter initialEntries={urls} initialIndex={0}>
        <Switch>
          <Route exact path={path} component={Component} />
        </Switch>
      </MemoryRouter>
    </MuiThemeProvider>
  </Provider>
)


export default {
  createComponent,
  protectedService,
}
