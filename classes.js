class Paddle {
    constructor({position}) {
        this.position = position
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 25
        this.height = 300
        this.speed = 20
    }

    draw() {
        c.fillStyle = 'black'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()

        if (
            this.position.y + this.velocity.y > 0 &&
            this.position.y + this.height + this.velocity.y < 
            canvas.height
        )
            this.position.y += this.velocity.y
    }
}

class Ball {
    constructor({position}) {
        this.position = position
        const speed = 10
        const direction = {
            x: Math.random() - 0.5 >= 0 ? -speed : speed,
            y: Math.random() - 0.5 >= 0 ? -speed : speed
        }
        this.velocity = {
            x: direction.x,
            y: direction.y
        }
        this.width = 35
        this.height = 35
    }
    
    draw() {
        c.fillStyle = 'black'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
        const rightSide = this.position.x + this.width + this.velocity.x
        const leftSide = this.position.x + this.velocity.x
        const bottomSide = this.position.y + this.height
        const topSide = this.position.y + this.height

        // paddle 1 collision
        if (
            leftSide <= paddle1.position.x + paddle1.width && 
            bottomSide >= paddle1.position.y &&
            topSide <= paddle1.position.y + paddle1.height
            ) {
                this.velocity.x = -this.velocity.x
            }

        // paddle 2 collision
        if (
            rightSide >= paddle2.position.x && 
            bottomSide >= paddle2.position.y &&
            topSide <= paddle2.position.y + paddle2.height
            ) {
                this.velocity.x = -this.velocity.x
            }

        // y (height) collision
        if (this.position.y + this.height + this.velocity.y >=
                canvas.height || 
            this.position.y + this.velocity.y <= 0
            ) {
                this.velocity.y = -this.velocity.y
            }
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}