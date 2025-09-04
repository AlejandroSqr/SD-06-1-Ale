function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  // En la IDE, se recomienda usar "let" en vez de "cons"
 let newMail = new Mail("Hello", "World" )
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)
