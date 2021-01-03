<template>
    <div id="app">

        <audio controls ref="audioRoda" style="display:none">
            <source src="rodaroda.mp3" type="audio/mpeg">
        </audio>

        <audio controls ref="audioErrou" style="display:none">
            <source src="errou.mp3" type="audio/mpeg">
        </audio>

        <p style="margin: 0; padding: 1rem">Stop</p>
        <div class="letras">
            <p v-for="(l, i) in letras" :key="'letter-' + i" :class="letrasUsadas.indexOf(i) >= 0 ? 'letraUsada' : i == letraIndex ? 'letraPassando' : ''">{{l}}</p>
        </div>
        <p class='letter'>{{letras[letraIndex]}}</p>
        <button @click="onClickRandomizeLetter">SORTEAR LETRA</button>
        <div class="themeContainer">
            <p class='med'>{{temas[temaIndex]}}</p>
        </div>
        <button @click="onClickRandomizeTheme">SORTEAR TEMA</button>
        <p class='timer'>{{timer.toFixed(2)}}</p>
        <button @click='onClickTimer'>{{timerLabel[timerStatus]}}</button>
    </div>
</template>

<script>

const MAX_TIME = 3

export default {

    data: () => ({

        letrasUsadas: [],
        letraIndex: 0,
        letras: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        temaIndex: 0,
        temas: [
            'Famosos',
            'Profissões',
            'Clubes de Futebol',
            'Bandas',
            'Minha sogra é...',
            'Hoje eu vou...',
            'Palavras com "RR"',
            'Pizza de...',
            'Star Wars',
            'Eletronicos',
            'Invenções Famosas',
            'Idiomas',
            'Animais',
            'Comida', 
            'Música', 
            'Marcas Famosas',
            'Filmes e Séries',
            'Nomes Masculinos',
            'Nomes Femininos', 
            'Companhia Aerea', 
            'Carros',
            'Harry Potter',
            'Cidades'
        ],
        min: 65,
        max: 90,

        timer: MAX_TIME,
        timerStatus: 0,
        timerLabel: ['INICIAR', 'PARAR'], 
        lastTime: null,

        volume: 1,
        wantedVolume: 1,


        letraTimeout: null
    }),

    mounted() {
        
        this.letraIndex = Math.floor(Math.random() * this.letras.length)
        this.temaIndex = Math.floor(Math.random() * this.temas.length)
        this.letrasUsadas = [this.letraIndex]
        this.resetColor()
        this.$nextTick(() => {

            try {
                this.$refs['audioRoda'].volume = 0.15 * this.volume
                this.$refs['audioErrou'].volume = 2
            } catch {}
        })
        setInterval(this.updateTimer, 10)
    },

    methods: {

        setErrorColor()
        {
            document.body.style.backgroundColor = '#ff0000'
        },

        resetColor() {
            document.body.style.backgroundColor = '#c5506d'
        },

        resetTimer() 
        {
            this.timerStatus = 0
            this.timer = MAX_TIME
        },

        playAudio(name) {
            try {
                this.$refs[name].play()
            } catch {}
        },

        updateTimer() {
            if (this.lastTime == null) this.lastTime = new Date()
            let time = new Date()
            let dt = (time.getTime() - this.lastTime.getTime()) / 1000.0
            this.lastTime = time

            if (this.wantedVolume > this.volume) 
            {
                this.volume += 0.01
                if (this.volume > this.wantedVolume) this.volume = this.wantedVolume
            }

            if (this.wantedVolume < this.volume) 
            {
                this.volume -= 0.01
                if (this.volume <= this.wantedVolume) {
                    this.volume = this.wantedVolume

                    this.$refs.audioRoda.pause()
                    this.$refs.audioRoda.currentTime = 0
                }
            }

            try {

                this.$refs['audioRoda'].volume = 0.15 * this.volume
            } catch {}

            if (this.timerStatus == 1) {
                this.timer -= dt
                if (this.timer <= 0) {
                    this.timerStatus = 0
                    this.timer = 0
                    this.playAudio('audioErrou')

                    for (let i = 0; i < 8; i += 2)
                    {
                        setTimeout(this.setErrorColor, i * 200)
                        setTimeout(this.resetColor,     (i + 1) * 200)
                    }
                }
            }
        },

        onClickTimer() {
            if (this.timer <= 0) {
                this.resetTimer()
            }
            this.timerStatus++
            if (this.timerStatus == 1) this.timer = MAX_TIME
            if (this.timerStatus == 2) 
            {
                this.timerStatus = 0
            }
        },

        onClickRandomizeLetter() {

            //document.styl

            this.resetTimer()

            try {
                this.wantedVolume = 1
                this.$refs.audioRoda.play()
            } catch {}

            this.randomize(Math.round(Math.random() * 80) + 10, 600,  'letraIndex', 'letras', 'letrasUsadas')
        },

        onClickRandomizeTheme() {
            this.letrasUsadas = []
            this.resetTimer()
            this.randomize(60, 180, 'temaIndex', 'temas')
        },

        randomize(speed, maxSpeed, countVar, listVar, excludeList) {
            //let rand = Math.round( Math.random() * (this.max - this.min) ) + this.min
            //this.letra = String.fromCharCode(rand)
            let max = this[listVar].length
            let num = this[countVar]

            if (countVar == 'temaIndex') {
                num = Math.floor(Math.random() * this[listVar].length)
            }
            else
            {    
                num++
            }

            if (num >= max) num = 0
            if (this[excludeList]) {
                while (this[excludeList].indexOf(num) >= 0) { 
                    num++
                    if (num >= max) num = 0
                }
            }
            this[countVar] = num
            speed += 10
            //console.log(speed, 'randomize', rand, this.letra)
            if (speed < maxSpeed) {
                clearTimeout(this.letraTimeout)
                this.letraTimeout = setTimeout(() => {
                    this.randomize(speed, maxSpeed, countVar, listVar, excludeList)
                }, speed)
            }
            else
            {
                if (excludeList) this[excludeList].push(num)

                try {
                    console.log(this.$refs)

                    this.wantedVolume = 0

                } catch {}
            }
        }
    }
    
}
</script>

<style lang="scss">

html, body {
  background-color: #c5506d;
  width: 100vw;
  margin: 0;
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: #fff;
}



button {
    padding: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
}

.timer {
    font-size: 3rem;
    margin: 1rem;
    padding: 0;
}

.letter {
    font-size: 5rem;
    margin: 0;
    font-weight: 900;
    text-transform: uppercase;
}

.letras {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        font-size: 0.8rem;
        margin: 0;
        padding: 0.15rem;
        opacity: 0.6;
    }
}

.letraUsada {
    opacity: 0.2 !important;
}

.letraPassando {
    opacity: 1 !important;
}

.themeContainer {
    position: relative;
    height: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-size: 1.5rem;
        margin: 1rem;
        font-weight: 400;
        text-transform: uppercase;
    }
}

</style>