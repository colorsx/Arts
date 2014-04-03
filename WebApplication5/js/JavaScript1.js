(function () {	//自执行匿名函数
    //http://www.cnblogs.com/enein/archive/2012/12/03/2799160.html  讲解地址
    var initializing = false, fnTest = /xyz/.test(function () { xyz; }) ? /\b_super\b/ : /.*/;	//返回一个对象指向当前的原型链上来达到"继承"的目的.
    //如果我们创建一个实例(initializing == false), 正好Class有一个init方法, 这样 init 会自动执行
    //initializing == true), 将不会发生什么, init 方法不会被执行。这样做是为了避免 每次调用构造方法都要执行 init 方法
    this.Class = function () { };	//创建一个空的构造方法，this指的是window对象 使class变为全局对象
    Class.extend = function (prop) {	//加入 extends 方法和一个简单的 prop(一个对象) 参数. 它将返回 新构造方法的原型 + 父对象的原型;  
        var _super = this.prototype;	//将当前对象的原型对象存储在_super（一个对象）参数
        //this.prototype是被扩展对象的原型, 它可以访问父级方法在你需要的地方,  这个变量叫什么 _super 
        initializing = true;
        var prototype = new this();
        initializing = false;
        //实例 class 对象存储在 prototype 变量中, 但不执行 init 方法. 之前设置 initializing 为 true 所以在 new Class的时候 不会 fire init 方法. prototype变量分配后, initializing 被设置回 false, 为了下一步可以正常工作. 

        for (var name in prop) {
            prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name]) ? (function (name, fn) {
                return function () {
                    var tmp = this._super;
                    this._super = _super[name];
                    var ret = fn.apply(this, arguments);
                    this._super = tmp;
                    return ret;
                }	//return function end
                ;	//prototype end
            })(name, prop[name]) : prop[name];
        }
        function Class() {
            if (!initializing && this.create)
                this.create.apply(this, arguments);
        }
        Class.prototype = prototype;
        Class.constructor = Class;
        Class.extend = arguments.callee;
        return Class;
    };
})();

AI = Class.extend({
    treeDepth:null,
    number: 0,
    historyTable: null,
    initTime:null,
    val: null,
    userNull:-999999,
    create: function () {
        
    },
    init: function (pace) {
        this.initTime = new Date().getTime();
        this.treeDepth = 4;
        this.historyTable = new Array();
        this.val = this.getAlphaBeta();
    },
    getAlphaBeta: function (-9999,) {
    },

});