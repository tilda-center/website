export default class MailStore {
  constructor(detail) {
    this.detail = detail[0]
    this.setDetail = detail[1]
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
        ...response,
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
}
