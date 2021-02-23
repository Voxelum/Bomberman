import backgroundUrl from '../assets/background.png'
import playerImg from'../assets/playerFront.png'
class Game{
    private ctx: CanvasRenderingContext2D
    private width:number
    private height:number
    private playerImg:HTMLImageElement
    private playerX = 0
    private playerY = 0
    private lastTime:number
    constructor(ctx:CanvasRenderingContext2D, width:number,height:number){
        this.ctx=ctx
        this.width=width
        this.height=height
    }
    private loadImage(url: string): Promise<HTMLImageElement> {
        return new Promise<HTMLImageElement>((resolve => {
            const img = new Image()
            img.onload = () => resolve(img)
            img.src = url
        }))
    }

    private drawMap(ctx: CanvasRenderingContext2D, mapImg: HTMLImageElement, width: number, height: number) {
        const tileSize = 64
        const tileXs = Math.ceil(width / tileSize)
        const tileYs = Math.ceil(height / tileSize)
    
        for (let i = 0; i < tileXs; i++) {
            for (let j = 0; j < tileYs; j++) {
                ctx.drawImage(mapImg, i * tileSize, j * tileSize, tileSize, tileSize)
            }
        }
    }
    private getTimeStamp(){
        return (new Date()).getTime()
    }
    private gameLoop(){
        const currentTime = this.getTimeStamp()
        const deltaTime = (currentTime-this.lastTime)/1000
        this.lastTime = currentTime
        this.playerX+=50*deltaTime
        this.playerY+=50*deltaTime
        this.ctx.drawImage(this.playerImg,this.playerX,this.playerY)
        
        window.requestAnimationFrame(this.gameLoop.bind(this))
    }
    public async run(){
        const img = await this.loadImage(backgroundUrl)
        this.drawMap(this.ctx, img, this.width, this.height)
        this.playerImg = await this.loadImage(playerImg)
        this.lastTime = this.getTimeStamp()
        window.requestAnimationFrame(this.gameLoop.bind(this))
    }

}

export default Game