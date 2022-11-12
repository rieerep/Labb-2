window.onload = function () {


    // --------------------- JSON -------------------------- //
    let url = "rieerep/data.json"
    let workList = document.querySelector(".workList")
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
            <em>${data.work[i].title}</em><br>
            ${data.work[i].desc}<br>
            </p>`;
                workList.appendChild(li);

            }

            // EDUCATION
            for (let i = 0; i < data.education.length; i++) {
                let li = document.createElement("li");

                li.innerHTML = `<h4>${data.education[i].time}</h4>
            <p>
            <em>${data.education[i].title}</em>
            ${data.education[i].desc}<br>
            </p>`;
                educationList.appendChild(li);

            }


            // gives us the json of the response body


        } else {
            console.log("HTTP-Error: " + response.status);
        }
    }

    getToDo();

    // ---------------- MODAL BUTTON 1 ----------------- //
    let firstBtn = document.querySelector(".modal-btn1");
    const modal = document.querySelector(".modal1")
    const closeBtn1 = document.querySelector(".close-btn1")

    // Öppnar projekt 1:s fönster
    firstBtn.addEventListener('click', ReadMore1);

    function ReadMore1() {
        modal.style.display = "block"
    }

    //stänger projekt 1:s fönster
    closeBtn1.addEventListener('click', closeButtonOne);

    function closeButtonOne() {
        modal.style.display = "none"
    }
    // ---------- MODAL BUTTON 2 ------------------ //

    const secondBtn = document.querySelector(".modal-btn2");
    const modal2 = document.querySelector(".modal2")
    const closeBtn2 = document.querySelector(".close-btn2")

    // Öppnar projekt 2:s fönster
    secondBtn.addEventListener('click', ReadMore2);

    function ReadMore2() {
        console.log('test');
        modal2.style.display = "block"
    }

    //stänger projekt 2:s fönster
    closeBtn2.addEventListener('click', closeButtonTwo);

    function closeButtonTwo() {
        console.log('close button two', closeBtn2);
        modal2.style.display = "none"
    }
    let date = document.getElementById("date");
}