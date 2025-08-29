document.addEventListener("DOMContentLoaded", () => {
  const likedCountEl = document.getElementById("liked-count");
  let likedCount = 0;

  const hearts = document.querySelectorAll(".fa-heart");

  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      if (heart.classList.contains("fa-regular")) {
        
        likedCount++;
      }
      likedCountEl.textContent = likedCount;
    });
  });
});
  

document.getElementById('call-btn').addEventListener('click', function(e){
    e.preventDefault()
    let coin = 100
    let serviceName = "National Emergency Number";
let serviceNumber = "999";
    if('click'){
        alert(`📞 Calling ${serviceName} at ${serviceNumber}`)
        const totalCoin = document.getElementById('coins')
        document.getElementById('coins').innerText = coin - 20
    }
   
})
