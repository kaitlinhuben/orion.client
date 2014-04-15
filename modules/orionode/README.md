# Orion (6.0)
A minimal, single-user deployment of [Eclipse Orion](http://www.eclipse.org/orion/). Orion provides an extensible IDE that runs in your browser. It's particularly good for writing Javascript.

## Features
* Basic file management
* Source code editing
* Install plugins to customize your environment
* Shell command for launching a node app (type ```help node``` in the Shell page to find out more)
* Shell command for supporting npm
* Client caching for static content
* Gzip

## Usage
For full instructions, see the [Getting Started guide](http://wiki.eclipse.org/Orion/Node/Getting_started).

### Running the server
1. Run ```npm start orion``` or ```node [node_modules]/orion/server.js```.
2. Go to [localhost:8081](http://localhost:8081) to use Orion. (You can change the port by passing the ```-p``` option).

### Global installation
If you installed Orion as a global package with ```npm install -g orion```, you can run the command ```orion``` from any directory (rather than ```npm start orion``` as outlined above.)
Orion will then start using your current directory (or a directory you specify on the command  line) as the location.
See the [Getting Started guide](https://wiki.eclipse.org/Orion/Node/Getting_started#Using_a_global_installation_of_Orionode) for more details.

### Using Orion within a larger app
Use ```require('orion')``` to get access to our startServer function, which is suitable for use within a larger [connect](https://github.com/senchalabs/connect/) project:

```
var orion = require('orion');
var connect = require('connect');
var myapp = connect()
    .use(orion({ workspaceDir: '.myworkspace' }))
/* .use( additional handlers ) */
```

### Running the tests
We use [Mocha](https://github.com/visionmedia/mocha) for our tests. Run ```npm test``` or ```mocha```.

## License
Dual-licensed under the [Eclipse Public License v1.0](http://www.eclipse.org/legal/epl-v10.html) and the [Eclipse Distribution License v1.0](http://www.eclipse.org/org/documents/edl-v10.html).
