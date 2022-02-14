const ageRange = document.getElementById('age');
const registration = document.getElementById('reg-form');

// update the age value based on the input range
document.getElementById('ageValue').innerHTML = ageRange.value;

function updateAgeValue(val) {
    document.getElementById('ageValue').innerHTML = val;
}


function register(e) {
    e.preventDefault(); 
    try {
        // store in session storage
        
        // Available Methods
        /**
         * save data -> setItem()
         * retrieve data -> getItem()
         * delete data -> removeItem()
         * clear all data -> clear()
        */
        

        // Action Items
        // 1. retrieve the data from the form name, age, gender
        // 2. store the data into the session storage database
        // 3. clear the form fields

        const name = e.target.elements.name.value;
        const age = e.target.elements.age.value;
        const gender = e.target.elements.gender.value;

        sessionStorage.setItem('name', name);
        sessionStorage.setItem('age', age);
        sessionStorage.setItem('gender', gender);

        const userObj = {
            name,
            age,
            gender
        }

        localStorage.setItem('user', JSON.stringify(userObj))
        
        // clear registration form fields
        registration.reset()
    } catch (e) {
     throw new Error(e.message);
    }
}