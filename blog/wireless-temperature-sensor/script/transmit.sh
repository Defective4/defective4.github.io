#!/bin/sh
TEMP=$(cat /sys/bus/w1/devices/28-00000f89b1a7/temperature | awk "{print \$1/1000}")
echo 1: Current temperature: $TEMP degrees Celsius | sudo pocsag -f 434000000