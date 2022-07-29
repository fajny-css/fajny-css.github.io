// Copy button
const copyButtons = document.querySelectorAll(".copy")

if (copyButtons.length > 0) {
    copyButtons.forEach(button => {
        const iconCopy = "clipboard-solid"
        const iconCopied = "check-solid"

        button.innerHTML = `<svg class="icon"><use xlink:href="/assets/icons/icon-sprite.svg#${iconCopy}"></use></svg>`

        new ClipboardJS(button)

        button.addEventListener("click", () => {
            button.innerHTML = `<svg class="icon"><use xlink:href="/assets/icons/icon-sprite.svg#${iconCopied}"></use></svg>`
            button.classList.add("copied")

            setTimeout(() => {
                button.innerHTML = `<svg class="icon"><use xlink:href="/assets/icons/icon-sprite.svg#${iconCopy}"></use></svg>`
                button.classList.remove("copied")
            }, 1000)
        })
    })
}

// Search components
const searchInput = document.querySelector("#filter-components")

if (searchInput) {
    searchInput.addEventListener("keyup", () => {
        const filter = searchInput.value.toLowerCase()
        const componentsList = document.querySelector("#list-components")
        const items = componentsList.querySelectorAll("a")

        for (let i = 0; i < items.length; i++) {
            const a = items[i]
            const textValue = a.innerText

            if (textValue.toLowerCase().indexOf(filter) > -1) {
                items[i].style.display = ""
            } else {
                items[i].style.display = "none"
            }
        }
    })
}

// Search icons
const iconsList = document.querySelector("#icon-list")

if (iconsList) {
    const allIcons = iconsList.querySelectorAll(".card-icon")
    allIcons.forEach(card => card.classList.add("show"))

    // Filter
    let filter = document.querySelector('input[name="filters"]:checked').value

    const filters = document.querySelectorAll('input[name="filters"]')

    filters.forEach(input => {
        input.addEventListener("click", () => {
            filter = input.value

            if (filter !== "all") {
                allIcons.forEach(icon => {
                    if (icon.getAttribute("data-category") !== filter) {
                        icon.classList.remove("show")
                    } else {
                        icon.classList.add("show")
                    }
                })
            } else {
                allIcons.forEach(icon => icon.classList.add("show"))
            }
        })
    })

    // Search
    const searchIcon = document.querySelector("#search-icons")

    searchIcon.addEventListener("keyup", () => {
        const iconFilter = searchIcon.value.toLowerCase()

        for (let i = 0; i < allIcons.length; i++) {
            const a = allIcons[i]
            const textValue = a.innerText

            if (textValue.toLowerCase().indexOf(iconFilter) > -1) {
                allIcons[i].style.display = ""
            } else {
                allIcons[i].style.display = "none"
            }
        }
    })
}

// Hide header when modal is open
const modalOpen = document.querySelectorAll(".modal-open")
const header = document.querySelector(".header")
const btnModal = document.querySelectorAll(".open-modal")

const closeModal =
    document.querySelectorAll(".button-close") ||
    document.querySelectorAll(".btn-close")

const toggleHeader = () => {
    if (header.classList.contains("hidden")) {
        header.classList.remove("hidden")
    } else {
        header.classList.add("hidden")
    }
}

if (closeModal.length > 0) {
    closeModal.forEach(button => {
        button.addEventListener("click", () => toggleHeader())
    })
}
