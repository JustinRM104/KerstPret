let afbeeldingen = [
  ["https://render.fineartamerica.com/images/rendered/search/print/images/artworkimages/medium/1/leica-christmas-scott-norris.jpg", true],
  ["https://images.unsplash.com/photo-1544397838-37a35169ebf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", true],
  ["https://images.unsplash.com/photo-1544863308-ec385bbf5caa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", false],
  ["https://img.freepik.com/vrije-photo/kerstboom-met-rood-balornament-en-decoratie-fonkelingslicht_1484-2237.jpg?size=626&ext=jpg", true],
  ["https://images.unsplash.com/photo-1513273216459-54c4833d6b4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", true],
  ["http://www.worldhyundaiblog.com/wp-content/uploads/2011/12/BLACK_SANTA.jpg", false],
  ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe65v1rmgtqvZ4-1dUEu4JXbeCI-Hf4Ht9-2q3maLqKiEjML5H&s", true],
  ["https://images.unsplash.com/photo-1543598098-622a5e218f43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", true],
  ["https://render.fineartamerica.com/images/rendered/search/print/images/artworkimages/medium/1/public-garden-walk-susan-cole-kelly.jpg", true],
  ["https://images.pexels.com/photos/250177/pexels-photo-250177.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", true],
]

let wrapper = document.getElementById("wrapper")

for (var i = 0; i < afbeeldingen.length; i++) {
  let image = document.createElement("IMG");
  image.setAttribute("src", afbeeldingen[i][0]);
  image.setAttribute("alt", "Kerst Foto");

  if (afbeeldingen[i][1] == false) {
    image.setAttribute("class", "lang");
  }
  wrapper.appendChild(image);
}
