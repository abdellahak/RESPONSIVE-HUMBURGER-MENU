let mobileNav = document.getElementById('mobilenav');
mobileNav.style.display = 'none';
function showMobileNav(){
    if(mobileNav.style.display == 'none'){
        mobileNav.style.display = 'block'
    }else{
        mobileNav.style.display = 'none';
    }
};
window.onresize= function(){
    mobileNav.style.display='none';
}