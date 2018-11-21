import { mount } from 'enzyme'
import services from 'mock'
import Dashboard from '..'


it('dashboard page', () => {
  mount(services.createComponent(['/'], '/', Dashboard))
})
