
// --------------------- JSON -------------------------- //
let url = "/data.json"
console.log("url: ", url);
const workList = document.querySelector(".workList")
console.log('workList', workList);
const educationList = document.querySelector(".educationList")

async function getToDo() {

    let response = await fetch(url);
    console.log('response:', response);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let data = await response.json();
        console.log('data', data)

        // WORK
        for (let i = 0; i < data.work.length; i++) {
            let li = document.createElement("li");

            li.innerHTML = `<h4>${data.work[i].time}</h4>
            <p>
            <span>${data.work[i].title}</span><br>
            <span>${data.work[i].desc}</span><br>
            </p>`;

            console.log('li: ', li)
            workList.appendChild(li);

        }

        // EDUCATION
        for (let i = 0; i < data.education.length; i++) {
            console.log('i', i)
            let li = document.createElement("li");

            li.innerHTML = `<h4>${data.education[i].time}</h4>
            <p>
            <span>${data.education[i].title}</span>
            <span>${data.education[i].desc}</span><br>
            </p>`;

            console.log('li: ', li)
            educationList.appendChild(li);

        }


        // gives us the json of the response body


    } else {
        console.log("HTTP-Error: " + response.status);
    }
}

getToDo();