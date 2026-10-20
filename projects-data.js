/* ==========================================================================
   SHARED PROJECT DATA — used by both index.html (teaser grid) and
   projects.html (full page). Edit here once; both pages update.

   Each project (all fields optional except title):
     title    : card heading
     desc     : short line for the index teaser card
     long     : longer paragraph shown only on projects.html (falls back to desc)
     image    : path to a screenshot, e.g. './Projects/world.jpg' (optional)
     stack    : array of tech tags, e.g. ['Unity','C#']
     lang     : used by the filter tabs, e.g. 'JavaScript' (defaults to 'Other')
     repo     : source URL (GitHub icon) — leave '' for none
     live     : live/demo URL (↗ icon, and whole-card click target)
     featured : true = card spans two columns / larger on the full page
     stars    : number shown with a ★ (0 hides it)

   PROJECT_MODE (index teaser only):
     'manual' : show only the list below  (full control — default)
     'github' : repos pulled from GitHub
     'both'   : this list first, then GitHub repos
   TEASER_COUNT : how many projects the index grid shows before "View all".
   ========================================================================== */
(function () {
  const GH_USER = 'k3rokami';
  const GH = 'https://github.com/' + GH_USER;

  const myProjects = [
    { title: 'Personal Link Page', desc: 'Config-driven link-in-bio built with vanilla JS.',
      long: 'A config-driven link-in-bio built with vanilla JS: randomized animated backgrounds, a trilingual bio, and zero dependencies. Deployed on GitHub Pages.',
      image: '', stack: ['JavaScript','HTML','SCSS'], lang: 'JavaScript', featured: true, repo: GH + '/k3rokami.github.io', live: './index.html', stars: 0 },
    { title: 'VRChat Avatars', desc: 'Custom avatars via the VRChat SDK.',
      long: 'Custom avatars built with the VRChat SDK — expression menus, toggles, PhysBones, and performance-optimized rigs.',
      image: '', stack: ['Unity','C#','VRChat SDK'], lang: 'C#', repo: '', live: 'https://vrchat.com/', stars: 0 },
    { title: 'VRChat Worlds', desc: 'Interactive VR spaces with Udon logic.',
      long: 'Interactive VR spaces with Udon logic, optimized lighting, and custom props.',
      image: '', stack: ['Unity','Udon','C#'], lang: 'C#', repo: '', live: '', stars: 0 }
    // add a project by copying a block above and editing it. remove one by deleting its block.
  ];

  window.PROJECTS_DATA = {
    GH_USER, GH,
    PROJECT_MODE: 'manual',
    TEASER_COUNT: 6,
    projects: myProjects
  };
})();
