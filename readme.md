# [`<social-button>`](http://1000ch.github.io/social-button)

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
<twitter-button type="follow" user="1000ch"></twitter-button>
<twitter-button type="share" user="1000ch" href="http://github.com/1000ch/social-button" text="Social Button as Web Components"></twitter-button>
<twitter-button type="hashtag" text="Social Button as Web Components" hashtag="webcomponents"></twitter-button>
<twitter-button type="mention" user="1000ch"></twitter-button>
<facebook-button href="http://1000ch.net" layout="box_count" height="80"></facebook-button>
<facebook-button href="http://1000ch.net" layout="standard"  height="50" width="250"></facebook-button>
<gplus-one href="http://1000ch.net" lang="en-US"></gplus-one>
<gplus-follow href="https://plus.google.com/+ShogoSensui" lang="en-US"></gplus-follow>
```

Or you can load custom elements individually.

```html
<link rel="import" href="twitter-button.html">
<link rel="import" href="facebook-button.html">
<link rel="import" href="gplus-follow.html">
<link rel="import" href="gplus-one.html">
```

## License

MIT: http://1000ch.mit-license.org
