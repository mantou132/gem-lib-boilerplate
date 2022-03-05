import { fixture, expect, nextFrame } from '@open-wc/testing';
import { html } from '@mantou/gem';

import type { Switch } from '../elements/switch';

import '../elements/switch';

describe('switch', () => {
  it('content', async () => {
    const el: Switch = await fixture(html` <lib-switch></lib-switch> `);
    await nextFrame();
    expect(el.content).to.equal('content');
  });
});
