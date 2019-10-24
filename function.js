
getPosts();
function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let output = '<h2>API data</h2>';
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
