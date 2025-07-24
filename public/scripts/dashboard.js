function toggleSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = section.id === id ? 'block' : 'none';
  });

  switch (id) {
    case 'education':
      loadEducation();
      break;
    case 'experience':
      loadExperience();
      break;
    case 'skills':
      loadSkills();
      break;
    case 'courses':
      loadCourses();
      break;
    case 'languages':
      loadLanguages();
      break;
    case 'software':
      loadSoftware();
      break;
    case 'interests':
      loadInterests();
      break;
  }
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

  await fetch('/education', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  loadEducation();
}

async function loadEducation() {
  const section = document.getElementById('education');
  section.innerHTML = `
    <form onsubmit="event.preventDefault(); saveEducation();">
      <input id="educationTitle" placeholder="Título" />
      <input id="educationInstitution" placeholder="Institución" />
      <input id="educationLocation" placeholder="Ubicación" />
      <input id="educationStartDate" placeholder="Inicio" />
      <input id="educationEndDate" placeholder="Fin" />
      <textarea id="educationDescription" placeholder="Descripción"></textarea>
      <button type="submit">Guardar</button>
    </form>
    <div id="educationList"></div>
  `;

  const res = await fetch('/education');
  const data = await res.json();
  const list = document.getElementById('educationList');
  list.innerHTML = data.map((item) => `
    <div class="card">
      <span class="delete" onclick="deleteEducation('${item._id}')">x</span>
      <strong>${item.title}</strong> - ${item.institution}<br>
      ${item.location}<br>
      ${item.startDate} - ${item.endDate}<br>
      <p>${item.description}</p>
    </div>
  `).join('');
}


async function deleteEducation(id) {
  await fetch(`/education/${id}`, { method: 'DELETE' });
  loadEducation();
}

// EXPERIENCE
async function saveExperience() {
  const data = {
    role: document.getElementById('experienceRole').value,
    company: document.getElementById('experienceCompany').value,
    location: document.getElementById('experienceLocation').value,
    startDate: document.getElementById('experienceStartDate').value,
    endDate: document.getElementById('experienceEndDate').value,
    description: document.getElementById('experienceDescription').value
  };

  await fetch('/experience', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  loadExperience();
}

async function loadExperience() {
  const section = document.getElementById('experience');
  section.innerHTML = `
    <form onsubmit="event.preventDefault(); saveExperience();">
      <input id="experienceRole" placeholder="Puesto" />
      <input id="experienceCompany" placeholder="Empresa" />
      <input id="experienceLocation" placeholder="Ubicación" />
      <input id="experienceStartDate" placeholder="Inicio" />
      <input id="experienceEndDate" placeholder="Fin" />
      <textarea id="experienceDescription" placeholder="Descripción"></textarea>
      <button type="submit">Guardar</button>
    </form>
    <div id="experienceList"></div>
  `;

  const res = await fetch('/experience');
  const data = await res.json();
  const list = document.getElementById('experienceList');
  list.innerHTML = data.map((item) => `
    <div class="card">
      <span class="delete" onclick="deleteExperience('${item._id}')">x</span>
      <strong>${item.role}</strong> - ${item.company}<br>
      ${item.location}<br>
      ${item.startDate} - ${item.endDate}<br>
      <p>${item.description}</p>
    </div>
  `).join('');
}


async function deleteExperience(id) {
  await fetch(`/experience/${id}`, { method: 'DELETE' });
  loadExperience();
}

// SKILLS
async function saveSkill() {
  const data = { name: document.getElementById('skillName').value };

  await fetch('/skill', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  loadSkills();
}

async function loadSkills() {
  const section = document.getElementById('skills');
  section.innerHTML = `
    <form onsubmit="event.preventDefault(); saveSkill();">
      <input id="skillName" placeholder="Skill" />
      <button type="submit">Guardar</button>
    </form>
    <div id="skillList"></div>
  `;

  const res = await fetch('/skill');
  const data = await res.json();
  const list = document.getElementById('skillList');
  list.innerHTML = data.map((item) => `
    <div class="card">
      <span class="delete" onclick="deleteSkill('${item._id}')">x</span>
      ${item.name}
    </div>
  `).join('');
}

async function deleteSkill(id) {
  await fetch(`/skill/${id}`, { method: 'DELETE' });
  loadSkills();
}

// COURSES
async function saveCourse() {
  const data = {
    name: document.getElementById('courseName').value,
    provider: document.getElementById('courseProvider').value
  };

  await fetch('/course', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  loadCourses();
}

async function loadCourses() {
  const section = document.getElementById('courses');
  section.innerHTML = `
    <form onsubmit="event.preventDefault(); saveCourse();">
      <input id="courseName" placeholder="Curso" />
      <input id="courseProvider" placeholder="Impartido por" />
      <button type="submit">Guardar</button>
    </form>
    <div id="courseList"></div>
  `;

  const res = await fetch('/course');
  const data = await res.json();
  const list = document.getElementById('courseList');
  list.innerHTML = data.map((item) => `
    <div class="card">
      <span class="delete" onclick="deleteCourse('${item._id}')">x</span>
      ${item.name} - ${item.provider}
    </div>
  `).join('');
}

async function deleteCourse(id) {
  await fetch(`/course/${id}`, { method: 'DELETE' });
  loadCourses();
}

// LANGUAGES
async function saveLanguage() {
  const data = {
    name: document.getElementById('languageName').value,
    level: document.getElementById('languageLevel').value
  };

  await fetch('/language', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  loadLanguages();
}

async function loadLanguages() {
  const section = document.getElementById('languages');
  section.innerHTML = `
    <form onsubmit="event.preventDefault(); saveLanguage();">
      <input id="languageName" placeholder="Idioma" />
      <input id="languageLevel" placeholder="Nivel" />
      <button type="submit">Guardar</button>
    </form>
    <div id="languageList"></div>
  `;

  const res = await fetch('/language');
  const data = await res.json();
  const list = document.getElementById('languageList');
  list.innerHTML = data.map((item) => `
    <div class="card">
      <span class="delete" onclick="deleteLanguage('${item._id}')">x</span>
      ${item.name} - ${item.level}
    </div>
  `).join('');
}

async function deleteLanguage(id) {
  await fetch(`/language/${id}`, { method: 'DELETE' });
  loadLanguages();
}

// SOFTWARE
async function saveSoftware() {
  const data = { name: document.getElementById('softwareName').value };

  await fetch('/software', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  loadSoftware();
}

async function loadSoftware() {
  const section = document.getElementById('software');
  section.innerHTML = `
    <form onsubmit="event.preventDefault(); saveSoftware();">
      <input id="softwareName" placeholder="Software" />
      <button type="submit">Guardar</button>
    </form>
    <div id="softwareList"></div>
  `;

  const res = await fetch('/software');
  const data = await res.json();
  const list = document.getElementById('softwareList');
  list.innerHTML = data.map((item) => `
    <div class="card">
      <span class="delete" onclick="deleteSoftware('${item._id}')">x</span>
      ${item.name}
    </div>
  `).join('');
}

async function deleteSoftware(id) {
  await fetch(`/software/${id}`, { method: 'DELETE' });
  loadSoftware();
}

// INTERESTS
async function saveInterest() {
  const data = { text: document.getElementById('interestDescription').value };

  await fetch('/interest', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  loadInterests();
}


async function loadInterests() {
  const section = document.getElementById('interests');
  section.innerHTML = `
    <form onsubmit="event.preventDefault(); saveInterest();">
      <textarea id="interestDescription" placeholder="Interés o dato personal"></textarea>
      <button type="submit">Guardar</button>
    </form>
    <div id="interestList"></div>
  `;

  const res = await fetch('/interest');
  const data = await res.json();
  const list = document.getElementById('interestList');
  list.innerHTML = data.map((item) => `
    <div class="card">
      <span class="delete" onclick="deleteInterest('${item._id}')">x</span>
      ${item.text}
    </div>
  `).join('');
}

async function deleteInterest(id) {
  await fetch(`/interest/${id}`, { method: 'DELETE' });
  loadInterests();
}

