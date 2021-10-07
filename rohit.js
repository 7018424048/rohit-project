// let me check my js file is working or not
console.log("hello rohit")
// yes my file is working because i see hello rohit on my console

const saveData= () =>{
    const textAreaData=document.querySelectorAll('textarea');
    const textnote=[];
    textAreaData.forEach((note) =>{
        return textnote.push(note.value);
    })

    localStorage.setItem("notes",JSON.stringify(textnote))

}
const addBtn=document.getElementById('addbtn');  
const addNewNote= (text ="") =>{
    const note=document.createElement('div');
    note.classList.add('notes');
    const html=`
    <div class="drag">
    <div class="operation" darggable="true">
    <div class= "main ${text ? "" : "hidden"}"></div>
 <textarea class="${text ? "hidden" : ""}"placeholder="Write your notes here"  ></textarea>
 <div class=btn>
<button type="button" class="deletebtn">DELETE</button>
<button type="button" class="editbtn">SAVE/EDIT</button>
</div>
</div> 
</div>

`;
    note.insertAdjacentHTML('afterbegin',html);
    const mainDiv=note.querySelector('.main')
    const textArea=note.querySelector('textarea')
    const delBtn=note.querySelector('.deletebtn')
    const editBtn=note.querySelector('.editbtn')
    // deleting the notes

delBtn.addEventListener('click', ()=>{
    note.remove();})
  //toggle using edit and save
 textArea.value=text;
 mainDiv.innerHTML=text;
 

  editBtn.addEventListener("click" ,() => {
      mainDiv.classList.toggle("hidden");
      textArea.classList.toggle("hidden");
  })






textArea.addEventListener('change', (event)=>{
    const value=event.target.value;
    mainDiv.innerHTML=value;

    saveData ();

})

    document.body.appendChild(note);


}
const notes =JSON.parse(localStorage.getItem("notes"));
if (notes){notes.forEach((note) => addNewNote (note) )};


addBtn.addEventListener('click' , () => addNewNote());

const drag= document.querySelector(".operation")