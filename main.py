led.enable(True)

def on_forever():
    music.play_melody("G F G A - F E D ", 120)
    basic.pause(1000)
    basic.show_string("" + str((input.temperature())))
    serial.write_value("x", input.temperature())
    basic.pause(60000)
basic.forever(on_forever)
