const taskTitle=document.querySelector("#title");
const taskDesc=document.querySelector("#desc");
const taskDate=document.querySelector("#date");
let title,desc,date,taskDiv,count=0;
document.querySelector("#btn").addEventListener("click",function(){
   title=taskTitle.value;
   date=taskDate.value;
   desc=taskDesc.value;
   if(title==""||desc==""||date==""){
       alert("All information fill is compulsory");
   }
   else{
       createDiv("pending");
       resetDiv();
   }
})
function createDiv(type){
    count++;
    divId=type+'_'+count;
    var taskDiv=document.createElement("div");
    taskDiv.id=divId;
    taskDiv.className="taskDiv";
    taskDiv.innerHTML="<p id='removeActive'><input type='checkbox' id='check"+count+"' onchange='checkStatus("+count+")'> Active<p>Title: <input type='text' id='title"+count+"' value="+title+"></p><p>Desc: <input type='text' id='desc"+count+"' value="+desc+"></p><p>Date: <input type='text' id='date"+count+"' value="+date+"> </p>";
    taskDiv.innerHTML+=`<button onclick='removeDiv("${divId}")' class='btn-remove'>Remove</button>` ;
    if(type=='active')
    {
        document.querySelector("#activeList").appendChild(taskDiv);
        document.querySelector("#removeActive").style.display="none";
      setData();
    }
    else{
        document.querySelector("#pendingList").appendChild(taskDiv);
    }
}

function resetDiv(){
    taskTitle.value="";
    taskDate.value="";
    taskDesc.value="";
}
function removeDiv(id){
    document.getElementById(id).remove();
}
function setData(){
    title=document.querySelector("#title"+count).value;
    date=document.querySelector("#date"+count).value;
    desc=document.querySelector("#desc"+count).value;

}
function checkStatus(id){
    var status=document.querySelector("#check"+id).checked;

    if(status)
    {
        createDiv('active');
        removeDiv('pending_'+id);
    }
    else
    {
        document.querySelector("#taskDiv"+id).style.backgroundColor="white";
    }
    
}