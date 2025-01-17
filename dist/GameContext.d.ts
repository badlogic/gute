import { Bitmap } from "./Bitmap";
import { Font } from "./Font";
import { Graphics } from "./Graphics";
import { MapWorld } from "./tilemaps/MapWorld";
import { Sound } from "./Sound";
import { Tileset } from "./Tileset";
export interface GameContext {
    resourcesRemaining(): number;
    resourcesTotal(): number;
    allResourcesLoaded(): boolean;
    loadLDTK(url: string): MapWorld;
    loadMusic(url: string): Sound;
    loadSound(url: string): Sound;
    loadScaledTileset(url: string, tileWidth: number, tileHeight: number, scale: number): Tileset;
    loadTileset(url: string, tileWidth: number, tileHeight: number): Tileset;
    loadBitmap(url: string): Bitmap;
    loadFont(url: string, name: string): Font;
    getGraphics(): Graphics;
    loadJson(url: string): Promise<any>;
    isRunningStandalone(): boolean;
    isMobile(): boolean;
    isAndroid(): boolean;
    isIOS(): boolean;
    isPhone(): boolean;
}
