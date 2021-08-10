document.addEventListener("DOMContentLoaded", function (){
    document.querySelector("button").addEventListener("click",
    onclick, false)


    function onclick () {
        chrome.tabs.query({currentWindow: true, active:true},
            function (tabs) {
                chrome.tabs.getSelected(null, function(tab) {

                    document.getElementById("checkPage").innerHTML = "Analysing ...";

                    var e = document.getElementById("detective");
                    e.style.display = 'block';
                    document.getElementById('detective').src='https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif'
                    
                    d = document;
                
                    var f = d.createElement('form');
                    f.action = 'http://flasklamfo.ngrok.io/teste5';
                    f.method = 'get';
                    var i = d.createElement('input');
                    i.type = 'hidden';
                    i.name = 'url';
                    i.value = tab.url;

                    d.body.appendChild(f);

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

                        var substringfalse = "FALSE";
                        var substringtrue = "TRUE";

                        if(response.includes(substringfalse)){
                            document.getElementById('detective').src='https://www.motherjones.com/wp-content/uploads/2020/06/digital-literacy_2000.gif?w=1200&h=630&crop=1';
                            document.getElementById("checkPage").style.display = "none";    
                        }
                        else if (response.includes(substringtrue)){
                            document.getElementById('detective').src='https://images.squarespace-cdn.com/content/v1/5bca2930b10f255d8de05742/1545963864439-K3RWS3CB89DU8WJEF73J/true_false.gif';
                            document.getElementById("checkPage").style.display = "none";    
                        }
                        else {
                            document.getElementById('detective').src='https://i.gifer.com/1OkG.gif';
                            document.getElementById("checkPage").style.display = "none";    
                        }
                
                        document.getElementById("result").innerHTML = response;
                        
                    })

                    
                    
                    
                    
                    })
                    
            })
    }
}, false)