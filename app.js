const app = Vue.createApp({
    data() {
        return {
            lightModeIsOn: true,
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
    methods: {
        toggleLightMode() {
            this.lightModeIsOn = !this.lightModeIsOn
        },
    }
});

app.mount('#portfolio');