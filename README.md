# object-fit-ie
object-fit polyfill only for images in IE. Every other browsers (Chrome, Safari, Firefox, Opera, Edge) supported 'object-fit' property. It help to fit the image into the containers.

### Demo - [Demo Link](https://phe0nix.github.io/object-fit-ie/)

### This is only built for IE due to no support of `object-fit` css property.
It support from version 9. Below 9, still in progress.

### Syntax
```js
objectFitIE.ieImg('image-wrapper-class-name', 'object-position x', 'object-position y', 'object-fit');
```

1. `image-wrapper-class-name` - place your wrapper class name here. see the example below - 
```html
<div class='wrapper-name'>
  <img src='' alt=''>
 </div>
 ```
It will target the class `wrapper-name`. Make sure, within the wrapper only one image will be there.

2. `object-position x` and `object-position y` - place the values for x and y axis. just like the `object-position` in css.
3. `object-fit` - place the `object-fit` value just like you put it in css.

### Usage
1. create the wrapper of the image where you want to apply `object-fit` property. 
2. include the `object-fit-ie.js` file in your codebase.
3. call this before `</body>` -
```js
objectFitIE.ieImg('image-wrapper-class-name', 'object-position x', 'object-position y', 'object-fit');
```
4. and see it in IE browser.
