import {Command, Direction, Grid, Position} from "./types";

export function changePosition(command: Command, currentPosition: Position, grid: Grid): Position {
    const newDirection = getNewDirection(command, currentPosition.direction);
    if (command === Command.M) {
        return move(currentPosition, grid);
    } else {
        return { ...currentPosition, direction: newDirection };
    }
}

function move(position: Position, grid: Grid): Position {
    if (position.direction === Direction.NORTH && position.verticalPosition !== grid.verticalSize) {
        return { ...position, verticalPosition: position.verticalPosition + 1 };
    }

    if (position.direction === Direction.SOUTH && position.verticalPosition !== 0) {
        return { ...position, verticalPosition: position.verticalPosition - 1 };
    }

    if (position.direction === Direction.EAST && position.horizontalPosition !== grid.horizontalSize) {
        return { ...position, horizontalPosition: position.horizontalPosition + 1 };
    }

    if (position.direction === Direction.WEST && position.horizontalPosition !== 0) {
        return { ...position, horizontalPosition: position.horizontalPosition - 1, direction: position.direction };
    }
    throw "Reached end of terrain.";
}

function getNewDirection(command: Command, direction: Direction): Direction {
    switch (command) {
        case Command.L:
            return getNewDirectionFromLeft(direction);
        case Command.R:
            return getNewDirectionFromRight(direction);
        default:
            return direction;
    }
}

function getNewDirectionFromLeft(direction: Direction) {
    switch (direction) {
        case Direction.NORTH:
            return Direction.WEST;
        case Direction.WEST:
            return Direction.SOUTH;
        case Direction.SOUTH:
            return Direction.EAST;
        default:
            return Direction.NORTH;
    }
}

function getNewDirectionFromRight(direction: Direction) {
    switch (direction) {
        case Direction.NORTH:
            return Direction.EAST;
        case Direction.EAST:
            return Direction.SOUTH;
        case Direction.SOUTH:
            return Direction.WEST;
        default:
            return Direction.NORTH;
    }
}
