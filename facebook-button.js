export default class FacebookButton extends HTMLElement {
  static get observedAttributes() {
    return [
      'layout',
      'width',
      'height',
      'href'
    ];
  }

  static get template() {
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

  connectedCallback() {
    const iframe = this.shadowRoot.querySelector('iframe');
    iframe.width = `${this.width}px`;
    iframe.height = `${this.height}px`;
    iframe.src = this.getInlineFrameSource();
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    const iframe = this.shadowRoot.querySelector('iframe');
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

  get width() {
    return this.getAttribute('width');
  }

  set width(newValue) {
    this.setAttribute('width', newValue);
  }

  get height() {
    return this.getAttribute('height');
  }

  set height(newValue) {
    this.setAttribute('height', newValue);
  }

  get action() {
    return this.getAttribute('action') || '';
  }

  set action(newValue) {
    this.setAttribute('action', newValue);
  }

  get colorscheme() {
    return this.getAttribute('colorscheme') || '';
  }

  set colorscheme(newValue) {
    this.setAttribute('colorscheme', newValue);
  }

  get href() {
    return this.getAttribute('href') || '';
  }

  set href(newValue) {
    this.setAttribute('href', newValue);
  }

  get font() {
    return this.getAttribute('font') || '';
  }

  set font(newValue) {
    this.setAttribute('font', newValue);
  }

  get layout() {
    return this.getAttribute('layout');
  }

  set layout(newValue) {
    this.setAttribute('layout', newValue);
  }

  get showfaces() {
    return this.getAttribute('showfaces') || '';
  }

  set showfaces(newValue) {
    this.setAttribute('showfaces', newValue);
  }

  getInlineFrameSource() {
    const src = `//www.facebook.com/plugins/like.php?href=${this.href}&send=false&layout=${this.layout}&amp;width=${this.width}&height=${this.height}` + `&show_faces=${this.showfaces}&font=${this.font}&colorscheme=${this.colorscheme}&action=${this.action}`;
    return decodeURIComponent(src);
  }
}
