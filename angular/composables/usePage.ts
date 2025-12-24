import { ref, type Ref } from './ref';

export interface PageState {
	isVisible: Ref<boolean>;
	show: () => void;
	hide: () => void;
}

export function usePage(): PageState {
	const isVisible = ref(true);

	function show() {
		isVisible.value = true;
	}

	function hide() {
		isVisible.value = false;
	}

	return {
		isVisible,
		show,
		hide,
	};
}

