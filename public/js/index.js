const dropdowns = document.querySelectorAll('.form-select')

for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('change', (event) => {
        console.log(event.target.value)
        usePredictHQ(event.target.value)
    }); 
};

function usePredictHQ(eventsData) {
    var query = "https://api.predicthq.com/v1/events?limit=5" // append categories from predicthq /
    var headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer ooYMC7ioSzvttiyL-wfE6TW1VesS6ekt3uS4_RZZ"
    
    }
  
    fetch(query, {
      method: "GET",
      headers,
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        categories = data
        usePredictHQ(data)
      })
  }

  function usePredictHQ(categories) {
    document.querySelector('#search-0').innerHTML = `
    <div class="columns medium-7" id="search-image-div">
  <img class="thumbnail" src="${categories.foods[0].photo.highres}">
  </div>
    `
  }