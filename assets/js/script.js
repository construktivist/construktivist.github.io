

    // Initialize Cloud Firestore through Firebase
    firebase.initializeApp({
    apiKey: 'AIzaSyCvIzZi8ELrKZYduLFVHjzvDNPcx5CD8UY',
    authDomain: 'projects-84d0d.firebaseapp.com',
    projectId: 'projects-84d0d'
    });

    var db = firebase.firestore();

    $(document).ready(function(){
        db.collection("projects").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data(doc.id));
                $('#projectCards').append(`<div class="project-card col-sm-12 col-md-6 d-flex flex-column">
                <div class="project-card-title">
                    <h3>${doc.data(doc.id).name}</h3>
                </div>
                <div class="project-card-copy">
                    <p>${doc.data(doc.id).copy}</p>
                </div>
                <div class="project-card-links d-flex align-items-end flex-grow-1">
                ${doc.data(doc.id).repo == null ? `<div></div>` : `<a href="${doc.data(doc.id).repo}" target="_blank" class="btn">repo</a>`}

                ${doc.data(doc.id).web == null ? `<div></div>` : `<a href="${doc.data(doc.id).web}" target="_blank"class="btn">website</a>`}
                </div>`);
            });
        });
    });

    console.log('test')