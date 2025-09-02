function inncorect_guess () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.showString("better luck next time")
}
function correct_guess () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    score += 1
    basic.showString("awsome")
    basic.showNumber(score)
}
let score = 0
score = 0
if ((5 as any) < (10 as any)) {
    inncorect_guess()
} else {
    correct_guess()
}
basic.forever(function () {
	
})
