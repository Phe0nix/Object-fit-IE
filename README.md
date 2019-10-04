# object-fit-ie
object-fit polyfill only for images in IE. Every other browsers (Chrome, Safari, Firefox, Opera, Edge) supported 'object-fit' property. It help to fit the image into the containers.

### Demo - [Demo Link](https://phe0nix.github.io/object-fit-ie/)

### This is only built for IE due to no support of `object-fit` css property.
It support from version 9. Below 9, still in progress.

### Syntax
```js
objectFitIE.ieImg('image wrapper-name', 'object-position x', 'object-position y', 'object-fit');
```

1. `image wrapper name` - place your wrapper name here. see the example below - 
```html
<div class='wrapper-name'>
  <img src='' alt=''>
 </div>
 ```
It will target the `.wrapper` class. Make sure, within the wrapper only one image will be there.

2. `object-position x` and `object-position y` - place the values for x and y axis. just like the `object-position` in css.
3. `object-fit` - place the `object-fit` value just like you put it in css.

### Usage
1. include the `js` file in your codebase.
2. call this before `</body>` -
```js
objectFitIE.ieImg('image wrapper-name', 'object-position x', 'object-position y', 'object-fit');
```
3. and see it in IE.
