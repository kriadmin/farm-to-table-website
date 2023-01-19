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

retract = () => {
    allLists = Array.from(document.getElementsByClassName("lists"));
    allLists.forEach(list => {
        list.classList.add("d-none");
    })
    allIcons = Array.from(document.querySelectorAll(".menu div div"));
    allIcons.forEach(icon => {
        icon.classList.remove("d-none");
    })
}

loader = () => {
    let items = Array.from(document.getElementsByClassName("item-quantity"));
    items.forEach(item => {
        item.style.visibility = "hidden";
    })
}

addItem = element => {
    val = parseInt(element.getElementsByClassName("item-quantity")[0].attributes.count.value);
    if (val == 0) {
        val += 1;
        el = element.getElementsByClassName("item-quantity")[0]
        el.attributes.count.value = val;
        el.innerHTML = el.innerHTML.replace(/\n\s*(\d+)\n/, (a,b) => "\n          " + 1 + "\n");
        el.style.visibility = "";
    }
}

removeItem = element => {
    el = element.parentElement;
    val = parseInt(el.attributes.count.value);
    if (val != 1) {
        val -= 1;
        el.attributes.count.value = val;
        el.innerHTML = el.innerHTML.replace(/\n\s*(\d+)\n/, (a,b) => "\n          " + (parseInt(b) - 1) + "\n");
    }
    else{
        val -= 1;
        el.attributes.count.value = val;
        el.innerHTML = el.innerHTML.replace(/\n\s*(\d+)\n/, (a,b) => "\n          " + (parseInt(b) - 1) + "\n");
        el.style.visibility = "hidden";
        console.log(el)
    }
}

pay = () => {
    window.location = "upi://pay?pa=digipeispl@icici&pn=FarmToTable&tr=MNO8733029901&am=159&cu=INR&mc=5411";
}