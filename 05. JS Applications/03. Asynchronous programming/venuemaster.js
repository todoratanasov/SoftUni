function attachEvents(){
    const host = "https://console.kinvey.com";
    const user = "guest";
    const pass="pass";
    const base64auth=btoa(user + ":" + pass);
    const authHeaders = { "Authorization": "Basic " + base64auth }
    async function getAllVenues(date) {
       const ids = await $.post({
           url:`${host}/rpc/kid_BJ_Ke8hZg/custom/calendar?query=${date}`,
           headers: authHeaders,

       })
    }
    async function getVenueDetails(venueId) {
        const details = await $.get({
            url:`${host}/appdata/kid_BJ_Ke8hZg/venues/${venueId}`,
            headers:authHeaders,

        })
    }
    async function purchaseTicket(venueId,gty) {
        const ticket = await $.post({
            url:`${host}/rpc/kid_BJ_Ke8hZg/custom/purchase?venue=${venueId}&qty=${gty}`,
            headers: authHeaders
        })
    }
}