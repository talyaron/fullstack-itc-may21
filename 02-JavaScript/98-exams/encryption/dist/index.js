// const main: Array<string> = 'abcdefghijklmnopqrstuvwxyz'.split('');
// const key: Array<string> = 'qwertyuiopasdfghjklzxcvbnm'.split('');
var crypt = new Cryp('abcdefghijklmnopqrstuvwxyz', 'qwertyuiopasdfghjklzxcvbnm');
// convert from one to the other
function handleSentence(ev) {
    console.dir(ev);
    var sentence = ev.target.value;
    var encryptedSentence = crypt.encryptSentnece(sentence);
    document.getElementById('rootSentence').innerText = encryptedSentence;
    localStorage.setItem('encryptedSentence', encryptedSentence);
}
// encryptedSentence
function renderEncryptedSentence() {
    var encryptedSentence = localStorage.getItem('encryptedSentence');
    document.getElementById('encryptedSentence').innerText = encryptedSentence;
}
function handleEncryptSentence(ev) {
    var encryptedSentence = ev.target.value;
    var sentence = crypt.decryptSentnece(encryptedSentence);
    localStorage.setItem('sentence', sentence);
}
function renderDecryptedSentence() {
    var sentece = localStorage.getItem('sentence');
    document.getElementById('decryptedSentence').innerText = sentece;
}
