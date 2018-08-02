jwplayer.key="arS3E2nh66yJmaZeDII37c/OnlEEJyz45tVsvwwZXWA="

var urlPrefix_ = "https://streaming.atmeco.com/";

var fiveCustom = function (data, data1) {

           return {
           file:urlPrefix_ + data,
           image:urlPrefix_ + data1,
	   hlshtml:"true",
	   width:"100%",
	   aspectratio:"16:9",
	   preload:"none",
           skin:{
	          name: "five",
	          background: "rgba(11, 130, 199, 0.65)",
	          active: "#72d4f2",
	          inactive: "#fff"
	         }
             };
};

var sevenCustom = function (ddata, hlsdata, imdata1) {
         return {
              width: "100%",
              aspectratio: "16:9", 
              abouttext: "Atmeco.com",
              playbackRateControls: "true",
              aboutlink: "https://atmeco.com",
              playlist: [{
                image: urlPrefix_ + imdata1,
                sources: [{
                  file: urlPrefix_ + hlsdata
                },{
                  file: urlPrefix_ + ddata
                }]
              }]              
         };
};