Multi Piano
Currently, there is a second Piano component in App.js that is commented out. If you wish to see two pianos, you can uncomment the line and the app still works as intended.

If I was going to improve this app I would:
- Loop through the JSX in Piano.js to create the piano keys in cleaner, more effient code, rather repeating nearly the same JSX multiple times.
- Add more functionality in the textbox. Currently an alert is thrown if the user has not written in a comma delimited string. I would add a text transformation and transforming the input so that, as long as the input is the keys on the piano, the piano can still play, regardless of input format.