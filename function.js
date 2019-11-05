
// if (window.location.href.indexOf("Details_page") != -1) {
//     showDetails();
// } else if (window.location.href.indexOf("NewRecord") != -1) {
// } else {
//     getPosts();
// }


// // fetch API function, gets the data
// function getPosts() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => {
//             return response.json();
//         })
//         //this should show the data in the page
//         .then(data => {
//             let output = document.getElementById('output');
//             for (let i = 0; i < data.length; i++) {
//                 if (data[i].id === 100) {
//                     let output = "<div class=\"rowing row-id-" + data[i].id + "\">";
//                     activeLine +=`
//                     "<p>" + data[i].id + "</p>" +
//                     "<p>" + data[i].title.toString() + "</p>" + "</div>";
//                     output.innerHTML += activeLine;`
//                     $(window).trigger("Loaded", saveData());

//                 } else {
//                     let output = "<div class=\"rowing row-id-" + data[i].id + "\">";
//                     output +=
//                     "<p>" + data[i].id + "</p>" +
//                     "<p>" + data[i].title.toString() + "</p>" + "</div>";
//                     output.innerHTML += activeLine;
//                 }
//             }
//         })
//         .catch(err => {
//             console.log(err);
//         });
//     }
    
// // this creates local storage for the data that was fetched from given API

// function saveData(){
//     $(document).ready(function() {
//         $(".title").click(function(){
//             let requester = this.className;
//             requester.requester.replace('title', 'https://jsonplaceholder.typicode.com/posts/');
//             document.requester = $(this).attr('requester');
//             localStorage.setItem("requester", requester);
//             window.location.href = Details_page.html;
//             console.log("redirect");
//         });
//     });
// }

// // this function should post more details about the id/title it was clicled on
// function showDetails() {
//     let requester = localStorage.getItem("requester");
//     fetch(requester)
//     .then((res) => res.json())
//     .then((data) => {
//         data.forEach(function(post){
//             data += `<p>${post.id} ${post.title} ${post.body} </p>`;
//         });
//         document.getElementById('data').innerHTML = data;
//     })
// }