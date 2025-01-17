import { Path } from "./Path";
import { PathFinderMap } from "./PathFinderMap";
import { PathMover } from "./PathMover";
export declare class AStarPathFinder {
    static NORTH_TO_SOUTH: number;
    static EAST_TO_WEST: number;
    static SOUTH_TO_NORTH: number;
    static WEST_TO_EAST: number;
    static NONE: number;
    private objectPool;
    private openList;
    private open;
    private closed;
    private map;
    private height;
    private width;
    private pathFindCounter;
    private ignoreFinalOccupation;
    private mover;
    private tx;
    private ty;
    private max;
    constructor(map: PathFinderMap);
    clear(): void;
    private generatePath;
    private blocked;
    private atTarget;
    findPath(mover: PathMover, tx: number, ty: number, max: number, ignoreFinalOccupation: boolean, runAway: boolean): Path | null;
    private addLocation;
    private getHeuristic;
    private createMapNode;
}
