/* ============================================================================
   EDIT THIS FILE TO UPDATE YOUR WHOLE WEBSITE
   All your personal information is here. You do not need to touch any other file.

   Rules (very simple):
   - Text goes inside 'single quotes'.
   - Keep the commas at the end of lines.
   - Anything like [this] in square brackets is a placeholder. Replace it or delete it.
   - If a quote mark is part of your text, write it like this:  I\'m  (backslash before it).
   ============================================================================ */

const SITE = {
  /* ------------------------------------------------------------------------
     PROFILE  (Home page)
     ------------------------------------------------------------------------ */
  profile: {
    name: 'Sazid Moontasir',

    // Typed out on the home page, right after "Hello, I'm Sazid Moontasir."
    tagline: 'First-year student in Urban and Regional Planning. I like designing and building apps.',

    // To use your own photo: put the file in the "assets" folder (e.g. profile.jpg)
    // and change this to:  'assets/profile.jpg'
    photo: 'assets/profile-placeholder.svg',
    photoAlt: 'Portrait of Sazid Moontasir',
    photoCaption: '[Caption, e.g. place or year]', // '' hides it

    institution: '[Your institution]',
    department: 'Urban and Regional Planning (BURP)',
    year: 'First year',
    location: '', // '' hides it. Example: 'Dhaka, Bangladesh'

    // Short biography. One line of text per paragraph.
    bio: [
      '[Write two or three sentences about yourself here: who you are, what you study, and what you enjoy.]',
    ],

    academicInterests: ['[Add your academic interests]'],
    technicalInterests: ['App design', 'App development', 'Building small tech projects'],
    futureGoals: ['[Add your future goals]'],
  },

  /* ------------------------------------------------------------------------
     EDUCATION
     Write them oldest first. The page shows the newest on top.
     To add a stage, copy one { ... }, block and paste it below. Delete a block to remove it.
     logo: use 'assets/logo-placeholder.svg' until you have a real logo in the assets folder.
     ------------------------------------------------------------------------ */
  education: [
    {
      logo: 'assets/logo-placeholder.svg',
      institution: '[Institution name]',
      level: 'University',
      subject: 'Bachelor of Urban and Regional Planning (BURP)',
      start: '[Year]',
      end: 'Present',
      description: '',
    },
  ],

  /* ------------------------------------------------------------------------
     SKILLS
     "level" is plain text, e.g. Learning, Beginner, Intermediate. Only write what is true.
     ------------------------------------------------------------------------ */
  skillGroups: [
    {
      title: 'Programming Languages',
      skills: [{ name: '[Add a language]', level: '[Level]' }],
    },
    {
      title: 'Software & Tools',
      skills: [{ name: '[Add a tool]', level: '[Level]' }],
    },
  ],

  // Optional. Use [] to hide this section.
  currentlyLearning: ['[What are you learning right now?]'],

  /* ------------------------------------------------------------------------
     WORK & EXPERIENCE
     category must be exactly one of:
       'Work Experience', 'Projects', 'Internships', 'Volunteering',
       'Freelance Work', 'Achievements', 'Certifications'
     Categories with no entries are hidden automatically.
     image / link / repo are optional: use '' to hide them.
     ------------------------------------------------------------------------ */
  experience: [
    {
      category: 'Projects',
      name: '[Project name]',
      role: 'Personal project',
      start: '[Date]',
      end: '',
      description: '[Describe what you built and why in one or two sentences.]',
      tech: ['[Technology]'],
      image: '',
      link: '',
      repo: '',
    },
  ],

  /* ------------------------------------------------------------------------
     SOCIAL & CONTACT
     Only the ones you fill in will appear on the Contact page.
     Paste full links (https://...). For email, write only the address.
     ------------------------------------------------------------------------ */
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
    github: '',
    email: '',
    website: '',
  },

  /* ------------------------------------------------------------------------
     SITE SETTINGS
     ------------------------------------------------------------------------ */
  footerNote: 'Written with intention.', // '' hides it
};
