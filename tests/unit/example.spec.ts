import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Header1 from '@/components/aiplat/Header1.vue';

describe('Header1.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'new message';
    const wrapper = shallowMount(Header1, {
      propsData: { title },
    });
    expect(wrapper.text()).to.include(title);
  });
});
