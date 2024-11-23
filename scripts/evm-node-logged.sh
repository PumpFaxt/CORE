#!/bin/bash

SCRIPT_DIR="$(dirname "$0")"
ANVIL_EXECUTABLE="$SCRIPT_DIR/../bin/anvil.exe"
LOG_LOC="$SCRIPT_DIR/../evmnode.log"

rm -f "$LOG_LOC"

pkill -9 anvil.exe
"$ANVIL_EXECUTABLE" --host 0.0.0.0 > "$LOG_LOC" 2>"$LOG_LOC" & echo $! 
