import { describe, expect, it } from 'vitest';
import { useActionBar as useActionBarAngular, useFrame as useFrameAngular, usePage as usePageAngular } from '../angular/composables';
import { useActionBar as useActionBarVue, useFrame as useFrameVue, usePage as usePageVue } from '../core/composables';

describe('framework composables parity', () => {
	it('useActionBar behaves consistently', () => {
		const a = useActionBarAngular();
		const v = useActionBarVue();
		a.setTitle('x');
		v.setTitle('x');
		expect(a.title.value).toBe('x');
		expect(v.title.value).toBe('x');
	});

	it('usePage behaves consistently', () => {
		const a = usePageAngular();
		const v = usePageVue();
		a.hide();
		v.hide();
		expect(a.isVisible.value).toBe(false);
		expect(v.isVisible.value).toBe(false);
		a.show();
		v.show();
		expect(a.isVisible.value).toBe(true);
		expect(v.isVisible.value).toBe(true);
	});

	it('useFrame behaves consistently', () => {
		const a = useFrameAngular();
		const v = useFrameVue();
		a.push('p1');
		v.push('p1');
		a.push('p2');
		v.push('p2');
		expect(a.stack.value).toEqual(['p1', 'p2']);
		expect(v.stack.value).toEqual(['p1', 'p2']);
		expect(a.pop()).toBe('p2');
		expect(v.pop()).toBe('p2');
	});
});

