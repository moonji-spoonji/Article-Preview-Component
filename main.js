const shareArea = document.getElementById('share-area');
const share = document.getElementById('share-icon');
const links = document.getElementById('links')

shareArea.addEventListener('click', function() {
    
    links.classList.toggle("hidden")
    shareArea.classList.toggle("button-clicked");
    share.classList.toggle("share-clicked")  
    
});
