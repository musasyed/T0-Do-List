const inputBox=document.getElementById('input-box')
const listContainer=document.getElementById('list-container')

function AddTask(){
    if(inputBox.value==""){
        alert("Please Enter a Task")
    }else{
        let li=document.createElement('li')
        li.innerHTML=inputBox.value
        listContainer.appendChild(li)
        let span=document.createElement('span');
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputBox.value="";
    saveData();
}


// Adding Checked Class with function and Delete Item 

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


// For Storing Tasks in Locakl Storage

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML)
}

// Display Data Whenever we open our website
function showTask(){
    listContainer.innerHTML=localStorage.getItem('data')
}
showTask();