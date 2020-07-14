export default class TwitterButton extends HTMLElement {
  static get observedAttributes(): string[] {
    return [
      'type',
      'width',
      'height',
      'user',
      'text',
      'hashtag'
    ];
  }

  static get template(): string {
    return `
      <style>
        :host {
          display: inline-block;
        }
      </style>
      <iframe allowtransparency="true" frameborder="0" scrolling="no"></iframe>
    `;
  }

  constructor() {
    super();

    this.attachShadow({
      mode: 'open'
    }).innerHTML = TwitterButton.template;
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

  get type(): string | null {
    return this.getAttribute('type') || '';
  }

  set type(value: string | null) {
    if (!value) {
      return;
    }

    this.setAttribute('type', value);
  }

  get hashtag(): string | null {
    return this.getAttribute('hashtag') || null;
  }

  set hashtag(value: string | null) {
    if (!value) {
      return;
    }

    this.setAttribute('hashtag', value);
  }

  get href(): string | null {
    return this.getAttribute('href');
  }

  set href(value: string | null) {
    if (!value) {
      return;
    }

    this.setAttribute('href', value);
  }

  get text(): string | null {
    return this.getAttribute('text');
  }

  set text(value: string | null) {
    if (!value) {
      return;
    }

    this.setAttribute('text', value);
  }

  get user(): string | null {
    return this.getAttribute('user') || '';
  }

  set user(value: string | null) {
    if (!value) {
      return;
    }

    this.setAttribute('user', value);
  }

  getInlineFrameSource(): string {
    let src = '';

    switch (this.type) {
      case 'follow':
        src = `https://platform.twitter.com/widgets/follow_button.html?screen_name=${this.user}`;
        break;
      case 'share':
        src = `https://platform.twitter.com/widgets/tweet_button.html?url=${this.href}&via=${this.user}&text=${this.text}`;
        break;
      case 'hashtag':
        src = `https://platform.twitter.com/widgets/tweet_button.html?text=${this.text}&button_hashtag=${this.hashtag}&type=hashtag`;
        break;
      case 'mention':
        src = `https://platform.twitter.com/widgets/tweet_button.html?screen_name=${this.user}&type=mention`;
        break;
    }

    return decodeURIComponent(src);
  }
}
