let checkboxes = document.querySelectorAll(
    '.filter-body .filter-category'
)
checkboxes.forEach((value, key, parent) => {
    value.addEventListener('click', () => {
        let checkbox = value.getElementsByTagName('input')[0]
        console.log(checkbox)
        checkbox.checked = !checkbox.checked
    })
})
