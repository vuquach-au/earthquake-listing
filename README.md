#The web page is to display the locations of earthquakes around the world on a map, details of the page are as follows:

Requirements:

    Web page is to integrate with an API to fetch earthquake information, link below.
    The page is to be mobile responsive.
    The page is to display a Google map, plotting the earthquake locations as annotations / pins. 
    When the user taps on an annotation it is to display the location and date/time in the callout.
    When the user clicks on the callout the earthquake's details are to be displayed in a separate panel. This panel is to display to the righthand side of the map on a desktop browser and underneath the map on a mobile browser.
    You are to provide a zip file of all source code as well as a README file detailing any important information.
    You are to supply a link to the webpage you build for this test running on a server.

Details of the earthquake API can be found here: https://earthquake.usgs.gov/earthquakes/feed/v1.0/

Feeds & Notifications - USGS Earthquake Hazards Program - earthquake.usgs.gov

USGS Earthquake Hazards Program, responsible for monitoring, reporting, and researching earthquakes and earthquake hazards

============================================##=======================================

#earthquake Website Displaying the location that happened the past 24 hours

A javascript package for displaying recent earthquake information on a webpage.

#Getting Started

First, you can provide URL specified in the index.html file and must return data in the USGS GeoJSON feed format.

If a predefined feed does not provide the exact sub-set of earthquake data, it is recommended one use the smallest feed that is a superset of the desired earthquakes, then provide a custom includeEvent method as an optional parameter to the constructor.

Next, add a container element to your HTML page where you would like to embed the widget.

...
<div id="map"></div>
...

Now include the jquery.min.js script on your page. Be sure you correctly reference the path to where you placed the script on your server.

...
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
...

#This webpage is using Moment Library to convert raw datetime data get from the API to normal DateTime Format
...
<script src="./moment.js"></script>
...

#All the javascript code of this site will be put in oneplace. Finally, write a tiny bit of Javascript in order to put the map into your page:

<script src="./index.js"></script>

#License

Unless otherwise noted, This software is in the public domain because it contains materials that originally came from the United States Geological Survey, an agency of the United States Department of Interior. For more information, see the official USGS copyright policy at http://www.usgs.gov/visual-id/credit_usgs.html#copyright

Dependent libraries found are distributed under the open source (or open source-like) licenses/agreements. Appropriate license aggrements for each library can be found with the library content.

Libraries used at runtime:
1. Moment: https://momentjs.com/guides/
2. Jquery 3.6: 

This website also supports mobile responsive for mobile device's screen that smaller than 380px such as Iphone X, Iphone 12, Samsung Galaxy S8...
