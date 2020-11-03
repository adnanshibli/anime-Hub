'use strict';
var headRow= ['AnimeTittle','category','seasons'];
var allAnimes=[];
var table = document.getElementById('renderTable');
var form = document.getElementById('form1');
var seasons =0
loadlocalStorage();
function Animes(AnimeNAME,Category,RandomSeason){
    this.AnimeNAME=AnimeNAME;
    this.Category=Category;
    this.RandomSeason=RandomSeason;
    allAnimes.push(this);
}
function render(){
    addHEader();
    for (var i=0;i<allAnimes.length;i++){
        var row = document.createElement('tr');
        var td =document.createElement('td');
        td.textContent=allAnimes[i].AnimeTittle;
        row.appendChild(td);
        var td1 =document.createElement('td');
        td.textContent=allAnimes[i].category;
        row.appendChild(td1);
        var td2 =document.createElement('td');
        td.textContent=allAnimes[i].seasons;
        row.appendChild(td2);
        table.appendChild(row);
    }
}
function addHEader(){
    for(var j=0; j<headRow.length; j++){
        var row = document.createElement('tr');
        table.appendChild(row);
        var th = document.createElement('th');
        th.textContent=headRow[j];
        row.appendChild(th);

    }
}
form.addEventListener('submit',addAnime);
function addAnime(event){
    event.preventDefault();
    var ANIMEE=event.target.AnimeNAME.value;
    var category=document.getElementById('anime-category');
    var categoryVAL=category.options[category.selectIndex].value;
    var newAnime = new Anime(ANIMEE,categoryVAL,0);
    allAnimes.RandomNumber();
    clear();

    render();

addtoLocalstorage();
}


function clear(){
    table.textContent= " ";


}
function addtoLocalstorage(){
    localStorage.setItem('allAnimes',Json.stringify(allAnimes));
}
function loadlocalStorage(){
    if(localStorage.getItem('allAnimes')){
        var storage =JSON.parse(localStorage.getItem)('allAnimes')
        console.log(storage);
        for (var y =0; y<storage.length;y++){
            new Animes(storage[y].AnimeNAME,storage[y].category,storage[y].seasons);

        }

    }
render();
}

allAnimes.prototype.RandomNumber=function(){
    var random =Math.floor(Math.random() *7 )+1;
    this.seasons=random
};