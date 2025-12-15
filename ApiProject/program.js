let language =document.querySelectorAll('.language')
let firstinput =document.querySelector('.initial-input')
let secondinput=document.querySelector('.secondary-input')
let firstlanguage ="RUB"
let secondlanguage="USD"
let valuebar1=document.querySelector('.valutabar1')
let valuebar2=document.querySelector('.valutabar2')
let internetconnection =document.querySelector('.checkconnection')
const firstGroup = [
  document.querySelector("#one"),
  document.querySelector("#two"),
  document.querySelector("#three"),
  document.querySelector("#four")
];

const secondGroup = [
  document.querySelector("#five"),
  document.querySelector("#six"),
  document.querySelector("#seven"),
  document.querySelector("#eight")
];

function formatNumberInput(input) {
  let value = input.value;


  value = value.replace(',', '.');


  value = value.replace(/[^0-9.]/g, '');

 
  const parts = value.split('.');
  if (parts.length > 2) {
    value = parts[0] + '.' + parts.slice(1).join('');
  }

  if (parts[1]?.length > 4) {
    value = parts[0] + '.' + parts[1].slice(0, 4);
  }

  input.value = value;
}

firstGroup.forEach(lang => {
  lang.addEventListener('click', () => {

    firstGroup.forEach(l => {
      l.style.backgroundColor = "white";
      l.style.color = "black";
    });

    lang.style.backgroundColor = "#833AE0";
    lang.style.color = "white";

    firstlanguage = lang.textContent;
    console.log("First:", firstlanguage);
    fetch(`https://api.exchangerate.host/convert?access_key=1eadb8ea05072bd9fc984407cd92141b&from=${firstlanguage}&to=${secondlanguage}&amount=${firstinput.value}`).then(res=>res.json()).then(data=>{

        secondinput.value=data.result
        valuebar1.textContent=`1 ${firstlanguage} = ${data.info.quote} ${secondlanguage}`
        valuebar2.textContent=`1 ${secondlanguage} = ${1/data.info.quote} ${firstlanguage}`
        console.log(data)
    
     }
    )

  });
});


secondGroup.forEach(lang => {
  lang.addEventListener('click', () => {

    secondGroup.forEach(l => {
      l.style.backgroundColor = "white";
      l.style.color = "black";
    });

    lang.style.backgroundColor = "#833AE0";
    lang.style.color = "white";

    secondlanguage = lang.textContent;
    console.log("Second:", secondlanguage);
    fetch(`https://api.exchangerate.host/convert?access_key=1eadb8ea05072bd9fc984407cd92141b&from=${firstlanguage}&to=${secondlanguage}&amount=${firstinput.value}`).then(res=>res.json()).then(data=>{

        secondinput.value=data.result
        valuebar1.textContent=`1 ${firstlanguage} = ${data.info.quote} ${secondlanguage}`
        valuebar2.textContent=`1 ${secondlanguage} = ${1/data.info.quote} ${firstlanguage}`
        console.log(data)
    
     }
    )
  });
});
window.addEventListener("offline",()=>{
  internetconnection.style.display='flex'
  internetconnection.style.justifyContent='center'
  internetconnection.style.alignItems='center'
})


window.addEventListener('online',()=>{
  

      setTimeout(() => {
       internetconnection.style.display='none'
    }, 5000);
})
console.log(firstlanguage)
console.log(secondlanguage)

  

   firstinput.addEventListener('input', () => {
    formatNumberInput(firstinput)
  if (firstinput.value.trim() === "") {
    secondinput.value = "";
    valuebar1.textContent = "";
    valuebar2.textContent = "";
    return;
  }

  if (firstlanguage === secondlanguage) {
    secondinput.value = firstinput.value;
    valuebar1.textContent = `1 ${firstlanguage} = 1 ${secondlanguage}`;
    valuebar2.textContent = `1 ${secondlanguage} = 1 ${firstlanguage}`;
    return;
  }

  fetch(`https://api.exchangerate.host/convert?access_key=1eadb8ea05072bd9fc984407cd92141b&from=${firstlanguage}&to=${secondlanguage}&amount=${firstinput.value}`)
    .then(res => res.json())
    .then(data => {
      secondinput.value = data.result;
      valuebar1.textContent = `1 ${firstlanguage} = ${data.info.quote} ${secondlanguage}`;
      valuebar2.textContent = `1 ${secondlanguage} = ${1 / data.info.quote} ${firstlanguage}`;
    });
});
secondinput.addEventListener('input', () => {
  formatNumberInput(secondinput)
  if (secondinput.value.trim() === "") {
    firstinput.value = "";
    valuebar1.textContent = "";
    valuebar2.textContent = "";
    return;
  }

  if (firstlanguage === secondlanguage) {
    firstinput.value = secondinput.value;
    valuebar1.textContent = `1 ${firstlanguage} = 1 ${secondlanguage}`;
    valuebar2.textContent = `1 ${secondlanguage} = 1 ${firstlanguage}`;
    return;
  }

  fetch(`https://api.exchangerate.host/convert?access_key=1eadb8ea05072bd9fc984407cd92141b&from=${secondlanguage}&to=${firstlanguage}&amount=${secondinput.value}`)
    .then(res => res.json())
    .then(data => {
      firstinput.value = data.result;
      valuebar2.textContent = `1 ${secondlanguage} = ${data.info.quote} ${firstlanguage}`;
      valuebar1.textContent = `1 ${firstlanguage} = ${1 / data.info.quote} ${secondlanguage}`;
    });
});


let mobilemenu=document.querySelector('.menuformobile')
let mobileheaders=document.querySelector('.mobileheaders')

mobilemenu.addEventListener('click', () => {
 
    if(mobileheaders.style.display==="none"){
        mobilemenu.style.zIndex="9999";
      mobilemenu.style.filter="brightness(0) invert(1)";
       mobilemenu.style.position="relative";
       mobileheaders.style.display="flex"
    }
    else{
        mobilemenu.style.filter="brightness(0)"
        mobileheaders.style.display="none"
    }
  
});
