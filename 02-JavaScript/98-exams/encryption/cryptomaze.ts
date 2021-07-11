class Cryp{
    publicKey:string;
    privateKey:string;
    
    main:Array<string>
    key:Array<string>

    constructor(publicKey:string, privateKey:string){
        this.publicKey= publicKey;
        this.privateKey = privateKey;

        this.main = publicKey.split('');
        this.key = privateKey.split('');


    }

    
    _encryptLetter(letter: string): string {
        try {
            //get index of the the letter
            const letterIndex = this.main.findIndex(ltr => ltr === letter);
    
            if (letterIndex > -1) {
                return this.key[letterIndex];
            } else {
                return '-'
            }
        } catch (e) {
            console.error(e);
            return '-'
        }
    }

    _decryptLetter(letter: string): string {
        try {
            //get index of the the letter
            const letterIndex = this.key.findIndex(ltr => ltr === letter);
    
            if (letterIndex > -1) {
                return this.main[letterIndex];
            } else {
                return '-'
            }
        } catch (e) {
            console.error(e);
            return '-'
        }
    }

    encryptSentnece(sentence: string): string {
        const sentenceArray: Array<string> = sentence.split('');
    
        const encryptedSentenceArray: string = sentenceArray.map(letter => {
            return this._encryptLetter(letter)
        }).join('')
    
        return encryptedSentenceArray;
    }

    decryptSentnece(sentence: string): string {
        const sentenceArray: Array<string> = sentence.split('');
    
        const decryptedSentenceArray: string = sentenceArray.map(letter => this._decryptLetter(letter)).join('')
    
        return decryptedSentenceArray;
    }
}