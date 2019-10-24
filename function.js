document.getElementById('addPost').addEventListener('sumbit', addPost);

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

// This function will add new record after pressing submit

function addPost(e){
    e.preventDefault();
    
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        headers:{
           'Accept': 'application/json, text/plain, */*',
           'Content-type':'application/json' 
        },
        body:JSON.stringify({title:title, body:body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}