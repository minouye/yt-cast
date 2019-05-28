#!/bin/bash 
url="$1"

youtube-dl --extract-audio --audio-format mp3 --output '%(title)s.mp3' "$url"
filename="$(youtube-dl --get-filename -o '%(title)s' $url)"
node upload.js "$filename.mp3"
