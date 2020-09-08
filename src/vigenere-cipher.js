class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type
  }
  crypt(message, key, method) {
    const criptedMsg = [];
    const uppMessage = message.toUpperCase()
    const uppKey = key.toUpperCase();
    let keyIdx = 0;
    for (let i = 0; i < uppMessage.length; i++) {
      const currentCharCode = uppMessage[i].charCodeAt();
      if (currentCharCode >= 65 && currentCharCode <= 90) {
        let cryptChar = '';
        if (method === 'encrypt') {
          cryptChar = String.fromCharCode((currentCharCode + uppKey.charCodeAt(keyIdx)) % 26 + "A".charCodeAt());
        } else {
          cryptChar = String.fromCharCode((currentCharCode + 26 - uppKey.charCodeAt(keyIdx)) % 26 + "A".charCodeAt());
        }
        criptedMsg.push(cryptChar)
        if (keyIdx === uppKey.length - 1) {
          keyIdx = 0
        } else keyIdx++
      } else criptedMsg.push(uppMessage[i])

    }
    if (this.type) {
      return criptedMsg.join('')
    } else return criptedMsg.reverse().join('')
  }
  encrypt(message, key) {
    if (!message && !key) throw new Error('Parameters is mandatory')
    const result = this.crypt(message, key, 'encrypt');
    return result;
  }
  decrypt(message, key) {
    if (!message && !key) throw new Error('Parameters is mandatory')
    const result = this.crypt(message, key, 'decrypt');
    return result;
  }
}

module.exports = VigenereCipheringMachine;

