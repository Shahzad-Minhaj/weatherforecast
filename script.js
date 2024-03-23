let apiKey = "15796dc94162afd25a9828d552190002"
let cty = document.querySelector(".see")
document.querySelector(".btn").onclick = () => {
    console.log(cty.value);

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cty.value}&appid=${apiKey}&units=metric`)
        .then(function (response) {
            console.log(response.data);

            // Clear previous city record
            document.querySelector(".details").innerHTML = "";
            document.querySelector(".moreDetails").innerHTML = "";
            document.querySelector(".icons").innerHTML = "";
            document.querySelector(".heading").innerHTML = "";
            

            // Create new elements for the new city record
            let cityName = document.querySelector(".heading");
            let dts = document.querySelector(".details");
            let mdts = document.querySelector(".moreDetails");
            let icns = document.querySelector(".icons");

            let heading1 = document.createElement("div");
            // heading1.setAttribute("class","city")
            heading1.style.textTransform = 'capitalize';
            heading1.style.fontWeight = 'bolder';
            heading1.style.fontSize = '24px';
            heading1.style.marginTop = "20px"
            heading1.textContent = cty.value;
            cityName.append(heading1);

            let heading2 = document.createElement("div");
            heading2.style.fontSize = "64px";
            heading2.style.marginTop = '55px';
            heading2.textContent = `${Math.floor(response.data.main.temp)}\u00B0C`;
            dts.appendChild(heading2);

            let image = document.createElement("img");
            image.src = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`;
            icns.append(image);
            let image2 = document.createElement("img");
            image2.src = `/images/windspeed.png`;
            icns.append(image2);
            let image3 = document.createElement("img");
            image3.src = `/images/humidity.png`;
            icns.append(image3);

            // Create and append more details
            let box1 = document.createElement("div");
            box1.setAttribute("class", "box");
            box1.textContent = `${response.data.weather[0].description}`;
            mdts.appendChild(box1);

            let box2 = document.createElement("div");
            box2.setAttribute("class", "box");
            box2.innerHTML = `${Math.floor(response.data.wind.speed * 3.6)} km/hr`;
            mdts.appendChild(box2);

            let box3 = document.createElement("div");
            box3.setAttribute("class", "box");
            box3.textContent = `${response.data.main.humidity}%`;
            mdts.appendChild(box3);
        })
        .catch(function (error) {
            console.log(error);
        });
};
