window.onload = function()
{
    var two = document.getElementById("two");
    two.addEventListener("click", function(event)
    {
        event.preventDefault();
        var http = new XMLHttpRequest();
        http.onreadystatechange = html;
        http.open("Get", "request.php?q=definition");
        http.send();
        
        function html()
        {
            if (http.readyState === XMLHttpRequest.DONE) 
            {
                if(http.status === 200)
                {
                    alert(http.responseText);
                }
            }
                
        }
            
        
        
    }
}