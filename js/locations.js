$(document).ready(function() {
  let place = $('#location-description').html();

  // chosenCounty = this.id;
  console.log('hi' + Cookies.get('playerCounty'));
  var county = Cookies.get('playerCounty');
  if (county != '') {
    let chosenCountyImg = "url('./images/maps/coMaps/" + county + '.png';
    // $('#county-map').css('border', '5px solid red');
    $('#county-map').css('background-image', chosenCountyImg);
  } else {
    console.log('still no cookie');
  }
  /*It turns out we need a location id.
32 counties with 6 locations each makes 192 locations.*/

  $('#back-to-counties').click(function() {
    location.href = './provinces.html';
  });

  setTimeout(function() {
    $('#map-pins').css('opacity', 1);
  }, 500);
  //add location pins to county map
  for (var key in countyDetails) {
    if (key == county) {
      $('#first-map-pin').css('left', countyDetails[key][2][0]);
      $('#first-map-pin').css('top', countyDetails[key][3][0]);
      $('#second-map-pin').css('left', countyDetails[key][2][1]);
      $('#second-map-pin').css('top', countyDetails[key][3][1]);
      $('#third-map-pin').css('left', countyDetails[key][2][2]);
      $('#third-map-pin').css('top', countyDetails[key][3][2]);
      $('#fourth-map-pin').css('left', countyDetails[key][2][3]);
      $('#fourth-map-pin').css('top', countyDetails[key][3][3]);
      $('#fifth-map-pin').css('left', countyDetails[key][2][4]);
      $('#fifth-map-pin').css('top', countyDetails[key][3][4]);
      $('#sixth-map-pin').css('left', countyDetails[key][2][5]);
      $('#sixth-map-pin').css('top', countyDetails[key][3][5]);
    }
  }

  $('#first-map-pin').mouseenter(function() {
    for (var key in countyDetails) {
      if (key == county) {
        $('#location-description').html(countyDetails[key][1][0]);
        place = $('#location-description').html();
        console.log('xsldkfjsl' + place);
      }
    }
  });

  $('#second-map-pin').mouseenter(function() {
    for (var key in countyDetails) {
      if (key == county) {
        $('#location-description').html(countyDetails[key][1][1]);
        place = $('#location-description').html();
        console.log('xsldkfjsl' + place);
      }
    }
  });

  $('#third-map-pin').mouseenter(function() {
    for (var key in countyDetails) {
      if (key == county) {
        $('#location-description').html(countyDetails[key][1][2]);
        place = $('#location-description').html();
        console.log('xsldkfjsl' + place);
      }
    }
  });

  $('#fourth-map-pin').mouseenter(function() {
    for (var key in countyDetails) {
      if (key == county) {
        $('#location-description').html(countyDetails[key][1][3]);
        place = $('#location-description').html();
        console.log('xsldkfjsl' + place);
      }
    }
  });

  $('#fifth-map-pin').mouseenter(function() {
    for (var key in countyDetails) {
      if (key == county) {
        $('#location-description').html(countyDetails[key][1][4]);
        place = $('#location-description').html();
        console.log('xsldkfjsl' + place);
      }
    }
  });

  $('#sixth-map-pin').mouseenter(function() {
    for (var key in countyDetails) {
      if (key == county) {
        $('#location-description').html(countyDetails[key][1][5]);
        place = $('#location-description').html();
        console.log('Áit: ' + place);
      }
    }
  });
  let locationCode =
    //establish locationCode
    //     $('#first-map-pin').click(function() {
    //       alert(Cookies.get('playerCounty'));
    //     });
    //   $('#second-map-pin').click(function() {
    //     alert(Cookies.get('playerCounty'));
    //   });
    //   $('#third-map-pin').click(function() {
    //     alert(Cookies.get('playerCounty'));
    //   });
    //   $('#fourth-map-pin').click(function() {
    //     alert(Cookies.get('playerCounty'));
    //   });
    //   $('#fifth-map-pin').click(function() {
    //     alert(Cookies.get('playerCounty'));
    //   });
    //   $('#sixth-map-pin').click(function() {
    //     alert(Cookies.get('playerCounty'));
    //   });

    $('.map-pin').click(function() {
      console.log(Cookies.get('locationID'));
      if (this.id === 'first-map-pin') {
        Cookies.set('locationID', county + '1');
        // alert(Cookies.get('locationID'));
      } else if (this.id === 'second-map-pin') {
        Cookies.set('locationID', county + '2');
        // alert(Cookies.get('locationID'));
      } else if (this.id === 'third-map-pin') {
        Cookies.set('locationID', county + '3');
        // alert(Cookies.get('locationID'));
      } else if (this.id === 'fourth-map-pin') {
        Cookies.set('locationID', county + '4');
        // alert(Cookies.get('locationID'));
      } else if (this.id === 'fifth-map-pin') {
        Cookies.set('locationID', county + '5');
        // alert(Cookies.get('locationID'));
      } else if (this.id === 'sixth-map-pin') {
        Cookies.set('locationID', county + '6');
        // alert(Cookies.get('locationID'));
      }

      Cookies.set('place', place);
      //   console.log(Cookies.get());
      // show first form and fade

      setTimeout(function() {
        location.href = './projects.html';
      }, 5);
    });
  $('.map-pin').mouseleave(function() {
    for (var key in countyDetails) {
      if (key == county) {
        $('#location-description').html(countyDetails[key][0]);
      }
    }
  });
  for (var key in countyDetails) {
    if (key == county) {
      //   console.log(key + '->' + countyDetails[key][0]);
      $('#location-description').html(countyDetails[key][0]);
      console.log(
        'Cá háit go dírach i ' +
          countyDetails[key][0] +
          '?' +
          countyDetails[key][1][1],
        countyDetails[key][1][2],
        countyDetails[key][1][3],
        countyDetails[key][1][4],
        countyDetails[key][1][5]
      );
    }
  }
});

let countyDetails = {
  antrim: [
    `Co. Aontroma`,
    [
      `Reaċlainn`,
      `Dearḃóg`,
      `Aċaḋ Eoċaille`,
      `Carn Ṁéaḃla`,
      `Carraig Ḟearġais`,
      `Béal Feiriste`
    ],
    //left
    [234, 218, 237, 275, 353, 314],
    //top
    [5, 47, 201, 299, 273, 353]
  ],
  armagh: [
    `Co. Ard Ṁaċa`,
    [
      `Sráid na nAlbanach`,
      `Craigavon`,
      `Port An Dúnáin`,
      `Baile Úr`,
      `Baile an Ṁuilinn`,
      `Lios Liath`
    ], //left
    [233, 291, 313, 217, 243, 308],
    //top
    [14, 25, 9, 290, 166, 333]
  ],
  carlow: [
    `Co. Ċeaṫarlaċ`,
    [
      `Cill Deirge`,
      `Baile Uí Ṁurċú`,
      `Baile Haicéid`,
      `An Ḃuiríos`,
      `Miseal`,
      `Cill Daṁáin`
    ], //left
    [225, 328, 274, 198, 342, 330],
    //top
    [64, 21, 172, 215, 200, 250]
  ],
  cavan: [
    `Co. An Caḃáin`,
    [
      `Doire na Criaḋ`,
      `An Cnoc Rua`,
      `Béal Tairbirt`,
      `An Dromainn`,
      `Dún an Rí`,
      `Lios Cré`
    ], //left
    [138, 278, 340, 380, 463, 428],
    //top
    [58, 108, 149, 300, 275, 340]
  ],
  clare: [
    `Co. An Ċláir`,
    [
      `Ceann Boirne`,
      `Fíoch Rua`,
      `An Tulach`,
      `Cill Rois`,
      `Leaba Ṡíoda`,
      `Bun Raite`
    ], //left
    [125, 159, 344, 110, 163, 321],
    //top
    [21, 195, 193, 371, 341, 270]
  ],
  cork: [
    `Co. Ċorcaí `,
    [
      `Cill na Mallaċ`,
      `Sliabh an Nóglaigh`,
      `Gleann an Ṗreaċáin`,
      `Beal na mḂláth`,
      `Cionn tSáile`,
      `An Sciobairín`
    ], //left
    [346, 405, 404, 362, 378, 191],
    //top
    [90, 123, 156, 246, 286, 345]
  ],
  derry: [
    `Co. Ḋoire`,
    [
      `Doire`,
      `Léim an Ṁadaiḋ`,
      `Droichead Fíolta`,
      `Maċaire Ráṫa`,
      `An Seanṁullach`,
      `Muine Mór`
    ], //left
    [80, 234, 267, 411, 370, 389],
    //top
    [139, 112, 155, 247, 294, 368]
  ],
  donegal: [
    `Co. Ḋún na nGall`,
    [
      `Cionn Dhún Damh`,
      `Bun na hAḃann`,
      `Sléiḃte Ḋoire Ḃeatha`,
      `Leitir Ceanainn`,
      `Bealach Féich`,
      `Na Cruaċa`
    ], //left
    [382, 234, 214, 305, 270, 189],
    //top
    [18, 81, 127, 191, 247, 268]
  ],
  down: [
    `Co. An Dúin`,
    [
      `An Lorgain`,
      `Lios na gCearrḃach`,
      `An Caisleán Riaḃach`,
      `An Ṁainistir Liath`,
      `Dún Pádraig`,
      `Cill Ċaoil`
    ],
    [123, 230, 281, 412, 393, 222],
    //top
    [177, 114, 103, 117, 242, 401]
  ],
  dublin: [
    `Co. Ḃaile Átha Ċliath`,
    [
      `Fionnġlas`,
      `Cluain Dolcáin`,
      `Cluain Tarbh`,
      `Binn Éadair`,
      `Dún Laoiġaire`,
      `Deilginis`
    ],
    [254, 240, 281, 303, 271, 303],
    //top
    [190, 256, 254, 250, 297, 319]
  ],
  fermanagh: [
    `Co. Ḟear Manaċ`,
    [
      `An Garastún `,
      `Paiteagó`,
      `Eadarnaiḋ`,
      `Lios na Daróg`,
      `Scriobaċ`,
      `Inis Ceiṫleann`
    ],
    [19, 148, 258, 257, 132, 273],
    //top
    [84, 35, 20, 106, 196, 213]
  ],
  galway: [
    `Co. na Gailliṁe`,
    [
      `Poll an Phúca`,
      `Cill Cais`,
      `An Spidéal `,
      `An Teach Dóite`,
      `An Ċeaṫrú Rua`,
      `Inis Meáin `
    ],
    [341, 215, 246, 338, 122, 111],
    //top
    [146, 233, 217, 280, 236, 299]
  ],
  kerry: [
    `Co. Ċiarraí`,
    [
      `Cathair Saiḋḃín`,
      `An Daingean`,
      `Gleann na bPúcaí`,
      `Sliabh Mis`,
      `Na Cruaċa Duḃa`,
      `An tSnaidhm`
    ],
    [9, 17, 111, 234, 235, 123],
    //top
    [118, 159, 159, 110, 268, 374]
  ],
  kildare: [
    `Co. Ċill Dara`,
    [
      `Cairbre`,
      `Na Solláin`,
      `Fioḋ Alúine`,
      `Maigh Nuad`,
      `An Currach`,
      `Léim an Ḃradáin`
    ],
    [239, 372, 254, 368, 329, 334],
    //top
    [118, 110, 159, 159, 268, 374]
  ],
  kilkenny: [
    `Co. Ċill Ċainniġ`,
    [
      `Ġráinseaċ Ċuffe`,
      `Baile Ṁic Andáin`,
      `Bearna na Gaoiṫe`,
      `Dún Garḃáin`,
      `Baile an Ṗoill`,
      `Sliaḃ Rua`
    ],
    [157, 272, 207, 274, 215, 274],
    //top
    [228, 295, 300, 334, 361, 397]
  ],
  laois: [
    `Co. Laoise`,
    [
      `Eiréil `,
      `Darú`,
      `An Baile Fionn`,
      `Baile Átha Í`,
      `Cúil an tSúdaire`,
      `Buiríos Mór Osraí`
    ],
    [161, 265, 298, 109, 249, 275],
    //top
    [119, 121, 84, 285, 316, 255]
  ],
  leitrim: [
    `Co. Liatroma`,
    [
      `Gleann Éada`,
      `Garḃach`,
      `Droim Seanḃó`,
      `Aċaḋ na Síleann`,
      `Fíonach`,
      `Dromad`
    ],
    [182, 202, 222, 302, 310, 272],
    //top
    [47, 126, 208, 215, 278, 347]
  ],
  limerick: [
    `Co. Luimnigh`,
    [
      `Pailis Ċaonraí`,
      `Poll an Phúca`,
      `Caisleán Uí Ċonaill`,
      `Áth na bḞuinseog`,
      `An Ḟeoṫanaċ`,
      `Brú Rí`
    ],
    [198, 284, 376, 98, 151, 220],
    //top
    [64, 46, 19, 247, 268, 178]
  ],
  longford: [
    `Co. An LongFoirt`,
    [
      `An Lios Breac`,
      `Meathais Troim`,
      `Gránard`,
      `Cluain Dá Ráth`,
      `Maiġ Duṁa`,
      `An Ċarraig Ḃuí`
    ],
    [197, 300, 393, 166, 232, 306],
    [154, 171, 154, 245, 231, 232]
  ],
  louth: [
    `Co.Lú`,
    [
      `Dún Dealgan`,
      `An Grianfort`,
      `Ceann Ċloċair`,
      `Baile Átha Ḟirdia`,
      `Poll an Phúca`,
      `Baile an Ġearlánaigh`
    ],
    [287, 370, 450, 187, 254, 323],
    //top
    [87, 137, 53, 286, 254, 236]
  ],
  mayo: [
    `Co. Mhaigh Eo`,
    [
      `Cill Ala`,
      `Caisleán an Ḃarraiġ`,
      `Baile Ui Ḟiacáin`,
      `An Caoláire Rua`,
      `Lios an tSaṁaiḋ`,
      `An Éill`
    ],
    [380, 235, 155, 196, 366, 251],
    //top
    [108, 172, 196, 341, 350, 335]
  ],
  meath: [
    `Co. Na Mí`,
    [
      `An Uaimh`,
      `Ráth Ċairn`,
      `Cill Ḃríde`,
      `Teamhair`,
      `Buaile na Bréachṁaí `,
      `Tigh na Sióg`
    ],
    [274, 206, 240, 298, 122, 349],
    //top
    [187, 203, 240, 224, 387, 356]
  ],
  monaghan: [
    `Co. Ṁuineaċáin`,
    [
      `Scairbh na gCaorach`,
      `Cluain Eois`,
      `Einistir Ḃuithe`,
      `Teach an Scotaigh`,
      `Crícheán Rua`,
      `Carraig Ṁaċaire Rois`
    ],
    [249, 191, 234, 132, 380, 383],
    //top
    [17, 73, 148, 281, 200, 402]
  ],
  offaly: [
    `Co. Uíḃ Ḟailí`,
    [
      `Cluain Ṁic Nóis`,
      `Éadan Doire`,
      `Biorra`,
      `Cionn Eitigh`,
      `Ráth Iomġáin`,
      `Suí an Róin`
    ],
    [133, 442, 143, 222, 432, 141],
    //top
    [88, 76, 215, 253, 154, 284]
  ],
  roscommon: [
    `Co. Ros Comáin`,
    [
      `Cluain Fada`,
      `Baile an Tobair`,
      `Loch Bó Finne`,
      `Scramóg`,
      `Loch Bó Dearge`,
      `Corr na Fola`
    ],
    [164, 240, 357, 316, 353, 328],
    //top
    [215, 191, 124, 211, 212, 354]
  ],
  sligo: [
    `Co. Shligigh`,
    [
      `Béal Átha na gCarraigíní`,
      `An Mullach Mór`,
      `An Ċéis`,
      `Gob Reaċla`,
      `Baile Uí Ḋálaigh`,
      `Tobar an Ċoire`
    ],
    [306, 295, 375, 261, 204, 195],
    //top
    [110, 190, 315, 98, 166, 324]
  ],
  tipperary: [
    `Co. Ṫiobraid Árann`,
    [
      `Ros Cré`,
      `Durlas`,
      `Faiċe Ró`,
      `Sliabh na mBan`,
      `Cluain Meala`,
      `Tigh na Naoi Míle`
    ],
    [293, 332, 358, 282, 259, 363],
    //top
    [102, 263, 285, 307, 342, 309]
  ],
  tyrone: [
    `Co. Ṫír Eoghain`,
    [
      `Caisleán na Deirge`,
      `Baile Mhic Gofraidh`,
      `An Ómaigh`,
      `An Caisleán Glas`,
      `An Ċorr Ċríochach`,
      `Dún Geanainn`
    ],
    [157, 268, 211, 302, 426, 386],
    //top
    [113, 103, 161, 175, 221, 306]
  ],
  waterford: [
    `Co. Ṗort Láirge`,
    [
      `Sléiḃte an Ċomaraigh`,
      `An Baile Dubh`,
      `Tullach an Iarainn`,
      `Cluain Ḟia`,
      `Dún Garḃán`,
      `Cill Ṁíodáin`
    ],
    [261, 103, 85, 185, 251, 406],
    //top
    [138, 188, 266, 357, 257, 169]
  ],
  westmeath: [
    `Co. Na hIarṁí`,
    [
      `Baile na gCailleach`,
      `Ráth Ḟearna`,
      `An Teanga`,
      `Na Colúir`,
      `Cill Ḃeagáin`,
      `An Muileann gCearr`
    ],
    [393, 467, 14, 74, 223, 374],
    //top
    [48, 166, 178, 221, 314, 252]
  ],
  wexford: [
    `Co. Loch Garman`,
    [
      `Coill an Iarainn`,
      `Inis Córṫaidh`,
      `Poll an Phúca`,
      `Maolán na nGaḃar`,
      `An Abhainn Dubh`,
      `Dún Ċormaic`
    ],
    [393, 345, 236, 288, 118, 301],
    //top
    [17, 123, 152, 181, 308, 352]
  ],
  wicklow: [
    `Co. Ċill Ṁantáin`,
    [
      `Poll an Ṗúca`,
      `Na Cloċa Liaṫa`,
      `Siol Éalaiġ`,
      `Dún Ard`,
      `An tInḃear Mór`,
      `Aḃóca`
    ],
    //left
    [216, 374, 164, 155, 329, 360],
    //top
    [69, 70, 125, 185, 293, 293]
  ]
};
