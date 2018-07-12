import { shallow } from '@vue/test-utils';
import helpers from 'elr-vue-jest-helpers';
import App from '@/App.vue';

let wrapper;
let h;

beforeEach(() => {
  wrapper = shallow(App);
  h = helpers.init({
    wrapper,
    expect
  });
});

describe('App.vue', () => {
  it('renders correctly', () => {
    h.matches('.header-main');
  });
  it('renders a nav', () => {
    h.matches('#nav');
  });
});
