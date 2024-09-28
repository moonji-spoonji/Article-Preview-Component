// console.log (document.body)

const shareArea = document.getElementById('share-area');
const share = document.getElementById('share');
console.log(share);
const links = document.getElementById('links')
console.log(links)

shareArea.addEventListener('click', function() {
    
    if (links.style.display === "none") {
        links.style.display = "inherit";
        shareArea.style.backgroundColor = 'var(--desat-dark-blue)';
        share.style.filter = 'var(--light-gray-blue)';
      } else {
        links.style.display = "none";
        shareArea.style.backgroundColor = 'var(--light-gray-blue)';
      }
    
});