const app = Vue.createApp({
    data() {
        return {
            lightModeIsOn: true,
            navigation: [
                {text: 'skills', link: '#top-skills'}, 
                {text: 'work', link: '#my-work'},
                {text: 'social', link: '#social'},
            ],
            subtitles: ['Web','Development','Design','Hosting','Maintenance','Seo'],
            topSkills: [
                {text: 'HTML5', fontAwesomeIcon: 'fa-html5'},
                {text: 'PHP', fontAwesomeIcon: 'fa-code'},
                {text: 'Photoshop', fontAwesomeIcon: 'fa-camera-retro'},
                {text: 'LESS/SCSS', fontAwesomeIcon: 'fa-css3'},
                {text: 'Vue.js/jQuery', fontAwesomeIcon: 'fa-terminal'},
                {text: 'Wordpress', fontAwesomeIcon: 'fa-wordpress'},
                {text: 'Statistics', fontAwesomeIcon: 'fa-table'},
                {text: 'Excel', fontAwesomeIcon: 'fa-file-excel-o'},
                {text: 'Business', fontAwesomeIcon: 'fa-briefcase'},
            ],
            workItems: [
                {text: 'Powerhoop Fitness', link: 'http://powerhoopfitness.co.uk/', img: 'img/powerhoop.png', skills: 'Wordpress, HTML, CSS, SEO'},
                {text: 'Ace in the Hole', link: 'http://laurafriedman.webhostingforstudents.com/cas222/index.html.php', img: 'img/ace.png', skills: 'Bootstrap, HTML, CSS, Javascript, PHP'},
                {text: 'Wright Shot', link: 'http://laurafriedman.webhostingforstudents.com/wrightshot/', img: 'img/wrightshot.png', skills: "Bootstrap, HTML, CSS, Javascript, PHP"},
                {text: 'Albina Walk', link: 'http://pcc-webtech.com/albina/index.php', img: 'img/albina.png', skills: "PHP"},
                {text: 'Powergloves', link: 'http://powergloves.co.uk/', img: 'img/powergloves.png', skills: "Wordpress, HTML, CSS, SEO"},
                {text: 'Yuki - WP Theme', link: 'http://laurafriedman.webhostingforstudents.com/cas211w/project/', img: 'img/yuki.png', skills: "PHP, Wordpress, HTML, CSS, Bootstrap"},
            ],
            socialItems: [
                {text: 'LinkedIn', fontAwesomeIcon: 'fa-linkedin', link: 'https://www.linkedin.com/in/laura-friedman-801472156/'},
                {text: 'Email', fontAwesomeIcon: 'fa-envelope', link: 'mailto:laura.friedman5@gmail.com'},
                {text: 'GitHub', fontAwesomeIcon: 'fa-github', link: 'https://github.com/laurafriedman/'},
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