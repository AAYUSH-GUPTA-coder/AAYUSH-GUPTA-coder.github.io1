const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector(".breeds");


fetch(BREEDS_URL)
.then(function(response){
    return response.json();
})
.then(function(data){
    const breedsObject =data.message;
    const breedsArray = Object.keys(breedsObject);

    for (let i=0;i<breedsArray.length;i++){
        const option =document.createElement("option");
        option.value=breedsArray[i];
        option.innerText=breedsArray[i];
        select.appendChild(option);
    }
})

select.addEventListener("change",function(event){
    let url=`https://dog.ceo/api/breed/${event.target.value}/images/random`;

        getDoggo(url);
    // make url
    // show loading spinner
    // fetch from api
    // use the URL to change the current image
    // stop loading spinner
});

const img=document.querySelector(".dog-img");
const spinner =document.querySelector(".spinner");


function getDoggo(url){
    spinner.classList.add("show");
    // img.classList.remove("show");
    img.style.display ="none";
    fetch(url)
    .then (function(response){   
        return response.json();
    })
    .then(function(data){
        img.src =data.message;
        // spinner.classList.remove("show");
        // img.classList.add("show");
    })
}
img.addEventListener("load",function(){
    spinner.classList.remove("show");
    // img.classList.add("show");
    img.style.display="block";
})