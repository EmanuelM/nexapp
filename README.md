# Nexapp
A simple webapp template, made in HTML - JS - CSS

1. [Initialize the app](#init)
2. [Router](#router)
3. [Pages](#pages)
4. [Panel](#panel)
5. [Toasts](#toasts)
6. [Loader](#loader)

---

### <a name="init">Initialize the app</a>
After download, we need to init our app

`var app = new Nexapp(name, version)`

It has the possibility to define the name and the current version of the project. Later, this options can be accessible by

- **app.name** _(string)_
- **app.version** _(string)_

---

### <a name="router">Router</a>

Extended [Finch.js](https://github.com/stoodder/finchjs) router, with some options and functions renamed

`1. Router.add(route_name, callback)`
_(Finch.route renamed)_

**Events**

- Finch.js `teardown: () =>` renamed to `remove: () =>`

`2. Router.go(route_name, params, doUpdate)`
_(Finch.navigate renamed)_

`3. Router.listen(callback)`
_(Finch.listen extension)_

Added a callback every time route change

**The rest of the `Router` methods and options are the same of `Finch.js`, you can find the correct documentation on [Finch.js docs](http://rickallen.me/finchjs/#docs/overview)**

---

### <a name="pages">Pages</a>

Import pages by `<page></page>` tag in `index.html`.
You must define the dir for your template on the `src=".."` attribute

`1. app.pages.load()`

Called automatically when you init the Nexapp class.
Load pages from tags `<page src="..."></page>`

`2. app.pages.show(page)`
- **page** _(string)_

Show a page, named by `data-page` attribute

`3. app.pages.hide(page)`
- **page** _(string)_

Hide a specific page

`4. app.pages.hideAll()`

Hide all pages

---

### <a name="panel">Panel</a>

Right side panel. This has the possibility to be the main menu of our app

`1. app.panel.open()`

To open the panel

`2. app.panel.close()`

To close the panel, 350ms of animation

---

### <a name="toasts">Toasts</a>

Bottom notification from multiple purpose

`1. app.toast.show(icon, text)`

- **icon** _(html)_, left side icon/char
- **text** _(string)_: text to display

`2. app.toast.hide()`

Hide toast after 5 seconds. This is automatically called on `app.toast.show(icon, text)`

---

### <a name="loader">Loader</a>

Full screen circle loader

`1. app.loader.show()`

Show loader

`2. app.loader.hide()`

Hide loader