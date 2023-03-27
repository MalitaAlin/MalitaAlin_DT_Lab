var app = new Vue({
    el: '#app',
    data: {
        users: [],
        usersService: null
    },
    created: function () {
        this.usersService = users();
        this.usersService.get().then(response => (this.users = response.data));
    },
    methods: {
        deleted: function(index){
            this.usersService.remove(index).then(response => (this.users = response.data));
            location.reload();
        },

        modify: function(index,name,city){
             console.log(index,name, city,"info");
            this.usersService.modify(index,  {name, city} ).then(response => (this.users = response.data));
            location.reload();
       },

        add: function(name,city){
            
            this.usersService.add({ name, city }).then(response => (this.users = response.data));
            location.reload();
        },

       modifyToggle:function() {
        var x = document.getElementById("modifyDiv");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
       // console.log("toggle");
      }
    }
})

