document.getElementById('getText').addEventListener('click', getText);


function getText(){
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        document.getElementById('output').innerHTML = data;
    })
}



getPosts();
function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Posts</h2>';
        data.forEach(function(post){
            output += `
             <div>
                 <h3>${post.id}</h3>
                 <p>${post.title}</p>
             </div>
            `;
        });
        document.getElementById('output').innerHTML = data;
    })
}
