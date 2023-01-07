let formEle = document.getElementById("form");

function saveToLocalStorage(event){
    event.preventDefault();
    let amount = document.getElementById("amount").value;
    let description = document.getElementById("description").value;
    let category = document.getElementById("category").value;
    let email = document.getElementById("email").value;
        let obj = {
        amount:amount,
        description:description,
        category:category,
        email:email
    }
    let objSerialization = JSON.stringify(obj);
    localStorage.setItem(obj.email, objSerialization);
    // Object.keys(localStorage).forEach((key) => {
    //     console.log(JSON.parse(localStorage.getItem(key)));
    // })
    userDetailsOnScreen(obj);
}
function userDetailsOnScreen(obj){
    document.getElementById("amount").value="";
    document.getElementById("description").value="";
    document.getElementById("category").value="";
    document.getElementById("email").value="";
    if(localStorage.getItem(obj.email) !== null){
        removeItemfromScreen(obj.user);
    }

    let listItemsEle = document.getElementById("listItems");
    let childHtml = `<li id=${obj.email}> ${obj.amount} - ${obj.description} - ${obj.category} 
                      <button onclick=deleteUser('${obj.email}') class="btn btn-danger">Delete</button>
                      <button onclick=editUser('${obj.amount}','${obj.description}','${obj.category}','${obj.email}',) class="btn btn-info">Edit</button>
                      </li>`;
    listItemsEle.innerHTML = listItemsEle.innerHTML + childHtml;

}
function deleteUser(emailId){
    localStorage.removeItem(emailId);
    removeItemfromScreen(emailId);
}
function removeItemfromScreen(emailId){
    let parentEle = document.getElementById("listItems");
    let childEle = document.getElementById(emailId);
    //console.log(childEle);
    if(childEle){
        parentEle.removeChild(childEle);
    }
}
function editUser(amount, description, category,email){
    document.getElementById("amount").value=amount;
    document.getElementById("description").value=description;
    document.getElementById("category").value=category;

        document.getElementById("email").value=email;
    deleteUser(email);

}