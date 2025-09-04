function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  
 
const newMail = new Mail(process.argv[2],process.argv[3] )

// Type your code above this line!
//Aqui ya no es por consola, aqui tenemos que modificar los parametros, process "2" siendo "hello" y Process 3 "world"
console.log(newMail.subject + ": " + newMail.message)
