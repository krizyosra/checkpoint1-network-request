


var tmp=document.getElementsByClassName('tmp')
console.log(tmp[0]);
var icon=document.getElementsByClassName('img')


// fetch =>
 /*function fetchapi(e) {
    e.preventDefault()
  

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=a03cf2cabcaa4353971164038230401&q=${pays}&days=5&aqi=no&alerts=no`,{
        method: 'GET',
        headers:{
                "X-RapidAPI-Key": "8bd9d6c688msh68d31c229fdad4ap11c13ajsn87b83ab7f99a",
                "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
 }}).then(response => console.log(response.json().then((res)=>{tmp[0].innerHTML= res.current.temp_c,icon[0].setAttribute('src',res.current.condition.icon)})))
        .catch(error => console.error( error))
   }*/

// axios =>
    function fetchapi(e) {
        e.preventDefault()
        var pays = document.weatherForm.pays.value
  axios({
        url : `http://api.weatherapi.com/v1/forecast.json?key=a03cf2cabcaa4353971164038230401&q=${pays}&days=5&aqi=no&alerts=no`,
        method: 'get',
        maxRedirects: 15,
        headers: {
          "X-RapidAPI-Key": "8bd9d6c688msh68d31c229fdad4ap11c13ajsn87b83ab7f99a",
          "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
        },
      })
      .then((res) => {{tmp[0].innerHTML= res.data.current.temp_c,icon[0].setAttribute('src',res.data.current.condition.icon)}
         console.log("Response", res.data)})
         .catch((err) => {
            console.log("Error with fetch: ", err)
         })
       }
   // register
   function register(e) {
    e.preventDefault()
      
     axios({
        url : "http://localhost:4000/api/user/register",
        method: 'post',
        data:{
            email:document.registerForm.email.value,
            username:document.registerForm.username.value,
            password:document.registerForm.password.value
        }}).then((res) =>
         console.log("Response", res.data))
         .catch((err) => {
            console.log("Error with fetch: ", err)
         })}

//login 
 function login(e) {
    e.preventDefault()
   
    axios({
       url : "http://localhost:4000/api/user/login",
       method: 'post',
       data:{
           email:document.loginForm.email.value,
           password:document.loginForm.password.value
       }}).then((res) => document.cookie=`access_token=[${res.data.token}]`)
  .catch((err) => {
           console.log("Error with fetch: ", err)
        })
 }