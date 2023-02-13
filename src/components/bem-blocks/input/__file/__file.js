document.addEventListener("DOMContentLoaded", () => {

    const inputFile = document.querySelector(".input-file");
    const ico = document.querySelector(".label__img");
    const label = document.querySelector(".label");
    const text = document.querySelector(".label__text");

    let fileList;

    // Событие выбора файла(ов)
    if(inputFile){
        inputFile.addEventListener("change", function (e) {

            // создаём массив файлов
            fileList = [];
            for (let i = 0; i < inputFile.files.length; i++) {
                fileList.push(inputFile.files[i]);
            }

            // вызов функции для каждого файла
            fileList.forEach(file => {
                uploadFile(file);
            });

        });
    }

    // выводим название
    const uploadFile = (file) => {

        if(fileList.length > 0) {
            ico.style.display = 'none';
            label.classList.add('label--active');
        }

        // Показ загружаемых файлов
        if (file && fileList.length > 1) {
            if ( fileList.length <= 4 ) {
                text.textContent = `Выбрано ${fileList.length} файла`;
            }
            if ( fileList.length > 4 ) {
                text.textContent = `Выбрано ${fileList.length} файлов`;
            }
        } else {
            text.textContent = file.name;
        }
    }

})