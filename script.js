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
            return true;
        }
    }
}

function atLeastOneCountry()
{
    var travelled = document.getElementById('travel');
    var countries = document.getElementById('countries');

    var msgContainer = document.getElementById('travel-error-msg-container');
    var msg = document.getElementById('travel-error-msg');

    //We check that at least one country was mentioned
    if(travelled.value == "Yes")
    {
        var arrayOfCountries = countries.value.split(",");
        if(arrayOfCountries.length > 0)
        {
            if(arrayOfCountries[0] == "")
            {
                //Display Message to user here
                msg.innerHTML = "At least one country MUST be listed.";
                msgContainer.classList.remove("invisible");
                countries.classList.add("has-error");
                return false;
            }
            msgContainer.classList.add("invisible");
            countries.classList.remove("has-error");
            return true;
        }
        //Display Message to user here
        msg.innerHTML = "At least one country MUST be listed.";
        msgContainer.classList.remove("invisible");
        countries.classList.add("has-error");
        return false;
    }
    //No need to ckeck
    msgContainer.classList.add("invisible");
    countries.classList.remove("has-error");
    return true;
}

function validCharactersAddress()
{
    /**We get the reference of the input, container, an error msg */
    var st = document.getElementById('street');
    var apt = document.getElementById('apt');
    var city = document.getElementById('city');
    var state = document.getElementById('state');
    var zip = document.getElementById('zip');

    /**To make the error msg more readable, all fields of the address section are represented here*/
    var addressErrorContainer = document.getElementById('address-error-container');
    var addressErrorMsg = document.getElementById('address-error-msg');
    var address = document.getElementById('address');

    if(st.value.includes('&') || st.value.includes('<') || st.value.includes('>') || st.value.includes('#') || st.value.includes('!') || st.value.includes('`') || st.value.includes('"') || st.value.includes('~') )
    {
        addressErrorMsg.innerHTML = 'The following characters are not allowed: &, <, >, #, !, `, ", or ~. Check address fields';
        addressErrorContainer.classList.remove("invisible");
        address.classList.add("has-error");
        return false;
    }
    else if(apt.value.includes('&') || apt.value.includes('<') || apt.value.includes('>') || apt.value.includes('#') || apt.value.includes('!') || apt.value.includes('`') || apt.value.includes('"') || apt.value.includes('~') )
    {
        addressErrorMsg.innerHTML = 'The following characters are not allowed: &, <, >, #, !, `, ", or ~. Check address fields';
        addressErrorContainer.classList.remove("invisible");
        address.classList.add("has-error");
        return false;
    }
    else if(city.value.includes('&') || city.value.includes('<') || city.value.includes('>') || city.value.includes('#') || city.value.includes('!') || city.value.includes('`') || city.value.includes('"') || city.value.includes('~') )
    {
        addressErrorMsg.innerHTML = 'The following characters are not allowed: &, <, >, #, !, `, ", or ~. Check address fields';
        addressErrorContainer.classList.remove("invisible");
        address.classList.add("has-error");
        return false;
    }
    else if(state.value.includes('&') || state.value.includes('<') || state.value.includes('>') || state.value.includes('#') || state.value.includes('!') || state.value.includes('`') || state.value.includes('"') || state.value.includes('~') )
    {
        addressErrorMsg.innerHTML = 'The following characters are not allowed: &, <, >, #, !, `, ", or ~. Check address fields';
        addressErrorContainer.classList.remove("invisible");
        address.classList.add("has-error");
        return false;
    }
    else if(zip.value.includes('&') || zip.value.includes('<') || zip.value.includes('>') || zip.value.includes('#') || zip.value.includes('!') || zip.value.includes('`') || zip.value.includes('"') || zip.value.includes('~') )
    {
        addressErrorMsg.innerHTML = 'The following characters are not allowed: &, <, >, #, !, `, ", or ~. Check address fields';
        addressErrorContainer.classList.remove("invisible");
        address.classList.add("has-error");
        return false;
    }
    else
    {
        addressErrorContainer.classList.add("invisible");
        address.classList.remove("has-error");
    }

    return true;

}
/**Template function that will do the same functionality for each field of first and last name and email */
function validCharacters(inputElement, errorContainer, errorMsgDiv)
{
    var iElement = document.getElementById(inputElement);
    var eContainer = document.getElementById(errorContainer);
    var eMsg = document.getElementById(errorMsgDiv);

    if(iElement.value.includes('&') || iElement.value.includes('<') || iElement.value.includes('>') || iElement.value.includes('#') || iElement.value.includes('!') || iElement.value.includes('`') || iElement.value.includes('"') || iElement.value.includes('~') )
    {
        //Display Message to user here
        eMsg.innerHTML = 'The following characters are not allowed: &, <, >, #, !, `, ", or ~';
        eContainer.classList.remove("invisible");
        iElement.classList.add("has-error");
        return false;
    }
    else
    {
        eContainer.classList.add("invisible");
        iElement.classList.remove("has-error");
        return true;
    }
}
function validCharactersCountries()
{
    var visitedCountries = document.getElementById('travel');
    var countries = document.getElementById('countries');
    var msgContainer = document.getElementById('travel-error-msg-container');
    var msg = document.getElementById('travel-error-msg');

    if(visitedCountries.value == 'Yes')
    {
        if(countries.value.includes('&') || countries.value.includes('<') || countries.value.includes('>') || countries.value.includes('#') || countries.value.includes('!') || countries.value.includes('`') || countries.value.includes('"') || countries.value.includes('~'))
        {
                //Display Message to user here
                msg.innerHTML = 'The following characters are not allowed: &, <, >, #, !, `, ", or ~';
                msgContainer.classList.remove("invisible");
                countries.classList.add("has-error");
                return false;
        }
        else
        {
            //Display Message to user here
            msgContainer.classList.add("invisible");
            countries.classList.remove("has-error");
            return true;
        }
    }
}

/**To handle the validity of the form, I use an if statement to go through a check list of fields.
 * If the user has entered an invalid input, then we make them go back to fix.
 * Because the fields of telephone and temp have patterns, we do not need to check those.
 */
function validForm()
{
    if(validCharacters('first_name', 'fn-error-container', 'fn-error-msg') && 
    validCharacters('last_name', 'ln-error-container', 'ln-error-msg') && 
    validCharacters('email', 'email-error-container', 'email-error-msg') && 
    validCharactersAddress() && validDateOfBirth() && validCharactersCountries() && atLeastOneCountry())
    {
        return true; 
    }
    return false;
}