// Created by: Nina Mathew
// Created on:10/1/20
// This program uses sonar to find distance.
let distancetoobject = 0
basic.showIcon(IconNames.Yes)
basic.pause(500)
basic.forever(function () {
    distancetoobject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(distancetoobject)
})
