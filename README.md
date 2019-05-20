# Webpack Code Splitting

This project is intended demonstrate various ways of integrating dynamic imports; which should help to demonstrate how `import()` behaves.

## Projects

### no-splitting
Provides a baseline project with no dynamic import.

### vendor-split
Builds upon `no-splitting` by including vendor chunk splitting.

### basic-dynamic-import
A barebones implementation of the `import()` syntax.

### basic-dynamic-import-cleaner
A refactored version of `basic-dynamic-import` to demonstrate how the webpack chunk splitting syntax can be consolidated to a single location.

### how-about-lodash
Takes a look at breaking out a sub-component of a package with `import()`.

### how-about-in-jsx
Takes a look at providing a wrapper around `import()` to allow React components to utilize asynchronous imports.

### index-mixed-dynamic-and-static
Takes a look at importing and exporting Lazy components and standard ES6 imports side-by-side. `<Loading />` is not lazy loaded by `<Test />` is.
