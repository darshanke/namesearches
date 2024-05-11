async function gitHubUserDetails(userName){
    // console.log(userName);
    userName = userName.split(" ").join("");
try{
    const apiRawdata = await fetch(`https://api.github.com/users/${userName}`);
    if(!apiRawdata.ok){
    return "userNotfound";
    }
    
    
    const data = await apiRawdata.json();
        return data;
}catch(err){
    console.log(err);
    return null;
}

   
}
const content = document.getElementById("content");
const elements = document.createElement("div");
function backgroundwork(data){
   
   
    elements.setAttribute("id","innercontent");
    // elements.classList.add("py-5");  

    elements.classList.add("row");
    elements.innerHTML= `
    
    <div class="col col-lg-4 col-md-4 col-xl-8p-2">
    <img src=${data.avatar_url}/>
  </div>
  <div class="col col-lg-8 col-md-8 col-xl-8" p-2>
    <h2 class="p-2">${data.name}<h2>
    </br>
    <p class="fs-4 p-2">${data.bio}</p>
    <div class="d-flex flex-row justify-content-between mb-3 fs-6">
        <div class="p-2">Followers: ${data.followers}</div>
        <div class="p-2">Following ${data.following}</div>
        <div class="p-2">Repos: ${data.public_repos}</div>
    </div>
    <div class="d-flex flex-row justify-content-between mb-3 fs-6 ">
        <div class="p-2">twitter: ${data.twitter_username}</div>
        <div class="p-2">location ${data.location}</div>
    </div>
   
   
    <div
  </div>

    `;

}
content.append(elements);


export {gitHubUserDetails,backgroundwork}