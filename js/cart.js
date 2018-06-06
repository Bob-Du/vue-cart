var vm = new Vue({
    el: '#app',

    data: {
        cartList: [],
    },

    created: function(){
        this.$http.get('./cgi-bin/goods.py',{params: {req: 1}}).then(function(res){
            this.cartList = res.body;
            // for(i in this.cartList){ 
            //     var item = this.cartList[i];
            //     item.xj = item.price * item.productNum;     
            // }
        });
    },

    computed: {
        xjList: function(){
            var xjList = [];
            for(i in this.cartList)
                xjList.push(this.cartList[i].price * this.cartList[i].productNum);
            return xjList;
        },
    },

    methods:{
        sub: function(index){
            this.cartList[index].productNum -= 1;
            if(this.cartList[index].productNum < 1)
                this.cartList[index].productNum = 1;
        }

    },
    watch: {}

}); 

