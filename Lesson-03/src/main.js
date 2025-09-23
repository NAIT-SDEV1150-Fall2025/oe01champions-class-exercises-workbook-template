function sdev()
{
    document.getElementById("demos").innerHTML="This is a new updated text."
}
function prompt1()
{
 //let confirm_calc= confirm("Would you like to calculate your ticket price");
    //if(confirm_calc)
    //console.log("User confirmation status: "+confirm_calc);
    //{
    let age = prompt("Please enter your age");
    age = Number(age);
    let cost = 0;
    let message;
    if (age < 3) 
    {
    cost = 0;
    message = '<b> 0, because Access is free under three.</b>';
    document.getElementById("age1").innerHTML=age;
    document.getElementById("age2").innerHTML=message;
    console.log(message);
    } else if (age >= 3 && age < 12)
        {
        cost = 5;
        message ="with the child discount, the fee is 5 dollars.";
        document.getElementById("age1").innerHTML=age;
        document.getElementById("age2").innerHTML="$"+cost+" because "+message;
        console.log(message);
        } else if (age >= 12 && age < 65) 
            {
            cost = 10;
            message ="a regular ticket cost is 10 dollars.";
            document.getElementById("age1").innerHTML=age;
            document.getElementById("age2").innerHTML="$"+cost+" because "+message;
            console.log(message);
            } else 
                {
                    cost = 7;
                    message ="ticket is 7 dollars for all senior citizens.";
                    document.getElementById("age1").innerHTML=age;
                    document.getElementById("age2").innerHTML="$"+cost+" because "+message;
                    console.log(message);
                }
    console.log(message);
    console.log("Your Total cost is "+cost);
    }
//}

function prompt2()
{
    let confirm_calc= confirm("Are you the Scene+ member");
    //let discount= confirm("Are you the Scene+ member")?0.2 : 0;
    //let confirm_calc= Boolean("Yes, I am a member");
    if(confirm_calc)
    //if(discount= confirm("Are you the Scene+ member")?0.2 : 0)
    //console.log("User confirmation status: "+confirm_calc);
    {
    let age = prompt("Please enter your age");
    age = Number(age);
    let cost = 0;
    let message;
    if (age < 3) 
    {
    cost = 0;
    let discount=0.2;
    let finalPrice=cost-(cost*discount);
    message = '<b> 0, because Access is free under three.</b>';
    document.getElementById("age11").innerHTML=age;
    document.getElementById("age21").innerHTML=finalPrice;
    console.log(message);
    } else if (age >= 3 && age < 12)
        {
        cost = 5;
        let discount=0.2;
        let finalPrice=cost-(cost*discount);
        message ="with the child discount, the fee is 5 dollars.";
        document.getElementById("age11").innerHTML=age;
        document.getElementById("age21").innerHTML="$"+cost+" because after discount it is: "+finalPrice;
        console.log(message);
        } else if (age >= 12 && age < 65) 
            {
            cost = 10;
            let discount=0.2;
            let finalPrice=cost-(cost*discount);
            message ="a regular ticket cost is 10 dollars.";
            document.getElementById("age11").innerHTML=age;
            document.getElementById("age21").innerHTML="$"+cost+" because after discount it is: "+finalPrice;
            console.log(message);
            } else 
                {
                    cost = 7;
                    let discount=0.2;
                    let finalPrice=cost-(cost*discount);
                    message ="ticket is 7 dollars for all senior citizens.";
                    document.getElementById("age11").innerHTML=age;
                    document.getElementById("age21").innerHTML="$"+cost+" because after discount it is: "+finalPrice;
                    console.log(message);
                }
    console.log(message);
    console.log("Your Total cost is "+cost);
    }
    else
    {
        let age = prompt("Please enter your age");
    age = Number(age);
    let cost = 0;
    let message;
        if (age < 3) 
        {
            cost = 0;
            message = '<b> 0, because Access is free under three.</b>';
            document.getElementById("age11").innerHTML=age;
            document.getElementById("age21").innerHTML=message;
            console.log(message);
        } else if (age >= 3 && age < 12)
            {
            cost = 5;
            message ="with the child discount, the fee is 5 dollars.";
            document.getElementById("age11").innerHTML=age;
            document.getElementById("age21").innerHTML="$"+cost+" because "+message;
            console.log(message);
            } else if (age >= 12 && age < 65) 
                {
                cost = 10;
                message ="a regular ticket cost is 10 dollars.";
                document.getElementById("age11").innerHTML=age;
                document.getElementById("age21").innerHTML="$"+cost+" because "+message;
                console.log(message);
                } else 
                    {
                        cost = 7;
                        message ="ticket is 7 dollars for all senior citizens.";
                        document.getElementById("age11").innerHTML=age;
                        document.getElementById("age21").innerHTML="$"+cost+" because "+message;
                        console.log(message);
    }               }       
}
function switchstatement()
{
        // Prompt the user to enter a day
    let day = prompt("Enter a day of the week (e.g., Monday):");

    // Convert input to lowercase for consistency
    day = day.toLowerCase();

    // Use switch statement to respond based on the day
    switch (day) 
    {
        case "monday":
            alert("Start of the work week!");
            break;
        case "tuesday":
            alert("Keep going, it's only Tuesday.");
            break;
        case "wednesday":
            alert("Midweek hustle!");
            break;
        case "thursday":
            alert("Almost there!");
            break;
        case "friday":
            alert("Weekend is near!");
            break;
        case "saturday":
            alert("Enjoy your weekend!");
            break;
        case "sunday":
            alert("Rest and recharge.");
            break;
        default:
            alert("PLease check your input, It seems invalid entry.");
    }
}