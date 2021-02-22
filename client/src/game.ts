import backgrounUrl from '../assets/background.png'

function loadImage(url: string): Promise<HTMLImageElement> {
    return new Promise<HTMLImageElement>((resolve => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.src = url
    }))
}

async function run() {
    const canvas = document.getElementById("game_canvas") as HTMLCanvasElement

    const ctx = canvas.getContext("2d")

    if (!ctx) throw new Error("Cannot initialize as the context 2d not found!")

    const img = await loadImage(backgrounUrl)
    drawMap(ctx, img, canvas.width, canvas.height)
}

function drawMap(ctx: CanvasRenderingContext2D, mapImg: HTMLImageElement, width: number, height: number) {
    const tileSize = 64
    const tileXs = Math.ceil(width / tileSize)
    const tileYs = Math.ceil(height / tileSize)

    for (let i = 0; i < tileXs; i++) {
        for (let j = 0; j < tileYs; j++) {
            ctx.drawImage(mapImg, i * tileSize, j * tileSize, tileSize, tileSize)
        }
    }
}

run()
run()