import React from 'react'
import {
  Toolbar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Checkbox,
} from '@material-ui/core'
import {
  Refresh,
  Delete,
  FolderOpen,
  Menu,
} from '@material-ui/icons'
import { withStore } from 'freenit'
import Template from 'templates/default/detail'


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
              <ListItem>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Sent" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Lists" />
              </ListItem>
              <Collapse in timeout="auto" unmountOnExit style={{ marginLeft: 10 }}>
                <List disablePadding>
                  <ListItem>
                    <ListItemText primary="Tilda" />
                  </ListItem>
                </List>
                <List disablePadding>
                  <ListItem>
                    <ListItemText primary="PySer" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </div>
          <div style={{ borderRight: "1px solid #ccc" }}>
            <List disablePadding>
              <ListItem>
                <Checkbox color="primary" />
                <ListItemText primary="Goran Mekić" secondary="Some Subject" />
              </ListItem>
              <ListItem>
                <Checkbox color="primary" />
                <ListItemText primary="John Doe" secondary="Who am I?" />
              </ListItem>
              <ListItem>
                <Checkbox color="primary" />
                <ListItemText primary="Jane Doe" secondary="Where am I?" />
              </ListItem>
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
