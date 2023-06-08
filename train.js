function findDigits(input_string) {
    // input_stringdagi barcha non-digit bo'lganlarini olib tashlaydi
    var output_string = input_string.replace(/\D/g, '');
    return output_string;
}

console.log(findDigits('ad5we34jkf89'));  // Bu '53489' ni chiqaradi
