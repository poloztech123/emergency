
 const API_KEY = "AIzaSyCtuk4fVGpYMCD2S2TBlrJJoLYMdLMWzSI";

 function initMap() {
   // getting the user location
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition, handleError);
   } else {
     alert("Geolocation is not supported by this browser.");
   }
 }

 function showPosition(position) {
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;

   // Create the map object
   const map = new google.maps.Map(document.getElementById("map"), {
     zoom: 15,
     center: { lat: latitude, lng: longitude },
   });

   // Add a marker at the user's location
   const marker = new google.maps.Marker({
     position: { lat: latitude, lng: longitude },
     map: map,
   });
 }

 function handleError(error) {
   console.error(error.message);
   // Handle location errors (e.g., permission denied)
 }

 document.getElementById('emergencyDial').addEventListener('click', function(event){
  event.preventDefault();
  window.location.href = this.href;
 });

  const data = [1,2,3,4,5];
  const result = data.reduce((acc, val) => acc.concat(Array.from({length:
    val 
  }, (_, index) => val + index
  )),[]);
  /*
  Explanation:

    
    The href attribute in the <a> tag uses the tel: protocol followed by the emergency number prefixed with the country code. For the United States, the country code is +1, and the emergency number is 911.
    The JavaScript code listens for a click event on the link with the ID emergencyDial. When the link is clicked, it prevents the default action (which would be to navigate to the tel: URL) and instead programmatically navigates to the tel: URL, which triggers the dialing action.

This approach allows you to embed an emergency dialing functionality directly into your web pages, making it easy for users to dial emergency services with a single click. Remember to test the functionality on different
 devices and browsers to ensure compatibility, as behavior can vary.*/