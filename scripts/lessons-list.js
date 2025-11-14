const container = document.querySelector(".playList");

dailyLessons.forEach(lesson => {
    const a = document.createElement("a");
    a.href = `lesson.html?id=${lesson.id}`;
    a.className = "lessonLink";
    a.innerText = lesson.title;
    container.appendChild(a);
});

