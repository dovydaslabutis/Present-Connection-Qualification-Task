document.getElementById('getText').addEventListener('click', getText);

// function getText(){
//     fetch('sample.txt')
//     .then((res) => res.text())
//     .then((data) => {
//         document.getElementById('output').innerHTML = data;
//     })
// }

function getText(){
    fetch('sample.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data)
    })
}