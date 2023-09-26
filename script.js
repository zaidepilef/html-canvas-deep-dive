window.onload = function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height)
    flowField.animate()
}

class FlowFieldEffect {
    #ctx;
    #width;
    #height;

    constructor(ctx, width, height) {
        this.#ctx = ctx;
        this.#ctx.strokeStyle = 'white';
        this.#width = width;
        this.#height = height;
    }
    #draw(x, y) {
        const length = 666;
        this.#ctx.beginPath();
        this.#ctx.moveTo(x, y)
        this.#ctx.lineTo(x + length, y + length)
        this.#ctx.stroke()
    }

    animate() {
        this.#draw(66, 33)
        console.log('animating')
    }
}