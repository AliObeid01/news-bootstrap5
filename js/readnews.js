const readnew=document.getElementById('readnew');
const params = new URLSearchParams(window.location.search)
const id=params.get('id');


    //fetch the a single new api with jquery method
    $.get(`http://localhost/news-bootstrap5/api/readnews.php?id=${id}`, function(data,status) {  
        readnew.innerHTML=
        `<img src="${data[0].image}" class="rounded mx-auto d-block"></img>
         <div class="card-header">
         ${data[0].title}
         </div>
         <div class="card-body">
           <h5 class="card-title">${data[0].breif}</h5>
           <p class="card-text">${data[0].text}</p>
           
         </div>
         <div class="card-footer text-muted">
         ${data[0].author}, ${data[0].date_time}
         </div>
         `
        
    });