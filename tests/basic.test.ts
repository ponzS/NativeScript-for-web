import { describe, it, expect } from 'vitest';
import { NativeScriptWebPlugin, Label, Button, GridLayout } from '../src/vue';

describe('nativescript-web-adapter', () => {
  it('exports plugin with install', () => {
    expect(typeof NativeScriptWebPlugin).toBe('object');
    expect(typeof (NativeScriptWebPlugin as any).install).toBe('function');
  });

  it('exports core components', () => {
    expect(Label.name).toBe('NSLabel');
    expect(Button.name).toBe('NSButton');
    expect(GridLayout.name).toBe('NSGridLayout');
  });
});