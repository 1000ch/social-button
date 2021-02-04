🚨 Please use [`twitter-button`](https://github.com/1000ch/twitter-button) and [`facebook-button`](https://github.com/1000ch/facebook-button) instead.

# social-button [![devDependency Status](https://david-dm.org/1000ch/social-button/dev-status.svg)](https://david-dm.org/1000ch/social-button?type=dev)

Social Buttons as Web Components.

## Install

Using npm:

```bash
$ npm install social-button
```

## Usage

Import and register scripts.

```html
<script type="module">
import { TwitterButton, FacebookButton } from 'https://unpkg.com/social-button';

customElements.define('twitter-button', TwitterButton);
customElements.define('facebook-button', FacebookButton);
</script>
```

## Twitter Button

```html
<twitter-button></twitter-button>
```

- `type` **follow** / **share** / **hashtag** / **mention**
- `width`
- `height`
- `user`
- `text`
- `hashtag`

## Facebook Button

```html
<facebook-button></facebook-button>
```

- `layout` **standard** / **box_count**
- `width`
- `height`
- `href` URL to like or share.

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
