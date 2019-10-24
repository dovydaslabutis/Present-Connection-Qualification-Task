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
        console.log ("pass results");
        return res.text();
    })
    .then(function(data){
        console.log ("pass data");
        console.log(data)
    })
}