import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'

// Pages
import About from 'pages/about'
import BlogDetail from 'pages/blog/detail'
import BlogList from 'pages/blog/list'
import Dashboard from 'pages/dashboard'
import Landing from 'pages/landing'
import Login from 'pages/login'
import NoPage from 'pages/nopage'

import theme from 'theme'


export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/blog" component={BlogList} />
            <Route exact path="/blog/:year/:month/:day/:slug" component={BlogDetail} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route path="*" component={NoPage} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}
