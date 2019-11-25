const ime = document.getElementById('ime');
const prezime = document.getElementById('prezime');
const email = document.getElementById('email');
const poruka = document.getElementById('poruka');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const simpleEmailRegex = /\S+@\S+\.\S+/;

form.addEventListener('submit', (e) => {
    let messages = []
    if(ime.value === '' || ime.value == null) {
        messages.push('Molim vas unesite ime.')
    }

    if(prezime.value === '' || prezime.value == null) {
        messages.push('Molim vas unesite prezime.')
    }

    if(simpleEmailRegex.test(email.value) == false || email.value === '' || email.value == null){
        messages.push('Molim vas unesite tačnu email adresu.')
    }    

    if(poruka.value === '' || poruka.value == null) {
        messages.push('Molim vas unesite vašu poruku ili pitanje.')
    }
    
    if(messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
})
