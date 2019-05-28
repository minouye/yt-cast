#!/bin/bash 
downloads_path="$1"
url="$2"

dir="$(cd "$(dirname "$0")" && pwd)"
# bash ${__dir}/b.sh
youtube-dl --extract-audio --audio-format mp3 --output "$downloads_path"'%(title)s.mp3' "$url"
filename="$(youtube-dl --get-filename -o '%(title)s' $url)"
node $dir/upload.js "$downloads_path$filename.mp3"
