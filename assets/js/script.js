// Copy button
const copyButtons = document.querySelectorAll(".copy")

if (copyButtons.length > 0) {
    copyButtons.forEach(button => {
        const iconCopy =
            '<svg class="icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M40.73 10.67V9.58C40.734 9.24261 40.6709 8.90779 40.5446 8.59494C40.4182 8.28209 40.231 7.99743 39.9938 7.75745C39.7566 7.51748 39.4742 7.32696 39.1628 7.19694C38.8515 7.06692 38.5174 6.99998 38.18 7H28.49V6.62C28.49 5.92513 28.214 5.25873 27.7226 4.76738C27.2313 4.27603 26.5649 4 25.87 4H22.87C22.1751 4 21.5087 4.27603 21.0174 4.76738C20.526 5.25873 20.25 5.92513 20.25 6.62V7H10.55C10.2126 6.99998 9.87852 7.06692 9.56717 7.19694C9.25582 7.32696 8.97337 7.51748 8.73618 7.75745C8.499 7.99743 8.31179 8.28209 8.18542 8.59494C8.05905 8.90779 7.99602 9.24261 7.99999 9.58V10.67H40.73Z" fill="currentColor"/>\n<path d="M7.99999 14.31V41.45C7.99999 42.1263 8.26865 42.7749 8.74687 43.2531C9.22509 43.7313 9.87369 44 10.55 44H38.18C38.8563 44 39.5049 43.7313 39.9831 43.2531C40.4613 42.7749 40.73 42.1263 40.73 41.45V14.31H7.99999Z" fill="currentColor"/>\n</svg>'
        const iconCopied =
            '<svg class="icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M19.5107 39.9873C18.3658 39.9857 17.2676 39.5335 16.4536 38.7284L4.72437 27.0991C4.25356 26.6076 3.99359 25.9515 3.99999 25.2709C4.0064 24.5903 4.27866 23.9391 4.75864 23.4566C5.23861 22.974 5.88825 22.6982 6.56881 22.6881C7.24937 22.678 7.90691 22.9344 8.40098 23.4025L19.3909 34.3924L39.2625 9.11572C39.4665 8.82695 39.7271 8.58268 40.0285 8.39776C40.3298 8.21285 40.6657 8.09115 41.0155 8.04006C41.3654 7.98897 41.722 8.00957 42.0636 8.10059C42.4052 8.19161 42.7248 8.35116 43.0029 8.56954C43.2809 8.78792 43.5117 9.06057 43.6811 9.37091C43.8505 9.68124 43.955 10.0228 43.9883 10.3748C44.0216 10.7268 43.9829 11.0819 43.8747 11.4185C43.7665 11.755 43.591 12.0661 43.3588 12.3328L22.9376 38.3288C22.5574 38.8083 22.0809 39.2028 21.5389 39.4868C20.9968 39.7707 20.4012 39.9378 19.7905 39.9773L19.5107 39.9873Z" fill="currentColor"/>\n</svg>'

        button.innerHTML = iconCopy

        new ClipboardJS(button)

        button.addEventListener("click", () => {
            button.innerHTML = iconCopied
            button.classList.add("copied")

            setTimeout(() => {
                button.innerHTML = iconCopy
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
