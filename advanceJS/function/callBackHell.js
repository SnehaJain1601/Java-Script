//* ================================
//*  Callback hell
//* ================================

//? Callback hell, also known as the Pyramid of Doom, refers to a situation in asynchronous JavaScript programming where multiple nested callbacks are used to handle asynchronous operations. This often results in code that is difficult to read, understand, and maintain due to its deeply nested structure.

const getStudentData = () => {
  setTimeout(() => {
    console.log("Hi, My name is Sneha");
    setTimeout(() => {
      console.log("Hi, My middleName is Jain");
      setTimeout(() => {
        console.log("Hi, My lastName is Kothari");
        setTimeout(() => {
          console.log("Hi, I like to code ");
          setTimeout(() => {
            console.log("Hi, I live in jaipur");
            setTimeout(() => {
              console.log("Hi, I was born in Ajmer, Rajasthan,India");
              setTimeout(() => {
                console.log("Hi, I love to gossip");
                setTimeout(() => {
                  console.log("Hi,I was a national Player in athletics ");
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

getStudentData();
