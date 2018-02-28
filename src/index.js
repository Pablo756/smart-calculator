class SmartCalculator {
    constructor(initialValue) {
        this.str = initialValue;
    }

    add(number) {
        this.str = this.str + " + " + number;
        return this;
    }

    subtract(number) {
        this.str = this.str + " - " + number;
        return this;
    }

    multiply(number) {
        this.str = this.str + " * " + number;
        return this;
    }

    devide(number) {
        this.str = this.str + " / " + number;
        return this;
    }

    pow(number) {
        this.str = this.str + " ^ " + number;
        return this;
    }

    valueOf() {
        var array = this.str.split(' ');
        for(let i = array.length - 1; i >= 0; i--){
            if(array[i] === "^"){
                let val = Math.pow(array[i-1],array[i+1]);
                array.splice(i-1, 3, val);
                i = array.length - 1;
            }
        }

        for(var i = 0; i < array.length; i++){
            if(array[i]==="*"){
                let val = array[i-1] * array[i+1];
                array.splice(i-1,3,val);
                i = 0;
            } else if (array[i] === "/") {
                let val=array[i-1] / array[i+1];
                array.splice(i-1,3,val);
                i = 0;
            }
        }

        for(var i = 0; i < array.length; i++){
            if(array[i] === "+"){
                let val = +array[i-1]+ +array[i+1];
                array.splice(i-1,3,val);
                i=0;
            } else if(array[i] === "-"){
                let val = array[i-1] - array[i+1];
                array.splice(i-1,3,val);
                i=0;
            }
        }

        return array[0];
    }
}

module.exports = SmartCalculator;