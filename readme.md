# [`<social-button>`](https://1000ch.github.io/social-button/)

Social Buttons as Web Components.

## Install

Using npm:

```bash
$ npm install social-button
```

Using bower:

```bash
$ bower install social-button
```

## Usage

Import `social-button.html`.

```html
<link rel="import" href="social-button.html">
```

Put tags such as following.

```html
<twitter-button type="follow" width="200" height="30" user="1000ch"></twitter-button>
<twitter-button type="share" width="80" height="30" user="1000ch" href="http://github.com/1000ch/social-button" text="Social Button as Web Components"></twitter-button>
<twitter-button type="hashtag" width="160" height="30" text="Social Button as Web Components" hashtag="webcomponents"></twitter-button>
<twitter-button type="mention" width="120" height="30" user="1000ch"></twitter-button>
<facebook-button href="http://1000ch.net" layout="standard" width="50" height="30"></facebook-button>
<facebook-button href="http://1000ch.net" layout="standard" width="250" height="30"></facebook-button>
<gplus-one href="http://1000ch.net" lang="en-US"></gplus-one>
<gplus-follow href="https://plus.google.com/u/0/+ShogoSensui" lang="en-US"></gplus-follow>
```

Or you can load custom elements individually.

```html
<link rel="import" href="twitter-button.html">
<link rel="import" href="facebook-button.html">
<link rel="import" href="gplus-follow.html">
<link rel="import" href="gplus-one.html">
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

## Google Plus One

```html
<gplus-one></gplus-one>
```

- `href` URL to plus one.

## Google Plus Follow

```html
<gplus-follow></gplus-follow>
```

- `href` URL to follow.

## License

MIT: http://1000ch.mit-license.org
