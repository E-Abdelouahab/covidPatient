const ul = document.getElementById('summary');


const url = 'https://api.covid19api.com/summary';

fetch(url)
.then(res => { return res.json()
})


.then(function(data) {
  let summary = data;
 

    ul.innerHTML = `<div class="col-xl-3 col-md-6">
    <div class="card bg-warning text-white mb-4">
        <div class="card-body">Nouveaux cas : ${summary.Global.NewConfirmed}</div>
        <div class="card-footer d-flex align-items-center justify-content-between">
            <a class="small text-white stretched-link" href="#">Total des cas : ${summary.Global.TotalConfirmed}</a>
          
        </div>
    </div>
</div>
<div class="col-xl-3 col-md-6">
<div class="card bg-success text-white mb-4">
    <div class="card-body">Nouveaux rétablis : ${summary.Global.NewDeaths}</div>
    <div class="card-footer d-flex align-items-center justify-content-between">
        <a class="small text-white stretched-link" href="#">Total des rétabli : ${summary.Global.TotalDeaths}</a>
     
    </div>
</div>
</div>
<div class="col-xl-3 col-md-6">
<div class="card bg-danger text-white mb-4">
    <div class="card-body">Nouveaux morts : ${summary.Global.NewRecovered}</div>
    <div class="card-footer d-flex align-items-center justify-content-between">
        <a class="small text-white stretched-link" href="#">Total des morts : ${summary.Global.TotalRecovered}</a>
       
    </div>
</div>
</div>
`;
    
   
    
    
 
})

.catch(function(error) {
  console.log(error);
});