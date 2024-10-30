import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import bai1 from '@/components/bai1.vue';

describe('bai1.vue', () => {
  it('renders correctly with given props', () => {
    const name = 'Alice';
    const age = 30;
    const wrapper = mount(bai1, {
      props: { name, age },
    });

    expect(wrapper.find('h1').text()).toBe(`Hello, ${name}!`);
    expect(wrapper.find('p').text()).toBe(`You are ${age} years old.`);
  });

  it('renders correctly without age prop', () => {
    const name = 'Bob';
    const wrapper = mount(bai1, {
      props: { name },
    });

    expect(wrapper.find('h1').text()).toBe(`Hello, ${name}!`);
    expect(wrapper.find('p').exists()).toBe(false);
  });
});
