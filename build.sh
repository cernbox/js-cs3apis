#!/bin/bash

git clone https://github.com/cernbox/cs3apis build && cd build && make && cd ..
cat prototool_gen_go.yaml >> build/prototool.yaml
cd build && prototool generate --debug && cd ..
rm -rf build
