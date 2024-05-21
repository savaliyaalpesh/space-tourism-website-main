const tabList = document.querySelector('[role="tabList"]');
const tabs = tabList.querySelectorAll('[role="tab"]');


tabList.addEventListener("keydown", changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener("click", changeTabPanel)
});


let tabFocus = 0;
function changeTabFocus(e) {
    if(e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
    }

    if(e.keycode === keydownRight) {
        tabFocus++;
        if(tabFocus >= tabs.length) {
            tabFocus = 0;
        }
    }
    
    if (e.keycode === keydownLeft) {
        tabFocus--;
        if(tabFocus < 0) {
            tabFocus = tabs.length -1;
        }
    }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
}

function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image");
    
    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;
    console.log(tabContainer)
    console.log(mainContainer)

    console.log(targetPanel);
console.log(targetImage);

    tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);
    
    targetTab.setAttribute("aria-selected", true);

    
    hideContent(mainContainer, '[role="tabpanel"]');
    showContent(mainContainer, [`#${targetPanel}`])

    hideContent(mainContainer, 'picture')
    showContent(mainContainer, [`#${targetImage}`])

}


function hideContent(parent, content) {
    parent
        .querySelectorAll(content)
        .forEach((item) => item.setAttribute("hidden", true));
}

function showContent(parent, content) {
    parent.querySelector(content).removeAttribute("hidden");
}


