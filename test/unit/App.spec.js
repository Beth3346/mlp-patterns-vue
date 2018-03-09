import { shallow } from '@vue/test-utils'
import App from '@/App.vue'

let wrapper

beforeEach(() => {
  wrapper = shallow(App)
})

describe('App.vue', () => {
  it('renders correctly', () => {
    expect(wrapper.find('.header-main').html()).toMatchSnapshot()
  })
  it('renders a nav', () => {
    expect(wrapper.find('#nav').html()).toMatchSnapshot()
  })
})
