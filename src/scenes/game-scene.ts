import { Container, Sprite } from "pixi.js";
import { IScene, Manager } from "../manager";

(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: (window as any).PIXI });

delete (<any>window).PIXI;

// (<any>window).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

export class GameScene extends Container implements IScene {
    private clampy: Sprite;
    private clampyVelocity: number;
    constructor() {
        super();

        // Inside assets.ts we have a line that says `{ name: "Clampy from assets.ts!", url: "./clampy.png" }`
        this.clampy = Sprite.from("Clampy from assets.ts!");

        this.clampy.anchor.set(0.5);
        this.clampy.x = Manager.width / 2;
        this.clampy.y = Manager.height / 2;
        this.addChild(this.clampy);

        this.clampyVelocity = 5;
    }
    public update(framesPassed: number): void {
        // Lets move clampy!
        this.clampy.x += this.clampyVelocity * framesPassed;

        if (this.clampy.x > Manager.width) {
            this.clampy.x = Manager.width;
            this.clampyVelocity = -this.clampyVelocity;
        }

        if (this.clampy.x < 0) {
            this.clampy.x = 0;
            this.clampyVelocity = -this.clampyVelocity;
        }
    }
}