//Grid assigned
//Current Position
//Movement event

import {Grid, Position} from "./types";
import {getCommandsFromFile, getGripFromFile, getPositionFromFile, loadDataFromFile} from "./inputReader";
import {changePosition} from "./commands";

function main() {
    const fileData = loadDataFromFile();
    const grid: Grid = getGripFromFile(fileData);
    const commands = getCommandsFromFile(fileData);

    let currentPosition: Position = getPositionFromFile(fileData);
    for (const command of commands) {
        try {
            currentPosition = changePosition(command, currentPosition, grid);
        } catch(err) {
            console.log(err);
            break;
        }
    }

    printPosition(currentPosition);
    return currentPosition;
}

function printPosition(position: Position) {
    console.log(`Final position:\n${position.horizontalPosition} ${position.verticalPosition} ${position.direction}`);
}

main();
