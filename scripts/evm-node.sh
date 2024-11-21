#!/bin/bash

SCRIPT_DIR="$(dirname "$0")"
ANVIL_EXECUTABLE="$SCRIPT_DIR/../bin/anvil.exe"
LOG_LOC="$SCRIPT_DIR/../evmnode.log"

rm -f "$LOG_LOC"

pkill -9 anvil.exe
"$ANVIL_EXECUTABLE" > /dev/null 2>&1 & echo $!
