function delete_cookie( name, path, domain ) {
    // https://stackoverflow.com/questions/2144386/how-to-delete-a-cookie
    if( get_cookie( name ) ) {
      document.cookie = name + "=" +
        ((path) ? ";path="+path:"")+
        ((domain)?";domain="+domain:"") +
        ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
}
  
function saveCookie() {
    document.cookie = "dt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    if(date == "" || time == "") {
        alert("Empty input")
    } else{
        console.log(`${date} ${time}`)
        document.cookie = `dt=${date} ${time}`
        window.location.href = "countdown";
    }
}