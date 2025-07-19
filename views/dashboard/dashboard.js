function toggleSection(id) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (section.id === id) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

// EDUCATION
async function saveEducation() {
  const data = {
    title: document.getElementById('educationTitle').value,
    institution: document.getElementById('educationInstitution').value,
    location: document.getElementById('educationLocation').value,
    startDate: document.getElementById('educationStartDate').value,
    endDate: document.getElementById('educationEndDate').value,
    description: document.getElementById('educationDescription').value
  };

  await fetch('/api/education', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  loadEducation();
}

async function loadEducation() {
  const res = await fetch('/api/education');
  const list = await res.json();
  const container = document.getElementById('educationList');
  container.innerHTML = '';
  list.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.title} - ${item.institution}`;
    container.appendChild(div);
  });
}

// EXPERIENCE
async function saveExperience() {
  const data = {
    position: document.getElementById('experiencePosition').value,
    company: document.getElementById('experienceCompany').value,
    location: document.getElementById('experienceLocation').value,
    startDate: document.getElementById('experienceStartDate').value,
    endDate: document.getElementById('experienceEndDate').value,
    description: document.getElementById('experienceDescription').value
  };

  await fetch('/api/experience', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  loadExperience();
}

async function loadExperience() {
  const res = await fetch('/api/experience');
  const list = await res.json();
  const container = document.getElementById('experienceList');
  container.innerHTML = '';
  list.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.position} - ${item.company}`;
    container.appendChild(div);
  });
}

// SKILLS
async function saveSkills() {
  const text = document.getElementById('skillsInput').value;
  const skills = text.split(',').map(skill => skill.trim()).filter(Boolean);

  await fetch('/api/skills', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ skills })
  });

  loadSkills();
}

async function loadSkills() {
  const res = await fetch('/api/skills');
  const list = await res.json();
  const container = document.getElementById('skillsList');
  container.innerHTML = '';
  list.forEach(skill => {
    const div = document.createElement('div');
    div.textContent = skill;
    container.appendChild(div);
  });
}

// COURSES
async function saveCourse() {
  const data = {
    name: document.getElementById('courseName').value,
    provider: document.getElementById('courseProvider').value
  };

  await fetch('/api/courses', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  loadCourses();
}

async function loadCourses() {
  const res = await fetch('/api/courses');
  const list = await res.json();
  const container = document.getElementById('coursesList');
  container.innerHTML = '';
  list.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.name} - ${item.provider}`;
    container.appendChild(div);
  });
}

// SOFTWARE
async function saveSoftware() {
  const data = {
    name: document.getElementById('softwareName').value,
    level: document.getElementById('softwareLevel').value
  };

  await fetch('/api/software', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  loadSoftware();
}

async function loadSoftware() {
  const res = await fetch('/api/software');
  const list = await res.json();
  const container = document.getElementById('softwareList');
  container.innerHTML = '';
  list.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.name}${item.level ? ' - ' + item.level : ''}`;
    container.appendChild(div);
  });
}

// LANGUAGES
async function saveLanguage() {
  const data = {
    name: document.getElementById('languageName').value,
    level: document.getElementById('languageLevel').value
  };

  await fetch('/api/languages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  loadLanguages();
}

async function loadLanguages() {
  const res = await fetch('/api/languages');
  const list = await res.json();
  const container = document.getElementById('languagesList');
  container.innerHTML = '';
  list.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.name}${item.level ? ' - ' + item.level : ''}`;
    container.appendChild(div);
  });
}

// INTERESTS
async function saveInterest() {
  const data = {
    text: document.getElementById('interestText').value
  };

  await fetch('/api/interests', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  loadInterests();
}

async function loadInterests() {
  const res = await fetch('/api/interests');
  const list = await res.json();
  const container = document.getElementById('interestsList');
  container.innerHTML = '';
  list.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item.text;
    container.appendChild(div);
  });
}

// AUTOLOAD
window.onload = () => {
  loadEducation();
  loadExperience();
  loadSkills();
  loadCourses();
  loadSoftware();
  loadLanguages();
  loadInterests();
};




