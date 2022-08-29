// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
//     котра має детальну інфорацію про об'єкт на який клікну


let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container)


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users =>  {
        for (const user of users) {

            let mainDiv = document.createElement('div');
            mainDiv.classList.add('member');
            container.appendChild(mainDiv);

            let h2 = document.createElement('h2');
            h2.innerText = user.id + " " + user.name;
            mainDiv.appendChild(h2);

            let button1 = document.createElement('button');
            button1.innerText = ('User Details');
            button1.onclick =  () => {
                location.href = `user-details/user-details.html?id=${user.id}`;

            }
            mainDiv.appendChild(button1);







        }

    });






