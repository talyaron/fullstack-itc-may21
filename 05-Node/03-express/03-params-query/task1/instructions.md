create a server and a client
in the client: 
 - create an input of colors, and "on change" change the color of the background of the document
 - send to the server the color
the server will store the color in global (better on closure) "color" variable

when the client loads, it will fetch the color from the server and  paint the background in that color