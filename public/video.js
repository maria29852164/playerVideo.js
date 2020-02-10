const videojs =require('video.js')
const videoJsResolutionSwitcher=require('videojs-resolution-switcher')
const player=document.querySelector("#videoPlayer")
//require('videojs-hls-quality-selector');
//const qualityLevel=require('videojs-contrib-quality-levels')

//switer quality
let options
//options player
options = {
  
    controls: true,
    plugins: {
      videoJsResolutionSwitcher: {
         // Default resolution [{Number}, 'low', 'high'],
        
         default: 'high',
         dynamicLabel: true
      }
    }
  }

  //videojs


var player=videojs(viodeoPlayer,options,function(){
   // Add dynamically sources via updateSrc method
   var player = this;
   window.player = player
   player.updateSrc([
    {
        type:"video/mp4",
        label:'144',
        src:"./y2mate.com - minions_2_nace_un_villano_trailer_espaol_2020_XsQa9gC5TLA_144p.mp4",
        res:144
    },
    {
        type:"video/mp4",
        label:'240',
        src:"./y2mate.com - minions_2_nace_un_villano_trailer_espaol_2020_XsQa9gC5TLA_240p.mp4.crdownload",
        res:240
      },

    {
      type:"video/mp4",
      label:"360",
      src:"./y2mate.com - minions_2_nace_un_villano_trailer_espaol_2020_XsQa9gC5TLA_360p.mp4",
      res:360
    }

  
  ])

  player.on('resolutionchange', function(){
    console.info('Source changed to %s', myPlayer.src())
    console.log("change")
  })
  
})
//player.hlsQualitySelector( {displayCurrentQuality: true});
//button
//iniciality video
/*function changeQuality(){
    
  
  // Add dynamically sources via updateSrc method
  player.updateSrc([
      {
          type:"video/mp4",
          label:'144',
          src:"./y2mate.com - minions_2_nace_un_villano_trailer_espaol_2020_XsQa9gC5TLA_144p.mp4"
      },
      {
          type:"video/mp4",
          label:'240',
          src:"./y2mate.com - minions_2_nace_un_villano_trailer_espaol_2020_XsQa9gC5TLA_240p.mp4.crdownload"
      },
      {
        type:"video/mp4",
        label:"360",
        src="./y2mate.com - minions_2_nace_un_villano_trailer_espaol_2020_XsQa9gC5TLA_360p.mp4"
      }

    
    ])

    player.on('resolutionchange', function(){
      console.info('Source changed to %s', myPlayer.src())
      console.log("change")
    })
    
}
*/



        
         
              

            

