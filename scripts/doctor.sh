#!/bin/bash
echo "Node: $(node -v)"
echo "NPM: $(npm -v)"
echo "Java: $(java -version 2>&1 | head -n 1)"
echo "Watchman: $(watchman -v)"
echo "Cocoapods: $(pod --version)"
echo "Android SDK: $ANDROID_HOME"
