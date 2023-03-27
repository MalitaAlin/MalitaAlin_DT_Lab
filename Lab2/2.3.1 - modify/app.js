var app = new Vue({
    el: '#app',
    data: {
        message: '',
        newoutput:''
        //output:false
    },
    methods: {
        process: function () {
            if (this.message == "123") {
                //   this.output = true;
                //  }
                //  else 
                // this.output = false; 

                this.newoutput = '<p>Message is equal to ' + this.message + '</p>';
            } else this.newoutput = '';
                /*

                */
        }
    }
    
})