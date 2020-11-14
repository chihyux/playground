const videoEl = document.getElementById('video')
const startButton = document.getElementById('start')
const captureButton = document.getElementById('capture')

async function selectMediaStream () {
 try {
   const mediaStream = await navigator.mediaDevices.getDisplayMedia()
   videoEl.srcObject = mediaStream
   videoEl.onloadeddata = () => {
       videoEl.play()
   }
 } catch(error) {
    console.log('Error Msg:', error)
 }
}

startButton.addEventListener('click', selectMediaStream)
captureButton.addEventListener('click', async() => {
    captureButton.disabled = true
    //start in small picture
    await videoEl.requestPictureInPicture()
    captureButton.disabled = false
})

