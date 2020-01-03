import { html, GemElement, customElement } from '@mantou/gem';

import './elements/stat';

@customElement('lib-root')
export class Lib extends GemElement {
  render() {
    return html`
      <style>
        lib-stat {
          margin-top: 5em;
        }
      </style>
      <lib-stat></lib-stat>
    `;
  }
}
