function travelled()
{
    var travelled = document.getElementById('travel');
    var countries = document.getElementById('travelled-countries');

    //We display
    if(travelled.value == "Yes")
    {
        countries.classList.remove("invisible");
    }
    else
    {
        countries.classList.add("invisible");
    }
}

function validDateOfBirth()
{
    var DOB = document.getElementById("dob");
    var error = document.getElementById("error-row");
    var errorMsg = document.getElementById("error-msg");

    if(DOB.value == "")
    {
        //DOB CANNOT BE EMPTY
        error.classList.remove("invisible");
        errorMsg.innerHTML = "Date of birth CANNOT be left empty.";
        dob.classList.add("has-error");
        return false;
    }
    else 
    {
        var today = new Date();
        
        var userDOB = new Date(DOB.value + "T00:00");

        if(userDOB >= today)
        {
            console.log("BAD");
            //DOB CANNOT BE IN THE FUTURE
            error.classList.remove("invisible");
            errorMsg.innerHTML = "Date of birth CANNOT be after today's date.";
            dob.classList.add("has-error");
            return false;
        }
        else
        {
            //DOB GOOD
            error.classList.add("invisible");
            dob.classList.remove("has-error");
            return false;
        }

    }
}

function validForm()
{
    if(validDateOfBirth && true)
    {
        return true; 
    }
    return false;
}