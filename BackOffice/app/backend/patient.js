
$(function () {
    var $getDossier = $('#getPatient');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/dossier',
        success: function (getDossier) {
            $.each(getDossier, function (i, PassientRow) {
                $getDossier.append(`<tr>
        <td id="catName"> ${PassientRow.prenom}</td>
        <td id="catName"> ${PassientRow.nom}</td>
        <td id="catName"> ${PassientRow.cin}</td>
        <td id="catName"> ${PassientRow.email}</td>
        <td id="catName"> ${PassientRow.telephone}</td>
        <td class="text-center py-0 align-middle">
            <div class="btn-group btn-group-sm">
                <a type="button" onclick="updateCategory('${PassientRow._id}')" class="btn btn-primary">Edite</a>
                <a type="button" onclick="deletePatient('${PassientRow._id}')" class="btn btn-danger text-white">Delete</a>
            </div>
        </td></tr>`)
            });
        }
    });

})

// add new category 

$('#add_pate').on('click', function (e) {
    let $nom = $('#nom');
    let $prenom = $('#prenom');
    let $cin = $('#cin');
    let $email = $('#email');
    let $telephone = $('#telephone');
    $.post({
                    method: 'POST',
                    url: 'http://localhost:8080/dossier/add',
                    processData: true,
                    data: {
                        nom: $nom.val(),
                        prenom: $prenom.val(),
                        cin: $cin.val(),
                        email: $email.val(),
                        telephone: $telephone.val(),
                       
                    },
                    success: function () {
                        location.reload();
                    },
                    timeout: 1000
                })
        });










// DELETE PRODUCT
function deletePatient(id) { 
    $.ajax({
        method: 'DELETE',
        url: 'http://localhost:8080/dossier/delete/' + id,
        success: function () {
            location.reload();
        },
        timeout: 1000
    })
}



// __________________________ update Product  ___________________________
function updatePatient(_id) {
    var $nom = $('#nom');
    var $prenom = $('#prenom');
    var $cin = $('#cin');
    var $email = $('#email');
    var $telephone = $('#telephone');

    $.ajax({
        method: 'PUT',
        url: 'http://localhost:8080/patient/update/' + _id,
        data: {
            nom: $nom.val(),
            prenom: $prenom.val(),
            cin: $cin.val(),
            email: $email.val(),
            telephone: $telephone.val(),
        
        },
        success: function (data) {

            location.reload();
        }
    })
}
