const navBar = document.getElementById("nav-bar");

// Animation done with help from https://www.youtube.com/watch?v=LE9EaIZdjFM
const navOpenKeyframe = {
  width: "1.75in",
};
const navButtonOpenKeyframe = {
  width: "1.25in",
};
const navCloseKeyframe = {
  width: "1in",
};
const navButtonCloseKeyframe = {
  width: "0.5in",
};
const animationDuration = 250;


function getNavButtonText() {
  let buttonText = []

  for (const navigationButton of navBar.children) {
    buttonText.push(navigationButton.innerHTML)
  }

  return buttonText;
}


let navButtonText = getNavButtonText();

function openNav(event) {
  navBar.animate([
    navCloseKeyframe,
    navOpenKeyframe,
  ],
    {
      duration: animationDuration,
      fill: "forwards",
    }
  );
  for (let i = 0; i < navBar.children.length; i++) {
    navBar.children[i].animate([
      navButtonCloseKeyframe,
      navButtonOpenKeyframe,
    ],
      {
	duration: animationDuration,
	fill: "forwards",
      }
    );
    navBar.children[i].innerHTML = navButtonText[i];
  }
}

function closeNav(event) {
  for (const navigationButton of navBar.children) {
    navigationButton.innerHTML = "";
    navigationButton.animate([
      navButtonOpenKeyframe,
      navButtonCloseKeyframe,
    ],
      {
	duration: animationDuration,
	fill: "forwards",
      }
    );
  }
  navBar.animate([
    navOpenKeyframe,
    navCloseKeyframe,
  ],
    {
      duration: animationDuration,
      fill: "forwards",
    }
  );
}

closeNav();

