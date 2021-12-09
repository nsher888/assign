const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')


btn.addEventListener('click', function(){
    fetch('https://fakerapi.it/api/v1/persons?_quantity=5')
        .then(response => response.json())
        .then(returnedResponse => {
            if(returnedResponse.code === 200) {
                const ul = document.querySelector('#persons');
                returnedResponse.data.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item.firstname;
                    ul.appendChild(li);
                })
            }
        })
})



btn2.addEventListener('click', function(){
    fetch('https://fakerapi.it/api/v1/credit_cards?_quantity=5')
        .then(response => response.json())
        .then(returnedResponse => {
            if(returnedResponse.code === 200) {
                const ul = document.querySelector('#persons');
                returnedResponse.data.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item.owner;
                    ul.appendChild(li);
                })
            }
        })
})


