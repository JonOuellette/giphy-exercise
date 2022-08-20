console.log("Let's get this party started!");

const $gifArea = $("#gif-area");
const $searchInput = $("#search");

function addGifs (res){
    let numResults = res.data.length;
    if (numResults){
        let randomIdx = Math.floor(Math.random() * numResults);
        let $newBox = $("<div>", {class: "col-md-4 col-12 mb-4"});
        let $newGif = $("<img>", {src: res.data[randomIdx].images.original.url, class: "w-100"});

    $newBox.append($newGif);
    $gifArea.append($newBox);
    } 
}

$("form").on("submit", async function(e){     
    e.preventDefault();

    let searchTerm = $searchInput.val();
    $searchInput.val("");

    const resp = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q: searchTerm, api_key:"f7tdqKDfTPQ4DY74kPIgcg9kpttxmd93"}});
    console.log (resp.data) 
    addGifs(resp.data);
});


$("#remove").on("click", function(){
    $gifArea.empty();
})