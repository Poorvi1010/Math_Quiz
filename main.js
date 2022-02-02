function addUser() {
    player_1_name=document.getElementById("user1").value;
    player_2_name=document.getElementById("user2").value;
 
    localStorage.setItem("player1_name",player_1_name)
    localStorage.setItem("player2_name",player_2_name)
 
    window.location="quiz_game_page.html"
 }