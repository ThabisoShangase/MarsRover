export enum Direction {
    NORTH = "N",
    SOUTH = "S",
    EAST = "E",
    WEST = "W"
}

export enum Command {
    M,
    R,
    L
}

export interface Position {
    horizontalPosition: number;
    verticalPosition: number;
    direction: Direction;
}

export interface Grid {
    horizontalSize: number;
    verticalSize: number;
}
