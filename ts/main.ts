
window.onload = function():void{
    let formBtn: HTMLElement = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    alert("btn was clicked")
}