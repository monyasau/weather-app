const outputBox = document.getElementById("output");

const apiKey = '49e72d8fff664667a7485456231008';
let city = ''; 
let fetchResult;
let ipInfo;




async function getIPInfo() {
  try {
      const response = await fetch('https://ipinfo.io/json?token=82327782985fcd');
      const data = await response.json();
      ipInfo = data;
      console.log(ipInfo)
city = ipInfo.city;
fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&units=metric`).then(response => response.json()).then(data => {
  console.log(data);
})

      return data;
    } catch (error) {
      console.error('Error fetching IP info:', error);
      return null;
    }
}
getIPInfo()




      console.log(fetchResult)

function longAgo(inputTime) {
    const currentTime = new Date();
    const inputDate = new Date(inputTime);
  
    const timeDifference = currentTime - inputDate;
  
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (days > 0) {
          return `${days} days ago`;
      } else if (hours > 0) {
            return `${hours} hours ago`;
        } else if (minutes > 0) {
              return `${minutes} minutes ago`;
          } else {
                return `${seconds} seconds ago`;
  }
}

const inputTime = "2023-07-27 20:45";
const timeAgoString = timeAgo(inputTime);

console.log(`Time ago: ${timeAgoString}`);








fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&units=metric`).then(response => response.json()).then(data => {
  console.log(data);
})












// const apiKey = 'b40ade8514214700949194745232707';
// const city = 'London'; 
// fetch(`https://api.weatherapi.com/v1/future.json?key=${apiKey}&q=${city}&dt=2023-09-09`)
//   .then(response => response.json())
//   .then(data => console.log(data))
  
































//   {
//     "location": {
//         "name": "London",
//         "region": "City of London, Greater London",
//         "country": "United Kingdom",
//         "lat": 51.52,
//         "lon": -0.11,
//         "tz_id": "Europe/London",
//         "localtime_epoch": 1690487795,
//         "localtime": "2023-07-27 20:56"
//     },
//     "current": {
//         "last_updated_epoch": 1690487100,
//         "last_updated": "2023-07-27 20:45",
//         "temp_c": 21,
//         "temp_f": 69.8,
//         "is_day": 1,
//         "condition": {
//             "text": "Partly cloudy",
//             "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
//             "code": 1003
//         },
//         "wind_mph": 8.1,
//         "wind_kph": 13,
//         "wind_degree": 230,
//         "wind_dir": "SW",
//         "pressure_mb": 1003,
//         "pressure_in": 29.62,
//         "precip_mm": 0,
//         "precip_in": 0,
//         "humidity": 78,
//         "cloud": 50,
//         "feelslike_c": 21,
//         "feelslike_f": 69.8,
//         "vis_km": 10,
//         "vis_miles": 6,
//         "uv": 5,
//         "gust_mph": 13.2,
//         "gust_kph": 21.2
//     }
// }