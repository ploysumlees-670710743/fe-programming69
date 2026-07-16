const getGrade = (score = 0) => {
    if (score >= 80){ 
        return "A";
    }
    else if (score >= 70){
       return "B";
    }
    else if (score >= 60){
        return "C";
    }
    else if (score >= 50){
        return "D";
    }
    else{
       return "F";
    }
};


console.log(getGrade(85));
console.log(getGrade(72));
console.log(getGrade(44));
console.log(getGrade());
