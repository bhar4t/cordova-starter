Hybrid App using Cordova

---

OS:

    Linux: Ubuntu 20.04

    Mac:

---

Requirements:

> Node: v12.18.1

> NPM: 6.14.9

> Cordova: 10.0.0

> cordova-android@9.0.0

> Gradle 6.4.1

> cordova requirements

    Requirements check results for android:
    Java JDK: installed 1.8.0
    Android SDK: installed true
    Android target: installed android-30,android-29,android-28
    Gradle: installed /usr/local/gradle/bin/gradle

```html
<!-- Add the following <meta> tags in the <head> of public/index.html. -->
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;"
/>
<meta name="format-detection" content="telephone=no" />
<meta name="msapplication-tap-highlight" content="no" />
<meta
  name="viewport"
  content="initial-scale=1, width=device-width, viewport-fit=cover"
/>
```

---

```html
<!-- Add the following script tag just before </body> in public/index.html -->
<script src="cordova.js" type="text/javascript"></script>
```

---

The index.html file within the build folder has absolute paths for loading the assets (js, css files). Since the HTML file is going to run directly in webview rather than being hosted on a server the assets need to be accessed using a relative path. For e.g. we want

`<script src=”./foo/bar.js”></script>`

instead of

`<script src="/foo/bar.js></script>`

---

The solution for this is to add a “homepage” property in package.json as metioned below. Adding this would make sure that the assets are fetched using a relative path in the index.html file.

```
"homepage": "./"
```

---

Basic Plugins:

1.  cordova-plugin-device
2.  cordova-plugin-firebasex

    The cordova-android@9 platform adds implicit support for AndroidX so (if you haven't already done so) you should update to this platform version:

    `cordova platform rm android && cordova platform add android@latest`

    and enable AndroidX by setting the following preference in your config.xml:

    `<preference name="AndroidXEnabled" value="true" />`
