export default class FacebookButton extends HTMLElement {
  static get observedAttributes(): string[] {
    return [
      'layout',
      'width',
      'height',
      'href'
    ];
  }

  static get template(): string {
    return `
      <style>
        :host {
          display: inline-block;
          border: none;
          overflow: hidden;
        }
      </style>
      <iframe scrolling="no" frameborder="0" allowtransparency="true"></iframe>
    `;
  }

  constructor() {
    super();

    this.attachShadow({
      mode: 'open'
    }).innerHTML = FacebookButton.template;
  }

  connectedCallback(): void {
    const iframe = this.shadowRoot?.querySelector('iframe');
    if (!iframe) {
      return;
    }

    iframe.width = `${this.width}px`;
    iframe.height = `${this.height}px`;
    iframe.src = this.getInlineFrameSource();
  }

  attributeChangedCallback(attributeName: string, oldValue: string, newValue: string): void {
    const iframe = this.shadowRoot?.querySelector('iframe');
    if (!iframe) {
      return;
    }

    switch (attributeName) {
      case 'width':
      case 'height':
        iframe[attributeName] = `${newValue}px`;
        break;
      default:
        iframe.src = this.getInlineFrameSource();
        break;
    }
  }

  get width(): string | null {
    return this.getAttribute('width');
  }

  set width(value: string | null) {
    if (!value) {
      return;
    }

    this.setAttribute('width', value);
  }

  get height(): string | null {
    return this.getAttribute('height');
  }

  set height(value: string | null) {
    if (!value) {
      return;
    }

    this.setAttribute('height', value);
  }

  get action(): string | null {
    return this.getAttribute('action') || '';
  }

  set action(value: string | null) {
    if (!value) {
      return;
    }

    this.setAttribute('action', value);
  }

  get colorscheme(): string | null {
    return this.getAttribute('colorscheme') || '';
  }

  set colorscheme(value: string | null) {
    if (!value) {
      return;
    }

    this.setAttribute('colorscheme', value);
  }

  get href(): string | null {
    return this.getAttribute('href') || '';
  }

  set href(value: string | null) {
    if (!value) {
      return;
    }

    this.setAttribute('href', value);
  }

  get font(): string | null {
    return this.getAttribute('font') || '';
  }

  set font(value: string | null) {
    if (!value) {
      return;
    }

    this.setAttribute('font', value);
  }

  get layout(): string | null {
    return this.getAttribute('layout');
  }

  set layout(value: string | null) {
    if (!value) {
      return;
    }

    this.setAttribute('layout', value);
  }

  get showfaces(): string | null {
    return this.getAttribute('showfaces') || '';
  }

  set showfaces(value: string | null) {
    if (!value) {
      return;
    }

    this.setAttribute('showfaces', value);
  }

  getInlineFrameSource(): string {
    const src = `https://www.facebook.com/plugins/like.php?href=${this.href}&send=false&layout=${this.layout}&amp;width=${this.width}&height=${this.height}` + `&show_faces=${this.showfaces}&font=${this.font}&colorscheme=${this.colorscheme}&action=${this.action}`;

    return decodeURIComponent(src);
  }
}
