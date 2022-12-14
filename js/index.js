const card_last=document.getElementById('card_last');
const card_sports=document.getElementById('card_sports');
const card_politics=document.getElementById('card_politics');
const card_healthy=document.getElementById('card_healthy');
const card_economy=document.getElementById('card_economy');

    //fetch the latest news api with jquery method
    $.get("http://localhost/news-bootstrap5/api/latest_news.php", function(data,status) {  
        console.log(data);  
        for(let i=0;i<data.length;i++){
         card_last.innerHTML+=
         `<div class="col-sm-3">
           <div class="card">
             <img src="${data[i].image}" class="card-img-top" alt="...">
             <div class="card-body">
               <h5 class="card-title text-danger">${data[i].title}</h5>
               <p class="card-text">${data[i].breif}</p>
               <a href="readnews.html?id=${data[i].id}" class="btn btn-danger">READ</a>
             </div>
           </div>
         </div>
         `
        } 
    });

     //fetch the sports news api with jquery method
    $.get("http://localhost/news-bootstrap5/api/sport_news.php", function(data,status) {  
      console.log(data);  
      for(let i=0;i<data.length;i++){
        card_sports.innerHTML+=
       `<div class="col-sm-3">
         <div class="card">
           <img src="${data[i].image}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title text-danger">${data[i].title}</h5>
             <p class="card-text">${data[i].breif}</p>
             <a href="readnews.html?id=${data[i].id}" class="btn btn-danger">READ</a>
           </div>
         </div>
       </div>
       `
      } 
  });
     //fetch the politics news api with jquery method
     $.get("http://localhost/news-bootstrap5/api/politics_news.php", function(data,status) {  
      console.log(data);  
      for(let i=0;i<data.length;i++){
        card_politics.innerHTML+=
       `<div class="col-sm-3">
         <div class="card">
           <img src="${data[i].image}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title text-danger">${data[i].title}</h5>
             <p class="card-text">${data[i].breif}</p>
             <a href="readnews.html?id=${data[i].id}" class="btn btn-danger">READ</a>
           </div>
         </div>
       </div>
       `
      } 
  });

       //fetch the healthy news api with jquery method
       $.get("http://localhost/news-bootstrap5/api/healthy_news.php", function(data,status) {  
        console.log(data);  
        for(let i=0;i<data.length;i++){
          card_healthy.innerHTML+=
         `<div class="col-sm-3">
           <div class="card">
             <img src="${data[i].image}" class="card-img-top" alt="...">
             <div class="card-body">
               <h5 class="card-title text-danger">${data[i].title}</h5>
               <p class="card-text">${data[i].breif}</p>
               <a href="readnews.html?id=${data[i].id}" class="btn btn-danger">READ</a>
             </div>
           </div>
         </div>
         `
        } 
    });

        //fetch the economy news api with jquery method
       $.get("http://localhost/news-bootstrap5/api/economy_news.php", function(data,status) {  
        console.log(data);  
        for(let i=0;i<data.length;i++){
          card_economy.innerHTML+=
         `<div class="col-sm-3">
           <div class="card">
             <img src="${data[i].image}" class="card-img-top" alt="...">
             <div class="card-body">
               <h5 class="card-title text-danger">${data[i].title}</h5>
               <p class="card-text">${data[i].breif}</p>
               <a href="readnews.html?id=${data[i].id}" class="btn btn-danger">READ</a>
             </div>
           </div>
         </div>
         `
        } 
    });