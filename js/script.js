window.onload = () => {
    let button = document.querySelector("#btn");
 
    // Terkait tombol perhitungan BMI
    button.addEventListener("click", myFunction);
};

const btn = document.querySelector('#btn');        
const radioButtons = document.querySelectorAll('input[name="lang"]');
btn.addEventListener("click", () => {
    let selectedGender;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedGender = radioButton.value;
            break;
        }
    }
    // Menampilkan Output
    output.innerText = selectedGender ? ` ${selectedGender}` : `Isi Bagian Jenis Kelamin Pria/Wanita!`;
});

function myFunction() {
    /* Mendapatkan input dari user terkait berat badan */
    /* Input berupa string jadi dikonversi ke integer */
    let weight = parseInt(document
        .querySelector("#weight").value);
    
    /* Mendapatkan input dari user terkait usia */
    /* Input berupa string jadi dikonversi ke integer */
    let usia = parseInt(document
        .querySelector("#usia").value);   

    /* Mendapatkan input dari user terkait tinggi badan */
    /* Input berupa string jadi dikonversi ke integer */
    let height = parseInt(document
        .querySelector("#height").value);
 
    let result = document.querySelector("#result");
 
    // Mengecek value yang diberikan

    if (weight === "" || usia === "" || height === "" || isNaN(weight) || isNaN(usia) || isNaN(height)) 
        result.innerHTML = "Input Tidak Valid! ";
    
    else if (weight < 1 || weight > 200)
        result.innerHTML = "Berikan Input Berat Badan yang Valid!";

    else if (usia < 1 || usia > 100)
        result.innerHTML = "Berikan Input Usia yang Valid!";

    else if (height < 1 || height > 200)
        result.innerHTML = "Berikan Input Tinggi Badan yang Valid!";

    // Perhitungan BMI ketika input yang diberikan valid
    else {
 
        // Membuat hingga 2 desimal
        let bmi = (weight / ((height * height)
                            / 10000)).toFixed(2);
 
        // Pembagian sesuai dengan kondisi BMI
        if (bmi < 18.5) result.innerHTML =
            `Kekurangan Berat Badan : <span>${bmi}</span>`;
 
        else if (bmi >= 18.5 && bmi < 24.9)
            result.innerHTML =
            `Normal (Ideal) : <span>${bmi}</span>`;
        
        else if (bmi >= 25.0 && bmi < 29.9)
            result.innerHTML =
            `Kelebihan Berat Badan : <span>${bmi}</span>`;
 
        else result.innerHTML =
            `Kegemukan (Obesitas) : <span>${bmi}</span>`;
    }
}