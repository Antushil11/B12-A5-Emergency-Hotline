// star js


const cartbtns = document.getElementsByClassName("call-button-1")
console.log(cartbtns)


for(let cartButtons of cartbtns){
cartButtons.addEventListener("click", function (){
    const nationEmergency = cartButtons.parentNode.parentNode.children[0].children[1].children[0].innerText
    const phoneEmergency =cartButtons.parentNode.parentNode.children[0].children[1].children[2].innerText
    const goldNumber = parseInt(document.getElementById("gold-number").innerText)
    const internationEnglish = cartButtons.parentNode.parentNode.children[0].children[1].children[1].innerText
    

    if(goldNumber === 0){
        return alert(`❌ আপনার পযাপ্ত কয়েন নেই. কল করতে আপনার 20 টি কয়েন লাগবে.`)
    }

    alert(`📞 Calling ${internationEnglish} ${phoneEmergency} . . . . `)

    const totatGold = goldNumber - 20;

    document.getElementById("gold-number").innerText = totatGold;

    
    const nameEmergency = document.getElementById("data-contener");

     const newCart = document.createElement("div");
    newCart.innerHTML = `<div class="bg-[#fafafa] mt-6 h-21 rounded-xl flex justify-around items-center w-96 mx-auto">
                    <div class="text-gray-800 ">
                        <h1>${nationEmergency}</h1>
                        <p>${phoneEmergency }</p>
                    </div>

                    <div class="text-gray-800 ">
                        <p>${new Date().toLocaleTimeString()}</p>
                    </div>
                </div>`


                 nameEmergency.append(newCart);


    
    
    
})
    

}


const heartbtns = document.getElementsByClassName("heart-1")
console.log(heartbtns)

for(let heartButtons of heartbtns){
    heartButtons.addEventListener("click",function(){
        const heartNumber = parseInt(document.getElementById("red-heart").innerText)
       
        const totatHeart = heartNumber + 1;
         document.getElementById("red-heart").innerText = totatHeart

    })
}

const copybtns = document.getElementsByClassName("copy-button")
console.log(copybtns)

for(let coypButtons of copybtns){
    coypButtons.addEventListener("click",function(){
        const phoneEmergency =coypButtons.parentNode.parentNode.children[0].children[1].children[2].innerText
        
        const copyHeart = parseInt(document.getElementById("copy-button").innerText)
        const totalCopy = copyHeart + 1;
        document.getElementById("copy-button").innerText = totalCopy

        navigator.clipboard.writeText(phoneEmergency).then(() => {
      alert(`নম্বর কপি হয়েছে ${phoneEmergency}`)
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });

    })
}



document.getElementById("btn-clear").addEventListener("click", function () {
    const nameEmergency = document.getElementById("data-contener")
    nameEmergency.innerHTML = "";


})











































// document.getElementById("call-button-1").addEventListener("click", function () {
//     const nationEmergency = (document.getElementById("nation").innerText)
//     const phoneEmergency = parseInt(document.getElementById("phone-number").innerText)
//     const goldNumber = parseInt(document.getElementById("gold-number").innerText)

//     if(goldNumber === 0){
//         return alert(`❌ আপনার পযাপ্ত কয়েন কম. কল করতে আপনার 20টি কয়েন লাগবে.`)
//     }

//     alert(`📞 Calling ${nationEmergency} ${phoneEmergency} . . . . `)

    

//     const totatGold = goldNumber - 20;

//     document.getElementById("gold-number").innerText = totatGold;




//     const nameEmergency = document.getElementById("data-contener");

    
//     const nameEmergency1 = (document.getElementById("title-1").innerText)
//     const numberEmergency = (document.getElementById("phone-number").innerText)

//     const newCart = document.createElement("div");
//     newCart.innerHTML = `<div class="bg-[#fafafa] mt-6 ml-6 mr-6 h-21 rounded-xl flex justify-around items-center ">
//                     <div class="text-gray-800 ">
//                         <h1>${nameEmergency1}</h1>
//                         <p>${numberEmergency}</p>
//                     </div>

//                     <div class="text-gray-800 ">
//                         <p>${new Date().toLocaleTimeString()}</p>
//                     </div>
//                 </div>`


//                  nameEmergency.append(newCart);

   



// })

// document.getElementById("btn-clear").addEventListener("click", function () {
//     const nameEmergency = document.getElementById("data-contener")
//     nameEmergency.innerHTML = "";


// })
