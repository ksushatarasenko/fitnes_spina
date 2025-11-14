// Группа 1 — Уроки по дням
const dailyLessons = [
    { id: 1, title: "День 1 — Понедельник", video: "rVjb-Yd3uog" },
    { id: 2, title: "День 2 — Вторник", video: "hWJtMy7jpds" },
    { id: 3, title: "День 3 — Среда", video: "g1Cxry5yPjU" },
    { id: 4, title: "День 4 — Четверг", video: "kwABV0Zpv4A" },
    { id: 5, title: "День 5 — Пятница", video: "IuUa_7Qh_yE" },
    { id: 6, title: "День 6 — Суббота", video: "ZqjvvvRzqCg" }
];

// Группа 2_1 — Постава чемпіонів
const postureLessons = [
    { id: 201, title: "Видео 1", video: "RJrniDsATY0" },
    { id: 202, title: "Видео 2", video: "VtEfwJnE86g" },
    { id: 203, title: "Видео 3", video: "HiT5W9wvSLU" },
    { id: 204, title: "Видео 4", video: "WiMCylg6z5g" },
    { id: 205, title: "Видео 5", video: "q2ofPDYbpuA" },
    { id: 206, title: "Видео 6", video: "V40ty4W0BlE" },
    { id: 207, title: "Видео 7", video: "8saAR4f5lbQ" },
    { id: 208, title: "Видео 8", video: "ifqACDnoG8E" },
    { id: 209, title: "Видео 9", video: "93tNGYqplJE" },
    { id: 210, title: "Видео 10", video: "uACNv9iMJdI" },
    { id: 211, title: "Видео 11", video: "0lZ2GCKHzWc" },
    { id: 216, title: "Исходне положення для вправ сидячи та з браслетом", video: "8vsdCl3TVPY" },
    { id: 212, title: "Вправа з браслетом 1", video: "2MSPOQ-o_nM" },
    { id: 213, title: "Вправа з браслетом 2", video: "i8ZGXF5I1_Q" },
    { id: 214, title: "Вправа з браслетом 3", video: "6wVvhmb8wqw" },
    { id: 215, title: "Вправа з браслетом 4", video: "BnUSnrCRRoQ" },    
    { id: 217, title: "Положення стоп при виконанні вправ", video: "vqeWHEL5MMo" },
    { id: 218, title: "Трикутник стопи", video: "bTuM9VfofYI" },
];

// Группа 2_2 — Корекція стоп
const footLessons = [
    { id: 301, title: "Видео 1", video: "oImupAY2HS4" },
    { id: 302, title: "Видео 2", video: "RmHLQnANRGc" },
    { id: 303, title: "Видео 3", video: "mQ8ROvTvdYk" },
    { id: 304, title: "Видео 4", video: "GZNOfplTcsw" },
    { id: 305, title: "Видео 5", video: "V4n40dI0880" },
    { id: 306, title: "Видео 6", video: "3TnJCJ1_YbY" },
    { id: 307, title: "Видео 7", video: "Khoh4cHYqd8" },
    { id: 308, title: "Видео 8 - Скручування стопи ", video: "HmB_SkcsUvk" },
    { id: 309, title: "Видео 9 - Коротка стопа", video: "dUUS5epKlNo" },
    { id: 310, title: "Видео 10 - Нейтральне положення стопи та коліна", video: "XrabZaIiDg0" },
    { id: 311, title: "Видео 11 - Стискання рушника", video: "WsD--5PdGKM" },
    { id: 312, title: "Видео 12 - Вузькі присідання", video: "eneNquGo1zM" },
    { id: 313, title: "Видео 13 - Широкі присідання", video: "FrJFd1Yi0Sw" },
    { id: 314, title: "Видео 14 - підьом  на носочки", video: "x69CdVXA7Jg" },
    { id: 315, title: "Видео 15 - Формуємо склепіння стопи", video: "g6Sdee2aG8k" },
    { id: 316, title: "Видео 16 - Масаж гомілки при  варусі (клишоногості)", video: "c2Ov61JpGwI" },
    { id: 317, title: "Видео 17 - Масаж гомілки при вальгусі", video: "UyrIKKlvHhQ" },
    { id: 318, title: "Видео 18 - Масаж стоп 1", video: "ySrVUKb4uDg" },
    { id: 319, title: "Видео 19 - Масаж стоп 2", video: "qo1FKPQmjSE" },

];
// Группа IV — 7 тренувань на кожен день 
const daily7Lessons = [
    { id: 401, title: "Тренування 1 - Загальна розтяжка", video: "_mFVz9hlj70" },
    { id: 402, title: "Тренування 2 - Зняття болей з попереку", video: "kA7yr2szmn8" },
    { id: 403, title: "Тренування 3 - Тонус плюс розтяжка", video: "2LacV5kN0ms" },
    { id: 404, title: "Тренування 4 - Гнучкість спини", video: "LJ_PU_J1Hgo" },
    { id: 405, title: "Тренування 5 - Розтяжка ніг", video: "0soKMF1n-xE" },
    { id: 406, title: "Тренування 6 - Топ вправи для проблемних місць", video: "Yt53sAJ7kM4" },
    { id: 406, title: "Тренування 7 - МФР тренування", video: "vkAFihR-4rk" }
];

// Общий список для поиска урока по ID
const lessons = [
    ...dailyLessons,
    ...postureLessons,
    ...footLessons,
    ...daily7Lessons
];
