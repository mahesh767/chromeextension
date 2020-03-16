
window.addEventListener("load",function load(event){
    console.log("pageloaded");
    window.removeEventListener("load",load,false);
    var emailreceivedtime;
     emailreceivedtime=document.getElementsByClassName("g3");
    var senderobject,receiverobject,receiverobjectarr,senderobjectarr;
    var emaildateandmonth,emaildate,emailmonth,emailyear,totaldate;
    var senderemail,sendername,receiveremail,receivername;
    var cost;
    var table;
    var documentupload;
    var forwardedmessage;
    var forwardedmessageemailtime;
    var discount=0;
    var tax=0;
    var orderid="";
    var bookingid="";
    var emailarray=[["noreply@oyorooms.com","Oyo"],
                    ["uber.india@uber.com","Uber"],
                    ["noreply@swiggy.in","Swiggy"],
                    ["order@zomato.com","Zomato"],
                    ["noreply@makemytrip.com","makemytrip"],
                    ["bookings@itilite.com","itilite"],
                    ["noreply@olacabs.com","Ola"],
                    ["noreply@paytm.com","Paytm"]
                    ]

    var emailstorage=new Map(emailarray)
    
    var imgurl;
    if(emailreceivedtime.length>0)
    {
     senderobject=document.getElementsByClassName("gD")[0].outerHTML;
     receiverobject=document.getElementsByClassName("g2")[0].outerHTML;
     documentupload=document.getElementsByClassName("adn ads");
     forwardedmessage=document.getElementsByClassName("gmail_attr");
     if(forwardedmessage.length>0)
     {
         console.log(forwardedmessage[0].children)
         senderemail=forwardedmessage[0].children[2].children[0].innerText;
         receiveremail=forwardedmessage[0].children[6].innerText;
         forwardedmessageemailtime=forwardedmessage[0].childNodes[7].textContent;
         forwardedmessageemailtime=forwardedmessageemailtime.split(":");
         forwardedmessageemailtime=forwardedmessageemailtime[1];
         forwardedmessageemailtime=forwardedmessageemailtime.split(",");
         emailmonthanddate=forwardedmessageemailtime[1].split(" ");
         emailmonth=emailmonthanddate[1];
         emaildate=emailmonthanddate[2];
         emailyear=forwardedmessageemailtime[2].split(" ")[1];
         //console.log(emailmonth+" "+typeof(emailmonth)+emailyear+" "+typeof(emailyear)+" "+emaildate+typeof(emaildate));
         //console.log(forwardedmessageemailtime);
         if(emailstorage.has(senderemail))
         {
             senderemail=emailstorage.get(senderemail);
             console.log(senderemail);
         }
         months=["Jan","Feb","Mar","April","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
         for(var i=0;i<months.length;i++)
         {
             
             if(months[i]==emailmonth)
             {
            
             if(i<9)
             {
                 emailmonth="0"+(i+1);
             }
             else{
                 emailmonth=""+(i+1);
             }
             }
        }
        if(emaildate.length<2)
        {
            emaildate="0"+emaildate;
        }
        console.log(emaildate);
         
         
     }
     else
     {
     emailtime=emailreceivedtime[0].title;
     senderobjectarr=senderobject.split(" ");
    for( var i=0;i<senderobjectarr.length;i++)
    {
        if(senderobjectarr[i].startsWith("email"))
        {
            senderemail=senderobjectarr[i].split("=");
            senderemail=senderemail[1].split('"').join('');
            console.log(senderemail);
        }
        if(senderobjectarr[i].startsWith("name"))
        {
           sendername=senderobjectarr[i].split("=");
            sendername=sendername[1].split('"').join('');
            console.log(sendername);
        }
    }
    if(senderemail=="adithyakng@gmail.com")
    {
        table=document.getElementsByClassName("adn ads")[0].getElementsByTagName("table");
        if(table.length>=39){
        table=table[39];
        var cells=table.rows[0].cells;
        //console.log(cells[1].innerText);
        //console.log(table);
        if(cells.length>=2){
        cost=cells[1].innerText;
        cost=cost.replace("\u20B9",'');
        console.log(cost);
        }
        }
        
    }
    else if(senderemail=="anjanagouri@gmail.com")
    {
        table=document.getElementsByClassName("adn ads")[0].getElementsByTagName("table");
        console.log(table);
        if(table.length>=10)
        {
        table=table[9];
        var cells=table.rows[0].cells;
        cost=cells[0].innerText;
        cost=cost.replace("\u20b9",'');
        
        console.log(cost);
        }  
    }
    else
    {
        cost=0;
    }
    
    var receiverobjectarr=receiverobject.split(" ");
    for(var i=0;i<receiverobjectarr.length;i++)
    {
        if(receiverobjectarr[i].startsWith("email"))
        {
            receiveremail=receiverobjectarr[i].split("=");
            receiveremail=receiveremail[1].split('"').join('');
            console.log(receiveremail);
        }
        if(receiverobjectarr[i].startsWith("name"))
        {
            receivername=receiverobjectarr[i].split("=");
            receivername=receivername[1].split('"').join('');
            console.log(receivername);
        }

    }

    console.log(emailtime);
    emailtime=emailtime.split(",");
    emaildateandmonth=emailtime[0].split(" ");
    emailmonth=emaildateandmonth[0];
    emaildate=emaildateandmonth[1];
    emailyear=emailtime[1];
    if(emaildate.length<2)
    emaildate="0"+emaildate;
    months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    for(var i=0;i<months.length;i++)
    {
        
        if(months[i]==emailmonth)
        {
       
        if(i<9)
        {
            emailmonth="0"+(i+1);
        }
        else{
            emailmonth=""+(i+1);
        }
        }
        
        
    }
    console.log("emailmonth "+emailmonth);
    console.log("emaildate"+emaildate);
    console.log("emailyear"+emailyear);
    totaldate=emailyear+"-"+emailmonth+"-"+emaildate;
    console.log(totaldate);
    documentupload=document.getElementsByClassName('adn ads')[0].innerHTML;
    //console.log(documentupload);
    //alert(documentupload);
    
   
}
    }
    
    chrome.runtime.onMessage.addListener(function(request,sender,sendResponse)
    {
        // //alert(request);
        // if(request.message="restart"){
        // //alert("message received from background");
        //     sendResponse
        // }
        
        // else
        if(request.message=="hi"){
        documentupload=document.getElementsByClassName('adn ads')[0].innerHTML;
        sendResponse({"senderemail":senderemail,"receiveremail":receiveremail,"totaldate":totaldate,"cost":cost,"documentupload":documentupload,"discount":discount,"tax":tax,"orderid":orderid});
        console.log("sending user data");
        
        }
        else if (request.message=="restart"){
        console.log("restart from background");
        //console.log(documentupload[0].innerHTML);
        //documentupload=domJSON.toJSON(documentupload);
        //documentupload=JSON.stringify(documentupload);
        //var emailtime=document.getElementsByClassName('g3');
        documentupload=document.getElementsByClassName('adn ads');
        emailreceivedtime=document.getElementsByClassName("g3");
        if(emailreceivedtime.length>0)
        {
        forwardedmessage=document.getElementsByClassName("gmail_attr");
        console.log(forwardedmessage);
        parsedata=document.createElement("div");
        parsedata.innerHTML=documentupload[0].innerHTML;
        var textdata=parsedata.textContent || parsedata.innerText || "";
        console.log(typeof(textdata));
        //console.log(textdata);
        textdata=textdata.replace(/\s/g,'');
        //textdata=textdata.replace( /[\r\n]+/gm,"");   
        console.log("textdata"+textdata);
        textdata=textdata.toLowerCase();

        
       // console.log(documentupload);
        //console.log(textdata);
       
        if(forwardedmessage.length>0)
        {
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        parsedforwardmessage=document.createElement("div");
        parsedforwardmessage.innerHTML=document.getElementsByClassName("gmail_attr")[0].innerHTML;
        var textforwardmessage=parsedforwardmessage.textContent||parsedforwardmessage.innerText||"";
        console.log(textforwardmessage);
        senderemailindex=textforwardmessage.indexOf('<');
        senderemail=getParsedEmails(textforwardmessage,senderemailindex);
        receiveremailindex=textforwardmessage.lastIndexOf('<');
        receiveremail=getParsedEmails(textforwardmessage,receiveremailindex);
        dateindex=textforwardmessage.indexOf('Date');
        Subjectindex=textforwardmessage.indexOf('Subject')
        email=getParsedDate(textforwardmessage,dateindex+6,Subjectindex);
        email=email.split(",");
        emailmonthanddate=email[1].split(" ");
        if(emailmonthanddate[1].charAt(0)>='0' && emailmonthanddate[1].charAt(0)<='9')
        {
            emailmonth=emailmonthanddate[2];
            emaildate=emailmonthanddate[1];
            emailyear=emailmonthanddate[3];
            
        }
        else
        {
        emaildate=emailmonthanddate[2];
        emailmonth=emailmonthanddate[1];
        emailyear=email[2].split(" ")[1];
        }
       
        console.log(emailmonthanddate);
        console.log(email);

        console.log(textforwardmessage.charAt(dateindex));
            
         if(emailstorage.has(senderemail))
         {
             senderemail=emailstorage.get(senderemail);
             console.log(senderemail);
         }
         months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
         for(var i=0;i<months.length;i++)
         {
             
             if(months[i]==emailmonth)
             {
            
             if(i<9)
             {
                 emailmonth="0"+(i+1);
                 break;
             }
             else{
                 emailmonth=""+(i+1);
                 break;
             }
             }
        }
        if(emaildate.length<2)
        emaildate="0"+emaildate;
        console.log(emailmonth);
        if(senderemail=="Uber")
        {
            var table=document.getElementsByClassName("adn ads")[0].getElementsByTagName("table");
            if(table.length>=39){
            table=table[39];
            var cells=table.rows[0].cells;
            //console.log(cells[1].innerText);
            //console.log(table);
            if(cells.length>1){
            cost=cells[1].innerText;
            cost=cost.replace("\u20B9","");
            console.log(cost);
            }
            //var discount=0;
            discount=getdiscount(textdata);
            tax=gettax(textdata);
            var  orderidindex=textdata.indexOf("orderid");
            if(orderidindex>0)
            {
                orderid=getOrderId(textdata,orderidindex+7);

            }
            else
            orderid="";
           
        }
        }
        else if(senderemail=="Ola")
        {
            var table=document.getElementsByClassName("adn ads")[0].getElementsByTagName("table");
            if(table.length>=10){
            table=table[9];
            var cells=table.rows[0].cells;
            //console.log(cells[1].innerText);
            //console.log(table);
            if(cells.length>0){
            cost=cells[0].innerText;
            cost=cost.replace("\u20B9","");
            console.log(cost);
            }
            discount=getdiscount(textdata);
            tax=getreversetax(textdata);
        }
        }
        else if(senderemail=="Zomato")
        {
            var table=document.getElementsByClassName("adn ads")[0].getElementsByTagName("table");
            if(table.length>=17)
            {
                table=table[16];
                var cells=table.rows[0].cells;
                if(cells.length>1)
                {
                    cost=cells[1].innerText;
                    cost=cost.replace("\u20B9","");
                    console.log(cost);
                }
                
            }
            discount=getdiscount(textdata);
            tax=gettax(textdata);
            var orderidindex=textdata.indexOf("orderid");
            orderid=getOrderId(textdata,orderidindex+7);


        }
        else if(senderemail=="Swiggy")
        {
            var table=document.getElementsByClassName("adn ads")[0].getElementsByTagName("table");
            if(table.length>=9)
            {
                table=table[8].tFoot;
                var cells=table.rows[3].cells;
                if(cells.length>1)
                {
                    cost=cells[1].innerText;
                    cost=cost.replace("\u20B9","");
                    console.log(cost);
                }
                //console.log(table);
            }
            discount=getdiscount(textdata);
            tax=gettax(textdata);
            var orderidindex=textdata.indexOf("orderno");
            if(orderidindex>0)
            {
            orderid=getOrderId(textdata,orderidindex+7);
            }
        }
 
    
        else {
            //textdata=textdata.toLowerCase();
            console.log(textdata);
            var indexoftotal=textdata.search("total");
            var indexofsubtotal=textdata.search("subtotal");
            var indexofpaid=textdata.indexOf("paid");
            var indexofgrandtotal=textdata.search("grandtotal");
            var indexofamount=textdata.indexOf("amount");
            console.log(indexofpaid);
            if(indexofsubtotal>=0)
            indexofsubtotal=indexofsubtotal+3;
            console.log(indexofsubtotal+" "+indexoftotal+" "+indexofpaid+" "+indexofgrandtotal+" "+indexofamount);
            if(indexofgrandtotal>0)
            {
                costparsed=getParsedCost(textdata,indexofgrandtotal);
                cost=costparsed;
            }
            else if(indexoftotal==indexofsubtotal && indexofsubtotal>=0 && indexoftotal>=0)
            {
                indexoftotal=textdata.lastIndexOf("total");
                var count=0;
                var costparsed="";
                for(var i=indexoftotal;i<textdata.length;i++)
                {
                    if(textdata.charAt(i)>='0' && textdata.charAt(i)<='9')
                    {
                        while((textdata.charAt(i)>='0' && textdata.charAt(i)<='9')||(textdata.charAt(i)=='.'||textdata.charAt(i)==','))
                        {
                            if(textdata.charAt(i)==',')
                            {
                                i++;
                            }
                            else
                            {
                            costparsed=costparsed+textdata.charAt(i);
                            i++;
                            }
                        }
                        break;
                    }
                }
                console.log(costparsed);
                cost=costparsed;
            }
            else if(indexoftotal>0 && indexofsubtotal<0)
            {
                  costparsed=getParsedCost(textdata,indexoftotal);
                  cost=costparsed;
            }
            else if(indexofpaid>=0)
            {
                costparsed=getParsedCost(textdata,indexofpaid);
                cost=costparsed;
                console.log(costparsed);
            }
            else if(indexofamount>0)
            {
                costparsed=getParsedCost(textdata,indexofamount);
                cost=costparsed;
                console.log(costparsed);
            }
            else{
                cost="0";
            }
            discount=getdiscount(textdata);
            tax=gettax(textdata);
            var orderidindex=textdata.indexOf("orderid");
            var bookingidindex=textdata.lastIndexOf("bookingno");
            var bookingid=textdata.indexOf("bookingid");
            var ordernoindex=textdata.indexOf("orderno");
            var invoicenoindex=textdata.indexOf("invoiceno");
            var invoiceidindex=textdata.indexOf("invoiceid");
            var transactionidindex=textdata.indexOf("transactionid");
            if(orderidindex>0)
            {
                orderid=getOrderId(textdata,orderidindex+7);
                orderid=orderid.replace("to","");
            }
            else if(bookingidindex>0)
            {
                orderid=getBookingNo(textdata,bookingidindex+9);
                orderid=orderid.replace("to","");
            }
            else if(bookingid>0)
            {
                orderid=getBookingId(textdata,bookingid+9);
                
            }
            else if(ordernoindex>0)
            {
                orderid=getInvoiceNo(textdata,ordernoindex+7);
            }
            else if(invoicenoindex>0)
            {
                orderid=getInvoiceNo(textdata,invoicenoindex+9);

            }
            else if(invoiceidindex>0)
            {
                orderid=getInvoiceNo(textdata,invoiceidindex+9);
            }
            else if(transactionidindex>0)
            {
                orderid=getOrderId(textdata,transactionidindex+13);
            }
            else
            {
                orderid="";
            }

            
            
        }  
        }
        else
        {
         emailtime=emailreceivedtime[0].title;
         senderobject=document.getElementsByClassName("gD")[0].outerHTML;
        senderobjectarr=senderobject.split(" ");
        for( var i=0;i<senderobjectarr.length;i++)
        {
        if(senderobjectarr[i].startsWith("email"))
         {
            senderemail=senderobjectarr[i].split("=");
            senderemail=senderemail[1].split('"').join('');
            console.log(senderemail+"senderemailwithout forwardmessage");
        }
        }
        if(emailstorage.has(senderemail))
        senderemail=emailstorage.get(senderemail);
        if(senderemail=="Uber")
        {
            var table=document.getElementsByClassName("adn ads")[0].getElementsByTagName("table");
            if(table.length>=39){
            table=table[39];
            var cells=table.rows[0].cells;
            //console.log(cells[1].innerText);
            //console.log(table);
            if(cells.length>1){
            cost=cells[1].innerText;
            cost=cost.replace("\u20B9","");
            console.log(cost);
            }
            discount=getdiscount(textdata);
            tax=gettax(textdata);
        }
        }
        else if(senderemail=="Ola")
        {
            var table=document.getElementsByClassName("adn ads")[0].getElementsByTagName("table");
            if(table.length>=10){
            table=table[9];
            var cells=table.rows[0].cells;
            //console.log(cells[1].innerText);
            //console.log(table);
            if(cells.length>0){
            cost=cells[0].innerText;
            cost=cost.replace("\u20B9","");
            console.log(cost);
            }
            discount=getdiscount(textdata);
            tax=getreversetax(textdata);
        }
        }
        else if(senderemail=="Zomato")
        {
            var table=document.getElementsByClassName("adn ads")[0].getElementsByTagName("table");
            if(table.length>=17)
            {
                table=table[16];
                var cells=table.rows[0].cells;
                if(cells.length>1)
                {
                    cost=cells[1].innerText;
                    cost=cost.replace("\u20B9","");
                    console.log(cost);
                }
                
            }
            discount=getdiscount(textdata);
            tax=gettax(textdata);
            var orderidindex=textdata.indexOf('orderid');
            var bookingid=textdata.lastIndexOf('bookingno');
            if(orderid>0)
            orderid=getOrderId(textdata,orderidindex+7);
            else if(bookingid>0)
            {
                orderid=getBookingNo(textdata,bookingid+9);
            }
        }
        else if(senderemail=="Swiggy")
        {
            var table=document.getElementsByClassName("adn ads")[0].getElementsByTagName("table");
            if(table.length>=9)
            {
                table=table[8].tFoot;
                var cells=table.rows[3].cells;
                if(cells.length>1)
                {
                    cost=cells[1].innerText;
                    cost=cost.replace("\u20B9","");
                    console.log(cost);
                }
                //console.log(table);
            }
            discount=getdiscount(textdata);
            tax=gettax(textdata);
            var orderidindex=textdata.indexOf("orderid");
            if(orderidindex>0)
            {
                orderid=getOrderId(textdata,orderidindex+7);
            }
            
        }
        
        else{
            
            textdata=textdata.toLowerCase();
            console.log(textdata);
            var indexoftotal=textdata.indexOf("total");
            var indexofsubtotal=textdata.indexOf("subtotal");
            var indexofpaid=textdata.indexOf("paid");
            var indexofgrandtotal=textdata.search("grandtotal");
            var indexofamount=textdata.indexOf("amount");
            console.log(indexofsubtotal+" "+indexoftotal+" "+indexofpaid+" "+indexofgrandtotal+" "+indexofamount);
            console.log(indexofpaid);
            if(indexofsubtotal>=0)
            indexofsubtotal=indexofsubtotal+3;

            if(indexofgrandtotal>0)
            {
                costparsed=getParsedCost(textdata,indexofgrandtotal);
                cost=costparsed;
            }
            else if(indexoftotal==indexofsubtotal && indexofsubtotal>=0 && indexoftotal>=0)
            {
                indexoftotal=textdata.lastIndexOf("total");
                var count=0;
                var costparsed="";
                for(var i=indexoftotal;i<textdata.length;i++)
                {
                    if(textdata.charAt(i)>='0' && textdata.charAt(i)<='9')
                    {
                        while((textdata.charAt(i)>='0' && textdata.charAt(i)<='9')||(textdata.charAt(i)=='.'||textdata.charAt(i)==','))
                        {
                            if(textdata.charAt(i)==',')
                            {
                                i++;
                            }
                            else
                            {
                            costparsed=costparsed+textdata.charAt(i);
                            i++;
                            }
                        }
                        break;
                    }
                }
                console.log(costparsed);
                cost=costparsed;
            }
            else if(indexoftotal>0 && indexofsubtotal<0)
            {
                  costparsed=getParsedCost(textdata,indexoftotal);
                  cost=costparsed;
            }
            else if(indexofpaid>=0)
            {
                costparsed=getParsedCost(textdata,indexofpaid);
                cost=costparsed;
                console.log(costparsed);
            }
            else if(indexofamount>0)
            {
                costparsed=getParsedCost(textdata,indexofamount);
                cost=costparsed;
                console.log(costparsed);
            }
            else{
                cost="0";
            }

        }
       
        
        receiverobject=document.getElementsByClassName("g2")[0].outerHTML;
         receiverobjectarr=receiverobject.split(" ");
        for(var i=0;i<receiverobjectarr.length;i++)
        {
            if(receiverobjectarr[i].startsWith("email"))
            {
                receiveremail=receiverobjectarr[i].split("=");
                receiveremail=receiveremail[1].split('"').join('');
                console.log(receiveremail);
            }
            if(receiverobjectarr[i].startsWith("name"))
            {
                receivername=receiverobjectarr[i].split("=");
                receivername=receivername[1].split('"').join('');
                console.log(receivername);
            }
    
        }
        emailtime=emailtime.split(",");
        emaildateandmonth=emailtime[0].split(" ");
        emailmonth=emaildateandmonth[0];
         emaildate=emaildateandmonth[1];
        emailyear=emailtime[1];
        if(emaildate.length<2)
        emaildate="0"+emaildate;
        months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        for(var i=0;i<months.length;i++)
        {
        if(months[i]==emailmonth)
        {
            if(i<9)
            {
                emailmonth="0"+(i+1);
            }
            else
            {
                emailmonth=""+(i+1);
            }
        }
        
        }
        discount=getdiscount(textdata);
        tax=gettax(textdata);
        var orderidindex=textdata.indexOf("orderid");
        var bookingidindex=textdata.lastIndexOf("bookingno");
        if(orderidindex>0)
        orderid=getOrderId(textdata,orderidindex+7);
        else if(bookingid>0)
        orderid=getBookingNo(textdata,bookingid+9);
        else
        orderid="";
    }
        console.log("emailmonth "+emailmonth);
        console.log("emaildate"+emaildate);
        console.log("emailyear"+emailyear);
        totaldate=emailyear+"-"+emailmonth+"-"+emaildate;
        console.log(totaldate);
        console.log(senderemail+"senderemail");
        console.log(receiveremail+"receiveremail");
        //console.log(cost);
        //documentupload=documentupload[0].innerHTML;
        documentupload=document.getElementsByClassName("adn ads")[0].innerHTML;
        
        //console.log(document.body);
        sendResponse({"senderemail":senderemail,"receiveremail":receiveremail,"totaldate":totaldate,"cost":cost,"documentupload":documentupload,"discount":discount,"tax":tax,"orderid":orderid});
        //alert(documentupload);
         // orderid="";        
                
    } 
    }
    });
    function getParsedCost(textdata,index)
    {
        var costparsed="";
                for(var i=index+1;i<textdata.length;i++)
                {
                    if((textdata.charAt(i)>='0' && textdata.charAt(i)<='9'))
                    {
                        while((textdata.charAt(i)>='0' && textdata.charAt(i)<='9')||(textdata.charAt(i)=='.'||textdata.charAt(i)==','))
                        {
                            if(textdata.charAt(i)==',')
                            {
                                i++;
                            }
                            else
                            {
                            costparsed=costparsed+textdata.charAt(i);
                            i++;
                            }
                        }
                        break;
                    }
                }
                console.log(costparsed);
        return costparsed;
    }
    function getParsedEmails(emailtextdata,index)
    {
        var email="";
        for(var i=index;i<emailtextdata.length;i++)
        {
            if(emailtextdata.charAt(i)=='<')
            {
                var j=i+1;
                while(emailtextdata.charAt(j)!='>')
                {
                    email=email+emailtextdata.charAt(j);
                    j++;
                }
                break;
            }
        }
        return email;
    }
    function getParsedDate(emailtextdata,indexstart,indexend)
    {
        var email="";
        for(var i=indexstart;i<indexend;i++)
        {
            email=email+emailtextdata.charAt(i);
        }
        return email;
    
    }
    function getParsedTax(emailtextdata,indexstart)
    {
        var taxes="";
        for(var i=indexstart;i<emailtextdata.length;i++)
        {
            if(emailtextdata.charAt(i)=='%')
            {
                for(var j=i;j<emailtextdata.length;j++)
                {
                    if((emailtextdata.charAt(j)>='0' && emailtextdata.charAt(j)<='9'))
                    {
                        while((emailtextdata.charAt(j)>='0' && emailtextdata.charAt(j)<='9')|| (emailtextdata.charAt(j)=='.' || emailtextdata.charAt(j)==','))
                        {
                            if(emailtextdata.charAt(j)==',')
                            {
                                j++;
                            }
                            else{
                                taxes=taxes+emailtextdata.charAt(j);
                                j++;
                            }
                        }
                        break;
                    }
                }
                if(taxes!="")
                break;

            }
        }
        return taxes;
    }
    function getdiscount(textdata)
    {
        var totaldiscountindex=textdata.indexOf('totaldiscount');
        var discountindex=textdata.indexOf('discount');
        var discount="";
       // console.log(totaldiscountindex+" "+discount);
        if(totaldiscountindex>0)
        {
            discount=getOnlyfromrs(textdata,totaldiscountindex+13);
        }
        else if(totaldiscountindex<0 && discountindex>0)
        {
            discount=getOnlyfromrs(textdata,discountindex+8);
            
        }
        console.log("discount"+discount);

        return discount;
      
    }
    function gettax(textdata)
    {
        var tax="";
        var beforetaxesindex=textdata.indexOf('beforetaxes');
        var taxesindex=textdata.indexOf('taxes');
        var cgstindex=textdata.lastIndexOf('cgst');
        var sgstindex=textdata.lastIndexOf('sgst');
        var gstindex=textdata.lastIndexOf('gst');
        var taxindex=textdata.indexOf('tax');
        console.log(beforetaxesindex+" "+taxesindex+""+cgstindex+" "+sgstindex+" "+gstindex+" "+taxindex);
        if(beforetaxesindex>0)
        {
            if(taxesindex>0 && taxesindex!=beforetaxesindex+6)
            {
                 tax=getOnlyfromrs(textdata,taxesindex+5);
                 console.log("tax"+tax);
            }
            else if(cgstindex>0 && sgstindex>0)
            {
                tax1=getParsedTax(textdata,cgstindex);
                tax2=getParsedTax(textdata,sgstindex);
                tax3=parseFloat(tax1)+parseFloat(tax2);
                tax=tax3.toString();
                console.log("tax"+tax);
            }
            else if(gstindex>0)
            {
                tax=getParsedCost(textdata,gstindex);
                console.log("tax"+tax);
            }
 
 
        }
        else if(taxesindex>0)
        {
            tax=getOnlyfromrs(textdata,taxesindex+5);
            console.log("tax"+tax);
        }
        else if(taxindex>0)
        {
            //console.log("tax"+textdata.charAt(taxindex));
            tax=getOnlyfromrs(textdata,taxindex+3);
            console.log("tax"+tax);
        }
        else if(cgstindex>0 && sgstindex>0)
        {
         tax1=getParsedTax(textdata,cgstindex);
         tax2=getParsedTax(textdata,sgstindex);
         tax3=parseFloat(tax1)+parseFloat(tax2);
         tax=tax3.toString();
         console.log("tax"+tax);
        }
        else if(gstindex>0)
        {
            tax=getParsedCost(textdata,gstindex);
            console.log("tax"+tax);
        }
        return tax;

    }
    function getreversetax(textdata)
    {
        var tax="";
        var taxesindex=textdata.indexOf("taxes");
        console.log("reverse tax"+taxesindex);
        for(var i=taxesindex;i>=0;i--)
        {
            if(textdata.charAt(i)>='0' && textdata.charAt(i)<='9')
            {
                while((textdata.charAt(i)>='0' && textdata.charAt(i)<='9') ||(textdata.charAt(i)=='.'|| textdata.charAt(i)==','))
                {
                    if(textdata.charAt(i)==',')
                    {
                        i--;
                    }
                    else{
                        tax=textdata.charAt(i)+tax;
                        i--;
                    }
                }
                break;
            }
        }
        console.log("tax"+tax);
        return tax;

    }
    function getOnlyfromrs(textdata,index)
    {
        var parseonlymoney="";
            var i=index;
            var count=0;
            console.log("getonlyfrom rs"+textdata.charAt(index));
            while(count<5)
            {
            if(textdata.charAt(i)=='r' && textdata.substring(i,i+2)=='rs')
            {
                i=i+2;
                var count1=0;
                while(count1<5)
                {
                    if(textdata.charAt(i)>='0' && textdata.charAt(i)<='9')
                    {
                        while(i<textdata.length && textdata.charAt(i)>='0' && textdata.charAt(i)<='9')
                        {
                            parseonlymoney=parseonlymoney+textdata.charAt(i);
                            i++;

                        }
                        return parseonlymoney;
                    }
                    count1++;
                    i++;
                }
                
                
                
            }
            else if(textdata.charAt(i)=='r' && textdata.substring(i,i+6)=='rupees')
            {
                i=i+6;
                while(i<textdata.length && textdata.charAt(i)>='0' && textdata.charAt(i)<='9' && count<5)
                {
                    parseonlymoney=parseonlymoney+textdata.charAt(i);
                    i++;
                }
                return parseonlymoney;
                
            }
            else if(textdata.charAt(i)=='\u20B9')
            {
                i=i+1;
                console.log("getonly from rs reached");
                while(i<textdata.length && (textdata.charAt(i)>='0' && textdata.charAt(i)<='9')||(textdata.charAt(i)==',' || textdata.charAt(i)=='.'))
                {
                    if(textdata.charAt(i)==',')
                    {
                        i++;
                    }
                    else
                    {
                    parseonlymoney=parseonlymoney+textdata.charAt(i);
                    i++;
                    }
                }
                return parseonlymoney;

            }
            i++;
            count++;
        }
            
        return parseonlymoney;
    }
    function getOrderId(textdata,index)
    {
        var orderid="";
        for(i=index;i<textdata.length;i++)
        {
            if(textdata.charAt(i)>='0' && textdata.charAt(i)<='9')
            {
                while(i<textdata.length && (textdata.charAt(i)>='0' && textdata.charAt(i)<='9')|| (textdata.charAt(i)=='-'))
                {
                    
                    orderid=orderid+textdata.charAt(i);
                    i++;
                }
            console.log("orderid"+orderid);
            return orderid;
            }
            
            
        }
        console.log("orderid"+orderid);
        return orderid;
    }

    function getBookingNo(textdata,index)
    {
        //var index=textdata.indexOf(':',index+1);
        //console.log(textdata.charAt(index));
        
        var bookingid="";
        i=index+2;
        console.log(textdata.substring(i,i+10));
        while(textdata.charAt(i)!=':')
        {
            bookingid=bookingid+textdata.charAt(i);
            i++;
        }
        console.log("bookingno"+bookingid);
        return bookingid;
    }

    function getBookingId(textdata,index)
    {
        var count=0;
        //var i=index+9;
        var i=index;
        if(textdata.charAt(i)=='.' || textdata.charAt(i)==',' || textdata.charAt(i)==':')
        i=i+1;
        var bookingId="";
        while(count<16)
        {
            bookingId=bookingId+textdata.charAt(i);
            i++;


            count++;
        }
        return bookingId;
    }

    function getInvoiceNo(textdata,invoicenoindex)
    {
        var invoiceno="";
        var i=invoicenoindex;
        if(textdata.charAt(invoicenoindex)==':' || textdata.charAt(invoicenoindex)=='.')
        i=invoicenoindex;
        var count=0;
        var noidentified=0;
        while(count<16 && i<textdata.length)
        {
            if(textdata.charAt(i)>='0' && textdata.charAt(i)<='9')
            {
                while(textdata.charAt(i)<='0' || textdata.charAt(i)>='9')
                {
                    invoiceno=invoiceno+textdata.charAt(i);
                    i++;
                }
                return invoiceno;
            }
            invoiceno=invoiceno+textdata.charAt(i);

            i++;
            count++;
        }
        return invoiceno;
        
    }

    

    

    


}

,false)

