Intro to AngularJS in seven steps
===


##Goals

- Learn how to build web applications with Angular
- Understand Angular module architecture and data-binding
- Confidently use Angular expressions and directives
- Learn how to create Angular controllers
- Build simple Angular directive

##Intro

Brief *history* of web apps:

* First generation web apps: Super thin clients - fat servers.
* Gmail: The desktop is over. *Desktop apps that happen to run in a browser*
* The advent of JavaScript: Only programming language in every browser.
* Powerful Desktop computers and Google's V8
* Now: Fat Clients / thin servers

Recommended reading: [Microsoft is dead](http://www.paulgraham.com/microsoft.html)

**What is Angular?**

AngularJS is a full-featured SPA framework that lets you extend HTML vocabulary for your application. It takes the notion ov **MVC** and takes it to the client. It demotes the server to an API service and place for static content / HTML templates.

##Step 1 - setup

Fork & clone: 

	https://github.com/wdi-sf-fall/angular-in-seven-steps

	
Fire up webserver:

	 npm start
	 
Go to [home page](http://localhost:8000)


Inspect `app/index.html' and include angular library. Best place to get it is from [Google directly](https://developers.google.com/speed/libraries):

The latest release is 1.3.2:

`<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.2/angular.min.js"></script>`


		 
##Step 2 - directives

	git checkout two
	
Teach HTML new tricks.
	
In Angular, we add behavior to our HTML through directives. A directive is a marker on a HTML tag that tells Angular to run or reference some Javascript code.

The ngApp directive - denotes the beginning of an application, and everything inside its tags will have access to binding. It attaches the Application Module to the page.

Angular extends HTML with its own set of tags, called directives. Angular directives start with the prfies **ng-**, for example: 

`ng-app` turns ordinary HTML into an Angular application

	http://docs.angularjs.org/api/ng/directive/ngApp

`ng-model` binds an HTML element to a value / model		

More on directives:

	http://docs.angularjs.org/guide/directive
	http://www.cheatography.com/proloser/cheat-sheets/angularjs/

**Rule**: When using HTML tags/attributes, first look if angular offers a corresponding directive. If so, use it. For example:

- a tag, href attribute: `ng-href` (demo)
- img tag, src attribute: `ng-src` (demo)
- class attribute: `ng-class`
	
	
##Step 3 - expressions and filter



Filter

	http://docs.angularjs.org/api/ng/filter/filter
	
Angular expressions:

	http://docs.angularjs.org/guide/expression

Data binding:
	

##Step 4 - arrays and loops

1) setup array

```
 <div ng-init="names=['Yoni','James', 'Yin' ,'Matt','Tim','Joe', 'Jack', 'Pete', 'Melody', 'David', 'Jacob']">
```

2) ng-repeat

```
 <span ng-repeat="name in names | filter:query ">
        <li>{{ name }}
      </span>
```

3) add search box

	<p>Search: <input ng-model="query">


4) add filter

`| filter:query `

      

ngRepeat

	http://docs.angularjs.org/api/ng/directive/ngRepeat


  
##Step 5 - controller

Where's the JavaScript? In a controller ...

	http://docs.angularjs.org/guide/controller
	
- Moving students out of view into controller.
- Controller says welcome
- **hasSufficientFunds**
- Array notation

Declare app module:

	var demoApp = angular.module("demoApp", []);

Add a controller:

	demoApp.controller('SimpleController', function($scope) {
		//...
	});
		
Put #container div under the control of controller

	<div class="container" ng-controller="SimpleController">


Scope. The glue between model and view.

	http://docs.angularjs.org/guide/scope

##Step 6 - events

Exchange controller - euros/$$

Events

	http://tutorials.jenkov.com/angularjs/events.html

Watching models

	http://docs.angularjs.org/api/ng/type/$rootScope.Scope

layout example: ng-class

	http://docs.angularjs.org/api/ng/directive/ngClass

##Step 7 - modules

cretea a date filter .. more on modules ..


Modules and module injection

	http://docs.angularjs.org/guide/module

Custom Modules: A date formatter






