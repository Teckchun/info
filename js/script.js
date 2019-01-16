var app = new Vue({
    el:'#app',
    data:{
      author:{name:"Teckchun",photoUrl:"https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/48413914_1952215388161683_5458417758314168320_n.jpg?_nc_cat=107&_nc_ht=scontent-icn1-1.xx&oh=5c348274ff7789082c5893171c61f87b&oe=5CBE4582"},
      welcomeMessage : "Hi there, I am Teckchun.",
      programmingLanguages:[
          {name:'VueJs',icon:'fab fa-vuejs'},
          {name:'HTML5',icon:'fab fa-html5'},
          {name:'CSS3',icon:'fab fa-css3-alt'},
          {name:'Js',icon:'fab fa-js-square'},
          {name:'Angular',icon:'fab fa-angular'},
          {name:'React',icon:'fab fa-react'},
          {name:'NodeJs',icon:'fab fa-node-js'},
          {name:'Wordpress',icon:'fab fa-wordpress'},
          {name:'Npm',icon:'fab fa-npm'}
      ],
      socials:[
          {name:'fb',url:'https://www.facebook.com/Dejun.Hong',icon:'fab fa-facebook-f'},
          {name:'fb',url:'https://www.linkedin.com/in/teckchun-aing/',icon:'fab fa-linkedin-in'},
          {name:'fb',url:'https://github.com/Teckchun',icon:'fab fa-github'},
          {name:'fb',url:'https://twitter.com/teckchun123',icon:'fab fa-twitter'},
          {name:'fb',url:'https://www.facebook.com/Dejun.Hong',icon:'fab fa-youtube'}
          
      ]
    }
  });