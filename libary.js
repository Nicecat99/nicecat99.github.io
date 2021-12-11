//Incomplete version
    function strCommand(notAfunction) {
            document.body.contentEditable = true;
            document.body.style = 'background:black;color:white;font-family:monospace;';
        try {
            notAfunction(function(name){
                if(name.match('print') != null){
                    return function(n){
                        document.open();

                        document.write(n);
                    if(n.match('<')!==null|n.match('>')!==null){
                        throw '<h3>Sorry, you can\'t use the "&lt;" or "&gt;" symbol, please write the & symbol and lt; or gt; instead</h3>';
                    }
                        document.close();
                    };
                }
            });
        }
        
        catch(error){
            document.body.contentEditable = true;
            document.body.style = 'background:black;color:white;font-family:monospace;';
            document.body.innerHTML=error;
        }
    }
