import React from 'react'
import {
  Button,
  IconButton,
  List,
  Toolbar,
} from '@material-ui/core'
import {
  Delete,
  FolderOpen,
  Menu,
  Refresh,
} from '@material-ui/icons'
import { withStore } from 'freenit'
import Template from 'templates/default/detail'
import {
  MailCompose,
  MailThread,
  Mailboxes,
} from 'components'


class Page extends React.Component {
  state = {
    compose: false,
  }

  openCompose = () => {
    this.setState({ compose: true })
  }

  closeCompose = () => {
    this.setState({ compose: false })
  }

  render() {
    return (
      <Template style={{}}>
        <Toolbar style={{ backgroundColor: "#eee", borderBottom: "1px solid #ccc" }}>
          <Button variant="outlined" onClick={this.openCompose}>
            Compose
          </Button>
          <div style={{ flex: 1 }}>
            <IconButton>
              <Refresh />
            </IconButton>
            <IconButton>
              <Delete />
            </IconButton>
            <IconButton>
              <FolderOpen />
            </IconButton>
            <IconButton>
              <Menu />
            </IconButton>
          </div>
          <div style={{ color: "#aaa" }}>
            admin@example.com
          </div>
        </Toolbar>
        <div style={{ height: "calc(100vh - 2 * 65px)", display: "grid", gridTemplateColumns: "200px 300px auto" }}>
          <div style={{ backgroundColor: "#eee", borderRight: "1px solid #ccc", overflow: 'auto' }}>
            <Mailboxes />
          </div>
          <div style={{ borderRight: "1px solid #ccc" }}>
            <List disablePadding>
              <MailThread from="Goran Mekić" subject="Some Subject" />
              <MailThread from="John Doe" subject="Who am I?" />
              <MailThread from="Jane Doe" subject="Where am I?" />
            </List>
          </div>
          <div style={{ backgroundColor: "#eef" }}>
            <div style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10, height: 100, borderBottom: "1px solid #ccc" }}>
              <h3>
                Some Subject
              </h3>
              <div>
                <a href="mailto:admin@example.com">
                  admin@example.com
                </a>
                <span style={{ marginLeft: 10, color: "#aaa" }}>
                  (16 Jul 2020, 16:30)
                </span>
              </div>
              <div style={{ color: "#555" }}>
                To: someone@somewhere.com
              </div>
            </div>
            <div style={{ backgroundColor: "#fff", height: "calc(100vh - 2 * 65px - 111px - 40px)", padding: 10 }}>
              Email text
            </div>
          </div>
        </div>
        <MailCompose open={this.state.compose} onClose={this.closeCompose} />
      </Template>
    )
  }
}


export default withStore(Page)
