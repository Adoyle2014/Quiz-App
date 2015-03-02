$(document).ready(function() {

javascriptQuiz();

	
});	

function javascriptQuiz() {
/*Global Variables*/

	

	var question1 = new QuestionBlock(
		"What is the correct jQuery code to set the background color of all p elements to red?",
		[
		'$("p").manipulate("background-color","red");',
		'$("p").style("background-color","red");',
		'$("p").css("background-color","red");',
		'$("p").layout("background-color","red");'
		],
		1);

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

	glQuestionBlocks = [question1, question2, question3, question4, question5];
	glCurrentQuestionIndex = 0;
	glUserAnswer = "";
	glFeedbackCircles = [$("#circle1"), $("#circle2"), $("#circle3"), $("#circle4"), $("#circle5"),];
	

/*Called Functions*/
	quizInit();	


	





function AnswerLogic(question, answer) {  /*called by click event*/
		question = ("answer" + question)	;
		console.log(question + " - " + answer);
	if (question === answer) {
		AddUserFeedback(glFeedbackCircles[glCurrentQuestionIndex], "green");
		glCurrentQuestionIndex++;
		QFadeOutIn("#questionbox > p", glQuestionBlocks[glCurrentQuestionIndex].question);
		AFadeOutIn("#answer", glQuestionBlocks[glCurrentQuestionIndex].answers);

		
	}else{
		AddUserFeedback(glFeedbackCircles[glCurrentQuestionIndex], "red");
		glCurrentQuestionIndex++;
		QFadeOutIn("#questionbox > p", glQuestionBlocks[glCurrentQuestionIndex].question);
		AFadeOutIn("#answer", glQuestionBlocks[glCurrentQuestionIndex].answers);
	}
}



function AddUserFeedback(circleIndex, color) {
	circleIndex.addClass('userfeedback' + color).animate({
	        opacity: 1.0
	    	}, 1000, function() {
			
		});
}

function RemoveUserFeedback() {
	for(var i = 0; i < glFeedbackCircles.length; i++) {
		glFeedbackCircles[i].removeClass('userfeedbackred');
		glFeedbackCircles[i].removeClass('userfeedbackgreen');
	}
}









/*----------------------COMPLETE--------------------------------------------------------------------------*/

/*-------------------Initialization/Reset Function------------------*/
	function quizInit() {	
	glStartClick = false

	/*set up click events*/
	$("#answerbox div").bind('click', function(event) {
		AnswerLogic(glQuestionBlocks[glCurrentQuestionIndex].correct, event.target.id);
		
		
	});

	/*if reset function else initialize function*/
	$("#progressbar h1").click(function() {	
		if (glStartClick === true) {
			alert("Do you want to restart the quiz?");
			QFadeOutIn("#questionbox > p", glQuestionBlocks[glCurrentQuestionIndex].question);
			AFadeOutIn("#answer", glQuestionBlocks[glCurrentQuestionIndex].answers);
			RemoveUserFeedback();
		}else{
			QFadeOutIn("#questionbox > p", glQuestionBlocks[glCurrentQuestionIndex].question);
			AFadeOutIn("#answer", glQuestionBlocks[glCurrentQuestionIndex].answers);	
			$("#answerbox div").toggleClass("answer");
			glStartClick = true
			}
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
		var answerCount = 0;

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


/*-------------------Question Objects---------------------------*/

	function QuestionBlock(question, answers, correct) {
		this.question = question;
		this.answers = answers;
		this.correct = correct;
		
		}
	

	
}





