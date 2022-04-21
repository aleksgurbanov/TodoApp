let btn = document.getElementById('btn');

let input = document.getElementById('input');

let change = document.createElement('change');

btn.onclick =function(){
  let value = document.getElementById('input').value;
  let list = document.getElementById('list');
  let li = document.createElement('li');
  let button = document.createElement('button');

    button.innerText = "X";
    button.className = 'btn btn-danger btn_delete';
    button.id = 'btn-delete';

    let change = document.createElement('button');
    change.innerText = "Change";
    change.className = 'btn btn-warning btn_change';
    change.id = 'btn-change';


    let span =document.createElement('span');
    span.innerText = value;

    li.appendChild(span);
    li.appendChild(button);
    li.appendChild(change);
   
    document.getElementById('input').value=" "

    li.className ='d-flex justify-content-between align-items-center'
    // li.innerText = value; 
   
    list.appendChild(li);
    let btn_delete = document.getElementsByClassName('btn_delete');
   
       for (let btn of btn_delete){
          btn.onclick = function(e){
            e.target.parentElement.remove();
          }
        } 

    // let btn_change = document.getElementById('btn-change');
    
    
    let btn_change=document.querySelectorAll(".btn_change")
    let  a;
    for (let btn of btn_change){
      btn.onclick = function(e){
      
        a= e.target.parentElement.children[0]
       var b= a.innerText
      input.value=b
      document.getElementById('btn').classList.add("d-none")
      document.getElementById('change').classList.remove("d-none")
        var changeee= document.getElementById('change')
        changeee.addEventListener("click",function () {
          a.innerText=input.value
          document.getElementById('btn').classList.remove("d-none")
          document.getElementById('change').classList.add("d-none")
          
        })

      }

    } 

    
  }
        

        

