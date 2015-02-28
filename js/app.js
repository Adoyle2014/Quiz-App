$(document).ready(function() {
quizInit();	
});





function quizInit() {	

$("#progressbar h1").click(function() {	
	glStartClick = 1	

	QFadeOutIn("#questionbox > p", question1.question);
	AFadeOutIn("#answer", question1.answers);	
	$("#answerbox div").toggleClass("answer");
	glStartClick++
	});	
}



/*--------------------Fade Out/Fade In Animation--------------*/

function QFadeOutIn(qel, qtext) {	
	$(qel).animate({
        opacity: 0.0
    	}, 1000, function() {                        
        	$(qel).text(qtext).animate({
            		opacity: 1.0
        		}, 1000, function() {            
        	});
     	});
}

function AFadeOutIn(ael, atext) {	
	var answerCount = 1;

	for(var i = 0; i < atext.length; i++) {
		$(ael + answerCount).text(atext[i]);		
		answerCount++;		
	};				
	$("#answerbox p").animate({
     		opacity: 0.0
 			}, 1000, function() {  	     		           
     			$("#answerbox p").animate({
         			opacity: 1.0
     			}, 1000, function() {            
     		});
     	});		
}   


/*-------------------Question Functions---------------------------*/

function QuestionBlock(question, answers, correct) {
	this.question = question;
	this.answers = answers;
	this.correct = correct;
}

var question1 = new QuestionBlock(
	"What is the correct jQuery code to set the background color of all p elements to red?",
	[
	'$("p").manipulate("background-color","red");',
	'$("p").style("background-color","red");',
	'$("p").css("background-color","red");',
	'$("p").layout("background-color","red");'
	],
	2);

var question2 = new QuestionBlock(
	'With jQuery, look at the following selector: $("div.intro"). What does it select?',
	[
	'All div elements with class="intro"',
	'The first div element with class="intro"',
	'All div elements with id="intro"',
	'The first div element with id="intro"'
	],
	0);

var question3 = new QuestionBlock(
	"Which jQuery method is used to hide selected elements?",
	[
	"hide()",
	"hidden()",
	"visible(false)",
	"display(none)"
	],
	0);

var question4 = new QuestionBlock(
	"Which jQuery method is used to switch between adding/removing one or more classes (for CSS) from selected elements?",
	[
	"altClass()",
	"toggleClass()",
	"switchClass()",
	"switch()"
	],
	1)

var question5 = new QuestionBlock(
	"Which jQuery method is used to set one or more style properties for selected elements?",
	[
	"style()",
	"theme()",
	"html()",
	"css()"
	],
	3)






