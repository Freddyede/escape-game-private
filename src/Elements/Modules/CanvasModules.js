import GameEngine from "../Abstract/GameEngine.js";

export class CanvasModules {
    static drawImages = (context, canvas, images) => {
        if(images.imgElements !== undefined) {
            return context.drawImage(images.getImage(), images.x, images.y);
        } else {
            for (const elmnt of images.getImages()) {
                context.drawImage(elmnt.sources, elmnt.x, elmnt.y);
            }
        }
    }
    static init(obj, callBack) {
        const gameEngine = new GameEngine();
        gameEngine.getCanvasController().setCanvas(obj.element);
        gameEngine.getCanvasController().setContext('2d');
        gameEngine.getCanvasController().getImagesController().setImage(obj.source, obj.pos.x, obj.pos.y);
        gameEngine.getCanvasController().getImagesController().setWidth(obj.w);
        gameEngine.getCanvasController().getImagesController().setHeight(obj.h);
        gameEngine.getCanvasController().getImagesController().loadedImage(() => {
            gameEngine.getCanvasController().loop(() => callBack());
        });
    }
}