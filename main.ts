input.onButtonPressed(Button.A, function () {
    mode = !(mode)
    led.stopAnimation()
})
let mode = false
mode = !(mode)
basic.forever(function () {
    if (mode) {
        basic.showString("T=" + input.temperature())
    } else {
        led.plotBarGraph(
        input.temperature() - 25,
        40
        )
    }
})
