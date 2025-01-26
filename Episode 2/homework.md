## Difference between dev dependency and normal dependency (npm install package -d and npm install package) ?

## In package-lock.json, when you install a package, what is integrity  ?
Its working locally, but not working on production, this type of scenario often arises. To avoid this, package-lock.json keeps a hash to verify that whatever the version available in local is the same version deployed to the production.

## difference between package-lock.json and package.json.

## what are node modules ?
npm fetches the package to our project. but why are there so many packages(dependencies)? suppose we installed parcel (because our project is dependent on parcel pckg). now parcel might be dependent on other dependencies. These other dependencies might be dependent on other dependencies. This is called transitive dependency. 

## How does npm knows that parcel has its own dependencies ?
parcel has its own package.json file where the dependencies are written.

## How many package.json files in our project ?
there are several package.json files in our project. each dependency inside node modules folder has its own package.json file.

## Transitive dependency vs Direct dependency
A "direct dependency" is a dependency that is explicitly declared by a project, while a "transitive dependency" is a dependency that is brought in automatically because of another dependency that your project directly relies on. 


## should we push node modules to production or git ?
no! the best practice is to put it in .gitignore

## should we push package.json and package-lock.json to git ?
yes, with that we can regenerate all the node modules.

## browsers scripts cannot have imports or exports.
browser script means javascript file. javascript doesn't support import or export(cannot understand what is import). since in the index.html, we used <script src="App.js"></script>, now App.js file has import statement in it, but browser scripts cannot have it. so we have to mention the type="module" inside script tag. read it more [here](https://www.digitalocean.com/community/tutorials/understanding-modules-and-import-and-export-statements-in-javascript)

## what is Hot Module Replacement ?
HMR means parcel reloads the website whenever we make changes to any file and save it in the project. Parcel uses file watching algorithm which is written in C++ to execute HMR. Parcel keeps an eye on every file and as soon as we make changes and save the file, it re builds the project.!!

- Some Key features of parcel :
    - Caching - Builds faster for every similar saves(you can see in the folder .parcel-cache)
    - Dev build
    - Local server
    - HMR or Hot reloading
    - File watching algorithm
    - Image Optimization (most exp operation in web browser is loading an img, but parcel does img optimization as well)
    - Minification of files 
    - Compressing files
    - bundling
    - consistent hasing
    - code splitting
    - differential bundling (your web app can be opened with google chrome, fire fox, mobile browser, older browsers, etc all this possible with differential bundling. different bundle for different type of browser)
    - Tree shaking (removes unused code)
    - different dev and prod bundles
