function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            mode: 'light-mode',
            navigation: [
                {text: 'skills', link: '#top-skills'}, 
                {text: 'work', link: '#my-work'}
            ],
            subtitles: ['Web','Development','Design','Hosting','Maintenance','Seo'],
            topSkills: [
                {text: 'HTML5', fontAwesomeIcon: 'fa-html5'},
                {text: 'PHP', fontAwesomeIcon: 'fa-code'},
                {text: 'Photoshop', fontAwesomeIcon: 'fa-camera-retro'},
                {text: 'CSS/LESS/SASS', fontAwesomeIcon: 'fa-css3'},
                {text: 'Vue.js/Javascript/jQuery', fontAwesomeIcon: 'fa-terminal'},
                {text: 'Wordpress', fontAwesomeIcon: 'fa-wordpress'},
                {text: 'Statistics', fontAwesomeIcon: 'fa-table'},
                {text: 'Excel', fontAwesomeIcon: 'fa-file-excel-o'},
                {text: 'Accounting/Economics', fontAwesomeIcon: 'fa-briefcase'},
            ],
            workItems: [
                {text: 'Powerhoop Fitness'},
                {text: 'Ace in the Hole'},
                {text: 'Wright Shot'},
                {text: 'Albina Walk'},
                {text: 'Powergloves'},
                {text: 'Yuki - WP Theme'},
            ],
            socialItems: [
                {text: 'LinkedIn'},
                {text: 'Email'},
                {text: 'GitHub'},
            ]
        }
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return {width: '0%'};
            }
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return {width: '0%'};
            }
            return {width: this.playerHealth + '%'}
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // A draw
                this.winner = 'draw';
            } else if (value <= 0) {
                // Player lost
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // A draw
                this.winner = 'draw';
            } else if (value <= 0) {
                // Monster lost
                this.winner = 'player';
            }
        }
    },
    methods: {
        switchMode() {
            if (this.mode == 'light-mode') {
                console.log('light mode on')
            }
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth = this.monsterHealth - attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer () {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth = this.playerHealth - attackValue;
            this.addLogMessage('monster', 'attack', attackValue);

        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth = this.monsterHealth - attackValue;
            this.addLogMessage('player', 'special attack', attackValue);
            this.attackPlayer();
        },
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages = [];
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    }
});

app.mount('#portfolio');