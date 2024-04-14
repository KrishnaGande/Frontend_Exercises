console.log(this)

function exampleFunction(){
    console.log(this);
};
exampleFunction();

var obj={
    prop:'I am a property',
    method:function(){
        var nestedFn=function(){
            console.log(this.prop);
        }
        nestedFn();
    }
};
obj.method();
