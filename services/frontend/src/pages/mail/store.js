export default class MailStore {
  constructor(folders) {
    this.folders = folders[0]
    this.setFolders = folders[1]
  }

  send = async (to, subject, message, cc = '', bcc = '') => {
    const data = {
      to,
      subject,
      message,
    }
    if (cc !== '') { data.cc = cc }
    if (bcc !== '') { data.bcc = bcc }
    try {
      const response = await window.rest.post('/mail', data)
      const result = {
        ...response.data,
        ok: true
      }
      return result
    } catch (error) {
      return {
        ...error,
        ok: false,
      }
    }
  }

  fetchFolders = async () => {
    try {
      const response = await window.rest.get('/mail/folders')
      const result = {
        ...response.data,
        ok: true
      }
      this.setFolders(result)
      return result
    } catch (error) {
      return {
        ...error,
        ok: false,
      }
    }
  }
}
