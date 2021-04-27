const phonetics = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

function main() {
    //process command line inputs
    let inputs = [];
    for (let i = 2; i < process.argv.length; i++){
        inputs.push(process.argv[i]);
    }

    let answers = [];
    for (let i = 0; i < inputs.length; i++){
        let string = '';
        let num = inputs[i];
        for (let j = 0; j < num.length; j++){
            string += phonetics[num[j]];
        }
        answers.push(string);
    }
    console.log(answers.toString());
    
}
  
if (require.main === module) {
    main();
}