function createBoard() {
  let app = document.getElementById('speed'), body = document.getElementsByTagName('body')[0];
  
  let dce = function(tag, attr, children = []) {
    let ele = document.createElement(tag);
    ['className', 'id', 'name', 'value', 'type', 'href', 'innerText', 'src'].forEach((i) => {
      if(attr[i]) ele[i] = attr[i];
    });
    children.forEach(i => {ele.appendChild(i)});
    return ele;
  }
  
  let appBody = dce('span', {className:'board center'}, [
    dce('span', {className:'row clearfix'}, [
      dce('span', {className:'deck'}, [
        dce('div', {id:'upperDeck', className:'black card upperDeck deck', innerText:'Deck'}, [])
      ]),
      dce('span', {className:'hand uhand'}, [
        dce('div', {className:'black card u0'}),
        dce('div', {className:'black card u1'}),
        dce('div', {className:'black card u2'}),
        dce('div', {className:'black card u3'}),
        dce('div', {className:'black card u4'}),
      ]),
      dce('div', {id:'p2', className:'infobox'}, [
        dce('h6',{})
      ])
    ]),
    
    dce('span', {className:'row clearfix'}, [
      dce('span', {className:'infobox'}, [
        dce('button', {type:'button', id:'start', innerText:'Start Game'}),
        dce('button', {type:'button', id:'reset', innerText:'Reset Game'}),
        dce('select', {name:'Difficulty'}, [
          dce('option', {value:'1', innerText:'CPU Easy'}),
          dce('option', {value:'2', innerText:'CPU Beginner'}),
          dce('option', {value:'3', innerText:'CPU Medium'}),
          dce('option', {value:'4', innerText:'CPU Hard'}),
          dce('option', {value:'5', innerText:'CPU Advanced'}),
          dce('option', {value:'6', innerText:'2 Players'}),
        ]),
        dce('button', {type:'button', className:'mybutton', innerText:'Enter Score'}),
        dce('a', {href:'highscore.html', innerText:'Leaderboard'})
      ]),
      dce('div', {className:'inplay'}, [
        dce('span', {className:'deck'}, [
          dce('div', {className:'card drawLeft deck', innerText:'Draw'}, [])
        ]),
        dce('div', {className:'onField'}, [
          dce('div', {className:'card playLeft', innerText:'Play'}),
          dce('div', {className:'card playRight', innerText:'Play'}),
        ]),
        dce('span', {className:'deck'}, [
          dce('div', {className:'card drawRight deck', innerText:'Draw'}, [])
        ]),
      ])
    ]),
    
    dce('span', {className:'row clearfix'}, [
      dce('div', {id:'p1', className:'infobox'}, [
        dce('h6',{})
      ]),
      dce('span', {className:'hand dhand'}, [
        dce('div', {className:'red card l0'}),
        dce('div', {className:'red card l1'}),
        dce('div', {className:'red card l2'}),
        dce('div', {className:'red card l3'}),
        dce('div', {className:'red card l4'}),
      ]),
      dce('span', {className:'deck'}, [
        dce('div', {id:'lowerDeck', className:'red card lowerDeck deck', innerText:'Deck'}, [])
      ]),
    ]),
  ])
  app.appendChild(appBody);
  var script = dce('script', {src:'speed-logic.js'});
  body.appendChild(script);
  script = dce('script', {src:'computer_opponent.js'});
  body.appendChild(script);
  script = dce('script', {src:'js_presenter.js'});
  body.appendChild(script);
  script = dce('script', {src:'player_2.js'});
  body.appendChild(script);
  script = document.createElement('script'); script.innerText = `var times = new Firebase("https://intense-heat-6299.firebaseio.com/best_times");`;
  body.appendChild(script);
  
  
 //  <script>
 //  var scoreListRef = new Firebase('https://intense-heat-6299.firebaseio.com/best_times');
 // 
 //  $(document).on('click', '.mybutton', function(){
 //   scoreListRef.push({
 //     name: name,
 //     score: elapsed
 //    });
 //  })
 // </script>
}
createBoard()