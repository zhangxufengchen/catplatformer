namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const 花 = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 e 7 7 e 7 7 7 7 7 
7 7 e e e 7 7 e e 7 7 e e e 7 7 
7 e e e e 7 e e e e e e e 7 e e 
e e e 7 e 7 e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e c e e c e e e e c e e e e e 
e c . . c e e e . c e e . . . c 
. e . . . e . . . . . . . . . e 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . 5 . 2 5 5 2 . . . . . . 5 
. . . 5 5 . 2 4 . . 5 . . . 5 2 
. 5 5 5 2 . 2 4 4 2 . 5 2 . . 2 
5 2 5 4 4 . . . 2 4 2 5 5 2 2 2 
2 4 4 4 2 4 4 4 . 2 2 2 4 4 4 4 
2 2 4 4 2 2 4 2 4 4 4 2 2 2 2 4 
4 4 4 2 2 2 4 2 2 2 4 4 2 2 2 2 
4 4 2 2 2 2 4 2 2 2 2 4 4 2 2 2 
2 4 2 2 2 2 4 4 4 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
. . . . . . 5 5 5 5 5 . . . . . 
. . . . 5 5 5 . . . 5 5 . . . . 
. . . . 5 . 6 6 6 6 . . 5 . . . 
. . . 5 . 6 6 . . 6 6 . 5 5 . . 
. . 5 5 6 . 3 3 3 . . 6 . 5 . . 
. . 5 6 6 3 3 3 3 3 . 6 . 5 . . 
. . 5 6 . 3 . 2 . 3 3 6 . 5 . . 
. . 5 6 . 3 2 f 2 . 3 6 . 5 . . 
. 5 5 6 . 3 2 f 2 2 3 6 . 5 . . 
. 5 5 6 . 3 2 f f 2 3 6 . 5 . . 
. . 5 6 . 3 2 f f 2 3 6 . 5 . . 
. . 5 6 6 3 3 2 2 2 3 6 . 5 . . 
. . 5 5 6 . 3 3 2 3 . 6 5 5 . . 
. . . . 5 6 . 3 3 . 6 6 5 . . . 
. . . . . 6 6 6 6 6 6 5 . . . . 
. . . . . . 5 6 6 5 5 . . . . . 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
. . . . . . . . . . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . 5 5 . . . 5 5 5 . . . . 
. . . . 5 . . . . . . 5 . . . . 
. . . 5 5 . . . . . . . 5 . . . 
. . . 5 . . 5 5 5 . . . 5 . . . 
. . . 5 . 5 5 . . . . . 5 . . . 
. . 5 . . 5 . . . . . . 5 . . . 
. . 5 . . 5 . . . . . . 5 . . . 
. . 5 . . 5 5 . . . . . 5 . . . 
. . 5 . . . 5 5 5 5 . . 5 . . . 
. . 5 . . . . . . . . 5 . . . . 
. . 5 5 . . . . . . . 5 . . . . 
. . . 5 5 . . . . . 5 . . . . . 
. . . . 5 5 . . 5 5 5 . . . . . 
. . . . . . 5 5 5 . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 3 3 3 3 3 . . . . . 
. . . . . . 3 . . . . . . . . . 
. . . . . . 3 . . . . . . . . . 
. . . . . . 3 . . . . . . . . . 
. . . . . . 3 . . . . . . . . . 
. . 3 3 3 3 3 3 3 3 3 . . . . . 
. . . . . 3 . . . . . . . . . . 
. . . . . 3 . . . . . . . . . . 
. . . . . 3 . . . . . . . . . . 
. . . . . 3 . . . . . . . . . . 
. . . . 3 3 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    otherSprite.destroy(effects.trail, 500)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (logic_cat.vy == 0) {
        logic_cat.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.花, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    蜜蜂 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    animation.runImageAnimation(
    蜜蜂,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f f . . . . 
. . f f f f f f 4 4 4 f . . . . 
. f f 4 4 f f 4 4 4 4 f . . . . 
. f 4 4 4 4 f 4 4 4 4 f . . . . 
. f f 4 4 4 f 4 4 4 f f . . . . 
. . f 4 f f . f f f f f . . . . 
. . f f 5 5 f f f 5 5 f f . . . 
. . f 5 5 5 f f 5 5 5 5 f f . . 
. . f 5 5 5 5 f 5 5 5 5 f f . . 
. . f 5 5 5 5 f 5 5 5 5 f . . . 
. . f f f f f . f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f f . . . . 
. . f f f f f f 4 4 4 f . . . . 
. f f 4 4 f f 4 4 4 4 f . . . . 
. f f 4 4 4 f 4 4 4 f f . . . . 
. . f 4 f f . f f f f f . . . . 
. . f f 5 5 f f f 5 5 f f . . . 
. . f 5 5 5 f f 5 5 5 5 f f . . 
. . f 5 5 5 5 f 5 5 5 5 f f . . 
. . f 5 5 5 5 f 5 5 5 5 f . . . 
. . f f f f f . f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f f . . . . 
. f f f f f f f 4 4 4 f . . . . 
. f f 4 4 f f 4 4 4 4 f . . . . 
. . f 4 f f . f f f f f . . . . 
. . f f 5 5 f f f 5 5 f f . . . 
. . f 5 5 5 f f 5 5 5 5 f f . . 
. . f 5 5 5 5 f 5 5 5 5 f f . . 
. . f 5 5 5 5 f 5 5 5 5 f . . . 
. . f f f f f . f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f f . . . . 
. f f f f f f f 4 4 4 f . . . . 
. . f 4 f f . f f f f f . . . . 
. . f f 5 5 f f f 5 5 f f . . . 
. . f 5 5 5 f f 5 5 5 5 f f . . 
. . f 5 5 5 5 f 5 5 5 5 f f . . 
. . f 5 5 5 5 f 5 5 5 5 f . . . 
. . f f f f f . f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f f . . . . 
. f f f f f f f 4 4 4 f . . . . 
. f f 4 4 f f 4 4 4 4 f . . . . 
. . f 4 f f . f f f f f . . . . 
. . f f 5 5 f f f 5 5 f f . . . 
. . f 5 5 5 f f 5 5 5 5 f f . . 
. . f 5 5 5 5 f 5 5 5 5 f f . . 
. . f 5 5 5 5 f 5 5 5 5 f . . . 
. . f f f f f . f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f f . . . . 
. . f f f f f f 4 4 4 f . . . . 
. f f 4 4 f f 4 4 4 4 f . . . . 
. f f 4 4 4 f 4 4 4 f f . . . . 
. . f 4 f f . f f f f f . . . . 
. . f f 5 5 f f f 5 5 f f . . . 
. . f 5 5 5 f f 5 5 5 5 f f . . 
. . f 5 5 5 5 f 5 5 5 5 f f . . 
. . f 5 5 5 5 f 5 5 5 5 f . . . 
. . f f f f f . f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
    蜜蜂.setPosition(logic_cat.x + 80, logic_cat.y - 80)
    蜜蜂.follow(logic_cat)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (logic_cat.y < otherSprite.y) {
        info.changeScoreBy(1)
    } else {
        info.changeLifeBy(-1)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.over()
})
let 蜜蜂: Sprite = null
let flawer: Sprite = null
let logic_cat: Sprite = null
scene.setBackgroundColor(9)
logic_cat = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f . . . 
. . . . . . . . . . . . f f f . 
. . . . . . . . . . . f f 5 f f 
f f f f f f f f f f f f f f f f 
f . . f f f f f f f f f f f f . 
. . . f f f f f f f f f f f . . 
. . . f . f . . . . f . f . . . 
. . . f . f . . . . f . f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(logic_cat, 100, 0)
tiles.setTilemap(tiles.createTilemap(
            hex`320010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000060005000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000020202020200000000000000000000000000000000000000000000020202000000000000000000020202020202020000000000000000000000000000000000000000000000060000000000020200000000000000000000000000000000000000000000000000000000000000000000000002020202000002020200000000000000000000000000000000000000000000000000060000000000000000000006000000000000000000000000000000050000000000000000000000000000000000000000000202020200000000000000020202020000000000000000000000020202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000000000000000000202020200000000000000000000000202020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . 
2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . . 2 2 2 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 2 . . . . . . . 2 2 2 2 . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5],
            TileScale.Sixteen
        ))
logic_cat.ay = 300
scene.cameraFollowSprite(logic_cat)
for (let 值 of tiles.getTilesByType(myTiles.tile4)) {
    flawer = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f f f . . . . 
. . . f 5 5 5 5 5 5 5 f f . . . 
. . . f 5 5 5 4 4 5 5 5 f f . . 
. . f 5 5 5 4 4 5 5 5 5 5 f . . 
. . f 5 5 4 4 5 5 5 5 5 5 f . . 
. . f 5 5 4 5 5 5 5 5 5 5 f . . 
. . f 5 5 5 5 5 5 5 5 5 5 f f . 
. . f 5 5 5 5 5 5 5 5 5 5 5 f . 
. . f 5 5 5 5 5 5 5 5 5 5 5 f . 
. . f 5 5 5 5 5 5 5 5 5 5 f . . 
. . f f 5 5 5 5 5 5 5 5 5 f . . 
. . . f f 5 5 5 5 5 5 5 f f . . 
. . . . f f 5 5 5 5 5 f f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.coin)
    tiles.placeOnTile(flawer, 值)
    animation.runImageAnimation(
    flawer,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . f 5 4 4 4 4 4 4 5 5 f . . 
. . f 5 5 5 5 5 5 5 5 5 5 5 f . 
. . f 5 4 5 5 5 5 5 5 5 5 5 f . 
. . f 5 4 5 5 5 5 5 5 5 5 5 f . 
. . f 5 4 5 5 5 5 5 5 5 5 5 f . 
. . f 5 4 5 5 5 5 5 5 5 5 5 f . 
. . f 5 4 5 5 5 5 5 5 5 5 5 f . 
. . f 5 4 5 5 5 5 5 5 5 5 5 f . 
. . . f 5 5 5 5 5 5 5 5 5 f . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . f 5 5 5 5 5 f . . . . 
. . . . f 5 4 4 4 4 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 5 5 f . . 
. . . f 5 4 5 5 5 5 5 5 5 f . . 
. . . f 5 4 5 5 5 5 5 5 5 f . . 
. . . f 5 4 5 5 5 5 5 5 5 f . . 
. . . f 5 4 5 5 5 5 5 5 5 f . . 
. . . f 5 4 5 5 5 5 5 5 5 f . . 
. . . f 5 4 5 5 5 5 5 5 5 f . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . . . f 5 5 5 5 5 f . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . f 5 5 5 f . . . . . 
. . . . . f 5 4 4 5 5 f . . . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . . f 5 4 5 5 5 5 5 f . . . 
. . . . f 5 4 5 5 5 5 5 f . . . 
. . . . f 5 4 5 5 5 5 5 f . . . 
. . . . f 5 4 5 5 5 5 5 f . . . 
. . . . f 5 4 5 5 5 5 5 f . . . 
. . . . f 5 4 5 5 5 5 5 f . . . 
. . . . . f 5 5 5 5 5 f . . . . 
. . . . . . f 5 5 5 f . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . f 5 f . . . . . . 
. . . . . . f 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 5 f . . . . 
. . . . . f 5 4 5 5 5 f . . . . 
. . . . . f 5 4 5 5 5 f . . . . 
. . . . . f 5 4 5 5 5 f . . . . 
. . . . . f 5 4 5 5 5 f . . . . 
. . . . . f 5 4 5 5 5 f . . . . 
. . . . . f 5 4 5 5 5 f . . . . 
. . . . . . f 5 5 5 f . . . . . 
. . . . . . . f 5 f . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . f 5 5 5 f . . . . . 
. . . . . f 5 4 4 5 5 f . . . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . . f 5 4 5 5 5 5 5 f . . . 
. . . . f 5 4 5 5 5 5 5 f . . . 
. . . . f 5 4 5 5 5 5 5 f . . . 
. . . . f 5 4 5 5 5 5 5 f . . . 
. . . . f 5 4 5 5 5 5 5 f . . . 
. . . . f 5 4 5 5 5 5 5 f . . . 
. . . . . f 5 5 5 5 5 f . . . . 
. . . . . . f 5 5 5 f . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . f 5 5 5 5 5 f . . . . 
. . . . f 5 4 4 4 4 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 5 5 f . . 
. . . f 5 4 5 5 5 5 5 5 5 f . . 
. . . f 5 4 5 5 5 5 5 5 5 f . . 
. . . f 5 4 5 5 5 5 5 5 5 f . . 
. . . f 5 4 5 5 5 5 5 5 5 f . . 
. . . f 5 4 5 5 5 5 5 5 5 f . . 
. . . f 5 4 5 5 5 5 5 5 5 f . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . . . f 5 5 5 5 5 f . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
    tiles.setTileAt(值, myTiles.tile0)
}
for (let 值 of tiles.getTilesByType(myTiles.tile5)) {
    flawer = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 3 3 . . 3 3 3 . . . . . 
. . . . 3 3 2 2 2 3 3 . . . . . 
. . . . a a a 2 a a 3 . . . . . 
. . . . . . a a . . . . . . . . 
. . 7 7 7 . . a . . 7 7 . . . . 
. . . 8 7 7 . a 7 7 8 8 . . . . 
. . . . 8 8 7 7 8 8 . . . . . . 
. . . . . 8 8 7 8 . . . . . . . 
. . . . . . 8 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.花)
    tiles.placeOnTile(flawer, 值)
    tiles.setTileAt(值, myTiles.tile0)
}
game.onUpdate(function () {
    logic_cat.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f . . . 
. . . . . . . . . . . . f f f . 
. . . . . . . . . . . f f 5 f f 
f f f f f f f f f f f f f f f f 
f . . f f f f f f f f f f f f . 
. . . f f f f f f f f f f f . . 
. . . f . f . . . . f . f . . . 
. . . f . f . . . . f . f . . . 
`)
    if (logic_cat.vy < 0) {
        logic_cat.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f . . . 
. . . . . . . . . . . . f f . . 
. . . . . . . . . . . . f f f . 
. . . . . . . . . . . f f 5 f f 
. . f . . . . . . . f f f f f f 
. . f . . . . . . f f f f f f . 
. . f f . . . . f f f f f . . . 
. . . f . . . . f f f f f f f f 
. . . f f f f f f f f f f . . . 
. . . . f f f f f f . . f f f . 
. . . . . f f . f . . . . . f . 
. . . . . f . . f . . . . . . . 
. . . . . f . . f . . . . . . . 
. . . . . . . . f . . . . . . . 
`)
    } else if (logic_cat.vy > 0) {
        logic_cat.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . f . . . . . . . . . . . 
. . . f f . . . . . . . . . . . 
. . . f . . . . . . . . . . . . 
. . . f . . . . . . . . . . . . 
. . . f . . f f . . . . . . . . 
. . . f f f f f f f f . . . . . 
. . . . . f f f f f f f . . f . 
. . . . f f f f f f f f . . f . 
. . . f f f f f f f f f f f f f 
. . f f . . f . . f f f f f f f 
. . f . . . f . . . f f f f 5 f 
. . . . . f f . . f f f f f f f 
. . . . . . . . . f . . . f . . 
. . . . . . . . . f . . . f . . 
. . . . . . . . . . . . . f . . 
`)
    } else if (logic_cat.x % 2 == 0) {
        logic_cat.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f . . . 
. . . . . . . . . . . . f f f . 
. . . . . . . . . . . f f 5 f f 
f f f f f f f f f f f f f f f f 
f . . f f f f f f f f f f f f . 
. . . f f f f f f f f f f f . . 
. . f . f . . . . . . f . f . . 
. . f . f . . . . . . f . f . . 
`)
    } else {
    	
    }
    if (logic_cat.vx < 0) {
        logic_cat.image.flipX()
    }
})
