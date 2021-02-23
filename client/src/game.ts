import backgroundUrl from '../assets/background.png'
import playerImgUrl from'../assets/playerFront.png'
import GameMap from './GameMap'
import ImgHandler from './ImgHandler'
class Game{
    private ctx: CanvasRenderingContext2D
    private width:number
    private height:number
    constructor(ctx:CanvasRenderingContext2D, width:number,height:number){
        this.ctx=ctx
        this.width=width
        this.height=height
    }

    public async run(){
       const img = await ImgHandler.loadImage(backgroundUrl)
       const map = new GameMap(img,this.width,this.height)
       map.draw(this.ctx)
        
    }

}

export default Game