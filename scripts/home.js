import navbar from "../components/navbar.js"

document.getElementById("header").innerHTML = navbar();

let query = document.querySelector("#search");

let container = document.getElementById("results");

query.addEventListener("keypress", (event) => {
    if(event.code === "Enter"){
        searchUser();
    }
})


const searchUser = async () => {
    try{
        document.querySelector("#errorMsg").textContent = "";
        document.querySelector("#resultText").textContent = "";
        
        let user = query.value;
        let fetchUser = await fetch(`https://api.github.com/users/${user}/repos`);
        let repoData = await fetchUser.json();
        console.log(repoData);
        if(repoData.message === "Not Found"){
            container.innerHTML = null;
            document.querySelector("#userAvatar").src = "";
            document.querySelector("#userLogin").textContent = "";
            document.querySelector("#errorMsg").textContent = "No such user found !";
            document.querySelector("#profile").src = `https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png`;
        }
        else{
            showProfileIcon(repoData[0].owner.avatar_url);
            showRepositories(repoData);
        }
    }
    catch(e){
        console.log(`error: ${e}`)
    }
};


const showProfileIcon = (url) => {
    let profile = document.querySelector("#profile");
    profile.src = url;
};



const showRepositories = (data) => {
    container.innerHTML = null;
    document.querySelector("#userAvatar").src = data[0].owner.avatar_url;
    document.querySelector("#userLogin").textContent = `@${data[0].owner.login}`;
    document.querySelector("#resultText").textContent = `Popular repositories`;
    data.forEach((el, index) => {
        let {name, description, language} = el;
        console.log(name, description, language)

        let repoDiv = document.createElement("div");
        repoDiv.setAttribute("class", "repoDiv");

        let repoInfoDiv = document.createElement("div");
        repoInfoDiv.setAttribute("class", "repoInfoDiv");

        let repoName = document.createElement("p");
        repoName.setAttribute("class", "repoName");
        repoName.textContent = name;

        let repoDesc = document.createElement("p");
        repoDesc.setAttribute("class", "repoDesc");
        if(description){
            repoDesc.textContent = description;
        }

        let repoLangDiv = document.createElement("div");
        repoLangDiv.setAttribute("class", "repoLangDiv")

        let repoColor = document.createElement("img");
        repoColor.setAttribute("class", "repoColor");
        repoColor.src = "https://www.fonewalls.com/wp-content/uploads/Banana-Yellow-Solid-Color-Background-Wallpaper-for-Mobile-Phone-768x1365.png";


        let repoLang = document.createElement("p");
        repoLang.setAttribute("class", "repoLang");
        if(language){
            repoLang.textContent = language;
            
            repoLangDiv.append(repoColor, repoLang);
        }

        repoInfoDiv.append(repoName, repoDesc);

        repoDiv.append(repoInfoDiv, repoLangDiv);

        container.append(repoDiv);
        
    })
};
