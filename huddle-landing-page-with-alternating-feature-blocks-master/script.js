const sections = document.querySelectorAll('.reveal')

const ratio = .1;
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

const revealSection = (entries, observer) => {
  const [entry] = entries;
  if(entry.intersectionRatio > ratio) {
    entry.target.classList.remove('hidden');
    observer.unobserve(entry.target)
  }
 
}


const sectionObserver = new IntersectionObserver(revealSection, options);



  sections.forEach(section =>  {
    sectionObserver.observe(section);
    section.classList.add('hidden');
  })
