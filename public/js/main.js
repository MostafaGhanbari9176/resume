let openedImages = []

const imageList = [
    {
        name: "mr",
        images: [
            {img: "/img/mr/ic.png", showing: false},
            {img: "/img/mr/1.jpg", showing: false},
            {img: "/img/mr/2.jpg", showing: false},
            {img: "/img/mr/3.jpg", showing: false},
            {img: "/img/mr/4.jpg", showing: false},
            {img: "/img/mr/5.jpg", showing: false}
        ]
    },
    {
        name: "reminder",
        images: [
            {img: "/img/reminder/ic.png", showing: false},
            {img: "/img/reminder/1.jpg", showing: false},
            {img: "/img/reminder/2.jpg", showing: false},
            {img: "/img/reminder/3.jpg", showing: false},
            {img: "/img/reminder/4.jpg", showing: false},
            {img: "/img/reminder/5.jpg", showing: false},
            {img: "/img/reminder/6.jpg", showing: false}
        ]
    },
    {
        name: "les",
        images: [
            {img: "/img/les/1.png", showing: false},
            {img: "/img/les/2.png", showing: false},
            {img: "/img/les/3.png", showing: false},
            {img: "/img/les/4.png", showing: false},
            {img: "/img/les/5.png", showing: false},
            {img: "/img/les/6.png", showing: false},
            {img: "/img/les/7.png", showing: false},
            {img: "/img/les/8.png", showing: false},
            {img: "/img/les/9.png", showing: false},
            {img: "/img/les/10.png", showing: false},
            {img: "/img/les/11.png", showing: false},
            {img: "/img/les/13.png", showing: false},
            {img: "/img/les/14.png", showing: false},
            {img: "/img/les/15.png", showing: false},
            {img: "/img/les/16.png", showing: false},
            {img: "/img/les/17.png", showing: false},
        ]
    },
    {
        name: "coursefinder",
        images: [
            {img: "/img/coursefinder/ic.png", showing: false},
            {img: "/img/coursefinder/1.png", showing: false},
            {img: "/img/coursefinder/2.png", showing: false},
            {img: "/img/coursefinder/3.png", showing: false},
            {img: "/img/coursefinder/4.png", showing: false},
            {img: "/img/coursefinder/5.png", showing: false},
            {img: "/img/coursefinder/6.png", showing: false},
            {img: "/img/coursefinder/7.png", showing: false},
            {img: "/img/coursefinder/8.png", showing: false},
            {img: "/img/coursefinder/9.png", showing: false},
            {img: "/img/coursefinder/10.png", showing: false},
            {img: "/img/coursefinder/11.png", showing: false},
            {img: "/img/coursefinder/12.png", showing: false},
            {img: "/img/coursefinder/13.png", showing: false},
            {img: "/img/coursefinder/14.png", showing: false},
            {img: "/img/coursefinder/15.png", showing: false},
            {img: "/img/coursefinder/16.png", showing: false},
            {img: "/img/coursefinder/17.png", showing: false},
            {img: "/img/coursefinder/18.png", showing: false},
            {img: "/img/coursefinder/19.png", showing: false},
            {img: "/img/coursefinder/20.png", showing: false},
            {img: "/img/coursefinder/21.png", showing: false},
            {img: "/img/coursefinder/22.png", showing: false},
            {img: "/img/coursefinder/23.png", showing: false},
            {img: "/img/coursefinder/24.png", showing: false},
        ]
    },
    {
        name: "awesome",
        images: [
            {img: "/img/awesome/1.png", showing: false},
            {img: "/img/awesome/2.png", showing: false},
            {img: "/img/awesome/3.png", showing: false},
            {img: "/img/awesome/4.png", showing: false},
            {img: "/img/awesome/5.png", showing: false},
            {img: "/img/awesome/12.png", showing: false},
            {img: "/img/awesome/6.png", showing: false},
            {img: "/img/awesome/7.png", showing: false},
            {img: "/img/awesome/8.png", showing: false},
            {img: "/img/awesome/9.png", showing: false},
            {img: "/img/awesome/10.png", showing: false},
            {img: "/img/awesome/11.png", showing: false},
            {img: "/img/awesome/13.png", showing: false},
            {img: "/img/awesome/14.png", showing: false},
            {img: "/img/awesome/15.png", showing: false}
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

$('a').attr('target', '_blank')

$('a[href=""]').click(ev => {
    ev.preventDefault()
}).css('color', '#999').attr('title', 'هنوز راه اندازی نشده😊')
