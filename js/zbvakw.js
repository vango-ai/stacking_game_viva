;(function(){
  
	var icon = '';

	document.head.insertAdjacentHTML('beforeend','<style>.sg { width: 35px; height: 35px; position: fixed; bottom: 10px; left: 10px; } .sg .eye { -webkit-transform: translateX(0px);   transform: translateX(0px); } .sg:hover .eye { -webkit-transition: -webkit-transform 0.3s ease; transition: -webkit-transform 0.3s ease; transition: transform 0.3s ease; transition: transform 0.3s ease, -webkit-transform 0.3s ease; -webkit-transform: translateX(12px);   transform: translateX(12px); }</style>'); 
  
	var a = document.createElement('a');
	a.setAttribute('href','http://you-site.com');
	a.setAttribute('target','_blank');
	a.innerHTML = icon;
    
 	document.body.appendChild(a);
})();