window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    validateTxtInput("first-name", "please enter valid name");
}
function validateTxtInput(id, errMsg) {
    var txtBox = document.getElementById(id);
    var txtBoxValue = txtBox.value;
    if (txtBoxValue == "" || txtBoxValue == null) {
        var errSpan = txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
