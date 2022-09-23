const card_last=document.getElementById('card_last');
    
    //fetch the latest news aoi with jquery method
    $.get("http://localhost/news-bootstrap5/latest_news.php", function(data,status) {  
        console.log(data);  
        for(let i=0;i<data.length;i++){
         card_last.innerHTML+=
         `<div class="col-sm-3">
           <div class="card">
             <img src="${data[i].image}" class="card-img-top" alt="...">
             <div class="card-body">
               <h5 class="card-title text-danger">${data[i].title}</h5>
               <p class="card-text">${data[i].breif}</p>
               <a href="#" class="btn btn-danger">READ</a>
             </div>
           </div>
         </div>
         `
        } 
    });
