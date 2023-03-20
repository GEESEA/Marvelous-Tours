    var date1 = document.getElementById('Name1').value;
    var date2 = document.getElementById('Name2').value;
    const diffTime = Math.abs(date2-date1);
    const diffDays= Math.ceil(diffTime/ (1000 * 60 * 60 * 24));
    console.log(diffDays);

    window.addEventListener('scroll',reveal);

//     function reveal(){
//         var reveals =document.querySelectorAll('.reveal');

//         for(var i=0; i< reveals.length; i++){
//             var windowHeight = window.innerHeight;
//             var revealtop= reveals[i].getBoundingClientRect().top;
//             var revealpoint = 150;
            
//             if(revealtop < windowHeight - revealpoint){
//                 reveals[i].classList.add('active');
//                 }
//         else{
//             reveals[i].classList.remove('active');k
//         }
//     }
// }
function ChangeBg(){
    var navbar = document.getElementById('navbar');
    var scrollvalue = window.scrollY;
    if (scrollvalue<150){
        navbar.classList.remove('bgcolor');
    }
    else{
        navbar.classList.add('bgcolor');
    }
}

window.addEventListener('scroll',ChangeBg);
