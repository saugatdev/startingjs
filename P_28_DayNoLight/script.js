const inputtext = document.getElementById("inputtext");
const card = document.getElementById("card");
const totalvotes = document.getElementById("totalvotes");
const vote = document.getElementById("vote");
const search = document.getElementById("search");
let count = 0;

search.addEventListener("click", function(){
    const inputvalue = inputtext.value;
    searchDistrict(inputvalue);
});

// Listen for Enter key press on input field
inputtext.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
        const inputvalue = inputtext.value;
        searchDistrict(inputvalue);
    }
});

function searchDistrict(inputvalue) {
    fetch('light.json')
        .then(response => response.json())
        .then(data => {
            const districtData = data.find(item => item.name.toLowerCase() === inputvalue.toLowerCase());
            if (districtData) {
                const cardElement = document.querySelector('#card');
                cardElement.querySelector('#district').innerText = districtData.name;
                cardElement.querySelector('#light').innerText = districtData.light === 1 ? 'Light is ON' : 'Light is OFF';
            } else {
                console.log('District not found');
            }
        })
        .catch(error => console.error('Error fetching JSON: ', error));
}


vote.addEventListener("click", function() {
    count++;
    fetch('light.json') // Fetch JSON data again
        .then(response => response.json())
        .then(data => {
            updateCounter(data);
        })
        .catch(error => console.error('Error fetching JSON: ', error));
});

function updateCounter(jsonData) {
    totalvotes.innerHTML = `People Voted: ${count}`;
    // Update the vote count for each city
    jsonData.forEach(city => {
        city.vote = count;
    });
}
