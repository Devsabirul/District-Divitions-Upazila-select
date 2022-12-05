fetch('./divisions.json')
    .then(response => { return response.json() })
    .then(data => {
        data.forEach(divisions => {
            const division = `<option value="${divisions.id}" >${divisions.bn_name}</option>`;
            document.querySelector('select').insertAdjacentHTML('beforeend', division);
        })

    })
    .catch(err => {
        console.log(err);

    })

function get_divition() {
    var division = document.getElementById('divition').value;
    document.getElementById('upazilas').innerHTML = "<option>উপজেলা পছন্দ করুন</option>";
    document.getElementById('districts').innerHTML = "<option>জেলা পছন্দ করুন</option>";
    document.getElementById('unions').innerHTML = "<option>ইউনিউন পছন্দ করুন</option>";


    fetch('./districts.json')
        .then(response => { return response.json() })
        .then(data => {

            let districts = data.filter(obj => division === obj.division_id)
            districts.forEach(districts => {
                const division = `<option class="removeall" value="${districts.id}" >${districts.bn_name}</option>`;
                document.getElementById('districts').insertAdjacentHTML('beforeend', division);
            })
        })
        .catch(err => {
            console.log(err);

        })
}

function get_districts() {
    var districts = document.getElementById('districts').value;

    fetch('./upazilas.json')
        .then(response => { return response.json() })
        .then(data => {

            let upazilas = data.filter(obj => districts === obj.district_id)
            upazilas.forEach(upazilas => {
                const upazila = `<option class="removeall" value="${upazilas.id}" >${upazilas.bn_name}</option>`;
                document.getElementById('upazilas').insertAdjacentHTML('beforeend', upazila);
            })
        })
        .catch(err => {
            console.log(err);

        })

}
function get_upazilas() {
    var upazilas = document.getElementById('upazilas').value;

    fetch('./unions.json')
        .then(response => { return response.json() })
        .then(data => {

            let unions = data.filter(obj => upazilas === obj.upazilla_id)
            unions.forEach(unions => {
                const union = `<option id="d" class="removeall" value="${unions.id}" >${unions.bn_name}</option>`;
                document.getElementById('unions').insertAdjacentHTML('beforeend', union);
            })

        })
        .catch(err => {
            console.log(err);

        })

}

