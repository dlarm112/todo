let itemList = []

//PUSHES INPUT TO ARRAY
let addItem = () => {
    let todo = {
        content: document.getElementById("textInput").value,
        isDone: false
    }
    itemList.push(todo)
    console.log("item list", itemList)
    showList(itemList) //TAKE INPUT TO FUNCTION

}

//FUNCTION DISPLAYS ON SITE
let showList = (list) => {
    let message = list.map((item, index) => {
            if (item.isDone == true) {
                return `<li> <strike>${item.content}</strike> <a href="#" onclick="remove(${index})">x</a> <a href="#" onclick="toggle(${index})">Toggle Done</a></li>`
        } else {
            return `<li> ${item.content} <a href="#" onclick="remove(${index})">x</a> <a href="#" onclick="toggle(${index})">Toggle Done</a></li>`
        }
    }).join('')
document.getElementById("resultArea").innerHTML = message
}

let remove = (index) => {
    itemList.splice(index, 1)
    showList(itemList)
}

let toggle = (index) => {
    itemList[index].isDone = !itemList[index].isDone

    showList(itemList)
}