var keys = {};
var richard = {};
var james = {};
var richardScore2018 = 121235;
var jamesScore2018 = 164362;

// var fixedScores ={richardScore: 3740, jamesScore: 8155}
var richard = {
    avatarBodyImagePath: "http://avatar.xboxlive.com/avatar/RichardHpaNZ/avatar-body.png",
    avatarManifest: "AAAAAAAAAAA/AAAAABAAAAMbAAPByPEJoZyy4AAIAAADJAADwcjxCaGcsuAAIAAAAzcAA8HI8QmhnLLgAACAAALqAAPByPEJoZyy4AAAAAAAAAAAAAAAAAAAAAAAACAAApIAA8HI8QmhnLLgAAAAAAAAAAAAAAAAAAAAAAAAQAACcgADwcjxCaGcsuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/6h9P/90UTH/sUo3/4JQHf9SNDb/AAAA/5I0Dv85klH/OZJRAAAAAgAAAAHByPEJoZyy4AACAAAAAAAAAAAAAAAAAAAAAAABAAIAA8HI8QmhnLLgAAEAAAAAAAAAAAAAAAAAAAAAAggATQABwcjxCaGcsuACCAAAAAAAAAAAAAAAAAAAAAAAIAA3AAHByPEJoZyy4AAgAAAAAAAAAAAAAAAAAAAAAAgAAPgAAcHI8QmhnLLgCAAAAAAAAAAAAAAAAAAAAAAAAAQB3gADwcjxCaGcsuAABAAAAAAAAAAAAAAAAAAAAAAAEACQAAHByPEJoZyy4AAQAAAAAAAAAAAAAAAAAAAAAAQAALUAAcHI8QmhnLLgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAA3AAHByPEJoZyy4AAgAAAAAAAAAAAAAAAAAAAAAAAQAJAAAcHI8QmhnLLgABAAAAAAAAAAAAAAAAAAAAAAAAgAB0GxwYKcj01TCM4ACAAAAAAAAAAAAAAAAAAAAAAABAHeAAPByPEJoZyy4AAEAAAAAAAAAAAAAAAAAADgAAA2+t7BFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
    bio: "",
    gamerpicLargeImagePath: "http://image.xboxlive.com/global/t.4d5307e6/tile/0/28024",
    gamerpicLargeSslImagePath: "https://image-ssl.xboxlive.com/global/t.4d5307e6/tile/0/28024",
    gamerpicSmallImagePath: "http://image.xboxlive.com/global/t.4d5307e6/tile/0/18024",
    gamerpicSmallSslImagePath: "https://image-ssl.xboxlive.com/global/t.4d5307e6/tile/0/18024",
    gamerscore: 125035,
    gamertag: "RichardHpaNZ",
    location: "Tawa, Wellington",
    motto: "Ex umbra,nos orior",
    name: "Richard",
    tier: "Gold"

};
var james = {
    avatarBodyImagePath: "http://avatar.xboxlive.com/avatar/City%20Of%20Souls/avatar-body.png",
    avatarManifest: "AAAAAAAAAAA/AAAAABAAAAMdAAPByPEJoZyy4AAIAAADNAADwcjxCaGcsuAAIAAAAzwAA8HI8QmhnLLgAACAAALrAAPByPEJoZyy4AAAAAAAAAAAAAAAAAAAAAAAACAAAoYAA8HI8QmhnLLgAAAAAAAAAAAAAAAAAAAAAAAAQAACbgADwcjxCaGcsuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/96RTf8NDQ3/vHU1/zdRKv8NDQ3/U5XK/4VUGv9fQpT/X0KUAAAAAgAAAAHByPEJoZyy4AACAAAAAAAAAAAAAAAAAAAAAAABAAIAA8HI8QmhnLLgAAEAAAAAAAAAAAAAAAAAAAAAAAQCTQADwcjxCaGcsuAABAAAAAAAAAAAAAAAAAAAAAAACAASsdHKlYv6TVMIvAAIAAAAAAAAAAAAAAAAAAAAAAAQAJEAAcHI8QmhnLLgABAAAP8AAAD/AAAA/wAAAAAAACAALgABwcjxCaGcsuAAIAAA/wAAAP8AAAD/AAAAAAAQAAACAbPErh1WTVMIzhAAAAD/AAAA/wAAAP8AAAAAAAEAAL4AAcHI8QmhnLLgAQAAAP8AAAD/AAAA/wAAAAAACIADyAABwcjxCaGcsuAIgAAA/wAAAP8AAAD/AAAAAAACAAACEcHO/Z0eWEER9wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAuAAHByPEJoZyy4AAgAAD/AAAA/wAAAP8AAAAAAAAQAJEAAcHI8QmhnLLgABAAAP8AAAD/AAAA/wAAAAAAAAgAErHRypWL+k1TCLwACAAAAAAAAAAAAAAAAAAAAAAABAJNAAPByPEJoZyy4AAEAAAAAAAAAAAAAAAAAADgAACLWnlZMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
    bio: "",
    gamerpicLargeImagePath: "http://image.xboxlive.com/global/t.4d530822/tile/0/20002",
    gamerpicLargeSslImagePath: "https://image-ssl.xboxlive.com/global/t.4d530822/tile/0/20002",
    gamerpicSmallImagePath: "http://image.xboxlive.com/global/t.4d530822/tile/0/10002",
    gamerpicSmallSslImagePath: "https://image-ssl.xboxlive.com/global/t.4d530822/tile/0/10002",
    gamerscore: 172517,
    gamertag: "City Of Souls",
    location: "Auckland, New Zealand",
    motto: "",
    name: "james",
    tier: "Gold"
};

google.charts.load('current', {packages: ['corechart', 'bar']});
// google.charts.setOnLoadCallback(getKeys);
google.charts.setOnLoadCallback(drawCharts);

function getKeys(){
    console.log('get keys');
    $.ajax({
        url: 'config.json',
        type: 'get',
        success:function(result){
            keys = result[0];
            getRichardData();
        },
        error: function(error){
            console.log(error)
        }
    })
}


function getRichardData(){
    console.log("richard function");
    $.ajax({
        url: 'https://xboxapi.com/v2/'+keys['RichardID']+'/gamercard',
        type: "GET",
        cache: true,
        async: false,
        headers: {
            'X-AUTH': keys['XboxAPIKEY'],
        },
        success: function (res) {
            console.log("rich");
            richard = res;
            getJamesData();
        },
        error: function (err) {
            console.error(err);
        }
    });
}

function getJamesData(){
    console.log("james function");
    $.ajax({
        url: 'https://xboxapi.com/v2/'+keys['JamesID']+'/gamercard',
        type: "GET",
        cache: true,
        async: false,
        headers: {
            'X-AUTH': keys['XboxAPIKEY'],
        },
        success: function (res) {
            console.log("james");
            james = res;
            drawCharts();
        },
        error: function (err) {
            console.error(err);
        }
    });
}

function drawCharts(){
    var roundedNumber;

    var currentScores = {
        richardScore: richard['gamerscore'] - 121235,
        jamesScore: james['gamerscore'] - 164362
    }

    if(currentScores['richardScore'] > currentScores['jamesScore']){
        console.log("Richard is Winning");
        roundedNumber = Math.ceil(currentScores['richardScore']/1000)*1000;
    } else {
        console.log("James is Winning");
        roundedNumber = Math.ceil(currentScores['jamesScore']/1000)*1000;
    }
    $(".rich .gamerscore").text(richard['gamerscore']);
    $(".james .gamerscore").text(james['gamerscore']);

    $("#richard").height( ((currentScores['richardScore'] / roundedNumber) * 100) + "%"  );
    $("#james").height( ((currentScores['jamesScore'] / roundedNumber) * 100) + "%"  );

    $("#richard").find('h3').text(currentScores['richardScore']);
    $("#james").find('h3').text(currentScores['jamesScore']);



    console.log($("#richard").height());


    // console.log(currentScores);
    // var dataTable = new google.visualization.DataTable();
    // dataTable.addColumn("string", "Player");
    // dataTable.addColumn("number", "Gamerscore");
    //
    // dataTable.addRow(['Richard', fixedScores['richardScore']]);
    // dataTable.addRow(['James', fixedScores['jamesScore']]);

   //
   //  var dataTable = google.visualization.arrayToDataTable([
   //    ['Player', 'GamerScore', { role: 'style' }],
   //    ['Richard', fixedScores['richardScore'], '#c0392b'],            // RGB value
   //    ['James', fixedScores['jamesScore'], '#2980b9']            // English color name
   // ]);
   //
   //  var options = {
   //      annotations: {
   //    alwaysOutside: true
   //  },
   //    backgroundColor: 'transparent',
   //    bars: 'vertical',
   //    legend: 'none',
   //    vAxis: {
   //        baselineColor: 'white' ,
   //        gridlines: {
   //            color: 'transparent'
   //        },
   //        textStyle: {
   //            color: 'transparent'
   //        }
   //    },
   //    hAxis: {
   //      baselineColor: 'transparent' ,
   //      gridlines: {
   //          color: 'transparent'
   //      },
   //      textStyle: {
   //          color: 'transparent'
   //      }
   //    }
   //
   //  };
   //
   //  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
   //  chart.draw(dataTable, options);
}
