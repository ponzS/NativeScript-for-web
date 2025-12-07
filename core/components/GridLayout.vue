<template>
  <div class="ns-grid" :style="gridStyle">
    <template v-for="(child, idx) in renderedChildren" :key="idx">
      <component :is="child" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots, cloneVNode } from 'vue';

defineOptions({ name: 'GridLayout' });
const props = defineProps<{ rows?: string; columns?: string }>();

function parseSegments(input?: string): string | undefined {
  if (!input) return undefined;
  const segToCss = (s: string) => {
    const t = s.trim();
    if (!t) return 'auto';
    if (t === '*') return '1fr';
    const star = t.match(/^(\d+)\*$/);
    if (star) return `${star[1]}fr`;
    if (t.toLowerCase() === 'auto') return 'auto';
    if (/^\d+$/.test(t)) return `${t}px`;
    return t; // passthrough for e.g. '1fr' or '50px'
  };
  return input.split(',').map(segToCss).join(' ');
}
const gridStyle = computed<Record<string, string>>(() => {
  const style: Record<string, string> = { display: 'grid' };
  const rows = parseSegments(props.rows);
  const cols = parseSegments(props.columns);
  if (rows) style.gridTemplateRows = rows;
  if (cols) style.gridTemplateColumns = cols;
  return style;
});

// 根据子元素 row/col/rowSpan/colSpan 设置 CSS Grid 定位
const slots = useSlots();
const renderedChildren = computed(() => {
  const nodes = slots.default ? slots.default() : [];
  return nodes.map((node: any) => {
    const props = (node && node.props) ? (node.props as Record<string, any>) : {};
    const parseNum = (v: any) => v === undefined || v === null ? undefined : Number(v);
    const row = parseNum(props.row);
    const col = parseNum(props.col);
    const rowSpan = parseNum(props.rowSpan);
    const colSpan = parseNum(props.colSpan);

    const style: Record<string, any> = {};
    if (row !== undefined && !Number.isNaN(row)) {
      const start = (row ?? 0) + 1; // CSS Grid 1-indexed
      const span = rowSpan && rowSpan > 0 ? rowSpan : 1;
      style.gridRow = `${start} / span ${span}`;
    }
    if (col !== undefined && !Number.isNaN(col)) {
      const start = (col ?? 0) + 1; // CSS Grid 1-indexed
      const span = colSpan && colSpan > 0 ? colSpan : 1;
      style.gridColumn = `${start} / span ${span}`;
    }

    const existingStyle = props.style as any;
    let mergedStyle: any;
    if (Array.isArray(existingStyle)) mergedStyle = [...existingStyle, style];
    else if (existingStyle && typeof existingStyle === 'object') mergedStyle = { ...existingStyle, ...style };
    else if (typeof existingStyle === 'string') mergedStyle = [existingStyle, style];
    else mergedStyle = style;

    return cloneVNode(node, { style: mergedStyle });
  });
});
</script>

<style scoped>
.ns-grid { 
  padding: 0px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
  /* flex: 1 1 auto;
  gap: 50px; */
 }
</style>