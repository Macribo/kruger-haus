/*credit - Rex van der Spuy, "Foundation Game Design with HTML Javascript" */
$(document).ready(function() {
  $('.cubes').fadeTo(2000, 0);
  // alert(Cookies.get('place'));
  var locationID = 'kru1';
  blockPath = () => {
    switch (lastPressed) {
      case 'down':
        gameObjects[sheepRow][sheepColumn] = BLOCKED;

        sheepRow--;

        //Apply the sheep's new updated position to the array
        gameObjects[sheepRow][sheepColumn] = sheep;

        break;

      case 'up':
        gameObjects[sheepRow][sheepColumn] = BLOCKED;

        sheepRow++;
        gameObjects[sheepRow][sheepColumn] = sheep;

        break;

      case 'right':
        gameObjects[sheepRow][sheepColumn] = BLOCKED;

        sheepColumn--;
        gameObjects[sheepRow][sheepColumn] = sheep;

        break;

      case 'left':
        gameObjects[sheepRow][sheepColumn] = BLOCKED;

        sheepColumn++;
        gameObjects[sheepRow][sheepColumn] = sheep;
        break;
    }
    render();
  };
  //   alert('old state branch loaded');
  $('.levelDescription').text(Cookies.get('place'));
  let placeName = Cookies.get('place');
  //Get a reference to the stage and output
  var stage = document.querySelector('#stage');
  var output = document.querySelector('#output');

  //Add a keyboard listener
  window.addEventListener('keydown', keydownHandler, false);

  //set level description:
  // let place = Cookies.get('playerCounty');
  //   console.log(Cookies.get());
  // $('.levelDescription').text(place);
  //The game map
  var map = [
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, '.', '.', 7, 7, 7, 7, '.', '.', 7],
    [7, 7, 7, 7, 7, 7, 7, '.', '.', 7, 7, 7, '.', '.', '.', 7],
    [7, 7, 7, 7, '.', '.', 7, '.', '.', '.', '.', '.', '.', '.', '.', 7],
    [7, 7, 7, 'tur', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
  ];

  //The game objects map
  var gameObjects = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  var lastPressed = ''; //what was the last key pressed?

  //Map code
  var SUAS = '^';
  var SIOS = 'v';
  var CLÉ = '<';
  var DEAS = '>';
  var EMPTY = '.';
  var LAND = 1;
  var MAGIC_TREE = 2;
  var KRUGER = 'kr';
  var HOME = 3;
  var sheep = 4;
  var BLOCKED = 7;
  var WAVES = 5;
  var MONSTER = 6;
  var DOOR = 'tur';
  var STANDINGSTONE = 's';
  var LITTLETOWN = 'l';
  var BEALNABLATH = 'b';
  var BLARNEYCASTLE = 'c';
  var NORMANKEEP = 'n';
  var STATUE = 't';
  var CRANNOG = 'r';
  var CASTLE = 'a';
  var HILLFORT = 'h';
  var STILL = 'i';
  var CHURCH = 'u';
  var GRAVES = 'm';
  var RUIN = 'j';
  var TOWER = 'o';
  var FAIRYFORT = 'd';
  var TRALEE = 'ee';
  var MOUNTAIN = 'M';

  //The size of each cell
  var SIZE = 64;

  //The number of rows and columns
  var ROWS = map.length;
  var COLUMNS = map[0].length;

  //Arrow key codes
  var UP = 38;
  var DOWN = 40;
  var RIGHT = 39;
  var LEFT = 37;

  //An automatic way of setting the sheep's start position
  var sheepRow;
  var sheepColumn;
  var monsterColumn;
  var monsterRow;

  for (var row = 0; row < ROWS; row++) {
    for (var column = 0; column < COLUMNS; column++) {
      if (gameObjects[row][column] === sheep) {
        sheepRow = row;
        sheepColumn = column;
      }
      if (gameObjects[row][column] === MONSTER) {
        monsterRow = row;
        monsterColumn = column;
      }
    }
  }

  render();

  function keydownHandler(event) {
    if (keyboardActive) {
      switch (event.keyCode) {
        case UP:
          //Find out if the sheep's move will
          //be within the playing field
          if (sheepRow > 0) {
            //first buffer sheep position to simulate blocked squares
            lastPressed = 'up';

            //If it is, clear the sheep's current cell
            gameObjects[sheepRow][sheepColumn] = 0;

            //Subract 1 from the sheep's row
            //to move it up one row on the map
            sheepRow--;

            //Apply the sheep's new updated position to the array
            gameObjects[sheepRow][sheepColumn] = sheep;
          }
          break;

        case DOWN:
          if (sheepRow < ROWS - 1) {
            lastPressed = 'down';
            gameObjects[sheepRow][sheepColumn] = ROWS - 0;
            sheepRow++;
            gameObjects[sheepRow][sheepColumn] = sheep;
          }
          break;

        case LEFT:
          if (sheepColumn > 1) {
            gameObjects[sheepRow][sheepColumn] = 1;
            sheepColumn--;
            gameObjects[sheepRow][sheepColumn] = sheep;
            lastPressed = 'left';
          }
          break;

        case RIGHT:
          if (sheepColumn < COLUMNS - 1) {
            gameObjects[sheepRow][sheepColumn] = 0;
            sheepColumn++;
            gameObjects[sheepRow][sheepColumn] = sheep;
          }
          lastPressed = 'right';
          break;
      }
    }
    //find out what kind of cell the sheep is on
    if (!mapMenuIsVisible) {
      switch (map[sheepRow][sheepColumn]) {
        case EMPTY:
          gameMessage = 'You sail the open seas.';
          break;

        case MAGIC_TREE:
          // fight();
          blockPath();
          $('#back-to-county').fadeOut('slow');
          $('.modal').css('display', 'flex');
          // $('.btn-panel').css('display', 'none');
          $('.btn-menu').css('pointer-events', 'none');

          //   alert('show btn!');
          break;
        case DOOR:
          doorTroll();
          break;
        case LAND:
          // trade();
          break;
        case SUAS:
          loadDestinations(locationID);
          console.log('suas');

          changeLocation(locationID);

          // alert('suas');
          break;

        case SIOS:
          // alert('sios');
          loadDestinations(locationID);
          console.log('sios');

          changeLocation(locationID);

          break;

        case CLÉ:
          // alert('clé');
          loadDestinations(locationID);
          console.log('clé');
          changeLocation(locationID);
          break;

        case DEAS:
          console.log('deas');

          // alert('deas');
          loadDestinations(locationID);

          changeLocation(locationID);

          break;
        case BLOCKED:
          //Undo last key press
          //   alert('blocked!');
          //   alert('Blocked' + lastPressed + Cookies.get('locationID'));
          blockPath();
          break;
        case WAVES:
          blockPath();
          break;
      }
    }
    //Render the game
    render();
  }

  setBG = placeName => {
    //refactor these if statements:
  };

  function render() {
    //Clear the stage of img cells
    //from the previous turn

    if (stage.hasChildNodes()) {
      for (var i = 0; i < ROWS * COLUMNS; i++) {
        stage.removeChild(stage.firstChild);
      }
    }

    //make a random wave
    randWave = () => {
      let waveNum = Math.floor(Math.random() * 8);
      if (waveNum === 0) {
        return './images/tonnta0.png';
      }
      if (waveNum === 1) {
        return './images/tonnta1.gif';
      }

      if (waveNum === 2) {
        return './images/tonnta2.gif';
      }

      if (waveNum === 3) {
        return './images/tonnta3.gif';
      }
      if (waveNum === 4) {
        return './images/tonnta0.png';
      }
      if (waveNum === 5) {
        return './images/tonnta0.png';
      }
      if (waveNum === 6) {
        return './images/tonnta0.png';
      }
      if (waveNum === 7) {
        return './images/tonnta0.png';
      }
    };

    //Render the game by looping through the map arrays
    for (var row = 0; row < ROWS; row++) {
      for (var column = 0; column < COLUMNS; column++) {
        //Create a img tag called cell
        var cell = document.createElement('img');

        //Set it's CSS class to "cell"
        cell.setAttribute('class', 'cell');

        //Add the img tag to the <div id="stage"> tag
        stage.appendChild(cell);

        //Find the correct image for this map cell
        switch (map[row][column]) {
          case EMPTY:
            cell.src = './images/folamh.png';
            break;

          case STANDINGSTONE:
            cell.src = './images/locations/AnBhograchBeag.png';
            break;

          case LAND:
            cell.src = './images/talamh.png';
            break;

          case MAGIC_TREE:
            cell.src = './images/geaga.png';
            break;

          case HOME:
            cell.src = './images/folamh.png';
            break;

          case DOOR:
            cell.src = './images/folamh.png';

            break;
          case SUAS:
            cell.src = './images/folamh.png';
            break;
          case SIOS:
            cell.src = './images/folamh.png';
            break;
          case CLÉ:
            cell.src = './images/folamh.png';
            break;
          case DEAS:
            cell.src = './images/folamh.png';
            break;
          case BLOCKED:
            cell.src = './images/folamh.png';
        }

        if (gameObjects[sheepRow][sheepColumn] === MONSTER) {
          alert('collision!');
        }

        //Add the sheep from the gameObjects array
        switch (gameObjects[row][column]) {
          case sheep:
            cell.src = './images/imreoir.gif';
            break;
          // case MONSTER:
          //   cell.src = './images/geaga.png';
          //   break;
        }
        //Position the cell
        cell.style.top = row * SIZE + 'px';
        cell.style.left = column * SIZE + 'px';
      }
    }
  }

  //   $('#back-to-county').click(function() {
  //     location.href = './locations.html';
  //     // alert('see u');
  //   });
  $('#close-map-menu-button').click(function() {
    goBackOneSquare();
    keyboardActive = true;
    $('#map-menu').fadeOut();
    mapMenuIsVisible = false;
    gameObjects[sheepRow][sheepColumn] = sheep;
  });
  showMapMenu = () => {
    $('#map-menu').fadeIn();
    mapMenuIsVisible = !mapMenuIsVisible;

    gameObjects[sheepRow][sheepColumn] = 0;
    $('#map-info-btns').empty();
    for (var i = 0; i < destinations.length; i++) {
      $('#map-info-btns').append(
        `<button class="btn destination-button btn-info btn-lg mr-5" id=` +
          destinations[i] +
          `>` +
          updateLocationDescription(destinations[i]) +
          `</button>`
      );

      $('.destination-button').click(function(e) {
        locationID = this.id;
        destinations = [];
        destinations.push(locationID);
        changeLocation(locationID);
        gameObjects[sheepRow][sheepColumn] = sheep;
        render();
        // locationID = destinations[0];
        // keyboardActive = true;
        // updatePlayerLocation();
        // updateBGImage();
        // $('.levelDescription').html(
        //     updateLocationDescription(locationID)
        // );
        // updateCountyEmblem();
        // updateProvincialEmblem();
        setLocalMapObjects(locationID);
        $('#map-menu').fadeOut();
        mapMenuIsVisible = false;
        //   destinations.length = 0;

        // alert(destinations)

        // loadDestinations(locationID)
        // // loadDestinations(locationID);
        // console.log("current location: "+updateLocationDescription(locationID));
        // console.log("Player can go up to: "+locationMapExitPoints[0][locationID]['up']);
        // console.log("Player can go down to: "+locationMapExitPoints[0][locationID]['down']);
        // console.log("Player can go left to: "+locationMapExitPoints[0][locationID]['left']);
        // console.log("Player can go right to: "+locationMapExitPoints[0][locationID]['right']);
        //     alert(map)
      });
      $('.levelDescription').html(updateLocationDescription(locationID));
    }
    gameObjects[sheepRow][sheepColumn] = 0;
  };
  let keyboardActive = true;
  toggleKeyboardInput = () => {
    keyboardActive = !keyboardActive;
  };
  var locationMapInfo = (function() {
    locationMapExitPoints = [
      {
        kru1: {
          left: [],
          right: ['antrim2'],
          up: [],
          down: [],
          bgImage: `url("./images/maps/localMaps/kru.png")`
        }
      }
    ];

    function getAll() {
      return locationMapExitPoints;
    }

    return {
      getAll: getAll
    };
  })();
  var destinations = [];
  loadDestinations = locationID => {
    // destinations.length = 0;
    locationMapInfo.getAll().forEach(function(location) {
      // //
      // if (locationMapExitPoints[0].hasOwnProperty(locationID)){
      destinations = locationMapExitPoints[0][locationID][lastPressed];
      console.log(destinations);
      //   alert(keyboardActive)
    });
  };

  updateBGImage = () => {
    var bg;
    locationMapInfo.getAll().forEach(function(location) {
      bg = locationMapExitPoints[0][locationID].bgImage;
      //   alert(bg);
      $('#stageBG').css('background-image', bg);
      console.log('bg:  ' + bg);
    });
  };
  // updateLocationName = ()=>{

  // }

  updateProvincialEmblem = () => {
    currentCounty = getCurrentCounty(locationID);
    if (
      currentCounty === 'antrim' ||
      currentCounty === 'armagh' ||
      currentCounty === 'cavan' ||
      currentCounty === 'donegal' ||
      currentCounty === 'down' ||
      currentCounty === 'fermanagh' ||
      currentCounty === 'derry' ||
      currentCounty === 'monaghan' ||
      currentCounty === 'tyrone'
    ) {
      //   alert(currentCounty);
      $('#province-emblem').css('background-image', 'url("./images/a2.png")');
      $('#province-title').text('Ulaidh');
    } else if (
      currentCounty === 'carlow' ||
      currentCounty === 'dublin' ||
      currentCounty === 'kildare' ||
      currentCounty === 'kilkenny' ||
      currentCounty === 'laois' ||
      currentCounty === 'longford' ||
      currentCounty === 'louth' ||
      currentCounty === 'meath' ||
      currentCounty === 'offaly' ||
      currentCounty === 'westmeath' ||
      currentCounty === 'wexford' ||
      currentCounty === 'wicklow'
    ) {
      $('#province-emblem').css('background-image', 'url("./images/a1.png")');
      $('#province-title').text('Laighin');
    } else if (
      currentCounty === 'clare' ||
      currentCounty === 'cork' ||
      currentCounty === 'kerry' ||
      currentCounty === 'limerick' ||
      currentCounty === 'tipperary' ||
      currentCounty === 'waterford'
    ) {
      $('#province-emblem').css('background-image', 'url("./images/a3.png")');
      $('#province-title').text('an Mhumhain');
    } else if (
      currentCounty === 'Galway' ||
      currentCounty === 'leitrim' ||
      currentCounty === 'mayo' ||
      currentCounty === 'roscommon' ||
      currentCounty === 'sligo'
    ) {
      $('#province-emblem').css('background-image', 'url("./images/a4.png")');
      $('#province-title').text('Connachta');
    }
  };
  changeLocation = () => {
    // loadDestinations(locationID);
    let oldProv = $('#province-title').text();
    let oldCounty = $('#county-title').text();
    // alert(oldProv)
    if (destinations.length === 0) {
      // alert(sea);
      seaHandler();
    } else if (destinations.length === 1) {
      // alert('going!');

      keyboardActive = true;
      updatePlayerLocation();
      locationID = destinations[0];
      updateBGImage();
      $('.levelDescription').html(updateLocationDescription(locationID));
      //indicate new county
      updateCountyEmblem();

      updateProvincialEmblem();
      setLocalMapObjects(locationID);
      // loadDestinations(locationID);
      var original_color = $('#county-emblem').css('border-left-color');
      //notify user on enter new province
      if ($('#province-title').text() != oldProv) {
        $('.cubes')
          .fadeTo(100, 0.9)
          .delay(2500)
          .fadeOut(1000);
        $('.cubes').html(
          `<br><br><h2>Tá Cúige ` +
            oldProv +
            ` fágtha agat. <br><br> Fáilte go Cúige ` +
            $('#province-title').text() +
            `!</h2>`
        );
      }
    } else {
      showMapMenu();
    }
    // destinations.length = 0;
    console.log('current locationID: ' + locationID);
    console.log('current location: ' + updateLocationDescription(locationID));
    console.log(
      'Player can go up to: ' + locationMapExitPoints[0][locationID]['up']
    );
    console.log(
      'Player can go down to: ' + locationMapExitPoints[0][locationID]['down']
    );
    console.log(
      'Player can go left to: ' + locationMapExitPoints[0][locationID]['left']
    );
    console.log(
      'Player can go right to: ' + locationMapExitPoints[0][locationID]['right']
    );
  };
  updateCountyEmblem = () => {
    currentCounty = getCurrentCounty(locationID);
    if (currentCounty === 'antrim') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/antrim.png")'
      );
      $('#county-title').text(countyDetails.antrim[0]);
    } else if (currentCounty === 'armagh') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/armagh.png")'
      );
      $('#county-title').text(countyDetails.armagh[0]);
    } else if (currentCounty === 'carlow') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/carlow.png")'
      );
      $('#county-title').text(countyDetails.carlow[0]);
    } else if (currentCounty === 'cavan') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/cavan.png")'
      );
      $('#county-title').text(countyDetails.cavan[0]);
    } else if (currentCounty === 'clare') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/clare.png")'
      );
      $('#county-title').text(countyDetails.clare[0]);
    } else if (currentCounty === 'cork') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/cork.png")'
      );
      $('#county-title').text(countyDetails.cork[0]);
    } else if (currentCounty === 'derry') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/derry.png")'
      );
      $('#county-title').text(countyDetails.derry[0]);
    } else if (currentCounty === 'donegal') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/donegal.png")'
      );
      $('#county-title').text(countyDetails.donegal[0]);
    } else if (currentCounty === 'down') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/down.png")'
      );
      $('#county-title').text(countyDetails.down[0]);
    } else if (currentCounty === 'dublin') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/dublin.png")'
      );
      $('#county-title').text(countyDetails.dublin[0]);
    } else if (currentCounty === 'fermanagh') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/fermanagh.png")'
      );
      $('#county-title').text(countyDetails.fermanagh[0]);
    } else if (currentCounty === 'galway') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/galway.png")'
      );
      $('#county-title').text(countyDetails.galway[0]);
    } else if (currentCounty === 'kerry') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/kerry.png'
      );
      $('#county-title').text(countyDetails.kerry[0]);
    } else if (currentCounty === 'kildare') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/kildare.png'
      );
      $('#county-title').text(countyDetails.kildare[0]);
    } else if (currentCounty === 'kilkenny') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/kilkenny.png'
      );
      $('#county-title').text(countyDetails.kilkenny[0]);
    } else if (currentCounty === 'laois') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/laois.png'
      );
      $('#county-title').text(countyDetails.laois[0]);
    } else if (currentCounty === 'leitrim') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/leitrim.png'
      );
      $('#county-title').text(countyDetails.leitrim[0]);
    } else if (currentCounty === 'limerick') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/limerick.png'
      );
      $('#county-title').text(countyDetails.limerick[0]);
    } else if (currentCounty === 'longford') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/longford.png'
      );
      $('#county-title').text(countyDetails.longford[0]);
    } else if (currentCounty === 'louth') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/louth.png'
      );
      $('#county-title').text(countyDetails.louth[0]);
    } else if (currentCounty === 'mayo') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/mayo.png'
      );
      $('#county-title').text(countyDetails.mayo[0]);
    } else if (currentCounty === 'meath') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/meath.png'
      );
      $('#county-title').text(countyDetails.meath[0]);
    } else if (currentCounty === 'monaghan') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/monaghan.png'
      );
      $('#county-title').text(countyDetails.monaghan[0]);
    } else if (currentCounty === 'offaly') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/offaly.png'
      );
      $('#county-title').text(countyDetails.offaly[0]);
    } else if (currentCounty === 'roscommon') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/roscommon.png'
      );
      $('#county-title').text(countyDetails.roscommon[0]);
    } else if (currentCounty === 'sligo') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/sligo.png'
      );
      $('#county-title').text(countyDetails.sligo[0]);
    } else if (currentCounty === 'tipperary') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/tipperary.png'
      );
      $('#county-title').text(countyDetails.tipperary[0]);
    } else if (currentCounty === 'tyrone') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/tyrone.png")'
      );
      $('#county-title').text(countyDetails.tyrone[0]);
    } else if (currentCounty === 'waterford') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/waterford.png")'
      );
      $('#county-title').text(countyDetails.waterford[0]);
    } else if (currentCounty === 'westmeath') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/westmeath.png")'
      );
      $('#county-title').text(countyDetails.westmeath[0]);
    } else if (currentCounty === 'wexford') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/wexford.png")'
      );
      $('#county-title').text(countyDetails.wexford[0]);
    } else if (currentCounty === 'wicklow') {
      $('#county-emblem').css(
        'background-image',
        'url("./images/emblems/wicklow.png")'
      );
      $('#county-title').text(countyDetails.wicklow[0]);
    }
  };
  setLocalMapObjects = locationID => {};

  goBackOneSquare = () => {
    if (lastPressed === 'up') {
      gameObjects[sheepRow][sheepColumn] = 0;
      sheepRow++;
      gameObjects[sheepRow][sheepColumn] = sheep;
    } else if (lastPressed === 'down') {
      gameObjects[sheepRow][sheepColumn] = 0;
      sheepRow--;
      gameObjects[sheepRow][sheepColumn] = sheep;
    } else if (lastPressed === 'left') {
      gameObjects[sheepRow][sheepColumn] = 0;
      sheepColumn++;
      gameObjects[sheepRow][sheepColumn] = sheep;
    } else if (lastPressed === 'right') {
      gameObjects[sheepRow][sheepColumn] = 0;
      sheepColumn--;
      gameObjects[sheepRow][sheepColumn] = sheep;
    }
  };

  var mapMenuIsVisible = false;
  seaHandler = () => {
    if (!mapMenuIsVisible) {
      loadDestinations(locationID);
      $('#sea-modal').fadeIn();
      $('#sea-modal').css('pointer-events', 'auto');
      // console.log("Currently locationID:"+locationID );
      gameObjects[sheepRow][sheepColumn] = 0;
      //   gameObjects[2][8] = sheep;
      goBackOneSquare();
    }
  };

  $('#sea-modal-button').click(function() {
    $('#sea-modal').fadeOut();
    $('#sea-modal').css('pointer-events', 'none');
    seaModalOpen = false;
  });

  let seaModalOpen = false;
  updatePlayerLocation = () => {
    if (seaModalOpen === true) {
      return;
    }

    console.log('updatePlayerLocation on map');
    if (lastPressed === 'up') {
      //clear the sheep's current cell
      gameObjects[sheepRow][sheepColumn] = 0;

      //
      // move it to bottom of map the map
      sheepRow = 4;

      //Apply the sheep's new updated position to the array
      gameObjects[sheepRow][sheepColumn] = sheep;
    }

    if (lastPressed === 'down') {
      //clear the sheep's current cell
      gameObjects[sheepRow][sheepColumn] = 0;

      //
      // move it to bottom of map the map
      sheepRow = 1;

      //Apply the sheep's new updated position to the array
      gameObjects[sheepRow][sheepColumn] = sheep;
    }

    if (lastPressed === 'right') {
      //clear the sheep's current cell
      gameObjects[sheepRow][sheepColumn] = 0;

      //

      sheepColumn = 2;

      //Apply the sheep's new updated position to the array
      gameObjects[sheepRow][sheepColumn] = sheep;
    }

    if (lastPressed === 'left') {
      //clear the sheep's current cell
      gameObjects[sheepRow][sheepColumn] = 0;

      //
      sheepColumn = 13;

      //Apply the sheep's new updated position to the array
      gameObjects[sheepRow][sheepColumn] = sheep;
    }
  };
  getCountyLocation = locationID => {
    var tempLocationID = locationID;
    return String(tempLocationID.slice(-1));
  };
  getCurrentCounty = locationID => {
    return String(locationID.substring(0, locationID.length - 1));
  };
  updateLocationDescription = locationID => {
    var varNum = Number(getCountyLocation(locationID)) - 1; //array value
    let newLocationName;

    var co = getCurrentCounty(locationID);
    if (co === 'antrim') {
      newLocationName = countyDetails.antrim[1][varNum];
      return newLocationName;
    }
    if (co === 'armagh') {
      newLocationName = countyDetails.armagh[1][varNum];
      return newLocationName;
    }
    if (co === 'carlow') {
      newLocationName = countyDetails.carlow[1][varNum];
      return newLocationName;
    }
    if (co === 'cavan') {
      newLocationName = countyDetails.cavan[1][varNum];
      return newLocationName;
    }
    if (co === 'clare') {
      newLocationName = countyDetails.clare[1][varNum];

      return newLocationName;
    }
    if (co === 'cork') {
      newLocationName = countyDetails.cork[1][varNum];
      return newLocationName;
    }
    if (co === 'derry') {
      newLocationName = countyDetails.derry[1][varNum];
      return newLocationName;
    }
    if (co === 'donegal') {
      newLocationName = countyDetails.donegal[1][varNum];
      return newLocationName;
    }
    if (co === 'down') {
      newLocationName = countyDetails.down[1][varNum];
      return newLocationName;
    }
    if (co === 'dublin') {
      newLocationName = countyDetails.dublin[1][varNum];
      return newLocationName;
    }
    if (co === 'fermanagh') {
      newLocationName = countyDetails.fermanagh[1][varNum];
      return newLocationName;
    }
    if (co === 'galway') {
      newLocationName = countyDetails.galway[1][varNum];
      return newLocationName;
    }
    if (co === 'kerry') {
      newLocationName = countyDetails.kerry[1][varNum];
      return newLocationName;
    }
    if (co === 'kildare') {
      newLocationName = countyDetails.kildare[1][varNum];
      return newLocationName;
    }
    if (co === 'kilkenny') {
      newLocationName = countyDetails.kilkenny[1][varNum];
      return newLocationName;
    }
    if (co === 'laois') {
      newLocationName = countyDetails.laois[1][varNum];
      return newLocationName;
    }
    if (co === 'leitrim') {
      newLocationName = countyDetails.leitrim[1][varNum];
      return newLocationName;
    }
    if (co === 'limerick') {
      newLocationName = countyDetails.limerick[1][varNum];
      return newLocationName;
    }
    if (co === 'longford') {
      newLocationName = countyDetails.longford[1][varNum];
      return newLocationName;
    }
    if (co === 'louth') {
      newLocationName = countyDetails.louth[1][varNum];
      return newLocationName;
    }
    if (co === 'mayo') {
      newLocationName = countyDetails.mayo[1][varNum];
      return newLocationName;
    }
    if (co === 'meath') {
      newLocationName = countyDetails.meath[1][varNum];
      return newLocationName;
    }
    if (co === 'monaghan') {
      newLocationName = countyDetails.monaghan[1][varNum];
      return newLocationName;
    }
    if (co === 'offaly') {
      newLocationName = countyDetails.offaly[1][varNum];
      return newLocationName;
    }
    if (co === 'roscommon') {
      newLocationName = countyDetails.roscommon[1][varNum];
      return newLocationName;
    }
    if (co === 'sligo') {
      newLocationName = countyDetails.sligo[1][varNum];
      return newLocationName;
    }
    if (co === 'tiperary') {
      newLocationName = countyDetails.tiperary[1][varNum];
      return newLocationName;
    }
    if (co === 'tyrone') {
      newLocationName = countyDetails.tyrone[1][varNum];
      return newLocationName;
    }
    if (co === 'westmeath') {
      newLocationName = countyDetails.westmeath[1][varNum];
      return newLocationName;
    }

    if (co === 'wexford') {
      newLocationName = countyDetails.wexford[1][varNum];
      return newLocationName;
    }
    if (co === 'wicklow') {
      newLocationName = countyDetails.wickow[1][varNum];
      return newLocationName;
    }

    // alert('no : ' + varNum);
  };

  deactivateKeyboard = () => {
    document.onkeyup = function(e) {
      return false;
    };
    console.log('disable keyboard');
  };
  var bg = $('#stageBG').css('background-image');
  //   alert(bg);
  if (bg === 'none') {
    updateBGImage();
    setLocalMapObjects(locationID);
    updateProvincialEmblem();
    updateCountyEmblem();
    render();
  }
}); //close document ready function
let rando = Math.floor(Math.random() * 40 + 150);
let randMap = 'url("./images/maps/localMaps/bg' + rando + '.png")';

////////////
function doorTroll() {
  $('.modal').fadeIn();
  playerName = $('#ainm').val();
  if (playerName === 'sandwich') {
    $('#ainm').fadeOut();
    $('.modal-content').html('');

    $('.modal-content').append(`<h1>Hi Guys!</h1>`);
    $('.modal-content').append(`<h2>Congratulations!</h2>`);
    $('.modal-content').append(
      `<h3>This little tower is for you. But it's not quite ready yet.<br> Check back in a couple of weeks. <br><br><br>xx<br> Your pal<br><br> Ríbó</h3>`
    );
  }
}
