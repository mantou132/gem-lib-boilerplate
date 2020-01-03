import { html, GemElement } from '@mantou/gem';

import './elements/stat';

class Lib extends GemElement {
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

customElements.define('lib-root', Lib);
