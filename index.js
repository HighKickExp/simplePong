const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1480
canvas.height = 770




const paddle1 = new Paddle({
    position: {
        x: 10,
        y: canvas.height / 2
    },
})

const paddle2 = new Paddle({
    position: {
        x: canvas.width - 20 * 2,
        y: canvas.height / 2
    },
})


const ball = new Ball({
    position: {
        x: canvas.width / 2,
        y: canvas.height / 2
    }
})

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    paddle1.update()
    paddle2.update()
    ball.update()

    if (ball.position.x < paddle1.position.x - 10 || ball.position.x > canvas.width) {
        const ball = new Ball({
            position: {
                x: canvas.width / 2,
                y: canvas.height / 2
            }
        })
        ball.update()
    }
}

animate()

addEventListener('keydown', (event) => {
    switch(event.key) {
        case 's':
        //down
        paddle1.velocity.y = paddle1.speed
        break
        case 'w':
        //up
        paddle1.velocity.y = -paddle1.speed
        break
        case 'ArrowUp':
        //up
        paddle2.velocity.y = -paddle2.speed
        break
        case 'ArrowDown':
        //down
        paddle2.velocity.y = paddle2.speed
        break
    }
})