# microfrontend
This repository contains the framework to develop Micro Frontends based on Angular, React, Vue and other frameworks

The Host>AngularHost demonstrate a Angular 18 Host that loads different clients from Clients folder. The "Clients" folder contains mifro frontend apps based on Angular 17, 18, 19, React , Vue, etc.

It highlights 2 major ways of achieving micro frontend
  1. Using module federation --> The underlying mechanism used is module federation based on WebPack 5.
  2. Using native federation --> This is based on the esbuild integration supported browser and is the recommended way for new development.
