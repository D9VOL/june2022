// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url2 = new URL(location.href);
let id2 = url2.searchParams.get('id');
console.log(url2);
console.log(id2);

let postDiv = document.createElement('div');
postDiv.classList.add('postDetails');
document.body.appendChild(postDiv);

let h2 = document.createElement('h2');
h2.innerText = 'Post details';
postDiv.appendChild(h2);

fetch(`https://jsonplaceholder.typicode.com/posts/${id2}`)
    .then(response=>response.json())
    .then(post => {
        let ulPost = document.createElement('ul');
        postDiv.appendChild(ulPost);

        for (let postKey in post) {
            let li = document.createElement('li');
            li.innerText = `${postKey}:  ${post[postKey]}`
            ulPost.appendChild(li);

        }

    })


let commentDiv = document.createElement('div');
commentDiv.classList.add('coment');
document.body.appendChild(commentDiv);

let h2Comment = document.createElement('h2');
h2Comment.innerText = 'Comments post';
commentDiv.appendChild(h2Comment);


fetch(`https://jsonplaceholder.typicode.com/posts/${id2}/comments`)
    .then(response=>response.json())
    .then(comments => {
        let divComments = document.createElement('div');
        divComments.classList.add('block');
        commentDiv.appendChild(divComments);

        for (let comment of comments) {
            let p = document.createElement('p');
            p.innerText = `${comment.name}`
            divComments.appendChild(p);

        }

    })

