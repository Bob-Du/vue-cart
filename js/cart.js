var vm = new Vue({
    el: '#app',

    data: {
        cartList: [],
        allChecked: true,
        total: 0,
    },

    created: function(){
        this.$http.get('./cgi-bin/goods.py',{params: {req: 1}}).then(function(res){
            this.cartList = res.body;
            for(i in this.cartList){ 
                var item = this.cartList[i];
                item.subtotal = item.price * item.productNum;
                item.checked = true;     
            }
            this.cal();
        });
    },

    methods:{
        check: function(index){
            this.cartList[index].checked = !this.cartList[index].checked;
            this.allChecked = true;
            for(i in this.cartList){
                this.allChecked = this.allChecked && this.cartList[i].checked;
            }
            this.cal();
        },

        subNum: function(index){
            this.cartList[index].productNum -= 1;
            if(this.cartList[index].productNum < 1)
                this.cartList[index].productNum = 1;
            this.cal();
        },

        addNum: function(index){
            this.cartList[index].productNum += 1;
            this.cal();
        },

        del: function(index){
            this.cartList.splice(index, 1);
        },

        cal: function(){
            this.total = 0;
            for(i in this.cartList){
                item = this.cartList[i];
                item.subtotal = item.subtotal = item.price * item.productNum * item.checked;
                Vue.set(this.cartList, i, item);  // 手动触发更新视图
                this.total += item.subtotal;
            }
        },

        allCheck: function(){
            this.allChecked = !this.allChecked;
            if(this.allChecked){
                for(i in this.cartList){
                    this.cartList[i].checked = true;
                }
            }
            else{
                for(i in this.cartList){
                    this.cartList[i].checked = false;
                }
            }
            this.cal();
        },
    },
}); 

