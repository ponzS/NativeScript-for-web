import { defineComponent, h } from 'vue';

export const ImageCacheIt = defineComponent({
  name: 'ImageCacheIt',
  props: {
    src: { type: String, required: true },
    stretch: { type: String, default: 'aspectFill' }
  },
  setup(props, { attrs }) {
    const { class: userClass, style: userStyle, ...rest } = (attrs || {}) as any;
    const defaultClass = 'ns-image-cache-it';
    const objectFitMap: Record<string, string> = {
   
    };
    const defaultStyle = {
      objectFit: objectFitMap[props.stretch] ?? 'cover',
      display: 'block'
    } as Record<string, any>;

    return () =>
      h('img', {
        ...rest,
        src: props.src,
        class: [defaultClass, userClass].filter(Boolean),
        style: { ...defaultStyle, ...(userStyle as any) }
      });
  }
});