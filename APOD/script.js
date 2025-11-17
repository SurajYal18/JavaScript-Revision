async function fetchPhotoById(params) {
    const id=document.getElementById("photoId").value;
    if(!id){
        alert("Please enter a photo Id!");
        return;
    }
    const url=`https://picsum.photos/id/${id}/600/400`

    try{
        const response =await fetch(url);
        if(!response.ok){
               document.getElementById("result").innerHTML = "<p>Photo not found!</p>";
               return;
        }
        
        document.getElementById("Result").innerHTML=
        `
        <h3>Photo ID:${id}</h3>
        <img src="${url}" width="300"/>
     
        `;

    }
    catch(err){
        console.log("Error:",err);
    }
}

document.getElementById("btn").addEventListener("click",fetchPhotoById);