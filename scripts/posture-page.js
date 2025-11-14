// Контейнеры для двух групп
const group1 = document.querySelector("#group1");
const group2 = document.querySelector("#group2");

function renderList(container, list) {
    list.forEach(lesson => {
        const a = document.createElement("a");
        a.href = `lesson.html?id=${lesson.id}`;
        a.className = "lessonLink";
        a.innerText = lesson.title;
        container.appendChild(a);
    });
}

renderList(group1, postureLessons);
renderList(group2, footLessons);
