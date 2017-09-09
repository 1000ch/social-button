export default class GooglePlusOne extends HTMLElement {
  static get observedAttributes() {
    return [
      'width',
      'height',
      'annotation',
      'href',
      'size'
    ];
  }

  constructor() {
    super();

    this.attachShadow({
      mode: 'open'
    });

    const div = document.createElement('div');
    div.className = 'g-plusone';
    div.setAttribute('data-annotation', this.annotation);
    div.setAttribute('data-href', this.href);
    div.setAttribute('data-size', this.size);
    div.setAttribute('data-width', this.width);
    div.setAttribute('data-height', this.height);
    this.shadowRoot.appendChild(div);

    const script = document.createElement('script');
    script.src = '//apis.google.com/js/plusone.js';
    script.async = true;
    this.shadowRoot.appendChild(script);
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    const div = this.shadowRoot.querySelector('div');
    div.setAttribute(`data-${attributeName}`, newValue);
  }

  get width() {
    return this.getAttribute('width') || 300;
  }

  set width(newValue) {
    this.setAttribute('width', newValue);
  }

  get height() {
    return this.getAttribute('height') || 20;
  }

  set height(newValue) {
    this.setAttribute('height', newValue);
  }

  get annotation() {
    return this.getAttribute('annotation') || 'bubble';
  }

  set annotation(newValue) {
    this.setAttribute('annotation', newValue);
  }

  get href() {
    return this.getAttribute('href') || '';
  }

  set href(newValue) {
    this.setAttribute('href', newValue);
  }

  get size() {
    return this.getAttribute('size') || 'standard';
  }

  set size(newValue) {
    this.setAttribute('size', newValue);
  }
}
