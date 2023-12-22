const target_btns = document.querySelectorAll(".target-colored")

//function that queries the API on server to get the text, 
//then applies it to the info panel
async function getTextByFigure(event) {
    const figureID = event.target.id
    const response = await fetch(`http://localhost:3000/api/${figureID}`, {method:"GET"})
    //results.rows from node-postgres gives an array, in JSON: each key is a numeric index,
    //starting at 0 (when turned back into an object it's specifically an array)
    const data = await response.json()

    //rewrite the info panels:
    const title = data[0].title
    const text = data[0].text
    const comments = data[0].comments

    const infopanel_title = document.querySelector("#figure-title")
    const infopanel_text = document.querySelector("#figure-text")
    const infopanel_comments = document.querySelector("#figure-comments")

    infopanel_title.innerHTML = title
    infopanel_text.innerHTML = text
    infopanel_comments.innerHTML = comments
}

target_btns.forEach((target) => target.addEventListener("click", getTextByFigure))