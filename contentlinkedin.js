
window.addEventListener("load",function load(event)
{
    window.removeEventListener("load",load,false);
    
    var name="";
    var experience;
    var skills;
    var contactinfo;
   var experiencesection;
   var experienced="";
   var skillsrequired="";
   var email="";
   var phone="";
   var button =document.createElement("button");
    button.value="Refer to Darwin box";
    button.style.background="red";
    button.style.padding="5px";
    button.innerHTML="Refer"
    button.onclick=buttonclick;
     
    var refer=document.getElementsByClassName("pv-top-card--list inline-flex align-items-center");
    var li=document.createElement("li");
    li.appendChild(button);
    refer[0].appendChild(li);
    console.log(refer);
    
    function getText(contactinfo,index)
    {
        var returnstring="";
        while(index<contactinfo.length && contactinfo.charAt(index)!=" " && contactinfo.charAt(index)!="\n")
        {
            returnstring=returnstring+contactinfo.charAt(index);
            index++;
        }
        return returnstring;
    }
    function getPhone(contactinfo,index)
    {
        var returnphone="";
        while(index<contactinfo.length && contactinfo.charAt(index)!=" "&& contactinfo.charAt(index)!="\n" && contactinfo.charAt(index)>='0' && contactinfo.charAt(index)<='9')
        {
            returnphone=returnphone+contactinfo.charAt(index);
            index++;
        }
        return returnphone;
    }
    function getToBeRemovedString(temp,index)
    {
        var returnstring="";
        while(index<temp.length && temp.charAt(index)!="\n")
        {
            returnstring=returnstring+temp.charAt(index);
            index++;
        }
        return returnstring;
    }
    function buttonclick()
    {
        alert("Please click ok and  wait for sometime unitl we collect the data");
        name="";
        experienced="";
        skillsrequired="";
         email="";
        phone="";

        if('scrollRestoration' in window.history)
    {
        window.history.scrollRestoration='manual';
    }
   
    $([document.body,document.documentElement]).animate({scrollTop:$(document).height()*1.5},6000);
    
    window.setTimeout(function(){
     name=document.getElementsByClassName("pv-top-card--list inline-flex align-items-center");
    name=name[0].innerText;
    name=name.split("\n");
    name=name[0];
    

    var experience=document.getElementsByClassName("pv-top-card--experience-list");
    console.log(experience[0].outerText);
    console.log(name);

    experiencesection=document.getElementsByClassName("pv-profile-section__section-info section-info pv-profile-section__section-info--has-no-more");
   
    for(var i=0;i<experiencesection.length;i++)
    {
    console.log(experiencesection[i].innerText);
    experienced=experienced+experiencesection[i].innerText;
    
    }//g(experiencesection[1].outerText);
    console.log(experience);
    console.log("experienced string"+experienced);
    var button=document.getElementsByClassName("pv-profile-section__card-action-bar pv-skills-section__additional-skills artdeco-container-card-action-bar artdeco-button artdeco-button--tertiary artdeco-button--3 artdeco-button--fluid");
    if(button[0]!=undefined)
    {
    button[0].click();
    }
    skills=document.getElementsByClassName("pv-profile-section pv-skill-categories-section artdeco-container-card first-degree ember-view");
    if(skills.length==0)
    {
        skills=document.getElementsByClassName("pv-profile-section pv-skill-categories-section artdeco-container-card ember-view");
        console.log(skills);
    }
    else
    console.log(skills);
    console.log(skills.length);
    for(var i=0;i<skills.length;i++)
    {
        console.log(skills[i].innerText);
      
        skillsrequired=skillsrequired+skills[i].innerText;
    }
    skillsrequired=skillsrequired.replace("Show less","");
    skillsrequired=skillsrequired.replace("Add a new skill","");
    skillsrequired=skillsrequired.replace("Take skill quiz","");
    var showonlyindex=skillsrequired.indexOf("Show only");
    if(showonlyindex>0)
    {
        var removestring=getToBeRemovedString(skillsrequired,showonlyindex);
        skillsrequired=skillsrequired.replace(removestring,"");
    }
    var Seeonlyindex=skillsrequired.indexOf("See");
    while(Seeonlyindex>0)
    {
        var removestring=getToBeRemovedString(skillsrequired,Seeonlyindex);
        skillsrequired=skillsrequired.replace(removestring,"");
        Seeonlyindex=skillsrequired.indexOf("See");
    }
    skillsrequired=skillsrequired.replace(/[0-9]/g,'');
    skillsrequired=skillsrequired.replace(/\+/g,'');
    var Endorsedindex=skillsrequired.indexOf("Endorsed");
    while(Endorsedindex>0)
    {
        var removestring=getToBeRemovedString(skillsrequired,Endorsedindex);
        skillsrequired=skillsrequired.replace(removestring,"");
        Endorsedindex=skillsrequired.indexOf("Endorsed");
    }

    var contact=document.getElementsByClassName("pv-top-card--list pv-top-card--list-bullet mt1");
    console.log(contact);
    contact=contact[0].children;
    console.log(contact);
    contact=contact[2].getElementsByTagName("a");
    contact[0].click();

    window.setTimeout(function(){
     contactinfo=document.getElementsByClassName("pv-profile-section pv-contact-info artdeco-container-card ember-view");
    console.log(contactinfo);
    console.log(contactinfo[0].innerText);
    contactinfo=contactinfo[0].innerText;
    var emailindex=contactinfo.indexOf("Email");
    if(emailindex>0)
    {
    email=getText(contactinfo,emailindex+6);
    console.log("email"+email);
    }
    var phoneindex=contactinfo.indexOf("Phone");
    if(phoneindex>0)
    {
        phone=getPhone(contactinfo,phoneindex+6);
        console.log("phone"+phone);
    }
    
    },3000);
    },4000);

    chrome.runtime.onMessage.addListener(function(request,sender,response)
    {

        if(request.message=="linkedin")
        {
            console.log("linked in message received");
            console.log(name);
            console.log(email);
            console.log("skillsrequired"+skillsrequired);

            response({"name":name,"contactinfo":contactinfo,"skillsrequired":skillsrequired,"experienced":experienced,"email":email,"phone":phone});
        }
    });
        
        // window.localStorage.setItem("name",name);
        // window.localStorage.setItem("skillsrequired",skillsrequired);
        // window.localStorage.setItem("experienced",experienced);
        // window.localStorage.setItem("email",email);
        // window.localStorage.setItem("phone",phone);
        window.setTimeout(function(){
            xmlhttp=new XMLHttpRequest();
            var obj={
                "name":name,
                "skillsrequired":skillsrequired,
                "experienced":experienced,
                "email":email,
                "phone":phone
            }
            //alert("name"+name+"skillsrequired"+skillsrequired+"experienced"+experienced+"email "+email+"phone"+phone);
            xmlhttp.onreadystatechange=function(){
            if(this.readyState==4 && this.status==200)
            {
                url="http://127.0.0.1:5000/getResume";
                window.open(url);
            }
            //alert(this.responseStatus +" "+this.status);
        }
            xmlhttp.open("POST","http://127.0.0.1:5000/sendResume",false);
            xmlhttp.setRequestHeader("Content-Type",'application/json');
            xmlhttp.send(JSON.stringify(obj));
        },10000);
       
       

    }
    
},false);