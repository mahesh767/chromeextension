// var empname=document.getElementById('name');
// var cempname=document.getElementById('cname');
// var date=document.getElementById('date');
// var cost=document.getElementById('cost');
// var info;
document.addEventListener('DOMContentLoaded',function()
{
    var empname=document.getElementById('name');
    var cempname=document.getElementById('cname');
    var date=document.getElementById('date');
    var cost=document.getElementById('cost');
    var submit=document.getElementById('submit');
    var info="maheshbabu";
    var infoabout=document.getElementById('infoabout');
    var imgurl="";
    var canurl="";
    var canvas=document.getElementById("filepreview");
    var count=0;
    
    //chrome.tabs.executeScript({code:"document.body.style.backgroundColor='red"});
    chrome.tabs.query({currentWindow: true,active: true},function(tabs)
    {
         //chrome.tabs.executeScript(null,{code:"document.body.style.backgroundColor='yellow"})
         var url=tabs[0].url;
         if(url.startsWith("https://mail.google.com"))
         {
         alert("i am here");
         chrome.tabs.sendMessage(tabs[0].id,{message:'hi'},setvariables);
         }
         else
         {
          document.body.innerHTML="";
          for(var i=0;i<tabs.length;i++)
          {
            chrome.tabs.sendMessage(tabs[i].id,{message:"linkedin"},function(res){
              var name=document.createElement("LABEL");
              var br=document.createElement("BR");
              name.innerHTML="Name";
              var inputname=document.createElement("input");
               inputname.type="text";
               //alert(res.name);
               inputname.value=res.name;
               document.body.appendChild(name);
               document.body.appendChild(inputname);
               document.body.appendChild(document.createElement("BR"));
               var experience=document.createElement("LABEL");
               experience.innerHTML="Education and Experience";
               var inputexperience=document.createElement("textarea");
               //inputexperience.type="text";
               var t=document.createTextNode(res.experienced);
               inputexperience.appendChild(t);
               inputexperience.style.width=300;
               inputexperience.style.height=300;
               document.body.appendChild(experience);
               document.body.appendChild(inputexperience);
               document.body.appendChild(br);
               var skills=document.createElement("LABEL");
               skills.innerHTML="Skills";
               var inputskills=document.createElement("textarea");
               inputskills.style.width=300;
               inputskills.style.height=300;
               var t=document.createTextNode(res.skillsrequired);
               if(t.length>0)
               {
               inputskills.appendChild(t);
               document.body.appendChild(skills);
               document.body.appendChild(inputskills);
               }
               var email=document.createElement("LABEL");
               email.innerHTML="Email";
               var inputemail=document.createElement("input");
               inputemail.type="text";
               inputemail.value=res.email;
               if(res.email.length>0)
               {
                 document.body.appendChild(email);
                 document.body.appendChild(inputemail);
               }
               document.body.appendChild(br);
   
               var phone=document.createElement("Phone");
               phone.innerHTML="PHONE";
               var inputphone=document.createElement("input");
               inputphone.type="text";
               inputphone.value=res.phone;
               if(res.phone.length>0)
               {
                 document.body.appendChild(phone);
                 document.body.appendChild(inputphone);
                 
               }
              })

          } 
          
           
           
         }
        
         
        }); 
    
    function setvariables(res)
    {        
      //alert(res);
      empname.value=res.receiveremail;
      cempname.value=res.senderemail;
      date.value=res.totaldate.trim();
      cost.value=parseFloat(res.cost);
      tax=res.tax;
      discount=res.discount;
      orderid=res.orderid;
      
      if(discount.length!=0)
      {
        var label=document.createElement("LABEL");
        label.innerHTML="Discount";
        var inputdiscount=document.createElement("input");
        inputdiscount.type="text";
        inputdiscount.value=parseFloat(discount);
        infoabout.appendChild(label);
        infoabout.appendChild(inputdiscount);
        var br=document.createElement("br");
        infoabout.appendChild(br);
      }
      if(tax.length!=0)
      {
        var label=document.createElement("LABEL");
        label.innerHTML="Tax";
        var inputtax=document.createElement("input");
        inputtax.type="text";
        inputtax.value=parseFloat(tax);
        infoabout.appendChild(label);
        infoabout.appendChild(inputtax);
        
      }
      if(orderid.length!=0)
      {
        //alert("orderid"+orderid);
        var br=document.createElement("br");
        infoabout.appendChild(br);
        var label=document.createElement("LABEL");
        label.innerHTML="OrderId";
        var inputtax=document.createElement("input");
        inputtax.type="text";
        inputtax.value=orderid;
        infoabout.appendChild(label);
        infoabout.appendChild(inputtax);
      }
      documentupload=res.documentupload;
      //alert(documentupload);

      var iframe=document.createElement('iframe');
      document.body.appendChild(iframe);
      var something=documentupload;
    var iframedoc=iframe.contentDocument||iframe.contentWindow.document;
    var img =document.createElement("IMG");
    iframedoc.body.innerHTML=something
      html2canvas(iframedoc.body,{
        onrendered:function(canvas)
        {
          canurl=canvas.toDataURL();
          //document.body.appendChild(canvas);
          document.body.removeChild(iframe);
          // canurl=canvas.toDataUrl();
          // alert(canurl);
          img.setAttribute("src",canurl);
          
          document.body.appendChild(img);
          // img.setAttribute("height",500);
          // img.setAttribute("width",800);

        }
        
      })
      var file=document.getElementById("filetoupload");
      file.addEventListener('change',function()
      {
        var files=this.files[0];
        var object_url=URL.createObjectURL(files);
       
        
       
        
      })


    }
    submit.addEventListener('click',function()
    {
      ename=document.getElementById('name').value;
      cname=document.getElementById('cname').value;
      cost=document.getElementById('cost').value;
      date=document.getElementById('date').value;
      //alert(ename+"\n "+cname+"\n "+date+" \n"+cost);
     
      
      if(ename.length==0 || cname.length==0 || date.length==0 || cost.length==0)
      {
      infoabout.innerHTML="every attribute should be filled";
      }
      else{
        infoabout.innerHTML="";
        xmlhttp=new XMLHttpRequest();

        xmlhttp.onreadystatechange=function()
        {
          if(this.readystate==4 && this.status==200)
          {
            var responseobj=JSON.parse(this.responseText);
            infoabout.innerHTML=responseobj['result'];
            if(responseobj['result']=="successfully inserted")
            alert("Successfully inserted");
            
          }
          // else
          // alert(this.readystate+" "+this.status);
          else{
                //alert(this.readyState+" "+this.status);           
          }
        };


        xmlhttp.open("POST","http://127.0.0.1:5000/download",false);
        xmlhttp.setRequestHeader('Content-Type',"application/json");
        obj={
          	
	"senderemail":cname,
	"receiveremail":ename,
	"cost":cost,
	"date":date,
	"info":canurl
        }
        xmlhttp.send(JSON.stringify(obj));
      }

    });
   
    

  
});
