//Descrizione
//Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
//Bonus
//Abbellire con CSS o Bootstrap
//Inserire un bottone che al click fetchi altre 10 mail (sostituendo le altre)


const UlEl = document.querySelector('ul')
let emailArray = []
for (let i = 0; i < 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response => {
            let randomEmail = response.data.response
            emailArray.push(randomEmail)
            let li = document.createElement('li')
            li.append(randomEmail)
            UlEl.appendChild(li)
            }
           
        )    
}

console.log(emailArray)


            
            
