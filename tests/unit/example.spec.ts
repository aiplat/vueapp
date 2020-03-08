import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';

describe('Header.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'new message';
    const wrapper = shallowMount(Header, {
      propsData: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
