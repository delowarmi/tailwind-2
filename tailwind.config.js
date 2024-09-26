tailwind.config = {
        theme: {
          extend: {
            // color part start
            colors: {
              HeaderColor: '#282828',
              NavColor:'#F40404',
              OverlyColor:'rgba(0, 0, 0, 0.60);',
              BtnColor:'#F40404',
              supTextColor:'#6C6C6C',
              learnColor:'#F0F0F0',
              bgoverlyColor:'rgba(255, 255, 255, 0.50);',
              SuperPartColor:'#1F1F1F',
              LastPartColor:'#282828',
              LastTextColor:'#6C6C6C',



            },
            // color part end
            // container part start
            maxWidth:{
              HeaderContainer:'1120px',
              NevContainer:'1280px',
              BannerContainer:'1000px',
              SUrVContainer:'691px',
              LearnContainer:'1140px'
              
            },
            // container part end
            // bgraound part start
            backgroundImage: {
              BannerImmag:"url('./images/Banner img.png')",
              surImage1 :"url('./images/survice-1.png')",
              SUimmage :"url('./images/survice-2.png')",
              SURimmage :"url('./images/survice-3.png')",
              Learnmmage :"url('./images/learnimmag.png')",
              Manimmage1 :"url('./images/man-1.png')",
              Manimages:"url('./images/man-2.png')",
              Manimmagess:"url('./images/man-3.png')",
              MapImmage:"url('./images/Maps.png')",
  
            },
            // bgraound part 
            // font famly 
            fontFamily: {
              popin:["Poppins"],
            },
            // font famly 
            
          }
        }
}