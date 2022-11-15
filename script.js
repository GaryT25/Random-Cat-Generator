function generate(){
    let link = "https://api.thecatapi.com/v1/images/search";
    fetch(link)
    .then((res) => {
    return res.json();

})

.then((data) => {
    console.log(data);
    let url=data[0].url;
    let img = "<img src=' "+url+" ' height=200 width=300/>";
    document.getElementById('result').innerHTML=img;
})
}