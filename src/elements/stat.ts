import { html, GemElement, customElement } from '@mantou/gem';

interface State {
  fps: number;
}

@customElement('lib-stat')
export default class Stat extends GemElement<State> {
  state = {
    fps: 0,
  };
  mounted() {
    let frames = 0;
    let timer = 0;
    let start = 0;
    const animate = (time: number) => {
      frames++;
      timer = requestAnimationFrame(animate);
      if (time >= start + 1000) {
        this.setState({ fps: Math.round((frames * 1000) / (time - start)) });
        start = time;
        frames = 0;
      }
    };
    animate((start = performance.now()));
    return () => {
      cancelAnimationFrame(timer);
    };
  }
  render() {
    const { fps } = this.state;
    return html`
      fps: ${fps}
    `;
  }
}
