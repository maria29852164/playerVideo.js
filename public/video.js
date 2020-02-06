const videojs =require('video.js')
const videoJsResolutionSwitcher=require('videojs-resolution-switcher')
const viodeoPlayer=document.querySelector("#videoPlayer")
//require('videojs-hls-quality-selector');
const qualityLevel=require('videojs-contrib-quality-levels')

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


var myPlayer=videojs(viodeoPlayer,options,changeQuality).videoJsResolutionSwitcher()
//myPlayer.hlsQualitySelector( {displayCurrentQuality: true});
//button
//iniciality video
function changeQuality(){
    
  
  // Add dynamically sources via updateSrc method
  myPlayer.updateSrc([
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

    myPlayer.on('resolutionchange', function(){
      console.info('Source changed to %s', myPlayer.src())
      console.log("change")
    })
    
}




        
         
              

            

