radio.onReceivedNumber(function (receivedNumber) {
    action = receivedNumber
})
function forkDown () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
}
function reverse () {
    wuKong.setAllMotor(0, 0)
}
function foward () {
    wuKong.setAllMotor(0, 0)
}
function forkUp () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
let action = 0
joystickbit.initJoystickBit()
radio.setGroup(19)
basic.showIcon(IconNames.Happy)
