import ImgHandler from "./ImgHandler"

class GameMap{
    private mapImg:HTMLImageElement
    private width:number
    private height:number
    constructor(mapImg:HTMLImageElement,width:number,height:number){
        this.mapImg=mapImg
        this.width=width
        this.height=height
        
    }
    
    public draw(ctx:CanvasRenderingContext2D){
        const tileSize = 64
        const tileCountX = Math.ceil(this.width/tileSize)
        const tileCountY = Math.ceil(this.height/tileSize)
        for(let i=0;i<tileCountY;i++){
            for(let j=0;j<tileCountX;j++){
                ctx.drawImage(this.mapImg,j*tileSize,i*tileSize,tileSize,64)
            }
        }
    }
    
    
}

export default GameMap