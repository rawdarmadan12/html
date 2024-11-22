let message =prompt ("plese entr to message");
        for (let i = 1; i <= 6; i++) {

            document.write("<h"+i+">"+"this is header number["+i+"]"+"</h"+i+">"+i);
        }

function calculateSum() {
    let totalSum = 0;

    while (true) {
        let userInput = prompt("أدخل عددًا (0 للتوقف):");

    
        if (isNaN(userInput) || userInput === "") {
            alert("مدخل غير صصحيح. يرجى إدخال قيمة رقمية.");
            continue;
        }

        let num = parseInt(userInput) 
        if (num === 0) {
            alert (totalSum);
            break;
        }

    
        totalSum += num;

    
        if (totalSum > 100) {
            alert("المجموع الكلي تجاوز 100. تم إيقاف الإدخال...");
            break;
        }
    }

    alert( totalSum);
}

calculateSum();
