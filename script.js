let itemList = []
let checkbox = false
//PUSHES INPUT TO ARRAY
let addItem = () => {
    let todo = {
        content: document.getElementById("textInput").value,
        isDone: false
    }
    console.log("todo", todo.content)
    if (todo.content == '') {
        return;
    }
    itemList.push(todo)
    console.log("item list", itemList)
    showList(itemList) //TAKE INPUT TO FUNCTION
}

//FUNCTION DISPLAYS ON SITE
let showList = (list) => {
    let message = list.map((item, index) => {
        if (checkbox == true){
            
        }
        if (item.isDone == true) {
            return `<li> <strike><h6>${item.content}</h6></strike> <a href="#" onclick="remove(${index})">X</a> <a href="#" onclick="toggle(${index})">Done</a></li>`
        } else {
            return `<li><h6> ${item.content}</h6> <a href="#" class="red" onclick="remove(${index})">X</a> <a href="#" onclick="toggle(${index})">Done</a></li>`
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



const poop = itemList.map((item,index) =>{
    if (item[1]==true){
        return item[index].splice(0,1)
    }else{
        showList(itemList)
        return;
    }
    showList(itemList)
})

console.log(poop)