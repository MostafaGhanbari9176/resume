let openedImages = []

const imageList = [
    {
        name: "mr",
        images: [
            {img: "/img/doreyab/ic.png", showing: false},
            {img: "/img/doreyab/ic2.png", showing: false}
        ]
    }
]


$("#close").click(function () {
    resetOpenedImages()
    $("#imageContainer").hide('fast')
})

$(".showImage").click(function (ev) {
    ev.preventDefault()
    const id = $(this).attr('id')
    openedImages = imageList.find(i => i.name === id).images
    setImage(openedImages[0])
    $("#imageContainer").css('display', 'flex')
})

$("#arrowRight").click(function () {
    let _index = 0
    for (let i = (openedImages.length - 1); i >= 0; --i) {
        if (openedImages[i].showing)
            break
        _index = i
    }
    setImage(openedImages[_index])
})

$("#arrowLeft").click(function () {
    let _index = openedImages.length - 1
    for (let i = 0; i < openedImages.length; ++i) {
        if (openedImages[i].showing)
            break
        _index = i
    }
    setImage(openedImages[_index])
})

const setImage = (image) => {
    resetOpenedImages()
    $("#image").css('background-image', `url("${image.img}")`)
    image.showing = true
}

const resetOpenedImages = () => {
    openedImages.forEach((value, index) => {
        value.showing = false
    })
}
