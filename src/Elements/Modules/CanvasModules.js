export class CanvasModules {
    static drawImages = (context, canvas, images) => {
        context.strokeRect(0, 0, canvas.width, canvas.height);
        if(images.imgElements === undefined) {
            context.drawImage(images.getImage(), images.getX(), images.getY(), images.getWidth(), images.getHeight());
        } else {
            for (const elmnt of images.getImages()) {
                context.drawImage(elmnt.sources, elmnt.x, elmnt.y);
            }
        }
    }
}