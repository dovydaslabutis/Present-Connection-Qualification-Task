getPosts();
function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let output = '';
        data.forEach(function(post){
            output += `<p>${post.id} ${post.title}</p>`;
        });
        document.getElementById('output').innerHTML = output;
    })
}

