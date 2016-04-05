Arduino vs Raspberry Pi
#######################

:date: 2015-12-03 10:21
:modified: 2016-04-03 18:20
:tags: arduino, microboard, microcontroller, bone, pi, 3.14
:category: hardware
:slug: arduinovspi
:author: Meka
:summary: Arduino vs RaspberryPi
:template: arduinovspi
:beforemore: When I heard about Arduino, RaspberryPi, BeagleBone and some other boards, my first question was "Why such diversity?" Let me concentrate only on Arduino and RaspberryPi.

RaspberryPi 2 B

First notable difference is the size and I/O ports, but let's start with use case differences. RaspberryPi is a full fledged computer with 4 USB ports, audio out, HDMI connection, 4 cores, 1GB of RAM and power input. Besides that, there's a handful of pins usually called GPIO. All of them are digital, so if you need, for example, measurement of voltage, you need extra boards to convert analog to digital signals. Nice thing about RaspberryPi is that it runs whole operating system, so you can choose which programming language to use. People usually choose Python, as it requires the least programming knowledge to start developing.

Arduino Nano

Arduino is small in any sense you can think of. It has few kB of memory, slow "CPU" and no operating system. That means you have to use stripped down version of C++ called INO. There is IDE called "arduino" but you might like command line more in which case "pip install ino" will do the trick. Arduino has digital and analog pins, which makes it perfect for projects that do the measurements or any kind of AD/DA conversion. Arduino IDE comes with bunch of examples and the simplest one - blink - is what most people use to confirm that their Arduino board is functioning. It's a program that lights up a diode on the board for 1s, turns it off for 1s and repeats that infinetly.

Arduino and RaspberryPi combined can be powerful asset for any hacker/maker. I hope we will have real world examples, soon. Stay tuned!
