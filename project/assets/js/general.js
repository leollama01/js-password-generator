document.addEventListener("DOMContentLoaded", function() { 
    
    let buttonGenerate = $('#button-generate-password');
    let lengthPassword = $('#length-password');
    let valueLengthPassword = 0;
    let listCheckbox = [];
    let charactersToUse = [];

    buttonGenerate.click(function() {
        listCheckbox = [];
        valueLengthPassword = 0;
        charactersToUse = [];
        if ((lengthPassword.val() != '') && (!(Number.isNaN(parseInt(lengthPassword.val()))))) {
            if (parseInt(lengthPassword.val()) > 0) {
                valueLengthPassword = parseInt(lengthPassword.val());
                for (let i = 0; i < $('.opt-checkbox').length; i++) {
                    if ($($('.opt-checkbox')[i]).prop('checked')) {
                        // listCheckbox.push($($('.opt-checkbox')[i]));
                        // listCheckbox.push($('.opt-checkbox')[i].value);
                        charactersToUse += generateStringWithCharacter($('.opt-checkbox')[i].value);
                    }
                }

                if (charactersToUse.length > 0) {
                    console.log(charactersToUse)
                } else {
                    console.log('selecione checkbox')
                }

            }
        } else {
            console.log('valor errado');
        }

        console.log(generateStringWithCharacter('uppercase'))
        console.log(generateStringWithCharacter('lowercase'))
        console.log(generateStringWithCharacter('digit'))
        console.log(generateStringWithCharacter('special'))

    });

});


function makeid(length) {

    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


function generateStringWithCharacter(_typeOfCharacter) {
    
    let strCharacter = '';

    switch (_typeOfCharacter) {
        case 'uppercase':
            for (let i = ('A').charCodeAt(); i <= ('Z').charCodeAt(); i++) {
                strCharacter += String.fromCharCode(i);
            }
            break;
        case 'lowercase':
            for (let i = ('a').charCodeAt(); i <= ('z').charCodeAt(); i++) {
                strCharacter += String.fromCharCode(i);
            }
            break;
        case 'digit':
            for (let i = ('0').charCodeAt(); i <= ('9').charCodeAt(); i++) {
                strCharacter += String.fromCharCode(i);
            }
            break;
        case 'special':
            for (let i = ('!').charCodeAt(); i <= ('/').charCodeAt(); i++) {
                strCharacter += String.fromCharCode(i);
            }
            break;
    }

    return strCharacter;
}