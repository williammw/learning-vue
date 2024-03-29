new Vue({
    el:'#app',
    data : {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning:false,
    },
    methods: {
        startGame: function () { 
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {             
            this.monsterHealth -= this.calculateDamage(3, 10);        
            if (this.checkWin())
            {
                return;
            }
            this.playerHealth -= this.calculateDamage(5, 12);       
            if (this.playerHealth <= 0)
            {
                this.gameIsRunning = false;    
            }
            this.checkWin();
        },
        calculateDamage: function (min,max) { 
            return  Math.max(Math.floor(Math.random() * max) + 1, min)
        },
        specialAttack: function () { 

        },
        heal: function () { 

        },
        giveup: function () { 

        },
        checkWin: function ()
        {
            if (this.monsterHealth <= 0)
            {
                if (confirm('u win, new Game?')) {
                    this.startGame();
                } else { 
                    this.gameIsRunning = false;
                }
                return true;               
            } else if (this.playerHealth <= 0)
            {
                if (confirm('u lost, new Game?')) {
                    this.startGame();
                } else { 
                    this.gameIsRunning = false;
                }
                return true;  
            }
            return false;
        }
    }
})