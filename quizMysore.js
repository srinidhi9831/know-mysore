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
    question:"which famous dam is located near mysore\n a.harangi\n b.krs \n c.badra dam\n",
    answer:"b"
  },
  {
    question:"In which year the Mysore state was renamed as karnataka\n a.1968 \n b.1971 \n c.1973 \n d.1975 \n",
    answer:"c"
  },
  {
   question:"which zoo is present in mysore \n a.Nehru zoological garden\n b.Sri Chamarajendra Zoological Garden \n c.sri krishnarajendra zoological garden\n",
   answer:"b"
  },
  {
    question:"who is the current raja of mysore\n a.Yaduveer Krishnadatta Chamaraja Wadiyar \n b.Jayachamrajendra Wadiyar \n c.Srikantadatta Narasimharaja Wadiyar \n",
    answer:"a"
  },
  {
    question:"what is the name of biggest walk through aviary in mysore \n a.shuka vana \n b.karanji lake \n c.kukrahali lake\n",
    answer:"b"
  },
  {
    question:"which sweet is named after mysore\n a.mysore-pak \n b.mysore-jaamun \n c.mysore-jalebi \n",
    answer:"a"
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

console.log(`Thank you for participating in the quiz\n
  your score:${score}`);
