// 1. Получаем ID из URL
const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get("id"));

// 2. Находим урок по ID
const lesson = lessons.find(item => item.id === id);

// Элемент контейнера
const container = document.getElementById("lessonContainer");

// 3. Рендер
if (lesson) {
    container.innerHTML = `
        <h2>${lesson.title}</h2>
        <div class="videoWrapper">
            <iframe width="100%" height="315"
                    src="https://www.youtube.com/embed/${lesson.video}"
                    frameborder="0" allowfullscreen>
            </iframe>
        </div>
    `;
} else {
    container.innerHTML = "<p>Урок не найден</p>";
}
