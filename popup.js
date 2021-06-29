document.addEventListener("DOMContentLoaded", function (){
    document.querySelector("button").addEventListener("click",
    onclick, false)

    function onclick () {
        chrome.tabs.query({currentWindow: true, active:true},
            function (tabs) {
                chrome.tabs.getSelected(null, function(tab) {
                    document.getElementById("loader").classList.add('loader');

                    
                    d = document;
                
                    var f = d.createElement('form');
                    f.action = 'http://flasklamfo.ngrok.io/teste5';
                    f.method = 'get';
                    var i = d.createElement('input');
                    i.type = 'hidden';
                    i.name = 'url';
                    i.value = tab.url;


                    // f.action = 'http://127.0.0.1:5000/' + i.value;

                    // f.appendChild(i);
                    d.body.appendChild(f);
                    // f.submit();
                    // chrome.tabs.sendMessage(tabs[0].id,f.submit())

                    function httpGetAsync(theUrl, callback) {
                        var xmlHttp = new XMLHttpRequest();
                        xmlHttp.onreadystatechange = function() {
                            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                                callback(xmlHttp.responseText);
                        }
                        xmlHttp.open("GET", theUrl, true); // true for asynchronous
                        xmlHttp.send(null);
                    }

                    httpGetAsync("http://flasklamfo.ngrok.io/" + String(i.value).replace("https://", "<https>").replaceAll("/","<barra>"), function(response){
                        // chrome.tabs.sendMessage(tabs[0].id,f.submit())
                        // alert(response)
                        document.getElementById("result").innerHTML = response;
                        document.getElementById("loader").classList.remove('loader'); 
                        
                    })

                    

                    // var output = "Sum of two numbers is ";
                    // document.getElementById("result").innerHTML = response;

                    
                    })
                    
            })
    }
}, false)





// document.addEventListener('DOMContentLoaded', function() {
//     var checkPageButton = document.getElementById('checkPage');
//     checkPageButton.addEventListener('click', function() {
  
//       chrome.tabs.getSelected(null, function(tab) {
//         d = document;
  
//         var f = d.createElement('form');
//         f.action = 'http://gtmetrix.com/analyze.html?bm';
//         f.method = 'post';
//         var i = d.createElement('input');
//         i.type = 'hidden';
//         i.name = 'url';
//         i.value = tab.url;
//         f.appendChild(i);
//         d.body.appendChild(f);
//         f.submit();
//         chrome.tabs.sendMessage(tabs[0].id,"hi")
//       });
//     }, false);
//   }, false);