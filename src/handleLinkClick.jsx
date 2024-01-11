const handleLinkClick = (sectionId, offset, event) => {
  event.preventDefault();
  let scrollPosition = 0;

  if (sectionId !== "#") {
    const section = document.getElementById(sectionId);
    scrollPosition = section.offsetTop - offset;
  }
  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });
};

export default handleLinkClick;
