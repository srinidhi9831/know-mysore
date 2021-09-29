var readlinesync = require("readline-sync");
var score=0;
var userName = readlinesync.question("what's your name\n");
console.log("welcome "+userName);
console.log("\n welcome to my quiz\n lets see what do you know about heritage city MYSURU\n");

var questions=[{
  question:" \nwhich hill is located in mysore \n a.chamundi hill \n b.nandhi hill \n c.kunthi betta\n",
  answer:"a"
},
{
  question:" which festival is mysore famous for ?\na.deepavali \n b.dasara \n c.ramzan \n",
  answer:"b" },{
    question:"which is not located in mysore\n a.kukrahalli kere \n b.karanji kere \n c.tannur kere\n",
    answer:"c"
  },{
    question:"which dam is located in mysore\n a.harangi\n b.krs \n c.badra dam\n",
    answer:"b"
  }
  ];

for (var i=0;i<questions.length;i++)
{
  var ans= readlinesync.question(questions[i].question);
  if(questions[i].answer===ans){
    console.log("you are right");
    score=score+1;
  }
  else{
    console.log("wrong!");
  }

  console.log(" current score : ",score);
  console.log("------------------------");

}
