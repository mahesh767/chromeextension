// chrome.webNavigation.onHistoryStateUpdated.addListener(function(details)
// {
//     alert("hello"+" "+details );
// });
chrome.tabs.onUpdated.addListener(function(tabid,changeinfo,tab){
        var url=tab.url;
        if(url!=undefined && changeinfo.status=="complete")
        {
          console.log("sending restart");
          chrome.tabs.query({currentWindow:true,active:true},function(tabs)
          {
              if(tabs.length!=0)
              {
              
                chrome.tabs.sendMessage(tabs[0].id,{"message":"restart"},function response(){
                  console.log("message sent");
                  //console.log(img);
                
                
        
              })
              
            }
            else{
              console.log("no active tab");
            }
              
          })
        
            
        }
});

