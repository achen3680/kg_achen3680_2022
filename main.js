const phonetics = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

function main() {
    //process command line inputs
    let inputs = [];
    for (let i = 2; i < process.argv.length; i++){
        inputs.push(process.argv[i]);
    }

    let answers = [];
    for (let i = 0; i < inputs.length; i++){
        //initialize a string builder
        let string = '';
        let num = inputs[i];
        //iterate through each digit of the number
        for (let j = 0; j < num.length; j++){
            //concatenate the correct phonetic spelling of the digit to the string builder
            string += phonetics[num[j]];
        }
        //push the string builder to the solutions array
        answers.push(string);
    }

    //print solutions array as a string
    console.log(answers.toString());
    
}
  
if (require.main === module) {
    main();
}