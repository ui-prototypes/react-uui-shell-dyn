# react-uui-shell-dyn
A prototype UI showing some React features plus dynamic creation of a lot of stuff

#Installation
In order to get things running you'll need to install a few dependencies
 * Node.js & NPM (0.10 or later). Node.js is used to run the demo server and to run all the dev toolchain related    utilities.
 * To install everything on ubuntu 14.x, run the following commands
```
# install nodejs, npm & dependancies
sudo apt-get install nodejs nodejs-legacy build-essential npm

# install gulp (the build tool) globally
sudo npm install gulp -g

# install the packages to run the demo. Run this command from the root of the react-uui-shell folder 
# (NOTE: a lot of these packages are for the dev toolchain, the amount of packages required to 
# actually run a production build is less)
npm install
```

 
#Running 
Gulp is used to run the various build & run related tasks. The tasks themselves are defined in gulpfile.js. To run the tasks below, make sure you are cd'ed into the root of the react-uui-shell folder.
 * Running unit tests: ```gulp tests```. If you want the test runner to listen for changes to source files and run automatically, run ```gulp testsw```.
 * Running the server in development mode: ```gulp serverw```. The server will automatically restart when changes are detected to the backend source files. NOTE: the server uses ports 3000 & 3001 by default so make sure these are unused
 * Running in production mode:
```
NODE_ENV=production gulp build
NODE_ENV=production gulp server
```
 * NOTE: When switching between dev and production builds run ```gulp clean```.
 * To view the demo once the server is running, go to http://localhost:3000

