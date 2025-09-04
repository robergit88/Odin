function inBox(box) {

    for (let i = 0; i < box.length; i++) {

        let element = box[i];

        let pos = element.indexOf("*");

        if (pos > 0) {

            if (element.charAt(0) == "#" &&
                element.endsWith("#")) {
                console.log(true)
            }
        }
    }

}

inBox([
    "###",
    "#*#",
    "###"
])