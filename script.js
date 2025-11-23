const _listCountries = document.getElementById("listCountries");
const _input = document.getElementById("input_id");

let countries = [];
const maxListLength = 15;
fetch("./countries.json")
    .then(resp => resp.json())
    .then(val=>{
        countries=val;
    })

let displayArr = [];

_input.addEventListener('input',(e)=>{
    let userInput = e.target.value;
    userInput = userInput.toLowerCase();
    displayArr = countries.filter((item) =>arrayLogic(item.toLowerCase(),userInput));
    _listCountries.innerHTML = '';
    displayArr.forEach((item,idx)=>{
        if(idx<maxListLength && _input.value!=''){
            showList(item);
        }
    });
    _input.classList.toggle("space_var", _input.value != '' && displayArr.length != 0);
})

function showList(countryName){
    const li = document.createElement("li");
    li.textContent = countryName;
    li.addEventListener('click',()=>{
        _input.value = countryName;
        _input.dispatchEvent(new Event('input'));
    })
    _listCountries.appendChild(li);
}

function arrayLogic(country,userInput){
    for(let i = 0; i < userInput.length;i++){
        if(userInput[i]!=country[i]){
            return false;
        }
    }
    return true;
}