// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.

let url = new URL(location.href);
console.log(url);
let id = url.searchParams.get('id');
console.log(id);

let mainDiv = document.createElement('div');
mainDiv.classList.add('mainUser');
document.body.appendChild(mainDiv);

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response=>response.json())
    .then(user => {

            let userInfo = document.createElement('ul');
            userInfo.classList.add('info');
            mainDiv.append(userInfo);

            function explorer (userID) {
                    for (const item in userID) {
                        let child = userID[item]

                            if (typeof child === 'string'){

                                let li = document.createElement('li');
                                li.innerText = `${item} ------ ${child}`;
                                userInfo.appendChild(li);

                            } else if (typeof child === 'object') {
                                let uLChild = document.createElement('ul');
                                uLChild.classList.add('child');
                                userInfo.appendChild(uLChild);

                                let liChild = document.createElement('li');
                                liChild.innerText = `${item}:`
                                uLChild.appendChild(liChild);

                                explorer(child)

                                }
                            }
                    }

                explorer(user)


    })

let divBtn2 = document.createElement('div');
divBtn2.classList.add('second');
document.body.appendChild(divBtn2);


let button2 = document.createElement('button');
button2.classList.add('btn2');
button2.innerText = ('Post of current user');
button2.onclick =  () => {
    postUser.classList.toggle('visible');
}

divBtn2.appendChild(button2);

let postUser  = document.createElement('div');
postUser.classList.add('userPost');
divBtn2.appendChild(postUser);


fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(response=>response.json())
    .then(posts => {

        for (const post of posts) {

            let divElement = document.createElement('div');
            divElement.classList.add('post')
            postUser.appendChild(divElement);


            let p = document.createElement('p');
            p.innerText = post.title;
            divElement.appendChild(p);

            let button3 = document.createElement('button');
            button3.classList.add('btn3');
            button3.innerText = ('Details');
            button3.onclick =  () => {
                location.href = `../post-details/post-details.html?id=${post.id}`;
            }

            divElement.appendChild(button3);

        }


    })







