const panoramaImage = new PANOLENS.ImagePanorama("images/image.jpeg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
});

viewer.add(panoramaImage);