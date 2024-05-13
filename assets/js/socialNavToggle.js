document.addEventListener("DOMContentLoaded", function() {
    const socialNavIDToggle = document.getElementById('socialNavIDToggle');
    const socialNavIDInside = document.getElementById('socialNavIDInside');
    const socialNavCollapseIcon = document.querySelector('.socialNavCollapseIcon');
    const socialNavID = document.getElementById('socialNavID');

    socialNavIDToggle.addEventListener('click', function() {
        socialNavIDInside.style.display = socialNavIDInside.style.display === 'none' ? 'flex' : 'none';
        socialNavCollapseIcon.style.transform = socialNavCollapseIcon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
        
        if (socialNavID.style.right === '0%') {
            socialNavID.style.transform = 'translateX(50%)';
            socialNavID.style.right = '50%';
        } else {
            socialNavID.style.transform = 'translateX(0)';
            socialNavID.style.right = '0%';
        }
    });
});
