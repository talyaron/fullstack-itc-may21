var Cryp = /** @class */ (function () {
    function Cryp(publicKey, privateKey) {
        this.publicKey = publicKey;
        this.privateKey = privateKey;
        this.main = publicKey.split('');
        this.key = privateKey.split('');
    }
    Cryp.prototype._encryptLetter = function (letter) {
        try {
            //get index of the the letter
            var letterIndex = this.main.findIndex(function (ltr) { return ltr === letter; });
            if (letterIndex > -1) {
                return this.key[letterIndex];
            }
            else {
                return '-';
            }
        }
        catch (e) {
            console.error(e);
            return '-';
        }
    };
    Cryp.prototype._decryptLetter = function (letter) {
        try {
            //get index of the the letter
            var letterIndex = this.key.findIndex(function (ltr) { return ltr === letter; });
            if (letterIndex > -1) {
                return this.main[letterIndex];
            }
            else {
                return '-';
            }
        }
        catch (e) {
            console.error(e);
            return '-';
        }
    };
    Cryp.prototype.encryptSentnece = function (sentence) {
        var _this = this;
        var sentenceArray = sentence.split('');
        var encryptedSentenceArray = sentenceArray.map(function (letter) {
            return _this._encryptLetter(letter);
        }).join('');
        return encryptedSentenceArray;
    };
    Cryp.prototype.decryptSentnece = function (sentence) {
        var _this = this;
        var sentenceArray = sentence.split('');
        var decryptedSentenceArray = sentenceArray.map(function (letter) { return _this._decryptLetter(letter); }).join('');
        return decryptedSentenceArray;
    };
    return Cryp;
}());
