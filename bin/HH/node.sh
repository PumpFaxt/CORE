#!/bin/bash
cd "$(dirname "$0")"
pwd
deno run -A npm:hardhat node
