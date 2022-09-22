const input = <HTMLInputElement>document.getElementById("input")
const button = <HTMLButtonElement>document.getElementById('button')


let content = input.value.split('\n')
let newArray: string[] = []
let result: Array<string[]> = []
let anchorTags: string[] = []

function separateLinks() {
    result = content.map(el => (
        el.replace(/\s/g, '').split('/').slice(1)
    ))
    result.forEach(el => {
        newArray.push(el[el.length - 2])
    })
    const reg = new RegExp("-", "g")
    newArray = newArray.map(link => {
        return link?.replace(reg, " ")
    })
    content = content.map(link => (
        link?.replace(/\s/g, '')
    )).map(el => (
        `<a href=${el} >.</a>`
    ))

    content.forEach((link,index1) => {
        const reg = new RegExp(">.<", "g")
        newArray.forEach((caption,index2) => {
            if (index1===index2) {
                anchorTags.push(link?.replace(reg, `>${caption}<`))
                return
            }
            return
        })
    })

    input.value=anchorTags.join("\n")

}


button.addEventListener('click', () => {
    separateLinks();
    console.log(content)
    console.log(newArray)
    console.log(anchorTags)

})




