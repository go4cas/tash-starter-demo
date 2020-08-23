# TASH Starter Demo
Demo app, using the TASH stack stack starter

## What is included?
* [Tailwind.css](https://tailwindcss.com) for compoent styling
* [Alpine.js](https://github.com/alpinejs/alpine) for reactivity and component logic
* [Spruce](https://github.com/ryangjchandler/spruce) for application state management
* [Alpine Magic Helpers](https://github.com/KevinBatdorf/alpine-magic-helpers) for additinal sugar

You get the following out of the box:
* Apline.js, Spruce and Alpine Magic Helper libs loaded from CDN
* Customizable Tailwind.css
* Central application store, using Spruce
* Component logic split in separate files
* Dev server, with live reload
* Production ready build, including Tailwind.css custom build, js and css logic minification and static assets


## Getting Started
Clone this repo:
```bash
git clone https://github.com/go4cas/tash-starter-demo.git
```

### Installing

* From the project root folder, install all the development dependancies, by running
```bash
npm install
```
* To start the hot reload dev server, run
```bash
npm run watch
```

## Deployment

* Build your production ready assests, by running
```bash
npm run build
```
* Copy/push the content of the newly created `dist` folder to your webserver, using your favourite deployment tool

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/go4cas/tash-starter-demo/tags).

## Authors

* **Cas du Plessis** - [go4cas](https://github.com/go4cas)

See also the list of [contributors](https://github.com/go4cas/CONTRIBUTORS.md) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Ryan Chandler](https://github.com/ryangjchandler)
* [Kevin Batdorf](https://github.com/KevinBatdorf)
