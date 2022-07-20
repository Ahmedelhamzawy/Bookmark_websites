var sitesInfo = [];
var addBtn = document.getElementById('addBtn');
var inputName = document.getElementById('site-name');
var inputURL = document.getElementById('site-url');
var currentIndex;

if(JSON.parse(localStorage.getItem("sitesList"))!=null){
    sitesInfo=JSON.parse(localStorage.getItem("sitesList"));
    displayData();
}




function readData() {
    var site =
{
    siteName: inputName.value,
    siteURL: inputURL.value
}
    sitesInfo.push(site);
    localStorage.setItem("sitesList",JSON.stringify(sitesInfo));
}





document.getElementById('alert-name').classList.add('d-none');
document.getElementById('alert-url').classList.add('d-none');

function checkData(){
document.getElementById('alert-name').classList.add('d-none');
document.getElementById('alert-url').classList.add('d-none');
    if(inputName.value==''&&inputURL.value==''){
        document.getElementById('alert-name').classList.remove('d-none');
        document.getElementById('alert-url').classList.remove('d-none');
    }else if(inputName.value==''){
        document.getElementById('alert-name').classList.remove('d-none');
    }else if(inputURL.value==''){
        document.getElementById('alert-url').classList.remove('d-none');

    }else{
        
        
        readData();
        displayData();
        
    
}
}

function displayData() {

    var product = '';
    for (var i = 0; i < sitesInfo.length; i++) {
        product += `    <div class="d-flex p-5 site">
<h3>${sitesInfo[i].siteName}</h3>
<div class="visit ">
<a href="http://${sitesInfo[i].siteURL}" class="btn btn-primary" target="_blank"> visit</a> 
<button class="btn btn-danger mx-2" onclick="deleteData(${i})">delete</button>
<button class="btn btn-warning " onclick="getData(${i})">update</button>
</div>
</div>
`}
   
    document.getElementById('bookmarkList').innerHTML=product;
   
    
}
function resetData(){ 
    if(document.getElementById('site-name').value!=''&&document.getElementById('site-url').value!=''){
    document.getElementById('site-name').value='';
    document.getElementById('site-url').value='';
    }
}
function deleteData(index){
    sitesInfo.splice(index,1);
    localStorage.setItem("sitesList",JSON.stringify(sitesInfo));
    displayData();
}
function getData(index){
    inputName.value=sitesInfo[index].siteName;
    inputURL.value=sitesInfo[index].siteURL;
    addBtn.innerHTML='update';
    currentIndex=index;
}
addBtn.onclick=function(){
    if(addBtn.innerHTML=='update'){
        var site =
        {
            siteName: inputName.value,
            siteURL: inputURL.value
        }
        sitesInfo[currentIndex]=site;
        localStorage.setItem("sitesList",JSON.stringify(sitesInfo));
    addBtn.innerHTML='submit'
    displayData();
    resetData();
    }else{
        checkData();
        resetData();
    }
}