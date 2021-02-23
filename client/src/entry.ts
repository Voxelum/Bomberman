import backgroundUrl from '../assets/background.png'
import Game from './Game'


async function run() {
    const canvas = document.getElementById("game_canvas") as HTMLCanvasElement

    const ctx = canvas.getContext("2d")

    if (!ctx) throw new Error("Cannot initialize as the context 2d not found!")

    const game = new Game(ctx,canvas.width,canvas.height)
    
    game.run()
    
}



run()