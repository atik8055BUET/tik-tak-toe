let btns = document.querySelectorAll(".choice");
let mywin=0,comtwin=0;
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(".win").classList.add("hide1");
        document.querySelector(".loss").classList.add("hide2");
        document.querySelector(".draw").classList.add("hide3");
        let random = Math.floor((Math.random() * 3) + 1);
        if (random == 1) {
            document.querySelector(".win").classList.remove("hide1");
            mywin++;
            document.querySelector("#myscore").innerText=mywin;
        } else if (random == 2) {
            document.querySelector(".loss").classList.remove("hide2");
            comtwin++;
            document.querySelector("#compscore").innerText=comtwin;
        } else{
            document.querySelector(".draw").classList.remove("hide3");
        }
    });
});
    
let reset=document.querySelector(".btn");
reset.addEventListener("click",()=>{
    mywin=0;comtwin=0;
    document.querySelector(".win").classList.add("hide1");
    document.querySelector(".loss").classList.add("hide2");
    document.querySelector(".draw").classList.add("hide3");
    document.querySelector("#myscore").innerText=mywin;
    document.querySelector("#compscore").innerText=comtwin;
});
