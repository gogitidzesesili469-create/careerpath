
const translations = {
  ka: {
    menu: "მთავარი მენიუ", dashboard: "მთავარი გვერდი",
    quiz: "პროფესიის ტესტი", universities: "უნივერსიტეტები",
    jobs: "ვაკანსიები", assistant: "AI ასისტენტი", cv: "ჩემი CV",
    saved: "შენახული", helpTitle: "იპოვე შენი გზა!",
    helpText: "შენი მომავალი შენს ხელშია.", startTest: "დაიწყე ტესტი →",
    user: "მომხმარებელი", welcomeTag: "YOUR FUTURE STARTS HERE",
    welcome: "აღმოაჩინე შენი მომავალი პროფესია.",
    welcomeText: "გაიცანი საკუთარი შესაძლებლობები, იპოვე სასურველი უნივერსიტეტი და დაგეგმე შენი წარმატება.",
    discover: "აღმოაჩინე შენი გზა →", overview: "შენი კარიერული სივრცე",
    overviewText: "ყველაფერი, რაც მომავლის დაგეგმვაში დაგეხმარება.",
    stat1: "პროფესიის ტესტი", stat2: "შენახული", stat3: "უნივერსიტეტები",
    popular: "პოპულარული მიმართულებები",
    popularText: "აღმოაჩინე საინტერესო პროფესიები.",
    explore: "ყველას ნახვა →", quick: "სწრაფი წვდომა",
    quick1: "პროფესიის ტესტი", quick2: "AI ასისტენტი",
    quick3: "უნივერსიტეტები", quick4: "შექმენი CV",
    quizTitle: "იპოვე შენი პროფესია",
    quizDescription: "უპასუხე კითხვებს და აღმოაჩინე, რომელი მიმართულებები შეესაბამება შენს ინტერესებს.",
    uniTitle: "უნივერსიტეტების ბაზა",
    uniDescription: "შეისწავლე უნივერსიტეტები საქართველოში და მსოფლიოს გარშემო.",
    jobsTitle: "ვაკანსიები და სტაჟირება",
    jobsDescription: "აღმოაჩინე კარიერული შესაძლებლობები და ისწავლე CV-ის მომზადება.",
    jobNotice: "ეს არის დემო მონაცემები და არა რეალური აქტიური ვაკანსიები. არასრულწლოვანმა სამუშაო შესაძლებლობები უფროსთან ერთად უნდა გადაამოწმოს.",
    aiTitle: "შენი კარიერული ასისტენტი",
    aiDescription: "დასვი შეკითხვები პროფესიებზე, განათლებასა და მომავალ გეგმებზე.",
    aiGreeting: "გამარჯობა! მე ვარ CareerPath-ის ასისტენტი. რით შემიძლია დაგეხმარო პროფესიის არჩევაში?",
    suggest1: "რომელი პროფესია შემეფერება?",
    suggest2: "როგორ მოვემზადო უნივერსიტეტისთვის?",
    cvTitle: "შექმენი შენი CV",
    cvDescription: "შეავსე ინფორმაცია და შექმენი მარტივი პროფესიული რეზიუმე.",
    fullName: "სრული სახელი", profession: "სასურველი მიმართულება",
    education: "განათლება", skills: "უნარები",
    experience: "გამოცდილება / პროექტები",
    generateCV: "CV-ის შექმნა ↓",
    previewTitle: "შენი CV აქ გამოჩნდება",
    previewText: "შეავსე ფორმა და დააჭირე შექმნის ღილაკს.",
    savedTitle: "შენახული მასალა",
    savedDescription: "შენი რჩეული პროფესიები და უნივერსიტეტები.",
    footer: "შენი მომავალი იწყება დღეს.",
    back: "← უკან", next: "შემდეგი →"
  },
  en: {
    menu: "MAIN MENU", dashboard: "Dashboard",
    quiz: "Career Test", universities: "Universities",
    jobs: "Jobs", assistant: "AI Assistant", cv: "My CV",
    saved: "Saved", helpTitle: "Find Your Path!",
    helpText: "Your future is in your hands.", startTest: "Start Test →",
    user: "User", welcomeTag: "YOUR FUTURE STARTS HERE",
    welcome: "Discover your future career.",
    welcomeText: "Explore your strengths, find universities and plan your success.",
    discover: "Discover Your Path →", overview: "Your Career Space",
    overviewText: "Everything you need to plan your future.",
    stat1: "Career Test", stat2: "Saved", stat3: "Universities",
    popular: "Popular Career Paths",
    popularText: "Explore interesting professions.",
    explore: "Explore all →", quick: "Quick Access",
    quick1: "Career Test", quick2: "AI Assistant",
    quick3: "Universities", quick4: "Create CV",
    quizTitle: "Find Your Career",
    quizDescription: "Answer the questions and discover careers matching your interests.",
    uniTitle: "University Database",
    uniDescription: "Explore universities in Georgia and around the world.",
    jobsTitle: "Jobs & Internships",
    jobsDescription: "Explore career opportunities and learn to build a CV.",
    jobNotice: "These are demo listings, not verified active vacancies. Minors should review opportunities with a trusted adult.",
    aiTitle: "Your Career Assistant",
    aiDescription: "Ask questions about careers, education and your future plans.",
    aiGreeting: "Hello! I'm CareerPath's assistant. How can I help you explore careers?",
    suggest1: "Which career suits me?",
    suggest2: "How do I prepare for university?",
    cvTitle: "Create Your CV",
    cvDescription: "Fill in your details and create a simple professional resume.",
    fullName: "Full Name", profession: "Desired Career",
    education: "Education", skills: "Skills",
    experience: "Experience / Projects",
    generateCV: "Generate CV ↓",
    previewTitle: "Your CV will appear here",
    previewText: "Complete the form and click the generate button.",
    savedTitle: "Saved Items",
    savedDescription: "Your favorite careers and universities.",
    footer: "Your future starts today.",
    back: "← Back", next: "Next →"
  }
};

let language = localStorage.getItem("careerLanguage") || "ka";
let savedItems = JSON.parse(localStorage.getItem("careerSaved") || "[]");
let quizAnswers = [];
let currentQuestion = 0;
let quizCompleted = false;

const careers = [
  {
    id: "designer",
    icon: "🎨",
    ka: "დიზაინერი",
    en: "Designer",
    descKa: "შექმენი ვიზუალური იდეები და დიზაინები.",
    descEn: "Create visual concepts and designs.",
    category: "Creative",
    skills: ["creativity", "visual"]
  },
  {
    id: "developer",
    icon: "💻",
    ka: "პროგრამისტი",
    en: "Software Developer",
    descKa: "შექმენი ვებსაიტები და პროგრამები.",
    descEn: "Build websites and software.",
    category: "Technology",
    skills: ["logic", "technology"]
  },
  {
    id: "lawyer",
    icon: "⚖️",
    ka: "იურისტი",
    en: "Lawyer",
    descKa: "შეისწავლე სამართალი და დაიცავი უფლებები.",
    descEn: "Study law and protect people's rights.",
    category: "Law",
    skills: ["communication", "analysis"]
  },
  {
    id: "psychologist",
    icon: "🧠",
    ka: "ფსიქოლოგი",
    en: "Psychologist",
    descKa: "შეისწავლე ადამიანის ქცევა და აზროვნება.",
    descEn: "Explore human behavior and thinking.",
    category: "Social",
    skills: ["communication", "empathy"]
  },
  {
    id: "business",
    icon: "📊",
    ka: "ბიზნეს მენეჯერი",
    en: "Business Manager",
    descKa: "მართე პროექტები და განავითარე იდეები.",
    descEn: "Manage projects and develop ideas.",
    category: "Business",
    skills: ["leadership", "analysis"]
  },
  {
    id: "translator",
    icon: "🌍",
    ka: "მთარგმნელი",
    en: "Translator",
    descKa: "იმუშავე ენებთან და კომუნიკაციასთან.",
    descEn: "Work with languages and communication.",
    category: "Languages",
    skills: ["communication", "languages"]
  }
];

const universities = [
  {
    id: "tsu",
    icon: "🎓",
    name: "თბილისის სახელმწიფო უნივერსიტეტი",
    english: "Ivane Javakhishvili Tbilisi State University",
    country: "Georgia",
    city: "თბილისი",
    description: "საქართველოს ერთ-ერთი წამყვანი სახელმწიფო უნივერსიტეტი.",
    website: "https://www.tsu.ge"
  },
  {
    id: "ilia",
    icon: "🏛️",
    name: "ილიას სახელმწიფო უნივერსიტეტი",
    english: "Ilia State University",
    country: "Georgia",
    city: "თბილისი",
    description: "განათლების, მეცნიერებისა და კვლევის მიმართულებები.",
    website: "https://iliauni.edu.ge"
  },
  {
    id: "free",
    icon: "📚",
    name: "თავისუფალი უნივერსიტეტი",
    english: "Free University of Tbilisi",
    country: "Georgia",
    city: "თბილისი",
    description: "ბიზნესი, სამართალი და სხვა აკადემიური მიმართულებები.",
    website: "https://freeuni.edu.ge"
  },
  {
    id: "harvard",
    icon: "🌎",
    name: "Harvard University",
    english: "Harvard University",
    country: "USA",
    city: "Cambridge",
    description: "კვლევითი უნივერსიტეტი აშშ-ში.",
    website: "https://www.harvard.edu"
  },
  {
    id: "oxford",
    icon: "🏰",
    name: "University of Oxford",
    english: "University of Oxford",
    country: "UK",
    city: "Oxford",
    description: "ისტორიული უნივერსიტეტი გაერთიანებულ სამეფოში.",
    website: "https://www.ox.ac.uk"
  },
  {
    id: "tum",
    icon: "🔬",
    name: "Technical University of Munich",
    english: "Technical University of Munich",
    country: "Germany",
    city: "Munich",
    description: "ტექნოლოგიებისა და ინჟინერიის მიმართულებები.",
    website: "https://www.tum.de"
  }
];

const jobs = [
  {
    titleKa: "გრაფიკული დიზაინის სასწავლო პროექტი",
    titleEn: "Graphic Design Learning Project",
    company: "CareerPath Demo",
    type: "Internship",
    location: "Remote",
    description: "სასწავლო პროექტი დიზაინის პორტფოლიოს შესაქმნელად."
  },
  {
    titleKa: "ვებპროგრამირების პრაქტიკა",
    titleEn: "Web Development Practice",
    company: "CareerPath Demo",
    type: "Junior",
    location: "Remote",
    description: "HTML, CSS და JavaScript-ის პრაქტიკული დავალებები."
  },
  {
    titleKa: "ბიზნეს იდეის შექმნის პროექტი",
    titleEn: "Business Idea Project",
    company: "CareerPath Demo",
    type: "Internship",
    location: "Remote",
    description: "სასწავლო პროექტი ბიზნეს იდეის დასამუშავებლად."
  },
  {
    titleKa: "დისტანციური სასწავლო დავალება",
    titleEn: "Remote Learning Assignment",
    company: "CareerPath Demo",
    type: "Remote",
    location: "Online",
    description: "დამწყებთათვის განკუთვნილი პორტფოლიოს პროექტი."
  }
];

// CAREER QUIZ

const questions = [
  {
    ka: "რომელი საქმიანობა გიზიდავს ყველაზე მეტად?",
    en: "Which activity interests you most?",
    options: [
      ["ვქმნი დიზაინებს და ვიზუალურ იდეებს", "Creating designs and visual ideas", "creative"],
      ["ვწერ კოდს და ვქმნი პროგრამებს", "Writing code and building software", "tech"],
      ["ვიკვლევ კანონებს და ვმსჯელობ", "Researching laws and debating", "law"],
      ["ვეხმარები ადამიანებს", "Helping people", "social"],
      ["ვგეგმავ პროექტებს და ბიზნესს", "Planning projects and businesses", "business"],
      ["ვსწავლობ ენებს და ვთარგმნი", "Learning and translating languages", "languages"]
    ]
  },
  {
    ka: "რომელი სასკოლო საქმიანობა მოგწონს?",
    en: "Which school activity do you enjoy?",
    options: [
      ["ხატვა და შემოქმედებითი დავალებები", "Art and creative projects", "creative"],
      ["მათემატიკა და ტექნოლოგიები", "Math and technology", "tech"],
      ["ისტორია და სამოქალაქო განათლება", "History and civics", "law"],
      ["დისკუსია და ადამიანების მოსმენა", "Discussions and listening", "social"],
      ["ორგანიზება და ლიდერობა", "Organizing and leadership", "business"],
      ["უცხო ენები", "Foreign languages", "languages"]
    ]
  },
  {
    ka: "როგორ გარემოში გირჩევნია მუშაობა?",
    en: "What kind of work environment do you prefer?",
    options: [
      ["შემოქმედებით სტუდიაში", "Creative studio", "creative"],
      ["ტექნოლოგიურ გუნდში", "Technology team", "tech"],
      ["სამართლებრივ ორგანიზაციაში", "Legal organization", "law"],
      ["ადამიანებთან ურთიერთობაში", "Working with people", "social"],
      ["კომპანიის მართვაში", "Managing a company", "business"],
      ["საერთაშორისო გარემოში", "International environment", "languages"]
    ]
  },
  {
    ka: "რომელი უნარის განვითარება გინდა?",
    en: "Which skill would you like to develop?",
    options: [
      ["კრეატიულობა", "Creativity", "creative"],
      ["ლოგიკური აზროვნება", "Logical thinking", "tech"],
      ["არგუმენტაცია", "Argumentation", "law"],
      ["ემპათია და კომუნიკაცია", "Empathy and communication", "social"],
      ["ლიდერობა", "Leadership", "business"],
      ["ენების ცოდნა", "Language skills", "languages"]
    ]
  },
  {
    ka: "რომელი შედეგი გაბედნიერებს?",
    en: "Which achievement would make you happy?",
    options: [
      ["ჩემი შექმნილი დიზაინის ნახვა", "Seeing a design I created", "creative"],
      ["ჩემი პროგრამის მუშაობა", "Seeing my software work", "tech"],
      ["სამართლიანი გადაწყვეტილების მიღება", "Reaching a fair decision", "law"],
      ["ადამიანისთვის დახმარება", "Helping someone", "social"],
      ["წარმატებული პროექტის შექმნა", "Building a successful project", "business"],
      ["სხვადასხვა კულტურასთან ურთიერთობა", "Connecting with different cultures", "languages"]
    ]
  },
  {
    ka: "რომელი სფეროს შესწავლა გინდა?",
    en: "Which field would you like to explore?",
    options: [
      ["ხელოვნება და დიზაინი", "Art and design", "creative"],
      ["პროგრამირება და IT", "Programming and IT", "tech"],
      ["სამართალი", "Law", "law"],
      ["ფსიქოლოგია", "Psychology", "social"],
      ["ბიზნესი და მენეჯმენტი", "Business and management", "business"],
      ["ენები და საერთაშორისო ურთიერთობები", "Languages and international relations", "languages"]
    ]
  }
];

function renderQuiz() {
  const q = questions[currentQuestion];
  const isEnglish = language === "en";

  document.getElementById("questionNumber").textContent =
    `${isEnglish ? "Question" : "კითხვა"} ${currentQuestion + 1} / ${questions.length}`;

  const percent = Math.round(currentQuestion / questions.length * 100);
  document.getElementById("progressPercent").textContent = percent + "%";
  document.getElementById("progressBar").style.width = percent + "%";

  document.getElementById("quizContent").innerHTML = `
    <h2 class="question-title">${isEnglish ? q.en : q.ka}</h2>
    <div class="answer-list">
      ${q.options.map((option, index) => `
        <label class="answer-option ${quizAnswers[currentQuestion] === option[2] ? "selected" : ""}">
          <input type="radio" name="answer" value="${option[2]}"
            ${quizAnswers[currentQuestion] === option[2] ? "checked" : ""}>
          ${isEnglish ? option[1] : option[0]}
        </label>
      `).join("")}
    </div>
  `;

  document.getElementById("backBtn").disabled = currentQuestion === 0;
  document.getElementById("nextBtn").textContent =
    currentQuestion === questions.length - 1
      ? (isEnglish ? "See Results →" : "შედეგების ნახვა →")
      : (isEnglish ? "Next →" : "შემდეგი →");

  document.getElementById("quizResult").classList.add("hidden");
}

function nextQuestion() {
  const selected = document.querySelector('input[name="answer"]:checked');

  if (!selected) {
    showToast(language === "en" ? "Please select an answer." : "გთხოვ, აირჩიე პასუხი.");
    return;
  }

  quizAnswers[currentQuestion] = selected.value;

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuiz();
  } else {
    finishQuiz();
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (selected) quizAnswers[currentQuestion] = selected.value;
    currentQuestion--;
    renderQuiz();
  }
}

function finishQuiz() {
  quizCompleted = true;

  const scores = {};
  quizAnswers.forEach(answer => {
    scores[answer] = (scores[answer] || 0) + 1;
  });

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const best = sorted.slice(0, 3);

  const result = document.getElementById("quizResult");
  const recommendations = best.map(([category, score]) => {
    const career = careers.find(c => c.category ===
      ({
        creative: "Creative",
        tech: "Technology",
        law: "Law",
        social: "Social",
        business: "Business",
        languages: "Languages"
      })[category]);

    return career ? `
      <div class="career-card">
        <div class="career-emoji">${career.icon}</div>
        <h3>${language === "en" ? career.en : career.ka}</h3>
        <p>${language === "en" ? career.descEn : career.descKa}</p>
        <p>${language === "en" ? "Matching answers" : "დამთხვევა"}: ${score}/6</p>
        <div class="card-bottom">
          <span></span>
          <button class="save-btn" onclick="toggleSave('${career.id}')">♡</button>
        </div>
      </div>
    ` : "";
  }).join("");

  result.innerHTML = `
    <span class="eyebrow">YOUR RESULTS</span>
    <h2>${language === "en" ? "Your career directions!" : "შენი შესაძლო მიმართულებები!"}</h2>
    <p>${language === "en"
      ? "Based on your answers, these fields may be worth exploring. This is a reflection tool, not a professional assessment."
      : "შენი პასუხების მიხედვით, შეგიძლია გამოიკვლიო ეს სფეროები. ტესტი მხოლოდ თვითშემეცნების საშუალებაა და არა პროფესიული შეფასება."}</p>
    <div class="career-grid">${recommendations}</div>
    <button class="primary-btn" style="margin-top:20px" onclick="restartQuiz()">
      ${language === "en" ? "Try Again" : "ხელახლა გავლა"}
    </button>
  `;

  result.classList.remove("hidden");
  document.getElementById("quizContent").innerHTML = "";
  document.querySelector(".quiz-footer").style.display = "none";
  document.getElementById("progressBar").style.width = "100%";
  document.getElementById("progressPercent").textContent = "100%";
  document.getElementById("quizStat").textContent = "100%";
}

function restartQuiz() {
  currentQuestion = 0;
  quizAnswers = [];
  quizCompleted = false;
  document.querySelector(".quiz-footer").style.display = "flex";
  renderQuiz();
}

// SAVED ITEMS

function toggleSave(id) {
  const index = savedItems.indexOf(id);

  if (index === -1) {
    savedItems.push(id);
    showToast(language === "en" ? "Added to saved items!" : "წარმატებით შეინახა!");
  } else {
    savedItems.splice(index, 1);
    showToast(language === "en" ? "Removed from saved items." : "წაიშალა შენახულებიდან.");
  }

  localStorage.setItem("careerSaved", JSON.stringify(savedItems));
  updateSavedStats();
  renderCareers();
  renderUniversities();
  renderSaved();
}

function updateSavedStats() {
  document.getElementById("savedStat").textContent = savedItems.length;
}

function renderSaved() {
  const container = document.getElementById("savedGrid");

  const savedCareers = careers.filter(c => savedItems.includes(c.id));
  const savedUnis = universities.filter(u => savedItems.includes(u.id));

  if (!savedCareers.length && !savedUnis.length) {
    container.innerHTML = `
      <div class="panel" style="grid-column:1/-1;text-align:center;padding:45px">
        <h2>♡</h2>
        <p style="color:var(--muted);margin-top:12px">
          ${language === "en" ? "You haven't saved anything yet." : "ჯერ არაფერი შეგინახავს."}
        </p>
      </div>`;
    return;
  }

  container.innerHTML =
    savedCareers.map(c => `
      <div class="database-card">
        <div class="database-icon">${c.icon}</div>
        <h3>${language === "en" ? c.en : c.ka}</h3>
        <p>${language === "en" ? c.descEn : c.descKa}</p>
        <button class="save-btn saved" onclick="toggleSave('${c.id}')">♥</button>
      </div>
    `).join("") +
    savedUnis.map(u => `
      <div class="database-card">
        <div class="database-icon">${u.icon}</div>
        <h3>${language === "en" ? u.english : u.name}</h3>
        <p>${u.city}, ${u.country}</p>
        <button class="save-btn saved" onclick="toggleSave('${u.id}')">♥</button>
      </div>
    `).join("");
}

// CAREER CARDS

function renderCareers() {
  document.getElementById("careerGrid").innerHTML = careers.map(c => `
    <div class="career-card">
      <div class="career-emoji">${c.icon}</div>
      <h3>${language === "en" ? c.en : c.ka}</h3>
      <p>${language === "en" ? c.descEn : c.descKa}</p>
      <div class="card-bottom">
        <span class="tag">${c.category}</span>
        <button class="save-btn ${savedItems.includes(c.id) ? "saved" : ""}"
          aria-label="Save ${c.en}"
          onclick="toggleSave('${c.id}')">
          ${savedItems.includes(c.id) ? "♥" : "♡"}
        </button>
      </div>
    </div>
  `).join("");
}

// UNIVERSITIES

function renderUniversities() {
  const search = document.getElementById("uniSearch").value.toLowerCase();
  const country = document.getElementById("uniCountry").value;

  const filtered = universities.filter(u => {
    const matchesSearch =
      (u.name + " " + u.english + " " + u.city).toLowerCase().includes(search);
    const matchesCountry = country === "all" || u.country === country;
    return matchesSearch && matchesCountry;
  });

  document.getElementById("universityGrid").innerHTML = filtered.length
    ? filtered.map(u => `
      <div class="database-card">
        <div class="database-icon">${u.icon}</div>
        <span class="tag">${u.country}</span>
        <h3>${language === "en" ? u.english : u.name}</h3>
        <p>${u.description}<br>📍 ${u.city}</p>
        <div class="card-bottom">
          <button onclick="window.open('${u.website}', '_blank', 'noopener,noreferrer')">
            ${language === "en" ? "Official website ↗" : "ოფიციალური საიტი ↗"}
          </button>
          <button class="save-btn ${savedItems.includes(u.id) ? "saved" : ""}"
            onclick="toggleSave('${u.id}')">
            ${savedItems.includes(u.id) ? "♥" : "♡"}
          </button>
        </div>
      </div>
    `).join("")
    : `<p>${language === "en" ? "No universities found." : "უნივერსიტეტი ვერ მოიძებნა."}</p>`;
}

// JOBS

function renderJobs() {
  const search = document.getElementById("jobSearch").value.toLowerCase();
  const type = document.getElementById("jobType").value;

  const filtered = jobs.filter(job => {
    const title = language === "en" ? job.titleEn : job.titleKa;
    return (title + job.company).toLowerCase().includes(search) &&
      (type === "all" || job.type === type);
  });

  document.getElementById("jobsList").innerHTML = filtered.length
    ? filtered.map(job => `
      <div class="job-card">
        <div>
          <span class="tag">${job.type}</span>
          <h3>${language === "en" ? job.titleEn : job.titleKa}</h3>
          <p>${job.company} · ${job.location}</p>
          <p>${job.description}</p>
        </div>
        <button class="primary-btn" onclick="showToast('${language === "en" ? "Demo learning project, not an active vacancy." : "სასწავლო დემო პროექტია და არა აქტიური ვაკანსია."}')">
          ${language === "en" ? "View details" : "დეტალები"}
        </button>
      </div>
    `).join("")
    : `<p>${language === "en" ? "No results found." : "შედეგები ვერ მოიძებნა."}</p>`;
}

// AI DEMO ASSISTANT

function addMessage(text, type) {
  const container = document.getElementById("chatMessages");
  const message = document.createElement("div");
  message.className = "message " + (type === "user" ? "user-message" : "bot-message");
  message.textContent = text;
  container.appendChild(message);
  container.scrollTop = container.scrollHeight;
}

function getAIResponse(question) {
  const q = question.toLowerCase();

  if (/დიზაინ|design/.test(q)) {
    return language === "en"
      ? "Design has several paths: graphic design, UX/UI, interior design and fashion design. Start by exploring which type of creative work you enjoy. Build a small portfolio of original projects."
      : "დიზაინს რამდენიმე მიმართულება აქვს: გრაფიკული დიზაინი, UX/UI, ინტერიერის დიზაინი და მოდის დიზაინი. დაიწყე იმით, რომ გამოიკვლიო, რომელი შემოქმედებითი საქმიანობა მოგწონს. შექმენი შენი ნამუშევრების პატარა პორტფოლიო.";
  }

  if (/პროგრამ|program|coding|კოდ/.test(q)) {
    return language === "en"
      ? "Programming is a broad field. You can explore web development, software engineering, data and AI. Start with HTML, CSS and JavaScript, then build small projects."
      : "პროგრამირება ფართო სფეროა. შეგიძლია გამოიკვლიო ვებდეველოპმენტი, პროგრამული უზრუნველყოფა, მონაცემები და AI. დაიწყე HTML-ით, CSS-ითა და JavaScript-ით და შექმენი პატარა პროექტები.";
  }

  if (/სამართალ|law|იურისტ/.test(q)) {
    return language === "en"
      ? "Law includes civil, criminal, constitutional and international law. Develop reading, critical thinking, research and argumentation skills. Explore university admission requirements too."
      : "სამართალი მოიცავს სამოქალაქო, სისხლის, კონსტიტუციურ და საერთაშორისო სამართალს. განავითარე კითხვის, კრიტიკული აზროვნების, კვლევისა და არგუმენტაციის უნარები.";
  }

  if (/უნივერსიტეტ|university|სწავლ/.test(q)) {
    return language === "en"
      ? "Start by researching study programs, language requirements, admission criteria, tuition and scholarships. Compare official university websites and make a shortlist."
      : "დაიწყე სასწავლო პროგრამების, ენის მოთხოვნების, ჩარიცხვის პირობების, სწავლის საფასურისა და სტიპენდიების შესწავლით. შეადარე უნივერსიტეტების ოფიციალური ვებგვერდები.";
  }

  if (/პროფესი|career|შემეფერ|არჩევ/.test(q)) {
    return language === "en"
      ? "Explore your interests, favorite subjects and preferred activities. CareerPath's quiz can suggest several fields to research. Remember, a quiz is a starting point, not a final decision."
      : "გამოიკვლიე შენი ინტერესები, საყვარელი საგნები და საქმიანობები. CareerPath-ის ტესტი რამდენიმე მიმართულებას შემოგთავაზებს. გახსოვდეს, ტესტი მხოლოდ დასაწყისია და არა საბოლოო გადაწყვეტილება.";
  }

  if (/cv|რეზიუმე/.test(q)) {
    return language === "en"
      ? "A CV usually includes your contact details, education, skills, projects and relevant experience. Use the CV Builder section to create a draft."
      : "CV-ში ჩვეულებრივ შედის საკონტაქტო ინფორმაცია, განათლება, უნარები, პროექტები და შესაბამისი გამოცდილება. გამოიყენე CV Builder-ის განყოფილება.";
  }

  return language === "en"
    ? "That's an interesting question! Try telling me which field you are interested in: design, technology, law, business, psychology or languages. I can help you explore it."
    : "საინტერესო შეკითხვაა! მითხარი, რომელი სფერო გაინტერესებს: დიზაინი, ტექნოლოგიები, სამართალი, ბიზნესი, ფსიქოლოგია თუ ენები. დაგეხმარები მის გამოკვლევაში.";
}

function sendChat(question) {
  const clean = question.trim();
  if (!clean) return;

  addMessage(clean, "user");

  document.getElementById("chatInput").value = "";

  setTimeout(() => {
    addMessage(getAIResponse(clean), "bot");
  }, 350);
}

document.getElementById("chatForm").addEventListener("submit", e => {
  e.preventDefault();
  sendChat(document.getElementById("chatInput").value);
});

function askSuggestion(text) {
  sendChat(text);
}

// CV BUILDER

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

document.getElementById("cvForm").addEventListener("submit", e => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.target).entries());

  const safe = Object.fromEntries(
    Object.entries(data).map(([key, value]) => [key, escapeHTML(value)])
  );

  const preview = document.getElementById("cvPreview");

  preview.innerHTML = `
    <div class="cv-document">
      <h2>${safe.name}</h2>
      <p class="cv-email">${safe.email}</p>
      <span class="tag">${safe.profession || "CareerPath CV"}</span>

      <h4>${language === "en" ? "EDUCATION" : "განათლება"}</h4>
      <p>${safe.education || "—"}</p>

      <h4>${language === "en" ? "SKILLS" : "უნარები"}</h4>
      <p>${safe.skills || "—"}</p>

      <h4>${language === "en" ? "EXPERIENCE & PROJECTS" : "გამოცდილება და პროექტები"}</h4>
      <p>${safe.experience || "—"}</p>

      <button class="primary-btn cv-download" onclick="downloadCV()">
        ${language === "en" ? "Download CV ↓" : "ჩამოტვირთე CV ↓"}
      </button>
    </div>
  `;

  showToast(language === "en" ? "CV created successfully!" : "CV წარმატებით შეიქმნა!");
});

function downloadCV() {
  const documentElement = document.querySelector(".cv-document");
  if (!documentElement) return;

  const blob = new Blob(
    ["\ufeff" + documentElement.innerText],
    { type: "text/plain;charset=utf-8" }
  );

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "CareerPath-CV.txt";
  link.click();

  URL.revokeObjectURL(url);
}

// NAVIGATION

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const target = document.getElementById(pageId);
  if (!target) return;

  target.classList.add("active");

  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", item.dataset.page === pageId);
  });

  const names = {
    home: "Dashboard",
    quiz: "Career Test",
    universities: "Universities",
    jobs: "Jobs",
    assistant: "AI Assistant",
    cv: "CV Builder",
    saved: "Saved"
  };

  document.getElementById("pageName").textContent = names[pageId];
  document.getElementById("sidebar").classList.remove("open");

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (pageId === "quiz" && !quizCompleted) renderQuiz();
  if (pageId === "universities") renderUniversities();
  if (pageId === "jobs") renderJobs();
  if (pageId === "saved") renderSaved();
}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
}

// LANGUAGE

function toggleLanguage() {
  language = language === "ka" ? "en" : "ka";
  localStorage.setItem("careerLanguage", language);

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  renderCareers();
  renderUniversities();
  renderJobs();
  renderSaved();

  if (document.getElementById("quiz").classList.contains("active")) {
    if (quizCompleted) {
      quizCompleted = false;
      document.querySelector(".quiz-footer").style.display = "flex";
    }
    renderQuiz();
  }

  document.getElementById("chatInput").placeholder =
    language === "en" ? "Type your question..." : "დაწერე შეკითხვა...";
}

// NOTIFICATIONS

let toastTimer;

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// INITIALIZE

function initializeApp() {
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  renderCareers();
  renderUniversities();
  renderJobs();
  renderSaved();
  updateSavedStats();
  renderQuiz();

  document.getElementById("chatInput").placeholder =
    language === "en" ? "Type your question..." : "დაწერე შეკითხვა...";
}

initializeApp();
