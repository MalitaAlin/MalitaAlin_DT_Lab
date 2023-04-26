function getManchesterLevelEncoding(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1) symbol = '▁∣▔';
        if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '∣▁∣▔';
        if (parseInt(bits[i].value) == 0) symbol = '▔∣▁';
        if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '∣▔∣▁';
        result.push(symbol);
    }
    return result;
}


function getNRZ(bits) {
     var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1 && i == 0) symbol = '▔';
         if (parseInt(bits[i].value) == 0 && i ==0  ) symbol = '▁▁';
          if (parseInt(bits[i].value) == 1 &&   (i > 0 && parseInt(bits[i - 1].value) == 1)  ) symbol = '▔';
        else if( parseInt(bits[i].value) == 1&& i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '|▔'
        if (parseInt(bits[i].value) == 0 && (i > 0 && parseInt(bits[i - 1].value) == 0)   ) symbol = '▁▁';
        else if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '|▁▁';
          result.push(symbol);
    }


     return result;
}

function get4B5BNRZI(bits){
    var result = [];
    for(var i=0;i < bits.length; i=i+4){
        if((i+1)%4==0){
        let symbol = '----';
        let convert = parseInt(bits[i-3].value)*1000 + parseInt(bits[i-2].value)*100 + parseInt(bits[i-1].value)*10 + parseInt(bits[i].value);
        convert = String(convert);
        if(convert == '0000') convert = '1 1 1 1 0';
        if(convert == '0001') convert = '0 1 0 0 1';
        if(convert == '0010') convert = '1 0 1 0 0';
        if(convert == '0011') convert = '1 0 1 0 1';
        if(convert == '0100') convert = '0 1 0 1 0';
        if(convert == '0101') convert = '0 1 0 1 1';
        if(convert == '0110') convert = '0 1 1 1 0';
        if(convert == '0111') convert = '0 1 1 1 1';
        if(convert == '1000') convert = '1 0 0 1 0';
        if(convert == '1001') convert = '1 0 0 1 1';
        if(convert == '1010') convert = '1 0 1 1 0';
        if(convert == '1011') convert = '1 0 1 1 1';
        if(convert == '1100') convert = '1 1 0 1 0';
        if(convert == '1101') convert = '1 1 0 1 1';
        if(convert == '1110') convert = '1 1 1 0 0';
        if(convert == '1111') convert = '1 1 1 0 1';
        convert = convert.split(' ');
        for(var j=0;j<4;j++){
            if (parseInt(convert[j]) == 1) symbol = '∣▔';
            if (parseInt(convert[j]) == 1 && j > 0 && parseInt(convert[j - 1]) == 1) symbol = '▔';
            if (parseInt(convert[j]) == 0) symbol = '▁';
            if (parseInt(convert[j]) == 0 && j > 0 && parseInt(convert[j - 1]) == 0) symbol = '∣▁';
        }
        result.push(symbol);
    }
    }
     return result;
}


     var polarity = 1;
function getNRZM(bits) {
    var result = [];
     for (var i = 0; i < bits.length; i++) {
         let symbol = '⚋⚋';
         if (parseInt(bits[i].value) == 1 && i == 0) polarity = 1;
         if (parseInt(bits[i].value) == 0 && polarity == -1) symbol = '▔▔';
          if (parseInt(bits[i].value) == 0  && polarity ==1 || i==0)  symbol = '▁▁▁▁'; 
         
  if (parseInt(bits[i].value) == 1 && polarity == 1) {
          symbol = '|▔▔'; 
        polarity = -1;
        }
         else if (parseInt(bits[i].value) == 1 && polarity == -1) {
          symbol = '|▁▁▁▁'; 
            polarity = 1;}
         
          result.push(symbol);
    }
     return result;
}



function getAMIEncoding(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
   
        if (parseInt(bits[i].value) == 1 && polarity == 1) {
            symbol = '|▔|';
            polarity = -1;
        }
         else if (parseInt(bits[i].value) == 1 && polarity == -1) {
            symbol = '|▁▁|';
            polarity = 1;
        }
     else if (parseInt(bits[i].value) == 0) symbol = '⚋⚋';


        result.push(symbol);
    }
    return result;
}