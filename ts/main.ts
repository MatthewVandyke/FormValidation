
window.onload = function():void{
    let formBtn: HTMLElement = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    validateTxtInput("first-name", "please enter valid name");
}

function validateTxtInput(id:string, errMsg:string):boolean {
    let txtBox: HTMLInputElement = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue: string = txtBox.value;
    if (txtBoxValue == "" || txtBoxValue == null) {
        let errSpan: HTMLSpanElement = <HTMLSpanElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}

