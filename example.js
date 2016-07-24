var fs = require('fs');
var path = require('path');
var Interface = require('./index');

var ID = 'gWaL_146fAU';

/*
All OPTIONS
    id:ID,
    audioOnly:false,
    videoOnly:true,
    resolution: //'720p', '480p', '360p'
    chooseBest:true,
    youtubeDl:false // to leverage youtube-dl
*/


var options = {
    id:ID,
    audioOnly:false,
    container:'mp4',
    youtubeDl:false
};

Interface.start(options).then(results => {
    fs.writeFileSync(path.join(process.cwd(), `${ID}.json`), JSON.stringify(results, null, 4), 'utf-8');
});
