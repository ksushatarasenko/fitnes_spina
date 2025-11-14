// Получаем id из URL
const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get("id"));

// Находим урок
const lesson = lessons.find(item => item.id === id);

// Элемент для вставки
const container = document.getElementById("lessonContainer");

// Рендер
if (lesson) {
    container.innerHTML = `
        <h2>${lesson.title}</h2>
        <iframe width="100%" height="715"
            src="https://www.youtube.com/embed/${lesson.video}"
            frameborder="0" allowfullscreen>
        </iframe>
    `;
} else {
    container.innerHTML = "<p>Урок не найден</p>";
}
