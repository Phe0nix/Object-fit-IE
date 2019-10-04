# object-fit-ie
object-fit polyfill only for images in IE. Every other browsers (Chrome, Safari, Firefox, Opera, Edge) supported 'object-fit' property. It help to fit the image into the containers.

### Demo - https://phe0nix.github.io/object-fit-IE/

### This is only built for IE due to no support of `object-fit` css property.
It support from version 9. Below 9, still in progress.

### Syntax
`ieImg('image wrapper-name', 'object-position x', 'object-position y', 'object-fit')`;
1. `image wrapper name` - place your wrapper name here. see the example below - 
```
<div class='wrapper'>
  <img src='' alt=''>
 </div>
 ```
It will target the `.wrapper` class. Make sure, within the wrapper only one image will be there.

2. `object-position x` and `object-position y` - place the values for x and y axis. just like the `object-position` in css.
3. `object-fit` - place the `object-fit` value just like you did it in css.

### How it works
1. include the minified `js` file in your codebase.
2. call this - `ieImg('image wrapper-name', 'object-position x', 'object-position y', 'object-fit')`;
3. and see it in IE.
