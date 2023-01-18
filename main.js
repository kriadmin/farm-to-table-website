veg = () => {
    let activeButton = Array.from(document.getElementsByClassName("active"));
    activeButton.forEach(element => {
        element.classList.remove("active");   
    });
    let hiddenItems = Array.from(document.getElementsByClassName("hidden-item"));
    hiddenItems.forEach(element => {
        element.classList.remove("hidden-item");
        element.classList.remove("d-none");
    })
    let nonVegItems = Array.from(document.getElementsByClassName("non-veg-item"));
    nonVegItems.forEach(item => {
        item.classList.add("hidden-item");
        item.classList.add("d-none");
    })
    document.getElementById("veg").classList.add("active");
};

non_veg = () => {
    let activeButton = Array.from(document.getElementsByClassName("active"));
    activeButton.forEach(element => {
        element.classList.remove("active");   
    });
    let hiddenItems = Array.from(document.getElementsByClassName("hidden-item"));
    hiddenItems.forEach(element => {
        element.classList.remove("hidden-item");
        element.classList.remove("d-none");
    })
    let vegItems = Array.from(document.getElementsByClassName("veg-item"));
    vegItems.forEach(item => {
        item.classList.add("hidden-item");
        item.classList.add("d-none");
    })
    document.getElementById("non-veg").classList.add("active");
};

combined = () => {
    let activeButton = Array.from(document.getElementsByClassName("active"));
    activeButton.forEach(element => {
        element.classList.remove("active");   
    });
    let hiddenItems = Array.from(document.getElementsByClassName("hidden-item"));
    hiddenItems.forEach(element => {
        element.classList.remove("hidden-item");
        element.classList.remove("d-none");
    })
    document.getElementById("combined").classList.add("active");
};

list = type => {
    allLists = Array.from(document.getElementsByClassName("lists"));
    allLists.forEach(list => {
        list.classList.add("d-none");
    })
    document.getElementById(`${type}-items`).classList.remove("d-none");
    allIcons = Array.from(document.querySelectorAll(".menu div div"));
    allIcons.forEach(icon => {
        icon.classList.remove("d-none");
    })
    currentIcon = document.getElementById(type).parentElement.parentElement.classList.add("d-none")
}