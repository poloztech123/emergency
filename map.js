
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

 function callAmbulance() {
    const ambulanceNumber = "118"; // 
    window.location.href = `118:${ambulanceNumber}`;
  }
  /*
  Explanation:

    This code defines a button with an onclick event listener attached to the callAmbulance function.
    The callAmbulance function:
        Stores the ambulance number in a variable (replace with your local emergency number).
        Uses window.location.href to redirect the browser to the tel: URL scheme, which is typically used to open the phone app pre-filled with the provided number.

Important Note:

    This approach relies on the user's device having a phone app and supporting the tel: URL scheme.
    Always include a clear disclaimer stating that the website doesn't directly call emergency services and users should contact them immediately if needed.*/
