input.onButtonPressed(Button.A, function () {
    dice()
})
function dice () {
    for (let index = 0; index < randint(5, 10); index++) {
        music.playTone(349, music.beat(BeatFraction.Eighth))
        list[randint(0, 5)].showImage(0)
    }
}
input.onGesture(Gesture.Shake, function () {
    dice()
})
let list: Image[] = []
list = [
images.createImage(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `),
images.createImage(`
    . . . . .
    . . . # .
    . . . . .
    . # . . .
    . . . . .
    `),
images.createImage(`
    . . . . .
    . . . # .
    . . # . .
    . # . . .
    . . . . .
    `),
images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    . # . # .
    . . . . .
    `),
images.createImage(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `),
images.createImage(`
    . . . . .
    . # . # .
    . # . # .
    . # . # .
    . . . . .
    `)
]
basic.forever(function () {
	
})
