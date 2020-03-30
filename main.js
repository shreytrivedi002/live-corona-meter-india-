const a = document.querySelector('ul');
const sec = document.getElementById('o2')
const head = document.getElementById('head');



fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india", {
    "method": "GET",
    "headers": {
        "x-host": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "x-key": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    }
})

.then((resp) => resp.json())
    .then(response => {
        // console.log(response.state_wise);
        // console.log(response)
        head.textContent = (`The total number of cases of Corona in INDIA are : ${response.total_values.active}`)

        console.log(response)
        for (const prop in response.state_wise) {
            const li = document.createElement('li')
            const span = document.createElement('h2')
            a.appendChild(li);
            li.appendChild(span);
            span.textContent = prop;

            // for (const x in response.state_wise) {
            //     const li1 = document.createElement('li')
            //     const span1 = document.createElement('h2')
            //     console.log(` Active cases : ${response.state_wise[prop].active}`)
            //     a.appendChild(li1);
            //     li.appendChild(span1);
            //     span.textContent = (`Active ${response.state_wise[prop].active}`)

            // if (prop == '') {


            //     // const hthree = document.createElement('h3');
            //     // span.appendChild(htree);
            //     // hthree.textContent = response.state_wise[prop].active
            //         // console.log(response.state_wise.active)
            //         // console.log(`${response.state_wise[att].active}`)


            // }


        }

        for (const n in response.state_wise) {
            const li1 = document.createElement('li')
            const span1 = document.createElement('h2')
            sec.appendChild(li1);
            li1.appendChild(span1);
            span1.textContent = response.state_wise[n].confirmed;
            console.log(` Confirmed cases : ${response.state_wise[n].confirmed}`)
        }




    })
    .catch(err => {
        console.log(err);
    });
