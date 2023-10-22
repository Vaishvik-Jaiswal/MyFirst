
        let a;
        let date;
        let time;
        const options={ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        setInterval( () => {
            a = new Date(); 
            time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
            date = a.toLocaleDateString(undefined, options);
            document.getElementById('time').innerHTML = time + "<br>on " + date;
        }, 1000);
    
 
function write(){
    tit=document.getElementById('title').value;
    if(localStorage.getItem('key')==null){
        arr=[];
        arr.push([tit]);
        localStorage.setItem('key',JSON.stringify(arr));
    }
    else{
        arr=JSON.parse(localStorage.getItem('key'))
        arr.push([tit]);
        localStorage.setItem('key',JSON.stringify(arr));
    }
  written();
    }
    function written(){
        if(localStorage.getItem('key')==null){
            arr=[];
            localStorage.setItem('key',JSON.stringify(arr));
    }
    else{
        arr=JSON.parse(localStorage.getItem('key'));
        localStorage.setItem('key',JSON.stringify(arr));
    }
    let tableBody = document.getElementById("tableBody");
    let str = "";
     arr.forEach((element, index) => {
         str += `
         <tr>
         <td>${index + 1}.</td>
         <td>${element[0]}</td>
         
         <td>
         <button class="finish" onclick="deleted(${index})">Finished</button>
         
         <button class="del" onclick="deleted(${index})">Delete</button>
         
         </td> 
         </tr>`;  
        });
    tableBody.innerHTML = str;
   
}
    add = document.getElementById("add");
    add.addEventListener("click",write);
function clearstorage(){
    if(confirm('Do you really want to clear?')){
        console.log("clearing");
        localStorage.clear();
        written();
    }

}
function deleted(itemIndex){
arr=JSON.parse(localStorage.getItem('key'));
arr.splice(itemIndex, 1);
localStorage.setItem('key',JSON.stringify(arr));
written();
}