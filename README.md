Intro to AngularJS in seven steps
===


##Goals

- Learn how to build a basic Angular App
- Understand Angular MVVM and data-binding
- Confidently use Angular expressions and directives
- Learn how to create Angular controllers

##Intro

How did we get here?

**What is Angular?**

AngularJS is a client-side Javascript framework for adding interactivity to HTML. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly.



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

Moving students to controller.
Controller says welcome
move hasSufficient funds moves in controller
Array nottation

Declare app module:

	var demoApp = angular.module("demoApp", []);

Add a controller:

	demoApp.controller('SimpleController', function($scope) {
		//...
	});
		
Put #container div under the control of controller

	<div class="container" ng-controller="SimpleController">


Where's the JavaScript? Controller ...

	http://docs.angularjs.org/guide/controller

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






