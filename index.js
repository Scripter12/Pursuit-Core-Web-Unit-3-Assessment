async function showAllSightings() {
  let box = document.querySelector("#data");
  let response = await axios.get("http://localhost:3000/sightings")
  let p = document.createElement("p")
  p.innerText = response.data.message
  box.appendChild(p)
}

async function showSightingsFromResearcher() {
  let input = document.querySelector("input").value
  let box = document.querySelector("#data");
  let response = await axios.get(`http://localhost:3000/sightings/researchers/${input}`)
  let p = document.createElement("p")
  p.innerText = response.data.message
  box.appendChild(p)
}