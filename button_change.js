

window.onload=function(){
	//var alpha= ['a','b','c','d','e','f','g','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	//var i;
//PHYSICS COURSES COMPLETE
	var physicsDone=document.querySelector('#CheckPhysics');
	var physicsCoursesList=document.getElementsByClassName('physics');
//UPPERDIV CHECK
	var flipUPPERDIV=document.querySelector('#upperDiv');
	var flipUDCheck=document.querySelector('#check2');
	
		flipUPPERDIV.onclick = function(){

			toggleStyles(flipUDCheck,'visibility','visible');

		};
//Class Description toggle	-----------------------------------------------
	var flipCDT = document.querySelector('#classDescriptionToggle');	//
	var flipCDTCheck = document.querySelector('#check3');				//
	flipCDT.onclick = function(){										//
		toggleStyles(flipCDTCheck,'visibility','visible');				//
		toggleCDTVisibility(flipCDTCheck);								//
	};																	//
//-------------------------------------------------------------------------
//Legend toggle-----------------------------------------------------------
	var flipLegend = document.querySelector('#legendToggle');	//
	var legendCheck= document.querySelector('#check4');
	flipLegend.onclick=function(){
		toggleStyles(legendCheck,'visibility','visible');
		toggleLegendVisibility(legendCheck);


	};

//----------------------------------------------------------------------------
	var flipColors;
	//var x;
	//for(i=0;i<26;i++){

		flipColors=document.querySelector('#'+'a');

		var clickedColor='linear-gradient(0deg,#05D86F,#93F8FF)';
	
		flipColors.onclick = function(){
			toggleStyles(flipColors,'background',clickedColor);

			//where CS010A is parent
			toggleGlow(flipColors,flipB);
			toggleGlowTwo(flipColors,flipAC,flipY);
			toggleGlow(flipColors,flipP);
			toggleGlowThree(flipColors,flipD,flipAE,flipF);
			oneAndTwoOr(flipAC,flipColors,flipAD,flipD);
		};

//CS010B
	var flipB=document.querySelector('#b');
	flipB.onclick = function(){
		toggleStyles(flipB,'background',clickedColor);

		//where CS010B is child
		toggleGlow(flipColors,flipB);

		//where CS010B is parent
		toggleGlow(flipB,flipC);
		toggleGlowTwo(flipB,flipR,flipS);
	};

//CS010C
	var flipC=document.querySelector('#c');
	flipC.onclick = function(){
		toggleStyles(flipC,'background',clickedColor);

		//where CS010C is child
		toggleGlow(flipB,flipC);

		//where CS010C is parent
		toggleGlow(flipC,flipE);
		//toggleGlowTwo(flipC,flipD,flipF);
		toggleGlowThree(flipC,flipF,flipAE,flipI);
		toggleGlowThree(flipC,flipF,flipAE,flipJ);
		//toggleGlow(flipC,flipF);
	};

//CS011
	var flipD=document.querySelector('#d');
	flipD.onclick = function(){
		toggleStyles(flipD,'background',clickedColor);

		//where CS011 is child
		oneAndTwoOr(flipAC,flipColors,flipAD,flipD);
		//where CS011 is parent
		toggleGlowThree(flipColors,flipD,flipAE,flipF);

	};
//CS100
	var flipE=document.querySelector('#e');
	flipE.onclick = function(){
		toggleStyles(flipE,'background',clickedColor);
		//where CS100 is child
		toggleGlow(flipC,flipE);

		//where CS100 is parent
		toggleGlowThree(flipP,flipE,flipF,flipT);
		toggleGlowThree(flipE,flipJ,flipP,flipK);
		toggleGlow(flipE,flipO);
		toggleGlowThree(flipE,flipF,flipP,flipM);
		toggleGlowTwo(flipE,flipF,flipN);
		toggleGlowThree(flipAQ,flipE,flipK,flipL);
	};
//CS111
	var flipF=document.querySelector('#f');
	flipF.onclick = function(){
		toggleStyles(flipF,'background',clickedColor);
		//where CS111 is child
		toggleGlowThree(flipColors,flipD,flipAE,flipF);
		//where CS111 is parent
		toggleGlowThree(flipP,flipE,flipF,flipT);
		toggleGlowThree(flipC,flipF,flipAE,flipI);
		toggleGlowThree(flipC,flipF,flipAE,flipJ);
		toggleGlowThree(flipE,flipF,flipP,flipM);
		toggleGlowTwo(flipE,flipF,flipN);

	};

//ENGR001
	var flipG=document.querySelector('#g');
	flipG.onclick = function(){
		toggleStyles(flipG,'background',clickedColor);
	};
//ENGR101
	var flipH=document.querySelector('#h');
	flipH.onclick = function(){
		
			toggleStyles(flipH,'background',clickedColor);

		
	};
//CS141
	var flipI=document.querySelector('#i');
	flipI.onclick = function(){
		toggleStyles(flipI,'background',clickedColor);
		//where CS141 is child
		toggleGlowThree(flipC,flipF,flipAE,flipI);


	};

//ELECTIVES
//CS150
	var flipJ=document.querySelector('#j');
	flipJ.onclick = function(){
		toggleStyles(flipJ,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where CS150 is child
		toggleGlowThree(flipC,flipF,flipAE,flipJ);
		//where CS150 is parent
		toggleGlowThree(flipE,flipJ,flipP,flipK);
	};
//CS152
	var flipK=document.querySelector('#k');
	flipK.onclick = function(){
		toggleStyles(flipK,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where CS152 is child
		toggleGlowThree(flipE,flipJ,flipP,flipK);
		toggleGlowThree(flipAQ,flipE,flipK,flipL);

	};
//CS179E
	var flipL=document.querySelector('#l');
	flipL.onclick = function(){
		toggleStyles(flipL,'background','linear-gradient(0deg,#05D86F,#93F8FF)');
		toggleGlowThree(flipAQ,flipE,flipK,flipL);
	};
//CS160
	var flipM=document.querySelector('#m');
	flipM.onclick = function(){
		toggleStyles(flipM,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where CS160 is a child
		toggleGlowThree(flipE,flipF,flipP,flipM);

	};
//CS170
	var flipN=document.querySelector('#n');
	flipN.onclick = function(){
		toggleStyles(flipN,'background','linear-gradient(0deg,#05D86F,#93F8FF)');
		//where CS170 is a child
		toggleGlowTwo(flipE,flipF,flipN);
	};
//CS175
	var flipO=document.querySelector('#o');
	flipO.onclick = function(){
		toggleStyles(flipO,'background','linear-gradient(0deg,#05D86F,#93F8FF)');
		toggleGlow(flipE,flipO);
	};

//ARCHITECTURE
//CS061
	var flipP=document.querySelector('#p');
	flipP.onclick = function(){
		toggleStyles(flipP,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where CS061 is child
		toggleGlow(flipColors,flipP);

		//where CS061 is parent
		toggleGlow(flipP,flipQ);
		toggleGlowThree(flipP,flipE,flipF,flipT);
		toggleGlowThree(flipE,flipJ,flipP,flipK);
		toggleGlowThree(flipE,flipF,flipP,flipM);
	};
//CS120A
	var flipQ=document.querySelector('#q');
	flipQ.onclick = function(){
		toggleStyles(flipQ,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where CS120A is child
		toggleGlow(flipP,flipQ);

		//where CS120A is parent
		toggleGlow(flipQ,flipR);
		toggleGlow(flipQ,flipU);
		toggleGlow(flipQ,flipV);
	};
//CS120B
	var flipR=document.querySelector('#r');
	flipR.onclick = function(){
		toggleStyles(flipR,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where CS120B is child
		toggleGlow(flipQ,flipR);

		//where CS120B is parent
		toggleGlowTwo(flipB,flipR,flipS);
	};
//CS122A
	var flipS=document.querySelector('#s');
	flipS.onclick = function(){
		toggleStyles(flipS,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where CS122A is child
		toggleGlowTwo(flipB,flipR,flipS);


	};
//CS153
	var flipT=document.querySelector('#t');
	flipT.onclick = function(){
		toggleStyles(flipT,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where CS153 is child (61,100,111)
		toggleGlowThree(flipP,flipE,flipF,flipT);


	};
//CS161
	var flipU=document.querySelector('#u');
	flipU.onclick = function(){
		toggleStyles(flipU,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where CS161 is child
		toggleGlow(flipQ,flipU);
	};
//CS168
	var flipV=document.querySelector('#v');
	flipV.onclick = function(){
		toggleStyles(flipV,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where CS168 is child
		toggleGlow(flipQ,flipV);
	};
//EE
//EE001A
	var flipW=document.querySelector('#w');
	flipW.onclick = function(){
		toggleStyles(flipW,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where EE001A is child
		toggleGlowTwo(flipAG,flipAJ,flipW);

		//where EE001A is parent
		toggleGlow(flipW,flipX);
		toggleGlow(flipW,flipZ);
	};
//EE001B
	var flipX=document.querySelector('#x');
	flipX.onclick = function(){
		toggleStyles(flipX,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where EE001B is child
		toggleGlow(flipW,flipX);

	};
//EE020
	var flipY=document.querySelector('#y');
	flipY.onclick = function(){
		toggleStyles(flipY,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where EE020 is child
		toggleGlowTwo(flipColors,flipAC,flipY);

		//where EE020 is parent
		toggleGlowTwo(flipY,flipAG,flipAA);
	};
//EE100A
	var flipZ=document.querySelector('#z');
	flipZ.onclick = function(){
		toggleStyles(flipZ,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where EE100A is child
		toggleGlow(flipW,flipZ);

	};
//EE111
	var flipAA=document.querySelector('#aa');
	flipAA.onclick = function(){
		toggleStyles(flipAA,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where EE111 is child
		toggleGlowTwo(flipY,flipAG,flipAA);

		//where EE111 is parent
		toggleGlow(flipAA,flipAB);
	};
//EE114
	var flipAB=document.querySelector('#ab');
	flipAB.onclick = function(){
		toggleStyles(flipAB,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where EE114 is child
		toggleGlow(flipAA,flipAB);
	};

//MATH
//MATH009A
	var flipAC=document.querySelector('#ac');
	flipAC.onclick = function(){
		toggleStyles(flipAC,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where MATH009A is parent
		toggleGlow(flipAC,flipAD);
		toggleGlowTwo(flipColors,flipAC,flipY);
		oneAndTwoOr(flipAC,flipColors,flipAD,flipD);
	};
//MATH009B
	var flipAD=document.querySelector('#ad');
	flipAD.onclick = function(){
		toggleStyles(flipAD,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where MATH009B is child
		toggleGlow(flipAC,flipAD);

		//where MATH009B is parent
		toggleGlow(flipAD,flipAE);
		toggleGlow(flipAD,flipAF);
		toggleGlow(flipAD,flipAG);
		toggleGlow(flipAD,flipAH);
		oneAndTwoOr(flipAC,flipColors,flipAD,flipD);
	};
//MATH009C
	var flipAE=document.querySelector('#ae');
	flipAE.onclick = function(){
		toggleStyles(flipAE,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where MATH009C is child
		toggleGlow(flipAD,flipAE);

		//where MATH009C is parent
		//toggleGlow(flipAE,flipAF);				//MATH010A
		toggleGlowTwo(flipAH,flipAE,flipAI);	//PHYS040B
		toggleGlowTwo(flipAE,flipAI,flipAJ);	//PHYS040C
		toggleGlowThree(flipC,flipF,flipAE,flipI);
		toggleGlowThree(flipC,flipF,flipAE,flipJ);
		toggleGlowThree(flipColors,flipD,flipAE,flipF);	//CS111

	};
//MATH010A
	var flipAF=document.querySelector('#af');
	flipAF.onclick = function(){
		toggleStyles(flipAF,'background','linear-gradient(0deg,#05D86F,#93F8FF)');
		//where MATH010A is child
		toggleGlow(flipAD,flipAF);

	};
//MATH046
	var flipAG=document.querySelector('#ag');
	flipAG.onclick = function(){
		toggleStyles(flipAG,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where MATH046 is child
		toggleGlow(flipAD,flipAG);

		//where MATH046 is parent
		toggleGlowTwo(flipAG,flipAJ,flipW);
		toggleGlowTwo(flipY,flipAG,flipAA);
	};
//PHYSICS
//PHYS040A
	var flipAH=document.querySelector('#ah');
	flipAH.onclick = function(){
		toggleStyles(flipAH,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where PHYS040A is child
		toggleGlow(flipAD,flipAH);

		//where PHYS040A is parent
		toggleGlowTwo(flipAH,flipAE,flipAI);
		sectionComplete(physicsDone,flipAH,flipAI,flipAJ);

	};
//PHYS040B
	var flipAI=document.querySelector('#ai');
	flipAI.onclick = function(){
		toggleStyles(flipAI,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where PHYS040B is child
		toggleGlowTwo(flipAH,flipAE,flipAI);

		//where PHYS040B is parent
		toggleGlowTwo(flipAE,flipAI,flipAJ);
		sectionComplete(physicsDone,flipAH,flipAI,flipAJ);
	};
//PHYS040C
	var flipAJ=document.querySelector('#aj');
	flipAJ.onclick = function(){
		toggleStyles(flipAJ,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where PHYS040C is child
		toggleGlowTwo(flipAE,flipAI,flipAJ);

		//where PHYS040C is parent
		toggleGlowTwo(flipAG,flipAJ,flipW);
		//TEST flipAK.style['width']='40px';

		sectionComplete(physicsDone,flipAH,flipAI,flipAJ);//10:36pm 12/26 This feels a little too hard-coded. Want to make more abstract
			//need to find out how to access all buttons but not descriptions in a class.
	};


//BREADTH
//ENGL001A
	var flipAK=document.querySelector('#ak');
	flipAK.onclick = function(){
		toggleStyles(flipAK,'background','linear-gradient(0deg,#05D86F,#93F8FF)');
		
		toggleGlow(flipAK,flipAL);
	};
	var flipAL=document.querySelector('#al');
	flipAL.onclick = function(){
		toggleStyles(flipAL,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

		//where ENGL001B is child
		toggleGlow(flipAK,flipAL);
		//where ENGL001B is parent
		toggleGlow(flipAL,flipAQ);
	};

	var flipAM=document.querySelector('#am');
	flipAM.onclick = function(){
		toggleStyles(flipAM,'background','linear-gradient(0deg,#05D86F,#93F8FF)');
	};var flipAN=document.querySelector('#an');
	flipAN.onclick = function(){
		toggleStyles(flipAN,'background','linear-gradient(0deg,#05D86F,#93F8FF)');
	};var flipAO=document.querySelector('#ao');
	flipAO.onclick = function(){
		toggleStyles(flipAO,'background','linear-gradient(0deg,#05D86F,#93F8FF)');
	};
	var flipAP=document.querySelector('#ap');
	flipAP.onclick = function(){
		toggleStyles(flipAP,'background','linear-gradient(0deg,#05D86F,#93F8FF)');
	};
//ENGR180W
	var flipAQ=document.querySelector('#aq');
	flipAQ.onclick = function(){
			toggleStyles(flipAQ,'background','linear-gradient(0deg,#05D86F,#93F8FF)');

			//where ENGR180W is child
			toggleGlow(flipAL,flipAQ);
			//where ENGR180W is parent
			toggleGlowThree(flipAQ,flipE,flipK,flipL);
		
	};var flipAR=document.querySelector('#ar');
	flipAR.onclick = function(){
		toggleStyles(flipAR,'background','linear-gradient(0deg,#05D86F,#93F8FF)');
	};
	var flipAS=document.querySelector('#as');
	flipAS.onclick = function(){
		toggleStyles(flipAS,'background','linear-gradient(0deg,#05D86F,#93F8FF)');
	};var flipAT=document.querySelector('#at');
	flipAT.onclick = function(){
		toggleStyles(flipAT,'background','linear-gradient(0deg,#05D86F,#93F8FF)');
	};
	var flipAU=document.querySelector('#au');
	flipAU.onclick = function(){
		toggleStyles(flipAU,'background','linear-gradient(0deg,#05D86F,#93F8FF)');
	};/*var flipAV=document.querySelector('#av');
	flipAV.onclick = function(){
		toggleStyles(flipAV,'background','linear-gradient(0deg,#05D86F,#93F8FF)');
	};*/

	//}



}

/*
var flip=document.querySelector('button');
$(document).ready(function(){
	var background='linear-gradient(0deg,#A8A8A8,#FFFFFF)';
	var cur_color="";

	$('button').click(function(){
		
		cur_color=$(this).attr('linear-gradient(0deg,#05D86F,#93F8FF)');
		if(cur_color!=background){
			background=cur_color;
			flip.style['background']=background;
		}
		else{
			flip.style['background']='linear-gradient(0deg,#A8A8A8,#FFFFFF)';
		}

	})

})
*/

function toggleStyles(element, cssProp, color){
	if(element.style[cssProp]==""){
		element.style[cssProp]=color;
	}
	else{
		element.style[cssProp]="";
	}
}

//SUPER POWERFUL STUFF RIGHT HERE
//Depending on if Class Description is ON or OFF, message center displays descriptions or not
function toggleCDTVisibility(checkmark){
	var visibilityToggle=document.getElementsByClassName('Descriptions');
	var messageCenterToggle=document.getElementsByClassName('MessageCenter');
	var i;
	if(checkmark.style['visibility']=='visible'){
		messageCenterToggle[0].style['visibility']='visible';
		for(i=0;i<visibilityToggle.length;i++){
			visibilityToggle[i].style['visibility']='visible';

		}

		
	}
	else{
		messageCenterToggle[0].style['visibility']='hidden';
		for(i=0;i<visibilityToggle.length;i++){
			visibilityToggle[i].style['visibility']='hidden';
		}
	}
}
//lots of bugs here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function toggleLegendVisibility(checkmark){
	var visibilityToggle=document.getElementsByClassName('Legend');
	var i;
	if(checkmark.style['visibility']=='visible'){
		//messageCenterToggle[0].style['visibility']='visible';
		for(i=0;i<visibilityToggle.length;i++){
			visibilityToggle[i].style['visibility']='visible';

		}

		
	}
	else{
		//messageCenterToggle[0].style['visibility']='hidden';
		for(i=0;i<visibilityToggle.length;i++){
			visibilityToggle[i].style['visibility']='hidden';
		}
	}
}

function toggleGlow(parent,child){	//For classes with 1 pre-req
	if(child.style['background']!=""){
		child.style['box-shadow']='none';
		//child.style['font-weight']='normal';
	}
	if(child.style['background']==""){
		if(parent.style['background']!=""){
			child.style['box-shadow']= '0 0 15px 2px rgba(0,0,200,.8)';
			//child.style['font-weight']='bold';
		}
	}
	if(parent.style['background']==""){
		child.style['box-shadow']='none';
		//child.style['font-weight']='normal';
	}
}

function toggleGlowTwo(parent1,parent2,child){	//For classes with 2 pre-reqs
	if(child.style['background']!=""){
		child.style['box-shadow']='none';
		//child.style['font-weight']='normal';
	}
	if(child.style['background']==""){
		if(parent1.style['background']!="" && parent2.style['background']!=""){
			child.style['box-shadow']= '0 0 15px 2px rgba(0,0,200,.8)';
			//child.style['font-weight']='bold';
		}
	}
	if(parent1.style['background']=="" || parent2.style['background']==""){
		child.style['box-shadow']='none';
		//child.style['font-weight']='normal';
	}
}
function toggleGlowThree(parent1,parent2,parent3,child){
	if(child.style['background']!=""){
		child.style['box-shadow']='none';
		//child.style['font-weight']='normal';
	}
	if(child.style['background']==""){
		if(parent1.style['background']!="" && parent2.style['background']!="" && parent3.style['background']!=""){
			child.style['box-shadow']= '0 0 15px 2px rgba(0,0,200,.8)';
			//child.style['font-weight']='bold';
		}
	}
	if(parent1.style['background']=="" || parent2.style['background']=="" || parent3.style['background']==""){
		child.style['box-shadow']='none';
		//child.style['font-weight']='normal';

	}
}

function oneAndTwoOr(parentMand,parentO1,parentO2,child){

	if(child.style['background']!=""){
		child.style['box-shadow']='none';
	}
	var twoOr=parentO1.style['background']!="" ||parentO2.style['background']!="";
	if(child.style['background']==""){
		if(parentMand.style['background']!="" && twoOr){
			child.style['box-shadow']= '0 0 15px 2px rgba(0,0,200,.8)';
		}
		if(parentMand.style['background']=="" || !twoOr){
			child.style['box-shadow']='none';
		}
	}
}//Tested @6:45 12/25/2020, works great with CS011.

function sectionComplete(checkmark,courseA,courseB,courseC){
	if(courseA.style['background']!=''&&courseB.style['background']!=''&&courseC.style['background']!=''){
		checkmark.style['visibility']='visible';
	}
	else{
		checkmark.style['visibility']='hidden';
	}
}