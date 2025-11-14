const group3Container = document.querySelector("#group3");

function renderList(container, list) {
    list.forEach(lesson => {
        const a = document.createElement("a");
        a.href = `lesson.html?id=${lesson.id}`;
        a.className = "lessonLink";
        a.innerText = lesson.title;
        container.appendChild(a);
    });
}

renderList(group3Container, daily7Lessons);
