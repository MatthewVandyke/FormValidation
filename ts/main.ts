
window.onload = function():void{
    let formBtn: HTMLElement = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
}
/**
 * Returns true if the textbox with the given id
 * has some text inside of it
 * @param id The id of the <input type="text"> to validate
 * @param errMsg The message to display in the sibling span of the text box
 */
function isTextPresent(id:string, errMsg:string):boolean {
    let txtBox: HTMLInputElement = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue: string = txtBox.value;
    if (txtBoxValue == "" || txtBoxValue == null) {
        let errSpan: HTMLSpanElement = <HTMLSpanElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}

