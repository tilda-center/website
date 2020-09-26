import React from 'react'
import {
  Button,
  IconButton,
  Toolbar,
} from '@material-ui/core'
import {
  Delete,
  FolderOpen,
  Menu,
  Refresh,
} from '@material-ui/icons'
import { withStore } from 'freenit'
import { errors } from 'utils'
import Template from 'templates/default/detail'
import {
  MailCompose,
  MailList,
  Mailboxes,
} from 'components'


class Mail extends React.Component {
  state = {
    compose: false,
  }

  constructor(props) {
    super(props)
    this.fetch()
  }

  fetch = async () => {
    const { mail, notification } = this.props.store
    const response = await mail.select('INBOX')
    if (!response.ok) {
      const error = errors(response)
      notification.show(`Error fetching INBOX messages: ${error.message}`)
    }
  }

  openCompose = () => {
    this.setState({ compose: true })
  }

  closeCompose = () => {
    this.setState({ compose: false })
  }

  render() {
    const { mail } = this.props.store
    const { subject, fromAddr, to, message, type } = mail.email
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
          <div style={{ borderRight: "1px solid #ccc", overflow: 'auto' }}>
            <MailList />
          </div>
            {
              subject
                ? (
                  <div style={{ backgroundColor: "#eef" }}>
                    <div style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10, height: 100, borderBottom: "1px solid #ccc" }}>
                      <h3>
                        {subject}
                      </h3>
                      <div>
                        <a href={`mailto:${fromAddr}`}>
                          {fromAddr}
                        </a>
                        <span style={{ marginLeft: 10, color: "#aaa" }}>
                          (16 Jul 2020, 16:30)
                        </span>
                      </div>
                      <div style={{ color: "#555" }}>
                        To: {to}
                      </div>
                    </div>
                    <div style={{ backgroundColor: "#fff", height: "calc(100vh - 2 * 65px - 111px - 40px)", padding: 10, overflow: 'auto' }}>
                      {
                        type === 'text/html' || type === 'multipart/alternative'
                          ? <div dangerouslySetInnerHTML={{ __html: message }} />
                          : (
                            <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                              {message}
                            </pre>
                          )
                      }
                    </div>
                  </div>
                ) : null
            }
        </div>
        <MailCompose open={this.state.compose} onClose={this.closeCompose} />
      </Template>
    )
  }
}


export default withStore(Mail)
