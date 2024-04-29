let kompas = input.compassHeading()
basic.forever(function () {
    if (kompas > 315 || kompas < 45) {
        kompas += 90
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (kompas > 45 || kompas < 135) {
        kompas += 90
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (kompas > 135 || kompas < 225) {
        kompas += 90
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (kompas > 225 || kompas < 45) {
        kompas += 90
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
