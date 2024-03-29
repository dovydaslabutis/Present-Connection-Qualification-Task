// This function will add new record after pressing submit
document.getElementById('addPost').addEventListener('submit', addPost);
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