document.addEventListener("DOMContentLoaded", function() {
    
    let buttonGenerate = $('#button-generate-password');
    let lengthPassword = $('#length-password');
    let valueLengthPassword = 0;
    let charactersToUse = '';
    let passwordGenerated = '';


    buttonGenerate.click(function() {
        passwordGenerated = '';
        charactersToUse = '';
        valueLengthPassword = 0;
        if ((lengthPassword.val() != '') && (!(Number.isNaN(parseInt(lengthPassword.val()))))) {
            if (parseInt(lengthPassword.val()) > 0) {
                valueLengthPassword = parseInt(lengthPassword.val());
                for (let i = 0; i < $('.opt-checkbox').length; i++) {
                    if ($($('.opt-checkbox')[i]).prop('checked')) {
                        charactersToUse += generateStringWithCharacter($('.opt-checkbox')[i].value);
                        console.log(charactersToUse)
                    }
                }

                if (charactersToUse.length > 0) {
                    passwordGenerated = generateRandomPassword(valueLengthPassword, charactersToUse)
                    console.log(passwordGenerated)
                } else {
                    console.log('selecione checkbox')
                    passwordGenerated = 'erro'
                }

            } else {
                passwordGenerated = 'Wrong values, try again! -------'
            }
        } else {
            console.log('valor errado');
            passwordGenerated = 'Wrong values, try again!'
            $('#img-copy')[0].style.display = 'none'
            adjustDisplayPassword('inline', 'none')
        }

        // console.log(generateStringWithCharacter('uppercase'))
        // console.log(generateStringWithCharacter('lowercase'))
        // console.log(generateStringWithCharacter('digit'))
        // console.log(generateStringWithCharacter('special'))

        console.log($('#password-generated'))
        $('#div-password-generated')[0].style.display = 'inline'
        // $('#img-copy')[0].style.display = 'inline'
        $('#password-generated')[0].textContent = passwordGenerated

    });

    $('#img-copy').click(function() {
        console.log('copiar')
    });

});


// Function to generate random pass by: https://stackoverflow.com/a/1349426
// But i've changed to my need
function generateRandomPassword(_length, _charactersToUse) {

    let result = '';
    let characters = _charactersToUse
    let charactersLength = _charactersToUse.length;
    for ( var i = 0; i < _length; i++ ) {
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

function adjustDisplayPassword(_passwordField, _copyField) {
    $('#div-password-generated')[0].style.display = _passwordField
    $('#img-copy')[0].style.display = _copyField
}