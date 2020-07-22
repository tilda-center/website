import React from 'react'
import {
  Button,
  Dialog,
  Fab,
  IconButton,
  ListItem,
  ListItemText,
  Paper,
  TextField,
} from '@material-ui/core'
import {
  Add,
  Message,
  AttachFile,
} from '@material-ui/icons'
import { withStore } from 'freenit'


const initialState = {
  pane: 'compose',
  to: '',
  toError: '',
  cc: '',
  ccError: '',
  bcc: '',
  bccError: '',
  subject: '',
  subjectError: '',
  message: '',
}

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


class MailCompose extends React.Component {
  state = initialState

  setPane = (pane) => () => {
    this.setState({ pane })
  }

  setValue = (value) => (event) => {
    const error = `${value}Error`
    this.setState({
      [value]: event.target.value,
      [error]: '',
    })
  }

  close = () => {
    this.setState(initialState)
    this.props.onClose()
  }

  send = () => {
    let ok = true
    if (this.state.to === '') {
      ok = false
      this.setState({ toError: 'Can not be empty' })
    } else if (!emailRegex.test(this.state.to)) {
      ok = false
      this.setState({ toError: 'Invalid email address' })
    }
    if (this.state.cc !== '' && !emailRegex.test(this.state.cc)) {
      ok = false
      this.setState({ ccError: 'Invalid email address' })
    }
    if (this.state.bcc !== '' && !emailRegex.test(this.state.bcc)) {
      ok = false
      this.setState({ bccError: 'Invalid email address' })
    }
    if (this.state.message === '') {
      ok = false
      const { notification } = this.props.store
      notification.show('Message can not be empty')
    }
    if (!ok) { return }
    // Send the message
  }

  render() {
    const view = this.state.pane === 'compose'
      ? (
        <div style={{ padding: 10, flex: 1, marginBottom: 20 }}>
          <textarea
            style={{ resize: "none", width: "100%", height: "100%", border: "none" }}
            value={this.state.message}
            onChange={this.setValue('message')}
          />
        </div>
      ) : (
        <div style={{ flex: 1, position: "relative", padding: 10, display: "grid", gridTemplateColumns: "repeat(3, 130px)", alignItems: "start" }}>
          <Fab style={{ position: "absolute", bottom: 10, right: 10 }} color="primary">
            <Add />
          </Fab>
          <Paper style={{ width: 120, position: "relative" }}>
            <span style={{ position: "absolute", top: 0, right: 5, color: "#888" }}>
              x
            </span>
            <ListItem>
              <ListItemText primary="File name" secondary="100kB" />
            </ListItem>
          </Paper>
          <Paper style={{ width: 120, position: "relative" }}>
            <span style={{ position: "absolute", top: 0, right: 5, color: "#888" }}>
              x
            </span>
            <ListItem>
              <ListItemText primary="File name" secondary="100kB" />
            </ListItem>
          </Paper>
        </div>
      )
    return (
      <Dialog open={this.props.open}>
        <div style={{ height: "80vh", maxHeight: 700, display: "flex", flexDirection: "column" }}>
          <div style={{ padding: 20, backgroundColor: "#eee", borderBottom: "1px solid #aaa" }}>
            <TextField
              fullWidth
              autoFocus
              label={this.state.toError === '' ? 'To' : this.state.toError}
              error={this.state.toError !== ''}
              value={this.state.to}
              onChange={this.setValue('to')}
            />
            <div>
              <TextField
                style={{ width: "49%", marginRight: "2%" }}
                value={this.state.cc}
                label={this.state.ccError === '' ? 'Cc' : this.state.ccError}
                error={this.state.ccError !== ''}
                onChange={this.setValue('cc')}
              />
              <TextField
                style={{ width: "49%" }}
                value={this.state.bcc}
                label={this.state.bccError === '' ? 'Bcc' : this.state.bccError}
                error={this.state.bccError !== ''}
                onChange={this.setValue('bcc')}
              />
            </div>
            <TextField
              fullWidth
              label="Subject"
              value={this.state.subject}
              onChange={this.setValue('subject')}
            />
            <IconButton
              disabled={this.state.pane === 'compose'}
              onClick={this.setPane('compose')}
            >
              <Message />
            </IconButton>
            <IconButton
              disabled={this.state.pane === 'attachment'}
              onClick={this.setPane('attachment')}
            >
              <AttachFile />
            </IconButton>
          </div>
          {view}
          <div style={{ borderTop: "1px solid #aaa", display: "flex", alignItems: "center", justifyContent: "space-around", padding: 10, backgroundColor: "#eee" }}>
            <Button
              variant="outlined"
              style={{ backgroundColor: "white" }}
              color="primary"
              onClick={this.send}
            >
              Send
            </Button>
            <Button
              variant="outlined"
              style={{ backgroundColor: "white" }}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              style={{ backgroundColor: "white" }}
              onClick={this.close}
              color="secondary"
            >
              Close
            </Button>
          </div>
        </div>
      </Dialog>
    )
  }
}


export default withStore(MailCompose)
