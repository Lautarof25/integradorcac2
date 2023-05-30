const linksItems = document.getElementsByClassName("linkItem")

for (let i = 0; i < idMenus.length; i++) {
    linksItems[i].addEventListener("click", function (e) {
        console.log(e.target.id)
    })
}