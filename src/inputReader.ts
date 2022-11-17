import {Command, Direction, Grid, Position} from "./types";

const fs = require("fs");
const path = require("path");

const yargs = require("yargs");

const pathInput = yargs.argv.file;

/**
 * Returns each line of the file as an array in the results array
 */
export function loadDataFromFile(): Array<Array<string>> {
    const relPath = pathInput ? pathInput : path.join(__dirname, "..", "input", "input.txt");
    const data = fs.readFileSync(relPath, "utf8");
    const splitData = data.split("\n");
    return [splitData[0].split(" "), splitData[1].split(" "), [splitData[2]]];
}


export function getGripFromFile(fileData: Array<Array<string>>) {
    const grid: Grid = {
        horizontalSize: +fileData[0][0],
        verticalSize: +fileData[0][1],
    };
    return grid;
}

export function getCommandsFromFile(fileData: Array<Array<string>>): Array<Command> {
    return fileData[2][0].split("").map(data => Command[data as keyof typeof Command]);
}

export function getPositionFromFile(fileData: Array<Array<string>>) {
    const position: Position = {
        horizontalPosition: +fileData[1][0],
        verticalPosition: +fileData[1][1],
        direction: fileData[1][2] as Direction,
    };
    return position;
}
