import { Bitmap, Graphics } from "..";
import { Font } from "../Font";
export declare class GraphicsImpl implements Graphics {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    font: Font;
    fontSize: number;
    constructor();
    clear(): void;
    clearRect(x: number, y: number, width: number, height: number): void;
    fitScreen(pixelScale: number): void;
    setAlpha(alpha: number): void;
    copy(): Bitmap;
    getWidth(): number;
    getHeight(): number;
    push(): void;
    pop(): void;
    translate(x: number, y: number): void;
    scale(x: number, y: number): void;
    applyFont(): void;
    setFont(font: Font): void;
    setFontSize(size: number): void;
    getStringWidth(text: string): number;
    drawString(x: number, y: number, text: string, col: string): void;
    setComposite(name: string): void;
    fillRect(x: number, y: number, width: number, height: number, col: string): void;
    drawLine(x1: number, y1: number, x2: number, y2: number, col: string): void;
    drawBitmap(x: number, y: number, bitmap: Bitmap): void;
    drawScaledBitmap(x: number, y: number, width: number, height: number, bitmap: Bitmap): void;
}
