import React from 'react'
import {
  Toolbar,
  Button,
  IconButton,
  List,
  Collapse,
} from '@material-ui/core'
import {
  Refresh,
  Delete,
  FolderOpen,
  Menu,
} from '@material-ui/icons'
import { withStore } from 'freenit'
import Template from 'templates/default/detail'
import {
  MailDir,
  MailThread,
} from 'components'


class Page extends React.Component {
  render() {
    return (
      <Template style={{}}>
        <Toolbar style={{ backgroundColor: "#eee", borderBottom: "1px solid #ccc" }}>
          <Button variant="outlined">
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
          <div style={{ backgroundColor: "#eee", borderRight: "1px solid #ccc" }}>
            <List disablePadding>
              <MailDir name="Inbox" />
              <MailDir name="Sent" />
              <MailDir name="Lists" />
              <Collapse in timeout="auto" unmountOnExit style={{ marginLeft: 10 }}>
                <List disablePadding>
                  <MailDir name="Tilda" />
                  <MailDir name="PySer" />
                </List>
              </Collapse>
            </List>
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
      </Template>
    )
  }
}


export default withStore(Page)
