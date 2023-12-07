# Disney Plus Clone Challenge

I undertook a Disney+ Clone tutorial project utilizing a range of technologies. The specific tutorial caught my attention as I noticed other developers encountering difficulties while building this application, which motivated me to delve into this intricate project.

Technologies Used:
- React.js
- Firebase
- Redux
- Styled Components

Challenges Faced and Resolutions:

### HTML Video Background Issue:

One significant challenge involved the HTML video background not displaying despite the correct markup. To overcome this hurdle, I ensured the correct import and rendering of the video component within the code. Notably, for Google Chrome and similar browsers, utilizing the `autoPlay`, `muted`, and `loop` attributes is crucial.

#### autoPlay:

The `autoPlay` attribute instructs the video to start playing as soon as it's ready, without requiring the user to manually press the play button. However, be aware that certain browsers impose limitations on auto-playing videos, especially if sound is involved. To ensure compliance with browser policies and provide a better user experience, it's advisable to mute the video when using the `autoPlay` attribute.

#### muted:

The `muted` attribute ensures that the video plays without sound. Many browsers restrict autoplaying videos with sound to enhance the browsing experience, particularly when users have multiple tabs open. By muting the video, it allows for autoplay without triggering unwanted sound.

#### loop:

The `loop` attribute specifies that the video should restart when it reaches the end, creating a seamless loop of playback. Hopefully, this insight can assist those encountering similar issues!

### Switch Issue Resolved:

I successfully addressed a switch issue by implementing `<Routes>` to resolve routing problems, ensuring proper navigation:
```javascript
<Routes>
  <Route path='/login' element={<Login />} />
  <Route path='/detail' element={<Detail />} />
  <Route path='/' element={<Home />} />
</Routes>



