let skills=['Web Developer','Mern Stack Developer','UI & UX Designer','React Developer']
let index=0,nextIndex=1,rCount,aCount,remove=0,add=0;
document.getElementById('skills').value=`${skills[index]}`
setInterval(()=>{
    rCount=skills[index].length;
    aCount=skills[nextIndex].length;
    if(remove<rCount){
        let innerText=document.getElementById('skills').value.length;
        document.getElementById('skills').value=document.getElementById('skills').value.slice(0,innerText-2)
        remove++;
    }
    else if(remove===rCount && add < aCount){
        document.getElementById('skills').value=document.getElementById('skills').value+skills[nextIndex].charAt(add);
        add++;
        add===aCount-1 && nextIndex === skills.length-1 ?nextIndex=0:null;
    }
    else{
        remove=0,add=0;
        index===skills.length-1?index=0:index++;
        index===skills.length-1?nextIndex=0:nextIndex++;
    }
},150)


// navbar Animation

let navLinks=document.querySelectorAll('.navLinks')
for (const navLink of navLinks) {
    navLink.addEventListener('click',()=>{
        navLinks.forEach((x)=>x.classList.remove('underline'));
        navLink.classList.add('underline');
    })
}

document.getElementById('navToggle').addEventListener('click',()=>{
    document.getElementById('sidebar').classList.toggle('hidden')
})


//skills 
document.getElementById('frontEnd').addEventListener('click',()=>{
    document.getElementById('backendSkills').classList.add('hidden')
    document.getElementById('frontEnd').classList.add('bg-gray-400')
    document.getElementById('frontendSkills').classList.remove('hidden')
    document.getElementById('backEnd').classList.remove('bg-gray-400')
})

document.getElementById('backEnd').addEventListener('click',()=>{
    document.getElementById('frontendSkills').classList.add('hidden')
    document.getElementById('backEnd').classList.add('bg-gray-400')
    document.getElementById('backendSkills').classList.remove('hidden')
    document.getElementById('frontEnd').classList.remove('bg-gray-400')
})





const change=(id,text)=>{
    document.getElementById(id).innerHTML=`<h1 class="text-xl">${text}</h1>`  
}
const normal=(id,text)=>{
    console.log(id);
    document.getElementById(id).innerHTML=`<img src=${text} alt="" class="h-[10vh]">`  
}