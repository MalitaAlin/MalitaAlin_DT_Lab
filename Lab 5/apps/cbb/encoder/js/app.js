var app = new Vue({
    el: '#baseband-encoder',
    data: {
        bits: [],
        encodedBits: [],
        encodedBits1: [],
        encodedBits2: [],
        encodedBits3: [],
              encodedBits4: [],
        status: '',
        numberOfBits: 14,
        validateBit: validateBit
    },
    created: function () {
        this.bits = getBitstream(this.numberOfBits);
    },
    methods: {
        encode: function(){
            this.encodedBits = getManchesterLevelEncoding(this.bits);
            this.encodedBits1 = getAMIEncoding(this.bits);
               this.encodedBits2 = getNRZ(this.bits); 
            this.encodedBits3 = getNRZM(this.bits); 
            this.encodedBits4 = get4B5BNRZI(this.bits); 
        }
    }
})

console.log('🍓🥑🍏☕🏆⚽✅🚦');