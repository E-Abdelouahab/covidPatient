
let dropdown = document.getElementById('countries');
dropdown.length = 0;


let defaultOption = document.createElement('option');
defaultOption.text = 'Choisissez un pays';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const urlc = 'https://api.covid19api.com/countries';

fetch(urlc)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].Country;
      	  option.value = data[i].Slug;
      	  dropdown.add(option);
    	}    
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });

  document.getElementById("countries").addEventListener("change", displayCountry, false);
 
  async function displayCountry() {
    let txt="https://api.covid19api.com/dayone/country/";
    let sel = document.getElementById('countries');
    let country = sel.value;
    controle_date(country);
    chart_country(country);
     let test = txt+country;

      console.log(test);
     

     const response = await fetch(test)
     const data = await response.json()

      const uly = document.getElementById('summaryy');
      const map = document.getElementById('mapp');
      const title = document.getElementById('titre');
      
  
      uly.innerHTML = ` <li class="list-group-item">Actives: ${data[data.length-1].Active}</li>
         <li class="list-group-item">Rétablis: ${data[data.length-1].Recovered}</li>
         <li class="list-group-item">Morts: ${data[data.length-1].Deaths}</li>
         <li class="list-group-item">Confirmées: ${data[data.length-1].Confirmed}</li> 
        `;
         // Iframe Maps
        map.innerHTML = ` <iframe  src="http://maps.google.com/maps?q=${data[data.length-1].Lat},${data[data.length-1].Lon}&z=7&output=embed" style="width:100%;height:578px;"></iframe>`;

        title.innerHTML = ` ${data[data.length-1].Country}`;
      
        }

        // Select Date on Api 
        async function controle_date(country) {
          
          let date_debut = document.getElementById("date_debut").value;
            console.log(date_debut);
          let date_fin = document.getElementById("date_fin").value;
          urldate="https://api.covid19api.com/country/"+country+"?from="+date_debut+"T00:00:00Z&to="+date_fin+"T00:00:00Z";
          
          const response = await fetch(urldate).then(
            res=>{
              res.json().then(
                data=>{
                  console.log(data);
                  if(data.length > 0){
                    var temp = "";
      
                    data.forEach((b)=>{
                      temp +="<tr>";
                      temp +="<td>"+b.Active+"</td>";
                      temp +="<td>"+b.Recovered+"</td>";
                      temp +="<td>"+b.Deaths+"</td>";
                      temp +="<td>"+b.Confirmed+"</td>";
                      temp +="<td>"+b.Date+"</td></tr>";
                    })
                    document.getElementById("date").innerHTML = temp;
                  }
                }
              )
            }
          )

          } 
      
        // Chart Js
          chart_country()
      async function  chart_country(country){
        const response = await fetch("https://api.covid19api.com/country/"+country)
        const data = await response.json()
      
              var Active = data[data.length-1].Active;
              var Recovered = data[data.length-1].Recovered;
              var Deaths = data[data.length-1].Deaths;
              var Confirmed = data[data.length-1].Confirmed;
      
          var cart = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(cart, {
          type: 'bar',
          data: {
              labels: ['Actives', 'Rétablis', 'Morts', 'Confirmées'],
              datasets: [{
                  label: '# of Votes',
                  data: [Active, Recovered, Deaths,Confirmed],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
      });
      }
      
        
         
          
          
          
         
        
        
     
   
    
  