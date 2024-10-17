//Descrizione
//Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
//Bonus
//Abbellire con CSS o Bootstrap
//Inserire un bottone che al click fetchi altre 10 mail (sostituendo le altre)

axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
.then(response =>  {
    const UlEl = document.querySelector('ul')
    console.log(UlEl); 
    /* console.log(response.data); 
    const randomMail = response
    console.log(randomMail);  */
    const randomEmail = response.data.response
    console.log(randomEmail);
    const randomEmailEl = document.createElement('li')
    UlEl.appendChild(randomEmail)

})



function generateRandomEmails(email){
    for (let i = 0; i <= 10; i++) {
        const mail = email[i];
        mail = mail*10
    }
    console.log(mail);
    
    return mail
}

generateRandomEmails(randomEmail)