Sam's Map App

Overview-
This application is designed to take in two places that a user inputs and then calculate the travel time and distance between the two. 
The map on the left hand side of the screen then displays the users origin (the O marker) and destination (the D marker) and under results gives a sentence
about origin, destination, distance, and duration for the journey (assuming the user is driving).

Search Functionality-
Using Google's map api, you have access to the autocomplete functionality that comes with Google maps. I have included this in both the origin and destination 
to better ease the process of finding the locations you want to go. Please choose only locations that come up in autocomplete as the application will not work 
with places that Goole Maps does not recognize or cannot find.

Results-
As stated above, after you enter two of the autocompleted locations the application will spit back out the travel distance and duration of the trip underneath "RESULTS".
The travel distance will always be in standard metric units (unless otherwise specified in the code) and the time will always be in normal time units (days, hours, minutes)


Intended Functionality-
Unfortunately, the data in the table is supposed to show a user their previous searches and populate with more rows as they generate more calculations, but this currently does not function.
I believe there is an issue with how the Google Distance Matrix API takes its input that prevented me from grabbing the information and populating the database the ways it should. 
I began by testing functionality with a local Mongo database, but the application could use a remote database hosted through Mongo's website to persist access via different computers and not 
only locally. The table would then fill with each calculation as the user continues to make more trips. Currently, this functionality is broken.



DEPLOYMENT-
Please ensure that you have obtained a Google key api with the "Distance Matrix API", "Geocoding API", "Maps Javascript API", "Places API" and "Directions API" enabled, otherwise
the application may not work as intended. I have marked in my code where your API key should go (and where mine currently is). I have decided to include my API with the release of this build
as I am using the "free trial" version of the Google Maps development kit and should not be charged once my trial of their code and software is up. Addtionally, had mongoDB actually worked,
I would have had you boot up a local copy of the database that I would have included (or the remote one) and connect to it via a connection string. The URL is currently local but that would have 
changed.