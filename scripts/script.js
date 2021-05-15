const keys = document.querySelectorAll('.key');
const regulars = document.querySelectorAll('.key.white');
const sharps = document.querySelectorAll('.key.black');

//matches the piano to the keyboard letters - will play the assigned piano notes
const whites = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'];
const blacks = ['w', 'e', 't', 'y', 'u', 'o', 'p']


//will play the piano note when user clicks on a piano key
keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
})

//allows the user to press keys on their keyboard to play the piano notes
document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const whiteKeyIndex = whites.indexOf(key)
    const blackKeyIndex = blacks.indexOf(key)

    if (whiteKeyIndex > -1) playNote(regulars[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(sharps[blackKeyIndex])
})


//plays note
//when 'active', key that has been clicked/played will turn grey
//when note audio file has finished playing, the key will no longer be 'active' and will go back to its original color (white)
let playNote = (key) => {
    const noteSound = document.getElementById(key.dataset.note);
    noteSound.currentTime = 0
    noteSound.play()
    key.classList.add('active')
    noteSound.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}
