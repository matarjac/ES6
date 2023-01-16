export const greet = (name, isFormal=false) => {
    if (isFormal){
        console.log('Good evening '+name);
    } else{console.log(`Hi, ${name}`)};
};

export const calculate = (num1, num2, operational) => {
    switch (operational){
        case "add":
            return num1+num2;
            break;
        case "subtract":
            return num1-num2;
            break;
        case "divide":
            return num1/num2; 
            break;
    }
    
}
