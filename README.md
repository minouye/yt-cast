# yt-cast
[Overcast](https://overcast.fm) is a superb podcast player for iOS. It cleverly reduces silences and delivers distortion-free playback at faster than normal speeds. Overcast also allows paid subscribers to upload audio files through a web interface. _yt-cast_ takes a YouTube URL, extracts the audio, and uploads it to your personal Overcast account. It's perfect for taking an interview, lecture, or other long-form video and turning it into a "podcast". 


# Setup

Install all dependencies:
```
brew install node
brew install youtube-dl

npm install dotenv
npm install puppeteer
```

Create a `.env` file in the project directory and add your Overcast username and password:

```
OVERCAST_EMAIL=[Your email address]
OVERCAST_PASSWORD=[Your password]
```

Create an alias to your .bash_profile file:


```
alias yt-cast="[Path to project]/yt-cast/run.sh [Path to downloads]"
```

Then run `source ~/.bash_profile`

# Run

`yt-cast [Youtube URL]`
