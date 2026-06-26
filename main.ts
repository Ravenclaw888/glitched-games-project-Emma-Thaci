namespace SpriteKind {
    export const Arcade_Scene_Sprite = SpriteKind.create()
    export const EventSprite = SpriteKind.create()
    export const Glitching = SpriteKind.create()
    export const Nothing = SpriteKind.create()
}
function Level_14 () {
    Level += 1
    info.startCountdown(60)
    tiles.setCurrentTilemap(tilemap`level15`)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(2, 5))
    Level14Sprite = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.EventSprite)
    tiles.placeOnTile(Level14Sprite, tiles.getTileLocation(2, 5))
}
function Level_19 () {
    Level += 1
    info.startCountdown(60)
    tiles.setCurrentTilemap(tilemap`level18`)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(14, 14))
}
// Add Level_5 at the end seeing it takes so much time to do
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (Level == 1) {
        Level_2()
    } else if (Level == 2) {
        Level_3()
    } else if (Level == 3) {
        Level_4()
    } else if (Level == 4) {
        Level_5()
    } else if (Level == 5) {
        Level_6()
    } else if (Level == 6) {
        Level_7()
    } else if (Level == 7) {
        Level_8()
    } else if (Level == 8) {
        Level_9()
    } else if (Level == 9) {
        Level_10()
    } else if (Level == 10) {
        Level_11()
    } else if (Level == 11) {
        Level_12()
    } else if (Level == 12) {
        Level_13()
    } else if (Level == 13) {
        Level_14()
    } else if (Level == 14) {
        Level_15()
    } else if (Level == 15) {
        Level_16()
    } else if (Level == 16) {
        Level_17()
    } else if (Level == 17) {
        Level_18()
    } else if (Level == 18) {
        Level_19()
    } else if (Level == 19) {
        Level_20()
    } else if (Level == 20) {
        Level_21()
    } else if (Level == 21) {
        Level_22()
    } else if (Level == 22) {
        Level_23()
    } else if (Level == 23) {
        Level_24()
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player_Sprite.vy == 0 && isAnimation == true) {
        Player_Sprite.vy = -125
        animation.stopAnimation(animation.AnimationTypes.All, Player_Sprite)
        animation.runImageAnimation(
        Player_Sprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . f e e e f f f f . . . . 
            . . . f f e e e e e e f f . . . 
            . . . f e e e e e e e e f . . . 
            . . . f d 6 f d d f 6 d f . . . 
            . . . f d 1 f d d f 1 d f . . . 
            f f f f d d d d d d d d f f f f 
            f d d f d d d d d d d d f d d f 
            f d d d f 9 9 9 9 9 9 f d d d f 
            f 9 9 9 f 9 9 9 9 9 9 f 9 9 9 f 
            f 9 9 9 f 9 9 9 9 9 9 f 9 9 9 f 
            f f f f . f f f f f f . f f f f 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . f e e e f f f f . . . . 
            . . . f f e e e e e e f f . . . 
            . . . f e e e e e e e e f . . . 
            . . . f d 6 f d d f 6 d f . . . 
            . . . f d 1 f d d f 1 d f . . . 
            f f f f d d d d d d d d f f f f 
            f d d f d d d d d d d d f d d f 
            f d d d f 9 9 9 9 9 9 f d d d f 
            f 9 9 9 f 9 9 9 9 9 9 f 9 9 9 f 
            f 9 9 9 f 9 9 9 9 9 9 f 9 9 9 f 
            f f f f . f f f f f f . f f f f 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . f e e e f f f f . . . . 
            . . . f f e e e e e e f f . . . 
            . . . f e e e e e e e e f . . . 
            . . . f d 6 f d d f 6 d f . . . 
            . . . f d 1 f d d f 1 d f . . . 
            f f f f d d d d d d d d f f f f 
            f d d f d d d d d d d d f d d f 
            f d d d f 9 9 9 9 9 9 f d d d f 
            f 9 9 9 f 9 9 9 9 9 9 f 9 9 9 f 
            f 9 9 9 f 9 9 9 9 9 9 f 9 9 9 f 
            f f f f . f f f f f f . f f f f 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . f e e e f f f f . . . . 
            . . . f f e e e e e e f f . . . 
            . . . f e e e e e e e e f . . . 
            . . . f d 6 f d d f 6 d f . . . 
            . . . f d 1 f d d f 1 d f . . . 
            f f f f d d d d d d d d f f f f 
            f d d f d d d d d d d d f d d f 
            f d d d f 9 9 9 9 9 9 f d d d f 
            f 9 9 9 f 9 9 9 9 9 9 f 9 9 9 f 
            f 9 9 9 f 9 9 9 9 9 9 f 9 9 9 f 
            f f f f . f f f f f f . f f f f 
            . . . . . f f . . f f . . . . . 
            `],
        200,
        true
        )
    }
})
function Level_7 () {
    Level += 1
    info.startCountdown(60)
    tiles.setCurrentTilemap(tilemap`level9`)
    sprites.destroy(textSprite8)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(1, 9))
    Level7Sprite = sprites.create(img`
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        `, SpriteKind.EventSprite)
    tiles.placeOnTile(Level7Sprite, tiles.getTileLocation(0, 9))
}
function Level_24 () {
    info.startCountdown(60)
    sprites.destroy(GltichSprite)
    sprites.destroy(Gltich2)
    sprites.destroy(Gltich3)
    sprites.destroy(Glitch4)
    sprites.destroy(Glitch5)
    sprites.destroy(Gltich_6)
    sprites.destroy(textSprite10)
    Level += 1
    tiles.setCurrentTilemap(tilemap`level25`)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(1, 14))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Glitching, function (sprite, otherSprite) {
    if (Math.percentChance(50)) {
        tiles.placeOnRandomTile(sprite, assets.tile`myTile`)
    } else {
        Player_Sprite.vy = -500
    }
})
function IntroScene () {
    Arcade_game = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 2 2 2 2 2 2 2 f . . . . 
        . . . f 2 f f f f f 2 f . . . . 
        . . . f 2 f f f f f 2 f . . . . 
        . . . f 2 f f f f f 2 f . . . . 
        . . . f 2 f f f f f 2 f . . . . 
        . . . f 2 2 2 2 2 2 2 f . . . . 
        . . . f f 2 2 2 2 2 f f . . . . 
        . . . . f 2 2 2 2 2 f . . . . . 
        . . . . f 2 2 2 2 2 f . . . . . 
        . . . . f 2 2 2 2 2 f . . . . . 
        . . . . f 2 2 2 2 2 f . . . . . 
        . . . . f 2 2 2 2 2 f . . . . . 
        `, SpriteKind.Arcade_Scene_Sprite)
    pause(2000)
    Arcade_game.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f e 2 2 2 2 2 2 f . . . . 
        . . . f 2 f f f f f 2 f . . . . 
        . . . f 2 f f f f f 2 f . . . . 
        . . . f 2 f f f f f 2 f . . . . 
        . . . f 2 f f f f f 2 f . . . . 
        . . . f 2 2 2 2 2 2 2 f . . . . 
        . . . f f 2 2 2 2 2 f f . . . . 
        . . . . f 2 2 2 2 2 f . . . . . 
        . . . . f 2 2 2 e 2 f . . . . . 
        . . . . f 2 2 2 2 2 f . . . . . 
        . . . . f 2 e 2 2 2 f . . . . . 
        . . . . f 2 2 2 2 2 f . . . . . 
        `)
    Arcade_game.scale += 2
    pause(2000)
    Arcade_game.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f e 2 2 2 2 2 2 f . . . . 
        . . . f 2 f f f f f e f . . . . 
        . . . f 2 f f f f f 2 f . . . . 
        . . . f 2 f f f f f 2 f . . . . 
        . . . f 2 f f f f f 2 f . . . . 
        . . . f 2 e 2 2 e 2 2 f . . . . 
        . . . f f 2 2 2 2 2 f f . . . . 
        . . . . f 2 2 2 2 2 f . . . . . 
        . . . . f 2 2 2 e 2 f . . . . . 
        . . . . f 2 2 2 2 2 f . . . . . 
        . . . . f 2 e 2 2 2 f . . . . . 
        . . . . f 2 2 2 2 2 f . . . . . 
        `)
    Arcade_game.scale += 2
    pause(2000)
    Arcade_game.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f e 2 2 2 2 2 2 f . . . . 
        . . . f 2 f f f f f e f . . . . 
        . . . f 2 f f f f f 2 f . . . . 
        . . . f 2 f f f f f 2 f . . . . 
        . . . f 2 f f f f f 2 f . . . . 
        . . . f 2 e 2 2 e 2 2 f . . . . 
        . . . f f 2 e e e 2 f f . . . . 
        . . . . f 2 e 2 2 2 f . . . . . 
        . . . . f 2 e e e 2 f . . . . . 
        . . . . f 2 2 2 2 e f . . . . . 
        . . . . f 2 e 2 2 2 f . . . . . 
        . . . . f 2 2 2 2 2 f . . . . . 
        `)
    Arcade_game.scale += 2
    pause(1000)
    Arcade_game.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f e 2 2 2 2 2 2 f . . . . 
        . . . f 2 1 1 1 1 1 e f . . . . 
        . . . f 2 1 1 1 1 1 2 f . . . . 
        . . . f 2 1 1 1 1 1 2 f . . . . 
        . . . f 2 1 1 1 1 1 2 f . . . . 
        . . . f 2 e 2 2 e 2 2 f . . . . 
        . . . f f 2 e e e 2 f f . . . . 
        . . . . f 2 e 2 2 2 f . . . . . 
        . . . . f 2 e e e 2 f . . . . . 
        . . . . f 2 2 2 2 e f . . . . . 
        . . . . f 2 e 2 2 2 f . . . . . 
        . . . . f 2 2 2 2 2 f . . . . . 
        `)
    pause(200)
    sprites.destroy(Arcade_game)
}
function Hint () {
    if (controller.B.isPressed() && HintAvalible == true) {
        tiles.setCurrentTilemap(tilemap`level28`)
        tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(2, 13))
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        sprites.destroyAllSpritesOfKind(SpriteKind.EventSprite)
        if (Level == 1) {
            game.showLongText("Hit the purple boxes!", DialogLayout.Bottom)
        } else if (Level == 2) {
            game.showLongText("The down arrow let's you jump higher!", DialogLayout.Bottom)
        } else if (Level == 3) {
            game.showLongText("Keep jumping around, you'll teleport out!", DialogLayout.Bottom)
        } else if (Level == 4) {
            game.showLongText("Hidden Purple One", DialogLayout.Bottom)
        } else if (Level == 5) {
            game.showLongText("Maybe a pink one is fake...", DialogLayout.Bottom)
        } else if (Level == 6) {
            game.showLongText("Is pink killing you this time?", DialogLayout.Bottom)
        } else if (Level == 7) {
            game.showLongText("Hit the wall instead!", DialogLayout.Bottom)
        } else if (Level == 8) {
            game.showLongText("Use the purples to move around!", DialogLayout.Bottom)
        } else if (Level == 9) {
            game.showLongText("Find a pink that will teleport you", DialogLayout.Bottom)
        } else if (Level == 10) {
            game.showLongText("Hit a wall on the other side", DialogLayout.Bottom)
        } else if (Level == 11) {
            game.showLongText("Jump to the ceiling to find an escape", DialogLayout.Bottom)
        } else if (Level == 12) {
            game.showLongText("Hit the bottom corners of walls to get out", DialogLayout.Bottom)
        } else if (Level == 13) {
            game.showLongText("Go down the maze to find the end", DialogLayout.Bottom)
        } else if (Level == 14) {
            game.showLongText("Find the purple block to go past the wall", DialogLayout.Bottom)
        } else if (Level == 15) {
            game.showLongText("Hit the wall to move through boxes.", DialogLayout.Bottom)
        } else if (Level == 16) {
            game.showLongText("Hit pink or find the opening", DialogLayout.Bottom)
        } else if (Level == 17) {
            game.showLongText("Use the jumppad!", DialogLayout.Bottom)
        } else if (Level == 18) {
            game.showLongText("Press the down arrow", DialogLayout.Bottom)
        } else if (Level == 19) {
            game.showLongText("Hit somewhere on the side walls", DialogLayout.Bottom)
        } else if (Level == 20) {
            game.showLongText("Use the glitch to help you I guess", DialogLayout.Bottom)
        } else if (Level == 21) {
            game.showLongText("Have the glitches teleport you down", DialogLayout.Bottom)
        } else if (Level == 22) {
            game.showLongText("UMMM, maybe the glitches again?", DialogLayout.Bottom)
        } else if (Level == 23) {
            game.showLongText("Why the same thing twice!?", DialogLayout.Bottom)
        } else if (Level == 24) {
            game.showLongText("Hit the white to end", DialogLayout.Bottom)
        }
        HintFix()
        HintAvalible = false
        sprites.destroy(NullSprite)
    }
}
function Level_22 () {
    Level += 1
    info.startCountdown(60)
    tiles.setCurrentTilemap(tilemap`level24`)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(1, 14))
    tiles.placeOnTile(GltichSprite, tiles.getTileLocation(2, 14))
    tiles.placeOnTile(Gltich2, tiles.getTileLocation(3, 14))
    tiles.placeOnTile(Gltich3, tiles.getTileLocation(14, 13))
    Glitch4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c c c c c c c . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . 3 3 3 3 3 3 3 3 3 . . . . 
        . . . 9 9 9 9 9 9 9 9 9 . . . . 
        . f f f f f f f c c c c c c c . 
        . . 9 9 9 9 9 3 3 3 3 3 3 3 . . 
        . c c c c c c f f f f f f f f . 
        . . . . . 9 9 9 9 9 9 9 9 9 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Glitching)
    tiles.placeOnRandomTile(Glitch4, assets.tile`myTile`)
    Glitch5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c c c c c c c . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . 3 3 3 3 3 3 3 3 3 . . . . 
        . . . 9 9 9 9 9 9 9 9 9 . . . . 
        . f f f f f f f c c c c c c c . 
        . . 9 9 9 9 9 3 3 3 3 3 3 3 . . 
        . c c c c c c f f f f f f f f . 
        . . . . . 9 9 9 9 9 9 9 9 9 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Glitching)
    tiles.placeOnRandomTile(Glitch5, assets.tile`myTile`)
    Gltich_6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c c c c c c c . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . 3 3 3 3 3 3 3 3 3 . . . . 
        . . . 9 9 9 9 9 9 9 9 9 . . . . 
        . f f f f f f f c c c c c c c . 
        . . 9 9 9 9 9 3 3 3 3 3 3 3 . . 
        . c c c c c c f f f f f f f f . 
        . . . . . 9 9 9 9 9 9 9 9 9 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.EventSprite)
    tiles.placeOnTile(Gltich_6, tiles.getTileLocation(1, 7))
}
function Level_15 () {
    Level += 1
    info.startCountdown(60)
    tiles.setCurrentTilemap(tilemap`level16`)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(3, 13))
}
function Level_23 () {
    Level += 1
    info.startCountdown(60)
    tiles.setCurrentTilemap(tilemap`level24`)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(1, 14))
    tiles.placeOnRandomTile(GltichSprite, assets.tile`myTile`)
    tiles.placeOnRandomTile(Gltich3, assets.tile`myTile`)
    tiles.placeOnRandomTile(Gltich2, assets.tile`myTile`)
    tiles.placeOnRandomTile(Glitch4, assets.tile`myTile`)
    tiles.placeOnRandomTile(Glitch5, assets.tile`myTile`)
    tiles.placeOnTile(Gltich_6, tiles.getTileLocation(1, 7))
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isAnimation == true) {
        animation.stopAnimation(animation.AnimationTypes.All, Player_Sprite)
        animation.runImageAnimation(
        Player_Sprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f . . . . . . . . 
            . . . f e e e e f f f . . . . . 
            . . . f e e e e e e e f . . . . 
            . . . f e e e e e e e e f . . . 
            . . . f d d f 6 d d d e f . . . 
            . . . f d d f 1 d d d e f . . . 
            . . . f d d d d d e e e f . . . 
            . . . f d d d d e e f f . . . . 
            . . . f 9 9 9 f 9 9 f . . . . . 
            . . . f 9 9 9 f 9 9 f . . . . . 
            . . . f 9 9 9 f f f f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f . . . . . . . . 
            . . . f e e e e f f . . . . . . 
            . . . f e e e e e e f f . . . . 
            . . . f e e e e e e e e f . . . 
            . . . f d d f 6 d d d e f . . . 
            . . . f d d f 1 d d d e f . . . 
            . . . f d d d d d d e e f . . . 
            . . . f 9 9 f 9 9 f f f . . . . 
            . . . f 9 9 f 9 9 f f . . . . . 
            . . f f 9 9 f f f f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f . . . . . . . . 
            . . . f e e e e f f f . . . . . 
            . . . f e e e e e e e f . . . . 
            . . . f e e e e e e e e f . . . 
            . . . f d d f 6 d d d e f . . . 
            . . . f d d f 1 d d d e f . . . 
            . . . f d d d d d e e e f . . . 
            . . . f d d d d e e f f . . . . 
            . . . f 9 9 9 f 9 9 f . . . . . 
            . . . f 9 9 9 f 9 9 f . . . . . 
            . . . f 9 9 9 f f f f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f . . . . . . . . 
            . . . f e e e e f f . . . . . . 
            . . . f e e e e e e f f . . . . 
            . . . f e e e e e e e e f . . . 
            . . . f d d f 6 d d d e f . . . 
            . . . f d d f 1 d d d e f . . . 
            . . . f d d d d d d e e f . . . 
            . . . f 9 9 f 9 9 f f f . . . . 
            . . . f 9 9 f 9 9 f f . . . . . 
            . . f f 9 9 f f f f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        100,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    Call_ending()
})
function HintFix () {
    if (Level == 2) {
        Level_2()
    } else if (Level == 3) {
        Level_3()
    } else if (Level == 4) {
        Level_4()
    } else if (Level == 5) {
        Level_5()
    } else if (Level == 6) {
        Level_6()
    } else if (Level == 7) {
        Level_7()
    } else if (Level == 8) {
        Level_8()
    } else if (Level == 9) {
        Level_9()
    } else if (Level == 10) {
        Level_10()
    } else if (Level == 11) {
        Level_11()
    } else if (Level == 12) {
        Level_12()
    } else if (Level == 13) {
        Level_13()
    } else if (Level == 14) {
        Level_14()
    } else if (Level == 15) {
        Level_15()
    } else if (Level == 16) {
        Level_16()
    } else if (Level == 17) {
        Level_17()
    } else if (Level == 18) {
        Level_18()
    } else if (Level == 19) {
        Level_19()
    } else if (Level == 20) {
        Level_20()
    } else if (Level == 21) {
        Level_21()
    } else if (Level == 22) {
        Level_22()
    } else if (Level == 23) {
        Level_23()
    } else if (Level == 24) {
        Level_24()
    } else if (Level == 1) {
        Level1_Create()
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (Level == 15) {
        tiles.placeOnRandomTile(sprite, assets.tile`myTile`)
    }
    if (Level == 19) {
        tiles.placeOnTile(sprite, tiles.getTileLocation(3, 14))
    }
})
function Call_ending () {
    sprites.destroy(Player_Sprite)
    isAnimation = false
    isGlitches = false
    NullSprite = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.Nothing)
    tiles.setCurrentTilemap(tilemap`level28`)
    tiles.placeOnTile(NullSprite, tiles.getTileLocation(7, 8))
    scene.cameraFollowSprite(NullSprite)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    Arcade_game = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f e 2 2 2 2 2 2 f . . . . 
        . . . f 2 1 1 1 1 1 e f . . . . 
        . . . f 2 1 1 1 1 1 2 f . . . . 
        . . . f 2 1 1 1 1 1 2 f . . . . 
        . . . f 2 1 1 1 1 1 2 f . . . . 
        . . . f 2 e 2 2 e 2 2 f . . . . 
        . . . f f 2 e e e 2 f f . . . . 
        . . . . f 2 e 2 2 2 f . . . . . 
        . . . . f 2 e e e 2 f . . . . . 
        . . . . f 2 2 2 2 e f . . . . . 
        . . . . f 2 e 2 2 2 f . . . . . 
        . . . . f 2 2 2 2 2 f . . . . . 
        `, SpriteKind.Arcade_Scene_Sprite)
    tiles.placeOnTile(Arcade_game, tiles.getTileLocation(7, 8))
    Arcade_game.scale += 8
    pause(1000)
    textSprite16 = textsprite.create("Wasn't that fun?")
    tiles.placeOnTile(textSprite16, tiles.getTileLocation(5, 3))
    pause(2000)
    sprites.destroy(textSprite16)
    pause(1000)
    textSprite17 = textsprite.create("DId you EnjoY it???")
    tiles.placeOnTile(textSprite16, tiles.getTileLocation(4, 3))
    pause(2000)
    sprites.destroy(textSprite17)
    pause(1000)
    Arcade_game.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f e 2 2 2 2 2 2 f . . . . 
        . . . f 2 f f f f f e f . . . . 
        . . . f 2 f f f f f 2 f . . . . 
        . . . f 2 f f f f f 2 f . . . . 
        . . . f 2 f f f f f 2 f . . . . 
        . . . f 2 e 2 2 e 2 2 f . . . . 
        . . . f f 2 e e e 2 f f . . . . 
        . . . . f 2 e 2 2 2 f . . . . . 
        . . . . f 2 e e e 2 f . . . . . 
        . . . . f 2 2 2 2 e f . . . . . 
        . . . . f 2 e 2 2 2 f . . . . . 
        . . . . f 2 2 2 2 2 f . . . . . 
        `)
    pause(2000)
    Arcade_game.scale += -2
    pause(2200)
    Arcade_game.scale += -2
    pause(2600)
    Arcade_game.scale += -2
    pause(3000)
    sprites.destroy(Arcade_game)
    pause(100)
    pause(200)
    tiles.setCurrentTilemap(tilemap`level27`)
    textSprite18 = textsprite.create("BeCAUse WHO knOws wHeN yOu PLAy AgaiN?AD??")
    pause(2000)
    sprites.destroy(textSprite18)
    pause(500)
    Ending = textsprite.create("THE END")
    Ending.setOutline(3, 6)
}
function Level_21 () {
    Level += 1
    info.startCountdown(60)
    tiles.setCurrentTilemap(tilemap`level23`)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(0, 14))
    tiles.placeOnTile(GltichSprite, tiles.getTileLocation(3, 12))
    Gltich2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c c c c c c c . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . 3 3 3 3 3 3 3 3 3 . . . . 
        . . . 9 9 9 9 9 9 9 9 9 . . . . 
        . f f f f f f f c c c c c c c . 
        . . 9 9 9 9 9 3 3 3 3 3 3 3 . . 
        . c c c c c c f f f f f f f f . 
        . . . . . 9 9 9 9 9 9 9 9 9 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Glitching)
    tiles.placeOnTile(Gltich2, tiles.getTileLocation(11, 9))
    Gltich3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c c c c c c c . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . 3 3 3 3 3 3 3 3 3 . . . . 
        . . . 9 9 9 9 9 9 9 9 9 . . . . 
        . f f f f f f f c c c c c c c . 
        . . 9 9 9 9 9 3 3 3 3 3 3 3 . . 
        . c c c c c c f f f f f f f f . 
        . . . . . 9 9 9 9 9 9 9 9 9 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Glitching)
    tiles.placeOnTile(Gltich3, tiles.getTileLocation(14, 13))
}
info.onCountdownEnd(function () {
    HintAvalible = true
})
function Level_17 () {
    Level += 1
    info.startCountdown(60)
    tiles.setCurrentTilemap(tilemap`level20`)
    Level17_Sprite = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.EventSprite)
    Level17Sprite_2 = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.EventSprite)
    tiles.placeOnTile(Level17_Sprite, tiles.getTileLocation(10, 14))
    tiles.placeOnTile(Level17_Sprite, tiles.getTileLocation(4, 14))
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(1, 14))
}
function Level_4 () {
    Level += 1
    info.startCountdown(60)
    sprites.destroy(Level3Sprite)
    sprites.destroy(textSprite6)
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(1, 14))
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isAnimation == true) {
        animation.stopAnimation(animation.AnimationTypes.All, Player_Sprite)
        animation.runImageAnimation(
        Player_Sprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f f f f f . . . 
            . . . . . f f f f e e e f . . . 
            . . . . f e e e e e e e f . . . 
            . . . f e e e e e e e e f . . . 
            . . . f e d d e 6 f d d f . . . 
            . . . f e d d d 1 f d d f . . . 
            . . . f e e e d d d d d f . . . 
            . . . . f f e e d d d d f . . . 
            . . . . . f 9 9 f 9 9 9 f . . . 
            . . . . . f 9 9 f 9 9 9 f . . . 
            . . . . . f f f f 9 9 9 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f f f f f . . . 
            . . . . . . f f e e e e f . . . 
            . . . . f f e e e e e e f . . . 
            . . . f e e e e e e e e f . . . 
            . . . f e d d d 6 f d d f . . . 
            . . . f e d d d 1 f d d f . . . 
            . . . f e e e d d d d d f . . . 
            . . . . f f 9 9 9 f 9 9 f . . . 
            . . . . . f 9 9 9 f 9 9 f . . . 
            . . . . f f f f f f 9 9 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f f f f f . . . 
            . . . . . f f f f e e e f . . . 
            . . . . f e e e e e e e f . . . 
            . . . f e e e e e e e e f . . . 
            . . . f e d d e 6 f d d f . . . 
            . . . f e d d d 1 f d d f . . . 
            . . . f e e e d d d d d f . . . 
            . . . . f f e e d d d d f . . . 
            . . . . . f 9 9 f 9 9 9 f . . . 
            . . . . . f 9 9 f 9 9 9 f . . . 
            . . . . . f f f f 9 9 9 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f f f f f . . . 
            . . . . . . f f e e e e f . . . 
            . . . . f f e e e e e e f . . . 
            . . . f e e e e e e e e f . . . 
            . . . f e d d d 6 f d d f . . . 
            . . . f e d d d 1 f d d f . . . 
            . . . f e e e d d d d d f . . . 
            . . . . f f 9 9 9 f 9 9 f . . . 
            . . . . . f 9 9 9 f 9 9 f . . . 
            . . . . f f f f f f 9 9 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        100,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, assets.tile`myTile`)
    if (Level == 23) {
        textSprite10 = textsprite.create("Wow, it's getting worse")
        tiles.placeOnTile(textSprite10, tiles.getTileLocation(2, 10))
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player_Sprite.vy == 0 && isAnimation == true) {
        Player_Sprite.vy = -300
        animation.stopAnimation(animation.AnimationTypes.All, Player_Sprite)
        animation.runImageAnimation(
        Player_Sprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . f e e e f f f f . . . . 
            . . . f f e e e e e e f f . . . 
            . . . f e e e e e e e e f . . . 
            . . . f d 6 f d d f 6 d f . . . 
            . . . f d 1 f d d f 1 d f . . . 
            f f f f d d d d d d d d f f f f 
            f d d f d d d d d d d d f d d f 
            f d d d f 9 9 9 9 9 9 f d d d f 
            f 9 9 9 f 9 9 9 9 9 9 f 9 9 9 f 
            f 9 9 9 f 9 9 9 9 9 9 f 9 9 9 f 
            f f f f . f f f f f f . f f f f 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . f e e e f f f f . . . . 
            . . . f f e e e e e e f f . . . 
            . . . f e e e e e e e e f . . . 
            . . . f d 6 f d d f 6 d f . . . 
            . . . f d 1 f d d f 1 d f . . . 
            f f f f d d d d d d d d f f f f 
            f d d f d d d d d d d d f d d f 
            f d d d f 9 9 9 9 9 9 f d d d f 
            f 9 9 9 f 9 9 9 9 9 9 f 9 9 9 f 
            f 9 9 9 f 9 9 9 9 9 9 f 9 9 9 f 
            f f f f . f f f f f f . f f f f 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . f e e e f f f f . . . . 
            . . . f f e e e e e e f f . . . 
            . . . f e e e e e e e e f . . . 
            . . . f d 6 f d d f 6 d f . . . 
            . . . f d 1 f d d f 1 d f . . . 
            f f f f d d d d d d d d f f f f 
            f d d f d d d d d d d d f d d f 
            f d d d f 9 9 9 9 9 9 f d d d f 
            f 9 9 9 f 9 9 9 9 9 9 f 9 9 9 f 
            f 9 9 9 f 9 9 9 9 9 9 f 9 9 9 f 
            f f f f . f f f f f f . f f f f 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . f e e e f f f f . . . . 
            . . . f f e e e e e e f f . . . 
            . . . f e e e e e e e e f . . . 
            . . . f d 6 f d d f 6 d f . . . 
            . . . f d 1 f d d f 1 d f . . . 
            f f f f d d d d d d d d f f f f 
            f d d f d d d d d d d d f d d f 
            f d d d f 9 9 9 9 9 9 f d d d f 
            f 9 9 9 f 9 9 9 9 9 9 f 9 9 9 f 
            f 9 9 9 f 9 9 9 9 9 9 f 9 9 9 f 
            f f f f . f f f f f f . f f f f 
            . . . . . f f . . f f . . . . . 
            `],
        500,
        true
        )
    }
    if (Level == 2) {
        textSprite4 = textsprite.create("Really, the down arrow?")
        tiles.placeOnTile(textSprite4, tiles.getTileLocation(5, 1))
        pause(1000)
        sprites.destroy(textSprite4)
    }
    if (Level == 3) {
        textSprite5 = textsprite.create("HUH?")
        tiles.placeOnTile(textSprite5, tiles.getTileLocation(4, 10))
        pause(1000)
        sprites.destroy(textSprite5)
    }
    if (Level == 18) {
        tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(5, 12))
        textSprite15 = textsprite.create("Is that supposed to happen?")
        tiles.placeOnTile(textSprite15, tiles.getTileLocation(2, 10))
        pause(1000)
        sprites.destroy(textSprite15)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (Level == 1) {
        tiles.placeOnTile(sprite, tiles.getTileLocation(9, 7))
        textSprite2 = textsprite.create("WOAH! HOW'D THAT HAPPEN?")
        tiles.placeOnTile(textSprite2, tiles.getTileLocation(10, 5))
    }
    if (Level == 4) {
        tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(1, 1))
    }
    if (Level == 8) {
        tiles.placeOnRandomTile(Player_Sprite, assets.tile`myTile6`)
    }
    if (Level == 14) {
        tiles.placeOnTile(sprite, tiles.getTileLocation(14, 14))
    }
    if (Level == 16) {
        tiles.placeOnTile(sprite, tiles.getTileLocation(14, 14))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (Level == 5) {
        tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(0, 9))
    } else if (Level == 6) {
        tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(7, 2))
        textSprite8 = textsprite.create("SO NOW IT DOESN'T!!!")
        tiles.placeOnTile(textSprite8, tiles.getTileLocation(8, 1))
    } else if (Level == 7) {
        tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(2, 9))
    } else if (Level == 9) {
        tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(1, 13))
    } else if (Level == 16) {
        tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(6, 1))
    } else if (Level == 16) {
        tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(14, 14))
    } else {
    	
    }
})
function Level_18 () {
    Level += 1
    info.startCountdown(60)
    tiles.setCurrentTilemap(tilemap`level21`)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(2, 14))
}
function Level_5 () {
    Level += 1
    info.startCountdown(60)
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(1, 12))
    Level5Sprite_1 = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.EventSprite)
    tiles.placeOnTile(Level5Sprite_1, tiles.getTileLocation(0, 9))
    // make pink again once done with game
    Level5Sprite_2 = sprites.create(img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        `, SpriteKind.EventSprite)
    tiles.placeOnTile(Level5Sprite_2, tiles.getTileLocation(7, 13))
}
function Level_8 () {
    Level += 1
    info.startCountdown(60)
    tiles.setCurrentTilemap(tilemap`level8`)
    sprites.destroy(textSprite9)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(0, 14))
    Level8Sprite = sprites.create(img`
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        `, SpriteKind.EventSprite)
    tiles.placeOnTile(Level8Sprite, tiles.getTileLocation(6, 14))
}
function Level_9 () {
    Level += 1
    info.startCountdown(60)
    tiles.setCurrentTilemap(tilemap`level11`)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(1, 13))
    Level9Sprite = sprites.create(img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        `, SpriteKind.EventSprite)
    tiles.placeOnTile(Level9Sprite, tiles.getTileLocation(14, 10))
}
function Level_12 () {
    Level += 1
    info.startCountdown(60)
    Level12SpriteCounter = 0
    tiles.setCurrentTilemap(tilemap`level14`)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(8, 6))
    Level12Sprite = sprites.create(img`
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        `, SpriteKind.EventSprite)
    tiles.placeOnTile(Level12Sprite, tiles.getTileLocation(15, 6))
}
function Level_20 () {
    Level += 1
    info.startCountdown(60)
    isGlitches = true
    tiles.setCurrentTilemap(tilemap`level22`)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(2, 14))
    GltichSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c c c c c c c . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . 3 3 3 3 3 3 3 3 3 . . . . 
        . . . 9 9 9 9 9 9 9 9 9 . . . . 
        . f f f f f f f c c c c c c c . 
        . . 9 9 9 9 9 3 3 3 3 3 3 3 . . 
        . c c c c c c f f f f f f f f . 
        . . . . . 9 9 9 9 9 9 9 9 9 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Glitching)
    tiles.placeOnTile(GltichSprite, tiles.getTileLocation(7, 14))
    Level20Sprite = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.EventSprite)
    tiles.placeOnTile(Level20Sprite, tiles.getTileLocation(3, 14))
}
function Level1_Create () {
    isAnimation = true
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(0, 11))
    textSprite = textsprite.create("The Game Looks Broken...")
    tiles.placeOnTile(textSprite, tiles.getTileLocation(4, 9))
    pause(1000)
    sprites.destroy(textSprite)
    info.startCountdown(60)
}
function Level_3 () {
    Level += 1
    info.startCountdown(60)
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(1, 14))
    Level3Sprite = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.EventSprite)
    tiles.placeOnTile(Level3Sprite, tiles.getTileLocation(7, 10))
    if (!(Level2SpriteDestroyed == true)) {
        sprites.destroy(Level2Sprite)
    }
}
function Level_6 () {
    Level += 1
    info.startCountdown(60)
    tiles.setCurrentTilemap(tilemap`level7`)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(0, 9))
}
function Level_13 () {
    Level += 1
    info.startCountdown(60)
    tiles.setCurrentTilemap(tilemap`level17`)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(2, 5))
    Level13_Sprite = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.EventSprite)
    tiles.placeOnTile(Level13_Sprite, tiles.getTileLocation(2, 5))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.EventSprite, function (sprite, otherSprite) {
    if (Player_Sprite.overlapsWith(Level2Sprite)) {
        textSprite3 = textsprite.create("Maybe try another arrow to go higher?")
        tiles.placeOnTile(textSprite3, tiles.getTileLocation(8, 9))
        pause(3000)
        sprites.destroy(textSprite3)
        sprites.destroy(otherSprite)
        Level2SpriteDestroyed = true
    } else if (Player_Sprite.overlapsWith(Level3Sprite)) {
        tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(13, 5))
        textSprite6 = textsprite.create("What the...")
        tiles.placeOnTile(textSprite6, tiles.getTileLocation(10, 4))
    } else if (Player_Sprite.overlapsWith(Level5Sprite_1)) {
        textSprite7 = textsprite.create("So pink kills you..")
        tiles.placeOnTile(textSprite7, tiles.getTileLocation(5, 8))
        pause(2000)
        sprites.destroy(otherSprite)
        sprites.destroy(textSprite7)
    } else if (Player_Sprite.overlapsWith(Level5Sprite_2)) {
        tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(15, 12))
        tiles.setCurrentTilemap(tilemap`level6`)
        sprites.destroy(otherSprite)
    } else if (Player_Sprite.overlapsWith(Level7Sprite)) {
        tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(5, 1))
        textSprite9 = textsprite.create("Weird...")
        sprites.destroy(otherSprite)
    } else if (Player_Sprite.overlapsWith(Level8Sprite)) {
        sprites.destroy(otherSprite)
        tiles.setCurrentTilemap(tilemap`level10`)
        tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(13, 10))
        textSprite11 = textsprite.create("Teleportation?")
        tiles.placeOnTile(textSprite11, tiles.getTileLocation(11, 7))
        pause(1000)
        sprites.destroy(textSprite11)
    } else if (Player_Sprite.overlapsWith(Level9Sprite)) {
        tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(11, 0))
        sprites.destroy(otherSprite)
    } else if (Player_Sprite.overlapsWith(Level10Sprite)) {
        sprites.destroy(otherSprite)
        tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(3, 0))
    } else if (Player_Sprite.overlapsWith(Level11Sprite_1)) {
        sprites.destroy(otherSprite)
        IsLevel11Sprite1 = true
        textSprite12 = textsprite.create("Maybe jump to get past this barrier?")
        tiles.placeOnTile(textSprite12, tiles.getTileLocation(8, 11))
        pause(2000)
        sprites.destroy(textSprite12)
    } else if (Player_Sprite.overlapsWith(Level11Sprite_2)) {
        sprites.destroy(otherSprite)
        tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(2, 14))
    } else if (Player_Sprite.overlapsWith(Level12Sprite) && Level12SpriteCounter == 0) {
        Level12SpriteCounter += 1
        tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(4, 6))
        tiles.placeOnTile(Level12Sprite, tiles.getTileLocation(0, 6))
    } else if (Player_Sprite.overlapsWith(Level12Sprite) && Level12SpriteCounter == 1) {
        sprites.destroy(otherSprite)
        tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(6, 14))
    } else if (Player_Sprite.overlapsWith(Level13_Sprite)) {
        sprites.destroy(otherSprite)
        tiles.placeOnTile(textSprite13, tiles.getTileLocation(3, 3))
        textSprite13 = textsprite.create("Ooh a maze!")
        pause(1000)
        sprites.destroy(textSprite13)
    } else if (Player_Sprite.overlapsWith(Level14Sprite)) {
        sprites.destroy(otherSprite)
        textSprite14 = textsprite.create("Ooh a maze, again!")
        tiles.placeOnTile(textSprite14, tiles.getTileLocation(3, 3))
        pause(1000)
        sprites.destroy(textSprite14)
    } else if (Player_Sprite.overlapsWith(Level17_Sprite)) {
        Player_Sprite.vy = -400
    } else if (Player_Sprite.overlapsWith(Level20Sprite)) {
        sprites.destroy(otherSprite)
        textSprite14 = textsprite.create("What is that??")
        tiles.placeOnTile(textSprite14, tiles.getTileLocation(4, 12))
        pause(1500)
        sprites.destroy(textSprite14)
    } else if (Player_Sprite.overlapsWith(Level17Sprite_2)) {
        Player_Sprite.vy = -400
    } else if (Player_Sprite.overlapsWith(Gltich_6)) {
        tiles.placeOnTile(Gltich_6, tiles.getTileLocation(0, 0))
    }
})
function Level_2 () {
    Level2SpriteDestroyed = false
    Level += 1
    info.startCountdown(60)
    sprites.destroy(textSprite2)
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(5, 14))
    Level2Sprite = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.EventSprite)
    tiles.placeOnTile(Level2Sprite, tiles.getTileLocation(5, 11))
}
function Level_11 () {
    Level += 1
    IsLevel11Sprite1 = false
    info.startCountdown(60)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(4, 14))
    tiles.setCurrentTilemap(tilemap`level13`)
    Level11Sprite_1 = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.EventSprite)
    tiles.placeOnTile(Level11Sprite_1, tiles.getTileLocation(5, 14))
    Level11Sprite_2 = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.EventSprite)
    tiles.placeOnTile(Level11Sprite_2, tiles.getTileLocation(13, 10))
}
function Level_16 () {
    Level += 1
    info.startCountdown(60)
    tiles.setCurrentTilemap(tilemap`level19`)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(1, 5))
}
function Level_10 () {
    Level += 1
    info.startCountdown(60)
    tiles.placeOnTile(Player_Sprite, tiles.getTileLocation(3, 14))
    tiles.setCurrentTilemap(tilemap`level12`)
    Level10Sprite = sprites.create(img`
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        `, SpriteKind.EventSprite)
    tiles.placeOnTile(Level10Sprite, tiles.getTileLocation(15, 14))
}
let Moving = false
let textSprite14: TextSprite = null
let textSprite13: TextSprite = null
let textSprite12: TextSprite = null
let IsLevel11Sprite1 = false
let textSprite11: TextSprite = null
let textSprite7: TextSprite = null
let textSprite3: TextSprite = null
let Level11Sprite_2: Sprite = null
let Level11Sprite_1: Sprite = null
let Level10Sprite: Sprite = null
let Level13_Sprite: Sprite = null
let Level2Sprite: Sprite = null
let Level2SpriteDestroyed = false
let textSprite: TextSprite = null
let Level20Sprite: Sprite = null
let Level12Sprite: Sprite = null
let Level12SpriteCounter = 0
let Level9Sprite: Sprite = null
let Level8Sprite: Sprite = null
let textSprite9: TextSprite = null
let Level5Sprite_2: Sprite = null
let Level5Sprite_1: Sprite = null
let textSprite2: TextSprite = null
let textSprite15: TextSprite = null
let textSprite5: TextSprite = null
let textSprite4: TextSprite = null
let textSprite6: TextSprite = null
let Level3Sprite: Sprite = null
let Level17Sprite_2: Sprite = null
let Level17_Sprite: Sprite = null
let Ending: TextSprite = null
let textSprite18: TextSprite = null
let textSprite17: TextSprite = null
let textSprite16: TextSprite = null
let NullSprite: Sprite = null
let Arcade_game: Sprite = null
let textSprite10: TextSprite = null
let Gltich_6: Sprite = null
let Glitch5: Sprite = null
let Glitch4: Sprite = null
let Gltich3: Sprite = null
let Gltich2: Sprite = null
let GltichSprite: Sprite = null
let Level7Sprite: Sprite = null
let textSprite8: TextSprite = null
let Level14Sprite: Sprite = null
let Player_Sprite: Sprite = null
let Level = 0
let HintAvalible = false
let isGlitches = false
let isAnimation = false
isAnimation = false
isGlitches = false
HintAvalible = false
IntroScene()
Level = 1
Player_Sprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . c c c c c c c . . . . . . . 
    . . . f f f f f f f f f . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . 9 9 9 9 9 9 9 9 9 . . . . 
    . f f f f f f f c c c c c c c . 
    . . 9 9 9 9 9 3 3 3 3 3 3 3 . . 
    . c c c c c c f f f f f f f f . 
    . . . . . 9 9 9 9 9 9 9 9 9 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Player_Sprite.z = 1
Player_Sprite.ay = 300
scene.cameraFollowSprite(Player_Sprite)
controller.moveSprite(Player_Sprite, 100, 0)
Player_Sprite.setStayInScreen(true)
Level1_Create()
game.onUpdateInterval(100, function () {
    Hint()
})
game.onUpdateInterval(200, function () {
    Moving = controller.up.isPressed() || (controller.left.isPressed() || (controller.right.isPressed() || controller.down.isPressed()))
    if (!(Moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, Player_Sprite)
        Player_Sprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . f e e e f f f f . . . . 
            . . . f f e e e e e e f f . . . 
            . . . f e e e e e e e e f . . . 
            . . . f d 6 f d d f 6 d f . . . 
            . . . f d 1 f d d f 1 d f . . . 
            . . . f d d d d d d d d f . . . 
            . . f f d d d d d d d d f f . . 
            . f 9 9 f 9 9 9 9 9 9 f 9 9 f . 
            . f 9 9 f 9 9 9 9 9 9 f 9 9 f . 
            . f d d f 9 9 9 9 9 9 f d d f . 
            . . f f . f f f f f f . f f . . 
            . . . . . f f . . f f . . . . . 
            `)
    }
})
