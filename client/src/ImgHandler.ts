class ImgHandler{
    public static loadImage(url: string): Promise<HTMLImageElement> {
        return new Promise<HTMLImageElement>((resolve => {
            const img = new Image()
            img.onload = () => resolve(img)
            img.src = url
        }))
    }
}

export default ImgHandler