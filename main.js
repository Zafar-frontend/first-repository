function multiply() {
    let a = document.getElementsByName("a")[0].value
    let b = document.getElementsByName("b")[0].value
    let Result = document.getElementById("Result")
    let Посчитать = Number(a) * Number(b)
    Result.innerHTML = "Результат: " + Посчитать
    }
    
    function courseSale() {
    const courseName = document.getElementById("courseName").value;
    const Python_PRICE = 12000000;
    const FRONTEND_PRICE = 14000000;
    const UX_UI_PRICE = 9000000;
    let price;
    if("courseName" == "none") {
    price = 0;
    } else if(courseName == "py") {
    price = Python_PRICE;
    } else if(courseName == "fr") {
    price = FRONTEND_PRICE;
    } else if(courseName == "ux") {
    price = UX_UI_PRICE;
    }else {
    price = "Нет";
    }
    const discountRange = document.getElementById("discountRange").value
    const discountValue = document.getElementById("discountValue")
    discountValue.innerHTML = discountRange +"%" 
    const sum = price/100*(100-discountRange)
    const resultValue = document.getElementById("sale")
    resultValue.value = sum
    }
    
    let country = document.getElementById("country")
    country.addEventListener("input", onSelectCountry);
    function onSelectCountry() {
    let phone = document.getElementById("phone")
    let countryValue = country.value;
    if (countryValue === "uz") {
    phone.value = "+998";
    } else if (countryValue === "ru") {
    phone.value = "+7";
    } else if (countryValue === "tj") {
    phone.value = "+992";
    }
    }
    let checkbox = document.getElementById("check")
    checkbox.addEventListener("input", activeBtn);
    function activeBtn() {
    let checkboxValue = checkbox.checked
    let btn = document.getElementById("btn");
    if (checkboxValue) {
    btn.disabled = false
    } else {
    btn.disabled = true
    }
    }