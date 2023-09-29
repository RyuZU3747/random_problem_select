let NicknameString = "";
let Queries = "";
let Print = "";

let Tiermap = {0:"b", 1:"s", 2:"g", 3:"p", 4:"d", 5:"r"};

const url = 'https://solved.ac/api/v3/search/problem?';
const options = {method: 'GET', mode: 'no-cors', headers: {Accept: 'application/json'}};

function GetResponse(url){
    ret = url;
    fetch(url).then((response) => {return response.json()}).then((data)=>{
        console.log(data.count);
    });
    return ret;
}

function Make_Query(Tiers, Nicknames){

    for (let index = 0; index < 6; index++) {
        Queries = "query=";
        const element = Tiers[index];
        if (Tiers[index] == 0) continue;

        Queries += "*"+Tiermap[index];

        Nicknames.forEach(element => {
            if (element == 0) return false;
            Queries += "-%40";
            Queries += element;
        });


        var Queryurl = url + Queries + "&random";
        Print += GetResponse(Queryurl, options);
    }
    
}

function ButtonClick(){
    
    NicknameString = document.getElementById('nicknameinput').value;
    var Nicknames = NicknameString.split(', ');
    var Tiers = [document.getElementById('bronzeinput').value, document.getElementById('silverinput').value, document.getElementById('goldinput').value, document.getElementById('platinput').value, document.getElementById('diainput').value, document.getElementById('rubyinput').value];
    
    
    Make_Query(Tiers, Nicknames);
    document.getElementById('make_query').innerText = Print;
    
}

function init(){
    document.querySelector('.query_button').addEventListener('click', function(){
        ButtonClick();
    });
}

init();