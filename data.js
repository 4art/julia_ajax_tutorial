exports.user = new userData();
exports.greeting = [
       {
           name: "Hello World!"
       },
       {
           name: "Hallo Welt!"
       },
       {
           name: "Привет Мир!"
       }
   ];
function userData(){
    this.data = [
        {
            name: "Julia",
            surname: "Firsova",
            country: "Germany"
        }
    ];

    this.getAll = function(){
        return this.data;
    };

    this.add = function(obj){
        this.data.push(obj);
        return obj;
    };

    this.getOne = function (id){
        return this.data[id - 1];
    };
}