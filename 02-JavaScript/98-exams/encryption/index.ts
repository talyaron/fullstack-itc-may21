// const main: Array<string> = 'abcdefghijklmnopqrstuvwxyz'.split('');

// const key: Array<string> = 'qwertyuiopasdfghjklzxcvbnm'.split('');

const crypt = new Cryp('abcdefghijklmnopqrstuvwxyz','qwertyuiopasdfghjklzxcvbnm')

// convert from one to the other

function handleSentence(ev: any) {
    console.dir(ev)
    const sentence: string = ev.target.value;

    const encryptedSentence: string = crypt.encryptSentnece(sentence);

    document.getElementById('rootSentence').innerText = encryptedSentence;
    localStorage.setItem('encryptedSentence', encryptedSentence)



}
// encryptedSentence

function renderEncryptedSentence() {
    const encryptedSentence: string = localStorage.getItem('encryptedSentence');
    document.getElementById('encryptedSentence').innerText = encryptedSentence;

}

function handleEncryptSentence(ev){
    const encryptedSentence:string = ev.target.value;

    const sentence:string = crypt.decryptSentnece(encryptedSentence);
  
    localStorage.setItem('sentence', sentence)

}

function renderDecryptedSentence(){
    const sentece:string = localStorage.getItem('sentence');

    document.getElementById('decryptedSentence').innerText = sentece;

}
