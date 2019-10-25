getPosts();
function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let output = '<h2>ID title</h2>';
        data.forEach(function(post){
            output += `
             <div>
                 <p>${post.id}</p>
                 <p>${post.title}</p>
             </div>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
}

document.getElementById('getPosts').addEventListener('click', addPost);

ID_by_row();
function ID_by_row(){
    fetch('https://jsonplaceholder.typicode.com/posts/%7bID%7d')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let output = '<h2>Is the form you were looking for ? </h2>';
        data.forEach(function(post){
            output += `
             <div>
                 <p>${post.userId}</p>
                 <p>${post.id}</p>
                 <p>${post.title}</p>
                 <p>${post.body}</p>
             </div>
            `;
        });
        document.getElementById('ID_by_row').innerHTML = output;
    })
}