var weather

//necessary info 
var api = "http://api.weatherstack.com/current"
var apiKey = "access_key=63362bacb7b21d0e13e9bb123c81369a"
var query = "query=Dalian" //where I am from

//optional info
var forecast_days = "forecast_days=7"//current subscription plan does not support forecast info :(


var current_tempC;


function preload()
{
  	let url = (api + "?" + apiKey + "&" + query);

	weather = loadJSON(url, gotWeather);
}



function setup() 
{

  	createCanvas(800, 400);
	colorMode(RGB, 1)
	background(0.1, 0.1, 0.7) //Blue

  	fill(1, 1, 0) //Yellow on blue for contrast

	let current_tempF = 9*(current_tempC/5) +32 //C to F conversion formula

		textSize(32);

		text('The current temperature in Dalian is ' + current_tempC + "°C" + ", " + current_tempF + "°F.", 

			50, height/2); //position
}



function gotWeather(data)
{
	current_tempC = data.current.temperature
}

