
$.ajax({
    url: 'https://jesusvaldezc.github.io/Desarrollo-Web/Lab3/data/grammys.json',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
        console.log(data)
        let newHtml = ''
        // console.log(data.fields[0].field)

        for (let i = 0; i < data.fields.length; i++) {
            newHtml +=
                `
                <option value="${data.fields[i].field}">
                ${data.fields[i].field}
                </option>
            `
        }
        $('#category_types').append(newHtml)
        loadCapitalJSON()
    },
    error: function (errorMsg) {
        console.log(errorMsg)

    }
})

function loadCapitalJSON() {

    $.ajax({
        url: 'https://jesusvaldezc.github.io/Desarrollo-Web/Lab3/data/grammys.json',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            $('#category_types').on('change', function (event) {

                // Reset html inside the nominee section to avoid infinite scroll.
                $('#nominees_section').html('');

                let id = $(this).val()
                let newHtml = ''

                console.log(id)

                                 // Filter the data with the id of the menu
                                let fieldData = data.fields.filter(
                                    (fieldObject) => (fieldObject.field === id)
                                )[0];
                
                                newHtml += `
                                    <h2>${fieldData.field}</h2>
                                    ${fieldData.description ? `<p>${fieldData.description}</p>`: ''}
                                `;

                                fieldData.categories.forEach(
                                    (category) => {
                                        newHtml += `
                                            <h3>${category.category_name}</h3>
                                        `;
                
                                        category.nominees.forEach(
                                            (nominee, index) => {
                                                if(category.winner_id === index)
                                                {
                                                    newHtml += `
                                                    <h4 class="winner">${nominee.nominee}</h4><span>WINNER!!!</span>
                                                    <p>${nominee.artist}</p>
                                                    <p>${nominee.info}</p>
                                                `;
                                                }
                                                else
                                                {
                                                    newHtml += `
                                                    <h4> ${nominee.nominee}</h4>
                                                    <p>${nominee.artist}</p>
                                                    <p>${nominee.info}</p>
                                                `;

                                                }      
                                            }
                                        );
                                    }
                                );
                 
                // console.log(fieldData, "FIELD DATA");

              /*   for (let i = 0; i < data.fields.length; i++) {
                    if (id === data.fields[i].field) 
                    {
                        newHtml +=
                            `
                        <h1>
                        ${data.fields[i].field}
                        </h1>

                    `

                    }
                } */
                $('#nominees_section').append(newHtml)
            })
        },
        error: function (errorMsg) {
            console.log(errorMsg)

        }
    })
}