[![License: MIT](https://img.shields.io/github/license/microsoft/semantic-kernel)](https://github.com/pravinchandankhede/microfrontend/blob/main/LICENSE)

# Micro Frontend
This repository contains the framework to develop Micro Frontends based on Angular, React, Vue and other frameworks. The repository demonstrates various ways of implementing the [Micro Frontend](https://en.wikipedia.org/wiki/Micro_frontend) architecture style in modern web applications.

The repository provides Micro Frontend host app created in different technology and variety of clients. It also demonstrates the usage of different libraries used during the implemention.

## Module Federation
This is based on the recent updates to the WebPack 5.0. You can find module federation reference [here](https://webpack.js.org/concepts/module-federation/). Its a easy to use and integrate with Angular apps and provide a good amount of support.

For the implementaiton we are using the famous [module federation](https://www.npmjs.com/package/@angular-architects/module-federation) package from [Angular Architects](https://github.com/angular-architects).

## Demo App
Please refer for a demo app [Link](https://agreeable-sand-05b276e0f.4.azurestaticapps.net/)

This repository contains various projects 

### [Module Federation](https://github.com/pravinchandankhede/microfrontend/tree/main/src/ModuleFederation)
This folder contains the Visual Studio solution to demonstrate the implementation of module federation method. It contains 3 projects

#### [Host](https://github.com/pravinchandankhede/microfrontend/tree/main/src/ModuleFederation/Hosts/AngularHost)
The Host demonstrate a Angular 18 Host that loads different clients from Clients folder. 

**Working Host Reference Implementation** [Link](https://agreeable-sand-05b276e0f.4.azurestaticapps.net/)

#### [Client](https://github.com/pravinchandankhede/microfrontend/tree/main/src/ModuleFederation/Clients)
The "Clients" folder contains mifro frontend apps based on Angular 17, 18, 19, React , Vue, etc.

- **Angular 18 Working Sample** [Link](https://green-river-0b3b28a0f.4.azurestaticapps.net/)
- **Angular 19 Working Sample** [Link](https://happy-coast-09c6d310f.4.azurestaticapps.net/)

#### [Library](https://github.com/pravinchandankhede/microfrontend/tree/main/src/ModuleFederation/Libraries/MFELibrary)
This projects contains the components and classes to facilitate the code sharing, reusability and interactivity between Host & Client.
1. Shared [Logging service](https://github.com/pravinchandankhede/microfrontend/blob/main/src/ModuleFederation/Libraries/MFELibrary/src/app/services/logger.service.ts).
2. [Event Hub](https://github.com/pravinchandankhede/microfrontend/tree/main/src/ModuleFederation/Libraries/MFELibrary/src/app/events) to facilitate communication between Host & Client
   
## Native Federation
You can use native federation which is the newest recommended way to build micro frontend in Angular.

### [Native Federation](https://github.com/pravinchandankhede/microfrontend/tree/main/src/NativeFederation)
This folder contains the Visual Studio solution to demonstrate the implementation of native federation method. It contains 3 projects

#### [Host](https://github.com/pravinchandankhede/microfrontend/tree/main/src/NativeFederation/Hosts/AngularHost)
The Host demonstrate a Angular 18 Host that loads different clients from Clients folder. 

#### [Client](https://github.com/pravinchandankhede/microfrontend/tree/main/src/NativeFederation/Clients)
The "Clients" folder contains mifro frontend apps based on Angular 17, 18, 19, React , Vue, etc.

#### [Library](https://github.com/pravinchandankhede/microfrontend/tree/main/src/NativeFederation/Libraries/MFELibrary)
This projects contains the components and classes to facilitate the code sharing, reusability and interactivity between Host & Client.
1. Shared [Logging service](https://github.com/pravinchandankhede/microfrontend/blob/main/src/NativeFederation/Libraries/MFELibrary/src/app/services/logger.service.ts).
2. [Event Hub](https://github.com/pravinchandankhede/microfrontend/tree/main/src/NativeFederation/Libraries/MFELibrary/src/app/events) to facilitate communication between Host & Client
