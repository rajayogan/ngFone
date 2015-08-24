# ngFone
AngularJS wrapper to get the market name of any phone using its model

Installation:

Using npm:

npm install ng-fone

Usage:

After installation please reference the ngFone.js file in your html.

<script src="<path to your ngFone.js"></script>

In your app.js file add the ngFone dependency.

angular.module('yourappname', ['ngFone'])

And in your controller

.controller('yourctrl', function($scope, fonename) {

... Your logic here...

var mobilename = fonename.getmobilename(model); //This will get an object. (Blank if model no not found)

//mobilename.marketname will have the market name of the device.
//mobilename.brandname will have the brand name of the device.
//mobilename.labelname will have the label name of the device.
//mobilename.Model will have the model.

})

I have given an example app for reference.

Special thanks to Jared Rummler and Charlie Youakim.

Suggestions are welcome.
