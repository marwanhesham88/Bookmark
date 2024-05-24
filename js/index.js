var siteNameInput = document.getElementById("siteNameInput")
var siteUrlInput = document.getElementById("siteUrlInput")
var exampleModal = document.getElementById("exampleModal")
var exampleModal = document.getElementById("exampleModal")

var webSiteArr = JSON.parse(localStorage.getItem("webSite")) ?? []
displayWebSite()

function addWebSite(){
    validatWebSiteData()
    
    if(isWebSiteDataValid()){
        var webSite = {
            name : siteNameInput.value.replace(/\s{2,}/g," "),
            url : siteUrlInput.value,
        }
        webSiteArr.push(webSite)
        onDataChanged()
        clearForm()
    }

}

function displayWebSite(){
    cartoona = ""
    for( i = 0 ; i < webSiteArr.length ; i++ ){
        cartoona += ` <tr>
        <td>${i+1}</td>
        <td>${webSiteArr[i].name}</td>
        <td><button onclick="visitWebSite(${i})" class="btn btn-success"><i class="fa-solid fa-eye pe-3"></i>Visit</button></td>
        <td><button onclick="deleteWebSite(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button></td>
    </tr>`
    }
    document.getElementById("tableBody").innerHTML = cartoona
}

function onDataChanged(){
    localStorage.setItem("webSite",JSON.stringify(webSiteArr))
    displayWebSite()
    siteNameInput.classList.remove("is-valid")
    siteUrlInput.classList.remove("is-valid")
}

function clearForm(){
    siteNameInput.value = ""
    siteUrlInput.value = ""
}

function deleteWebSite(index){
webSiteArr.splice(index,1)
onDataChanged()
}

function visitWebSite(index){
    siteUrlInput.value = webSiteArr[index].url
    window.open(siteUrlInput.value,`_blank`)
}


function isWebSiteDataValid(){
    return (/^\w{3,}(\s+\w+)*$/.test(siteNameInput.value) && /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/.test(siteUrlInput.value))
}

function validatWebSiteData(){
    if(/^\w{3,}(\s+\w+)*$/.test(siteNameInput.value)){
        siteNameInput.classList.add("is-valid")
        siteNameInput.classList.remove("is-invalid")

    }else{
        siteNameInput.classList.add("is-invalid")
        siteNameInput.classList.remove("is-valid")
    }

    if(/^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/.test(siteUrlInput.value)){
        siteUrlInput.classList.add("is-valid")
        siteUrlInput.classList.remove("is-invalid")
    }else{
        siteUrlInput.classList.add("is-invalid")
        siteUrlInput.classList.remove("is-valid")
    }

    if(/^\w{3,}(\s+\w+)*$/.test(siteNameInput.value) && /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/.test(siteUrlInput.value)){

        exampleModal.classList.add("d-none")
    }else{
        exampleModal.classList.remove("d-none")
    }
}
