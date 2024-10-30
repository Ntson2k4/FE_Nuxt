import { mount } from '@vue/test-utils';
import Bai5Component from '@/components/Bai5Component.vue';

describe('Bai5Component', () => {
    it('renders correctly', () => {
        const wrapper = mount(Bai5Component);
        expect(wrapper.text()).toContain('This is my lazy-loaded component!');
    });
});
