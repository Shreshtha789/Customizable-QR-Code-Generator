/*
const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);
        var qrcode = new QRCode("qr", {
        text: myJSON,
        width: 256,
        height: 256,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
        });

let download = document.createElement("button");
document.querySelector(".qr-code").appendChild(download);


let download_link = document.createElement("a");
download_link.setAttribute("download", "qr_code_linq.png");
download_link.innerText = "Download";
download.appendChild(download_link);
*/

//url

let url = document.getElementById('url').value;
//console.log(url);

//color update in text according to pallete:
let color1 = document.getElementById('color-1');
let colort1 = document.getElementById('colort-1');

color1.addEventListener('change',function(){
        colort1.value = color1.value;
});

colort1.addEventListener('change',function(){
    color1.value = colort1.value;
});




let color2 = document.getElementById('color-2');
let colort2 = document.getElementById('colort-2');

color2.addEventListener('change',function(){
        colort2.value = color2.value;
});

colort2.addEventListener('change',function(){
    color2.value = colort2.value;
});

//logo file chose:
/*
let qr_logo = document.querySelector("#qr-logo");
//console.log(qr_logo);
qr_logo.addEventListener("checked",window.onload=function(){
    //e.preventDefault;
    console.log(qr_logo.value);
});
*/

//
/*
window.onload=function(){
    const inputElement = document.getElementById("qr-logo");
inputElement.addEventListener("select", handleFiles, false);
function handleFiles() {
    const fileList = this.files;
    const numFiles = fileList.length;
console.log(numFiles); // now you can work with the file list 
}


}

*/


//design pattern:
/*
let a;
let c;
addEventListener('click',function(){
        a = document.querySelector('input[name="cus-design"]:checked').value;
                c = `${a}`;
});
console.log(c);
*/


/*
let ab = document.getElementsByName('cus-design');

var elements = document.getElementsByName('cus-design');
    var checkedButton;
ab[0].addEventListener('click',function(){
        console.log(elements);
    elements.forEach(e => {
        if (e.checked) {
            //if radio button is checked, set sort style
        checkedButton = e.value;
        console.log(checkedButton);
        }

    });
});
*/
/*
let a;
function displayRadioValue() {
    let ele = document.getElementsByName('cus-design');
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        //document.getElementById("result").innerHTML
            a    = ele[i].value;
console.log(a);

    }
}
displayRadioValue();
*/


let ab = document.getElementsByClassName('select');
//console.log(ab);



ab[0].addEventListener('change',function displayRadioValue() {
    /*
    let ele = document.getElementsByName('cus-design');
    let a;
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        //document.getElementById("result").innerHTML
            a    = ele[i].value;
console.log(a);
*/
a = document.querySelector('input[name="cus-design"]:checked').value;
    console.log(a);
});

ab[1].addEventListener('change',function displayRadioValue() {
a = document.querySelector('input[name="cus-design"]:checked').value;
    console.log(a);
});

ab[2].addEventListener('change',function displayRadioValue() {
a = document.querySelector('input[name="cus-design"]:checked').value;
    console.log(a);
});

ab[3].addEventListener('change',function displayRadioValue() {
a = document.querySelector('input[name="cus-design"]:checked').value;
    console.log(a);
});

ab[4].addEventListener('change',function displayRadioValue() {
a = document.querySelector('input[name="cus-design"]:checked').value;
    console.log(a);
});

ab[5].addEventListener('change',function displayRadioValue() {
a = document.querySelector('input[name="cus-design"]:checked').value;
    //console.log(a);
    console.log(a);
});






//main code:

let submit_button = document.getElementById('submit-button');
//console.log(submit_button)

submit_button.addEventListener('click',function(e){
    e.preventDefault();
    //url:
    let url = document.getElementById('url').value;

    //color:
    let color1 = document.getElementById('color-1');
    let colort1 = document.getElementById('colort-1');

        colort1.value = color1.value;

        color1.value = colort1.value;

        //let final_color_dots = colort1.value;

        //console.log(final_color_dots);
    
    
    let color2 = document.getElementById('color-2');
    let colort2 = document.getElementById('colort-2');
        
            colort2.value = color2.value;
        
            color2.value = colort2.value;


    //design-pattern:
let cus_design = document.querySelector('input[name="cus-design"]:checked').value;
//console.log(cus_design);



    const qrCode = new QRCodeStyling({
        //to begin with we need to set the size of our QR code using the following
        width: 300,
        height: 300,
        //then we pass the data we want to share with the qr code
        data: url,
        //the following option is to set an image on the center (if you want one, if not you can avoid this )
        image: '',
        //then we can style the dots of the QR code
        //it has 3 different types of dots 'rounded' 'dots' and'square' 
        //for this example I will use square which is also the default type
        dotsOptions: {
            color: `${colort1.value}`,
            type: `${cus_design}`
        },
        //and at last we will set the style of the background of the QR code
        backgroundOptions: {
            color: `${colort2.value}`,
            type: "square"
            }
        });
        let ab = document.getElementById('qr-con');
        //qrCode.append(document.getElementById("qr-con"))
        ab.innerHTML = "";
        qrCode.append(ab);
        //console.log(qrCode);
        //e.stopImmediatePropagation();
        //console.log('hello');
})