// const data = [
//     {
//         train: "52 Брест-Центральный — Санкт-Петербург-Витеб.",
//         arriving: "18:25",
//         leaving: "18:53",
//         path: "3",
//         platform: "2",
//         numbering: "с хвоста поезда",
//         lating: "2"
//     },
//     {
//         train: "7337 Минск-Пассажирский — Беларусь",
//         arriving: "—",
//         leaving: "18:44",
//         path: "6А",
//         platform: "3",
//         numbering: "",
//         lating: ""
//     },
//     {
//         train: "7213 Руденск — Минск-Пассажирский",
//         arriving: "18:45",
//         leaving: "—",
//         path: "10",
//         platform: "5",
//         numbering: "",
//         lating: "1"
//     },
//     {
//         train: "7334 Беларусь — Минск-Пассажирский",
//         arriving: "18:52",
//         leaving: "—",
//         path: "22",
//         platform: "",
//         numbering: "",
//         lating: ""
//     },
//     {
//         train: "708 Минск-Пассажирский — Гомель",
//         arriving: "—",
//         leaving: "19:00",
//         path: "11",
//         platform: "5",
//         numbering: "с хвоста поезда",
//         lating: "3"
//     },
//     {
//         train: "6924 Минск-Пассажирский — Бобруйск",
//         arriving: "—",
//         leaving: "19:08",
//         path: "13",
//         platform: "6",
//         numbering: "с хвоста поезда",
//         lating: ""
//     },
//     {
//         train: "713 Витебск — Минск-Пассажирский",
//         arriving: "19:13",
//         leaving: "—",
//         path: "2",
//         platform: "2",
//         numbering: "с головы поезда",
//         lating: ""
//     },
//     {
//         train: "6824 Барановичи-Полесские — Минск-Пассажирский",
//         arriving: "19:14",
//         leaving: "—",
//         path: "6А",
//         platform: "3",
//         numbering: "",
//         lating: ""
//     },
//     {
//         train: "6130 Молодечно — Минск-Пассажирский",
//         arriving: "19:19",
//         leaving: "—",
//         path: "23",
//         platform: "",
//         numbering: "",
//         lating: "1"
//     },
// ]
//шаблонный литерал
// document.querySelector(".table .tbody").innerHTML += data.map(n => `
// <tr>
//     <td>${n.train}</td>
//     <td>${n.arriving}</td>
//     <td>${n.leaving}</td>
//     <td>${n.path}</td>
//     <td>${n.platform}</td>
//     <td>${n.numbering}</td>
//     <td>${n.lating}</td>
// </tr>
// `).join('');



const Token = "https://run.mocky.io/v3/c9af82ea-e63f-4673-af73-ed80b9ae8630";
fetch(Token)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const container = document.getElementById("tbody");
        data.map((val, index) => {
            console.log(val);
            let string = `<tr>
                                    <td>${val["train"]}</td>
                                    <td>${val["arriving"]}</td>
                                    <td>${val["leaving"]}</td>
                                    <td>${val["path"]}</td>
                                    <td>${val["platform"]}</td>
                                    <td>${val["numbering"]}</td>
                                    <td>${val["lating"]}</td>
                                </tr>`;
            container.insertAdjacentHTML("beforeend", string);
        });
    });


// document.onclick = (e) => {
//     for (let i = 0; i < data.length; i++) {
//         if (e.target.parentNode.children[0].innerHTML == data[i].train) {
//             alert(`Поезд: ${data[i].train}
//             Прибытие/Отправление: ${data[i].arriving}/${data[i].leaving}
//             Путь/Платформа${data[i].path}/${data[i].platform}
//             Нумерация: ${data[i].numbering}
//             Опоздание: ${data[i].lating}`);
//         }
//     }
// }