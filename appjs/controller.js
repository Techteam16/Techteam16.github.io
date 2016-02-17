var myApp = angular.module("myAppControllers",[]);
myApp.controller('navController',['$scope','$http','$timeout',function($scope,$http,$timeout){
$scope.updates = [];

$scope.nav = function(clicked)
{
	$(".navelem").removeClass("navselected");
    $("#"+clicked).find(".navelem").addClass("navselected");
	if(clicked == 'event' || clicked == 'wkshop')
	{
		$(".header").fadeOut(0).finish();
		$("."+clicked+"header").fadeIn(0).finish();
	}
	if(clicked == 'gl' || clicked == 'karnival')
	{
		$(".header").fadeOut(0).finish();
		

	}
	
};


}]);

/*EVENTS*/
myApp.controller('eventsController',['$scope','$http','$location','$timeout',function($scope,$http,$location,$timeout){
$scope.events = [];
$scope.tabs = [];
$scope.eventName;
var path = $location.path();
path = '/'+path.substr(8,path.length);
$scope.category = path.substr(1,path.length).toUpperCase()+" EVENTS";
$http({method: 'GET', url: 'jsons/categories'+path+'.json'}).success(function(data)
				   {
				    jsonstr = data['category']['events']; // response data 
				   	for(i=0;i<jsonstr.length;i++)
				   		{
				   			$scope.events[i] = jsonstr[i];
				   			console.log($scope.events[i]);
				   		}
				   });
$scope.getEvent = function(eventname){
	// $(".header").hide();
	$(".navbar").hide();
	$(".category").hide();
	$(".imagebox").each(function(){
      var elem = $(this);
      setTimeout(function(){
        $(elem).animate({'opacity':"0",'margin-left':"30px"},70);
      },i*50+50);
    });
	$scope.eventName = eventname;
	eventname = eventname.toLowerCase().replace(/[ ']/g,'-').replace('!','-');

function init(){
	$(".tabContent li").hide();
	$(".tabContent").find("li.0").show();
	
}
	$http({method: 'GET', url: 'jsons/events/'+eventname+'.json'}).success(function(data)
				   {
				    jsonstr = data['event']['tabs']; // response data 
				   	for(i=0;i<jsonstr.length;i++)
				   		{
			   			$scope.tabs[i] = jsonstr[i];
				   			$scope.tabs[i]['id']=i;
				   		}
					$(".left").animate({'marginLeft':"15px"},500,'easeOutSine');
				   	$timeout(init, 10);
				   	// $('html,body').animate({'scrollTop':"400px"},1000);
					// $scope.$apply();
});
}
$scope.showTab = function(tabtitle)
{
	$(".tabContent").show();
	$(".tabContent").find("li").hide();
	$(".tabContent").find("."+tabtitle).show();
};
}]);
/*WORKSHOPS*/
myApp.controller('wkshopsController',['$scope','$http','$location','$timeout',function($scope,$http,$location,$timeout){
$scope.events = [];
$scope.tabs = [];
$scope.eventName;
var path = $location.path();
path = '/'+path.substr(9,path.length);
$scope.category = path.substr(1,path.length).toUpperCase()+" WORKSHOPS";
$http({method: 'GET', url: 'jsons/workshopcategories'+path+'.json'}).success(function(data)
				   {
				    jsonstr = data['workshopcategory']['workshops']; // response data 
				   	for(i=0;i<jsonstr.length;i++)
				   		{
				   			$scope.events[i] = jsonstr[i];
				   		}
				   });
$scope.getEvent = function(eventname){
	// $(".header").hide();
	$(".navbar").hide();
	$(".category").hide();
	$(".imagebox").each(function(){
      var elem = $(this);
      setTimeout(function(){
        $(elem).animate({'opacity':"0",'margin-left':"30px"},70);
      },i*50+50);
    });
	$scope.eventName = eventname;
	eventname = eventname.toLowerCase().replace(/[ ']/g,'-').replace('!','');
function init(){
	$(".tabContent li").hide();
	$(".tabContent").find("li.0").show();
}
	$http({method: 'GET', url: 'jsons/workshops/'+eventname+'.json'}).success(function(data)
				   {
				    jsonstr = data['workshop']['tabs']; // response data 
				   	for(i=0;i<jsonstr.length;i++)
				   		{
			   			$scope.tabs[i] = jsonstr[i];
				   			$scope.tabs[i]['id']=i;
				   		}
					$(".left").animate({'marginLeft':"0px"},500,'easeOutSine');
				   	$timeout(init, 10);
				   	// $('html,body').animate({'scrollTop':"400px"},1000);
					// $scope.$apply();
});
}
$scope.showTab = function(tabtitle)
{
	$(".tabContent").show();
	$(".tabContent").find("li").hide();
	$(".tabContent").find("."+tabtitle).show();
};
}]);
// guestlectures
myApp.controller('glController',['$scope','$http','$timeout',function($scope,$http,$timeout){
$scope.nodes =[];
function init(){
	setTimeout(function(){
	$(".glpage1").removeClass("glpageanim1");},500);
    $(".glpage2").removeClass("glpageanim2");
	$(".glContainer #1").addClass("glBigBorder");
	var id = 0; 
	$scope.clickedName = $scope.nodes[id]['title'];
	$scope.date = $scope.nodes[id]['date'];
	$scope.Time = $scope.nodes[id]['time'];
	$scope.venue = $scope.nodes[id]['venue'];
	$scope.desc = $scope.nodes[id]['desc'];
	$scope.about = $scope.nodes[id]['about'];
}
	$http({method: 'GET', url: 'jsons/gls.json'}).success(function(data)
				   {	
						var jsonstr = data['gls'];
						for(var i=0; i<jsonstr.length;i++)
							{
							$scope.nodes[i] = jsonstr[i];
							$scope.nodes[i]['id'] = i+1;
							switch($scope.nodes[i]['title'])
							{
								case 'Angelo Vermeulen': $scope.nodes[i]['avatar'] = 'av.jpg'; break;
								case 'Abhas Mitra ': $scope.nodes[i]['avatar'] = 'am.jpg'; break;
								case 'Dr. Seshagiri Rao': $scope.nodes[i]['avatar'] = 'sr.jpeg'; break;
								case 'Chiragh Dewan & Himanshu Vaishnav': $scope.nodes[i]['avatar'] = 'chiragh.png'; break;
								case 'Hemanth Kumar Guruswamy': $scope.nodes[i]['avatar'] = 'Hemanth.jpg'; break;
								case 'Masha Nazeem': $scope.nodes[i]['avatar'] = 'masha.jpg'; break;
								case 'Arjun Shetty': $scope.nodes[i]['avatar'] = 'arjun.png'; break;
								case 'Girish Mathrubootham': $scope.nodes[i]['avatar'] = 'girish.jpg'; break;
							}
							console.log($scope.nodes[i]['title']);
							}
				   		$timeout(init, 10);
				   		var top = $(".anno").scrollTop()+450;
					   // $('html,body').delay(100).animate({'scrollTop':top+"px"},1500,'easeOutSine');
					    // $scope.$apply();
					});
$scope.clickedName = '';
$scope.date = '';
$scope.Time = '';
$scope.venue = '';
$scope.desc = '';
$scope.about = '';
$scope.clicked = function(name,id)
{	
	if($scope.clickedName == name)
		return;
	$(".glpage1").addClass("glpageanim1");
	setTimeout(function(){$(".glpage1").removeClass("glpageanim1");},500);
    $(".glpage2").removeClass("glpageanim2");
	$scope.clickedName = name;
	id = id-1;
	$scope.date = $scope.nodes[id]['date'];
	$scope.Time = $scope.nodes[id]['time'];
	$scope.venue = $scope.nodes[id]['venue'];
	$scope.desc = $scope.nodes[id]['desc'];
	$scope.about = $scope.nodes[id]['about'];
	var top = $(".glContent").scrollTop()+450;
	$('html,body').animate({'scrollTop':top+"px"},500,'easeOutSine');
	// $scope.$apply();

};

}]);
//karnival
myApp.controller('karnivalController',['$scope','$rootScope','$http','$location','$timeout','$sce','$compile',function($scope,$rootScope,$http,$location,$timeout,$sce,SAAccessFac, cfpLoadingBar,$compile){

$(".footer").show(1);
$scope.events = [];
$scope.tabs = [];
$scope.eventName;
$http({method: 'GET', url: 'jsons/kars.json'}).success(function(data)
           {
              
            $scope.events = data;
            $(".home-event-circle").find(".circle-icon").removeClass("selectedNavElem");
            $(".home-event-circle").removeClass("removeBB");
            $("#karnival").find(".circle-icon").addClass("selectedNavElem");
            $("#karnival").addClass("removeBB");
           });
$scope.getKar = function(eventname){
	// $(".header").hide();
	$(".navbar").hide();
$rootScope.nameofevent=eventname;
$scope.eventName=eventname;

//alert("kar: ",$scope.eventName);

  $(".imagebox").each(function(i){
      var elem = $(this);
      setTimeout(function(){
        $(elem).animate({'opacity':"0",'margin-left':"30px"},70);
      },i*50+50);
    });
    $(".footer").hide(0);
console.log("event name "+$scope.eventName);
  eventname = eventname.toLowerCase().replace(/[ ']/g,'-').replace('!','-').replace(/\-\-+/g, '-') ;
   $('html,body').delay(100).animate({'scrollTop':"100px"},1500,'easeOutSine');
function init(){
  $(".tabContent li").hide();
  $(".tabContent").find("li.0").show();
  $(".tabContainer li.tab:eq(0)").addClass("tabActive");
  console.log("in init len of tabs",$scope.tabs.length);
}
console.log("event name "+$scope.eventName);
//$scope.tabs = [];
  $http({method: 'GET', url: 'jsons/karnival/'+eventname+'.json'}).success(function(data)
           {
            jsonstr = data['tabs']; // response data 
            //console.log("kar tabs: ",JSON.stringify(jsonstr[1]));
            for(i=0;i<jsonstr.length;i++)
              {
                $scope.tabs[i] = jsonstr[i];
              
                $scope.tabs[i]['id']=i;
              console.log("Print tab content: ",JSON.stringify($scope.tabs[i]));
              }
            console.log("In Kar ctrl, filled tabs: ",JSON.stringify($scope.tabs),"len: ",$scope.tabs.length);
            $(".left").animate({'marginLeft':"0px"},500,'easeOutSine').show();
            $timeout(init, 10);
});
}
$scope.toTrustedHTML = function( html ){
    return $sce.trustAsHtml( html );
};


$scope.showTab = function(tabtitle)
{
  $(".tabContent").show();
  $(".tabContent").find("li").hide();
  $(".tabContent").find("."+tabtitle).show();
  $(".tabContainer li.tab").removeClass("tabActive");
  $(".tabContainer li.tab:eq("+tabtitle+")").addClass("tabActive");
   $('html,body').delay(100).animate({'scrollTop':"500px"},1500,'easeOutSine');

};

}]);

