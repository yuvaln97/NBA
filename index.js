function playSound(playerName) {
    switch(playerName) {
        case 'lebron':
            var lebron = new Audio("sounds/lebron-james.mp3");
            lebron.play();
            break;
    
        case 'steph':
            var steph = new Audio("sounds/curry.mp3");
            steph.play();
            break;
    
        case 'jordan':
            var jordan = new Audio("sounds/jordan.mp3");
            jordan.play();
            break;
    
        default:
            console.log("Player sound not found");
    }
}

