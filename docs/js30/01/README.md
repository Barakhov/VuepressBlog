# JS 30 - 01

## JavaScript Drum Kit

<div class="keys">
    <div data-key="65" class="key">
        <kbd>A</kbd>
        <span class="sound">count</span>
    </div>
    <div data-key="83" class="key">
        <kbd>S</kbd>
        <span class="sound">horn</span>
    </div>
    <div data-key="68" class="key">
        <kbd>D</kbd>
        <span class="sound">joke</span>
    </div>
    <div data-key="70" class="key">
        <kbd>F</kbd>
        <span class="sound">lion</span>
    </div>
    <audio data-key="65" src="/js30_01_sounds/count-off.wav"></audio>
    <audio data-key="83" src="/js30_01_sounds/horn.wav"></audio>
    <audio data-key="68" src="/js30_01_sounds/joke.wav"></audio>
    <audio data-key="70" src="/js30_01_sounds/lion.wav"></audio> 
</div>


<style>

    .keys {
        display: flex;
        justify-content: space-between;
        padding-top: 75px;        
    }

    .key {
        width: 100px;
        height: 100px;
        cursor: pointer;
        transform: scale(1);
        background-color: #eee;
        box-shadow: 0 0 10px #ffffff;
        transition: all 0.125s ease;
    }

    .key kbd {
        display: block;
        text-align: center;
        height: 60px;
        line-height: 60px;
        font-size: 2em;
    }

    .key span {
        width: 100%;
        text-align: center;
        display: block;
        padding-top: 5px;
    }

    .playing {
        transform: scale(1.1);
        background-color: #bada55;
        box-shadow: 0 0 10px #aaaaaa;
    }
</style>

<script>
    function playSound(e){
    	// console.log(e);
		// e is an object full of data describing what happened
 
    	const audio = document.querySelector('audio[data-key="'+e.keyCode+'"]');
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
        // ES5 old concatenation "+myVar+"
        // ES6 template literal strings sintaxis
        // ES6 interpolation ${myVar}
        // more info: https://stackoverflow.com/questions/27565056/es6-template-literals-vs-concatenated-strings/27567436

        // if (!audio) return;
        // audio.currentTime = 0;
        // audio.play();
        // key.classList.add('playing');

        if (!audio) {
            return;
        } else {
            audio.currentTime = 0;
            audio.play();
        	key.classList.add('playing');
        }
    }

    function removeTransition(e){
        caonsole.log('removeTransition fired', e);
    	// if(e.propertyName !== 'transform') return;
    	// this.classList.remove('playing');
    	if (e.propertyName !== 'transform') {
    		return;
    	} else {
    		this.classList.remove('playing');
    	}
    }

    const keys = document.querySelectorAll('.key');

    // returns an array
 	// 0:div.key
	// 1:div.key
	// 2:div.key
	// 3:div.key

	// document.querySelector('.key'); will only return the first one
	// <div data-key=​"65" class=​"key">​…​</div>​

    console.log('keys:', keys);



    keys.forEach( key => {
        console.log('key:', key);
        key.addEventListener('transitionend', removeTransition);
        // nada no le da la puta gana addear un evento
        // teoria: falla por que es un fichero .md y tiene que se compilado..?
        // en el window si lo añade.. yo qué sé :(

    });

    // adds event listener (TransitionEvent) 
    // to every element 
    // arrow function =>   more info: 
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    // https://www.youtube.com/watch?v=mrYMzpbFz18

    window.addEventListener("keydown", playSound);
    // lister for keydown event on window element and trigger function
</script>
