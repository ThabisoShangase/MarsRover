##Mars rover terrain navigation


###Project setup
1. install packages using `yarn install`
2. To run the project use `yarn run build:start`. This will build the project and run the main class.
3. There's an input file under the input folder which will be used by default, for quick testing you can change that file and test that it works.
    * You can also pass the app your own file by adding `-- file <fileName>` to the start command, i.e. `yarn run build:start --file <fileName>`


###Application
The application will compute the commands and print out the final position in the format `<HorizontalPosition> <VerticalPosition> <Direction>`, e.g. "3 3 W".  
This assumes that the input file is formatted correctly and that the input will work for the initial position.  
It does do validation on the commands i.e. if the commands take the Rover outside of the terrain you will get a message saying 
"Reached end of terrain." and then it will print out the final position before it reached invalid command.

###Execution
It goes through every command and changes the current position by: 
1. Finding a new direction or
2. Depending on the current direction moves the position vertically or horizontally by one step.
3. Once we're done with all the commands we print out the final position.
