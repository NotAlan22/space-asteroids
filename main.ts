namespace SpriteKind {
    export const Kind = SpriteKind.create()
    export const Asteroid = SpriteKind.create()
    export const Destroy_Able_Rock = SpriteKind.create()
    export const Melt = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Melt, function (sprite, otherSprite) {
    sprites.destroy(mySprite, effects.fire, 100)
    sprites.destroy(mySprite2, effects.fire, 100)
    sprites.destroy(mySprite3, effects.fire, 100)
    sprites.destroy(Big_Melted_Asteroids, effects.fire, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(mySprite, effects.fire, 100)
    sprites.destroy(mySprite2, effects.fire, 100)
    sprites.destroy(mySprite3, effects.fire, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Destroy_Able_Rock, function (sprite, otherSprite) {
    sprites.destroy(Smol_Melted_Asteroids, effects.fire, 100)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
let Big_Asteroids: Sprite = null
let Smol_Asteroids: Sprite = null
let Choice = 0
let Smol_Melted_Asteroids: Sprite = null
let Big_Melted_Asteroids: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff3fffffffffffffff33ffffffffffffffffff3ffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff3fffcccfffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffff
    fffffffcccffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfff3ffffffffffffffffffffffffffffffffff
    fffffffcccffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffff333ffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffff333fffffffffffffffff333ffffffffffffffffffffff3ff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffff3fffff33fffffffff3ffffffff3ffffffffffffff3333ffffffffffffffffffffffffffffffcccfffffff3fffffff
    ffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffcccffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33fffffffcccfffffffffffffff
    f3fffffffff3ffffffffcccffffffffffffcccfffffffffffffffffffffcccffffffffcccfffffffffffffffffffffffffffffffff3fff33ffffffffffffffffffffffffffffffcccfffffffffffffff
    ffffffffffffffffffffcccffffffffffffcccffff3ffffffffffffffffcccffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffcccffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffcffffffffffcffffffffffffffffffffffffffffcff33ffffffcffffffffffffffffffffffffffffcffffffffffcffcccffffffffffffffffff3ffffcffffffffffcfffffffff3ffffffffffff
    ffffffffffffffffcfcffffffffffffffffffffcffffffffffffffffcfcffffffffffffffffffffcffffffffffffffffcfcfcccffffffffffffffffcffffffffffffffffcfcffffffffffffffffffffc
    fffffffffffffffffcfffffffffffffffffffffffffffffffffff3fffcfffffffffffffffffffffffffffffffffffffffcffcccfffff3ffffffffffffffffffffffffffffcffffffffffffffffffffff
    ffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffcccffff3ffffffffffffffffffcf3fffffffffffffffffffffffffffffffff3fffc33ffcccffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfcccfff
    ffffffcccfffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffff33ffffcccffffffff3fffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffcccfff
    ffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffff3ffffffffffffffff3fffcfffffffffffffffffffffffffffffffffffcccfcfffffffffffffffffffffcccfff
    fffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffffffffffcfcffffffffffffffffffff33ffffffffffffff3cfcffffffffffffffffffffcccffffffffffffffcfcffffffffffff
    fffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffbfbffffffffffffffffffffcfcffffffffffffffffbffffffffffffffffffffcfcffffffffffffffbfbffffffffffffffffffffcfcffffffffffffffbfbfffffffffffffffffffccccffffffffffff
    ffffffffffffffffffccffffffffffffcccfffffffffffffffffcccfffccfffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffccffffcccfffffffffffff
    fffbffffffffffffffccffffffffffffcccffffffffbffffffffcccfffccfffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffccffffcccfffffffffffff
    ffbfbfffffffffffffffffffffffffffcccfffffffbfbfffffffcccfffffffffffffffffffcfffffffbcccffffffffffffffcccfffffffffffcfffffffbfbffffffcccffffffffffffffffffffcfffff
    fffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffffffffffffffffcccffffffffffcbcfffffffffffffffcccfffffffffffffffffffffcffff
    fffffffffff3ffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffcccfffffffffffcffffffffffffffffcccffffffffffffffffffffffffff
    ffffffffff333fffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
    fffffffffff3fffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
    ffffffffffffffffffffcccfffffffffffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f3ffffffffffffffffffcccffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffcccfffffffcccfffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
    fffffffffffffffffcffcccffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffcccfffffffcccffffffffffffcccffffffffffffffffffffffffcffffffffffffffffcccfff
    ffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffff3ffffffffffffcffffffffffcccfffffffcccfffffffffffccccfcfffffffffffffffffffffffffffffffffffffffcccfff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffcccfff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffff33fffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffcccfffffffffffffffffccfffffcfffffffff3ffffffffffffffffffffffccfffffcffffffffffffffffffffffffff
    ffffff33fffffffffffffffff3ffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffff3fffffffffffffffccffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffffff
    ffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffcccffffffff3ffffffffffff3ffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff3ffffffffffffffcccffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffff3ffffffffffffffffffff3fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffff3333ffffffffff
    fffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33fffffffffffff
    fffffff333ffffff33fffffffffffffffffffffffffffff33fffffff33fffffffffffffffffffffffffffff33fffffff33ffffffffffffff3ffffffffffffff33fffffff33ffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffcccffffff3fffffffffffffff3ffffffffffffffcccffffff3ffffffffffffffffffffffffffffffcccffffff3ffffffffffffffffffffffffffffffcccffffff3fffffffffffffff
    fffffff3fffffffcccfffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffffffffffccccfffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffff
    ffffffffffff33fffffffffffffffff33ffffffffffccccccfff33fffffffffffffffff33ffffffffffccccccfff33fffffffffffffffff33fffffffffffffffffff33fffffffffffffffff33fffffff
    fff3fffffffffffffffffffffffffffffffff3fffffcccccfffffffffffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffff3ff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33333fff
    fffffffffffffffffffffffffffffffffffff33ffffffffffffffffffffffffffffffffffffff33ffffffffffffffffffffffffffffffffffffff33ffffffffffffffffffffffffffffffff33ffff33f
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffdfffffffffdffff3ffffffffffffffffffffffffd3ffffffffdfffffffffffffffffffffffffffffd3ffffffffdfffffffffffffffffffffffffffffd3ffffffffdfffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffff3fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffff3fffffffffffffffffffcccffffff3ffffffffff3ffffffffffffffffffffffffffff3ffffffffff3fffffffffffffcccffffffffffff3ffffffffff3fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffff3ffffffcccfffffffffffffffffffffffffffffffffffffff
    ff3fffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffcccfffffffffffffffffcccffffffffffffffffff3
    ffffffcccffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffcccffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffff
    ffffffcccffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffcccffffffffffffffffffffffffffffffffffffffcccfffffffffcccfffffff
    fffffffffffffffffffffffffffffffcccffffffffffffff3ffffffffffffffffffffffffffffcccfffffff3fffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffcccfffffff
    fffffffffffffff3ffffffffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffcccfffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff3fffffffffff3fffffffffffffffffffffffffff3fffffffffff3fffffffffffffffffffffffffff3fffcccfffff3fffffffffffffffffffffffffff3fffffffffff3f
    f3fffffffffffffffffffff3fffffffffffffffff3fffffffffffffffffffff3fffffffffffffffff3ffffffffffff3ffffffff3fffffffffffffffff3ffffffffffffff3ffffff3ffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffff
    f3ffffffff3ffffffffff3fffffffffffffffffff3ffffffcccffffffffff3fffffffffffffffffff3fff3fffffffffffffff3fffffffffffffffffff3ffffcccffffffffffff3ffffffffffffffffff
    ffffffffffffffffffffffff3fffffffffffff33ffffffffcccfffffffffffff3fffffffffffff33fffffff3ffffffffffffffff3fffffffffffff33ffffffcccfffffffffffffff3fffffffffffff33
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffcccffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffff3ffffffffffffffffffcccfffffff
    fffffffffffffffffffffffffffffffcccfffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffcccfffffff
    fffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffffffcccfffffff
    ffcccfffffffffffffffffcccffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffff3ffffffffffffffffffffffffff3ffffffffffffff
    ffcccfffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffcccfffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffcccfffff3ffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffff3fff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffff3fffffff3fffffffffffffcccfffffffffffffffffffffff3ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff3fffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffff
    fffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffcccfffffffff3fffffffffffffffffffffffffffffffffcccffffffffff3ffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffcccfffffffffcccffffffffffff3fffffcccffffffffffffffffffffffcccfffffffffffffffffffffffff
    ffffff3ffffffffffffffffffffffffffffffffffffffcccfffffff3ffffffffffffffffffcccffffffffffffffffffffffffffffffcccfffffffffffffffff3fffffffffffffff3ffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffff3ffffffffffffffffffffffffffffff3ffffffff
    fffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffcccfffffffff3fffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffcccfffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffcccffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffff
    ffffffffffffffffffffffffffffffffffffff3ffffffffffffcccfffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffff3fffffffffffffffffff3fffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffcccffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffff
    fffffffffff3fffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffcccfffffffffff3ffffffff3ffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    cccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffff
    cccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffff
    cccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff3fffffffffffffffff3ffffffffffffcccfffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffff
    ffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffff3ffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffff3ffffffffffffffffffffffff
    ffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffcccfffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffff3fffffffffffffffcccfffffffffff
    fffffffffffffffffffffffffffffffff3ffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffcccffffffffffffffffffffffffcccffffffff3ff
    ffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffcccffffffffffffffffffcccfffffffffffffffffff3ffffcccffffffffffffffffff3fffffcccfffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
scroller.scrollBackgroundWithSpeed(0, 50)
info.setScore(0)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . c 2 1 . . . . . . . 
    . . . . . . c 2 1 . . . . . . . 
    . . . . . . c 2 1 . . . . . . . 
    . . . . . c c 2 1 1 . . . . . . 
    . . . . c b c 2 1 1 1 . . . . . 
    . . . c b d c 2 1 1 1 1 . . . . 
    . . c b d d c 2 1 1 1 1 1 . . . 
    . . c c 9 d c 2 1 1 9 9 1 . . . 
    . . c c 9 d c 2 1 1 9 9 1 . . . 
    . . c c 9 d c 2 1 1 9 9 1 . . . 
    . . c c 9 d c 2 1 1 9 9 1 . . . 
    . . c b d d c 2 1 1 1 1 1 . . . 
    . . c b d d c 2 1 1 1 1 1 . . . 
    . . c c 9 d c 2 1 1 9 9 1 . . . 
    . . c c 9 d c 2 1 1 9 9 1 . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite2 = sprites.create(img`
    . . c c 9 d c 2 1 1 9 9 1 . . . 
    . . c c 9 d c 2 1 1 9 9 1 . . . 
    . . c b d d c 2 1 1 1 1 1 . . . 
    . . c b d d c 2 1 1 1 1 1 . . . 
    . . c c 9 d c 2 1 1 9 9 1 . . . 
    . . c c 9 d c 2 1 1 9 9 1 . . . 
    . . c c 9 d c 2 1 1 9 9 1 . . . 
    . . c c 9 d c 2 1 1 9 9 1 . . . 
    . . c b d d c 2 1 1 1 1 1 . . . 
    . . c b d d c 2 1 1 1 1 1 . . . 
    . . c c 9 d c 2 1 1 9 9 1 . . . 
    . . c c 9 d c 2 1 1 9 9 1 . . . 
    . . c c 9 d c 2 1 1 9 9 1 . . . 
    . . c c 9 d c 2 1 1 9 9 1 . . . 
    . . c b d d c 2 1 1 1 1 1 . . . 
    . . c b d d c 2 1 1 1 1 1 . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite2, 100, 0)
mySprite2.setPosition(80, 76)
mySprite3 = sprites.create(img`
    . . c c 9 d c 2 1 1 9 9 1 . . . 
    . . c c 9 d c 2 1 1 9 9 1 . . . 
    . . c b d d c 2 1 1 1 1 1 . . . 
    . . c b d d c 2 1 1 1 1 1 . . . 
    . . c c 9 d c 2 1 1 9 9 1 . . . 
    . . c c 9 d c 2 1 1 9 9 1 . . . 
    . . c c 9 d c 2 1 1 9 9 1 . . . 
    . . c c 9 d c 2 1 1 9 9 1 . . . 
    . . c b d d c 2 1 1 1 1 1 . . . 
    . . . c b d c 2 1 1 1 1 . . . . 
    . . . . c b c 2 1 1 1 . . . . . 
    . . . . . c c 2 1 1 . . . . . . 
    . . . . . . c 2 1 . . . . . . . 
    . . . . . . c 2 1 . . . . . . . 
    . . . . . . c 2 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite3, 100, 0)
mySprite3.setPosition(80, 92)
game.setGameOverMessage(false, "Your spaceship crashed at")
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(500, function () {
    Choice = randint(1, 4)
    if (Choice == 1) {
        Smol_Asteroids = sprites.createProjectileFromSide(img`
            . . c c c c . . 
            . c b d d d c . 
            c b d d d d d c 
            c b b d d d d c 
            c b d b d d b c 
            c c b d b b b c 
            c c c b d d b c 
            c c b b c c c c 
            `, 0, 50)
        Smol_Asteroids.x = randint(0, 160)
    } else if (Choice == 2) {
        Big_Asteroids = sprites.createProjectileFromSide(img`
            . . . . . . c c c c c c . . . . 
            . . . . c c b b d d d d c . . . 
            . . . c c b b d d d d d d c . . 
            . . c b b d b d d d d d d b c . 
            . c b b b d b b d d d d d b c . 
            . c b b b d d b d d d d b b c . 
            c b c b b b d d b b b b b c c . 
            c b c c b b b b d d d b c c c . 
            c b b c c c c c c c c c c c c . 
            c c b b b b b b c c b d d d b c 
            c c c c c c c c c d d d d d d c 
            c c c c c c c b c b d d d d d b 
            c b b b c c c b c c b d d d c b 
            c c b b b c c b b c c c c b b c 
            c c c c c c c c b b b b b b c c 
            c c c c c c c c c c c c c c c c 
            `, 0, 50)
        Big_Asteroids.x = randint(0, 160)
    } else if (Choice == 3) {
        Big_Melted_Asteroids = sprites.createProjectileFromSide(img`
            . . . . . . c c c c c c . . . . 
            . . . . c c 2 2 4 4 4 4 c . . . 
            . . . c c 2 2 4 4 4 4 4 4 c . . 
            . . c 2 2 4 2 4 4 4 4 4 4 2 c . 
            . c 2 2 2 4 2 2 4 4 4 4 4 2 c . 
            . c 2 2 2 4 4 2 4 4 4 4 2 2 c . 
            c 2 c 2 2 2 4 4 2 2 2 2 2 c c . 
            c 2 c c 2 2 2 2 4 4 4 2 c c c . 
            c 2 2 c c c c c c c c c c c c . 
            c c 2 2 2 2 2 2 c c 2 4 4 4 2 c 
            c c c c c c c c c 4 4 4 4 4 4 c 
            c c c c c c c 2 c 2 4 4 4 4 4 2 
            c 2 2 2 c c c 2 c c 2 4 4 4 c 2 
            c c 2 2 2 c c 2 2 c c c c 2 2 c 
            c c c c c c c c 2 2 2 2 2 2 c c 
            c c c c c c c c c c c c c c c c 
            `, 0, 50)
        Big_Melted_Asteroids.x = randint(0, 160)
        Big_Melted_Asteroids.setKind(SpriteKind.Melt)
    } else {
        Smol_Melted_Asteroids = sprites.createProjectileFromSide(img`
            . . c c c c . . 
            . c 4 2 2 2 c . 
            c 4 2 2 2 2 2 c 
            c 4 4 2 2 2 2 c 
            c 4 2 4 2 2 4 c 
            c c 4 2 4 4 4 c 
            c c c 4 2 2 4 c 
            c c 4 4 c c c c 
            `, 0, 50)
        Smol_Melted_Asteroids.x = randint(0, 160)
        Smol_Melted_Asteroids.setKind(SpriteKind.Destroy_Able_Rock)
    }
})
