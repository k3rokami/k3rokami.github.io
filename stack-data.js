/* ==========================================================================
   SHARED TECH STACK — used by index.html (Tech stack section) and
   resume.html (Skills section). Edit here once; both pages update.

   icon = devicon slug on jsDelivr (https://devicon.dev); null = text-only chip.
   ========================================================================== */
(function () {
  const stackGroups = [
    { group: 'Languages', items: [
      { name: 'Python', icon: 'python' },
      { name: 'C', icon: 'c' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'HTML/CSS', icon: 'html5' }
    ]},
    { group: 'Frameworks & Libraries', items: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Unity', icon: 'unity' },
      { name: 'VRChat SDK', icon: null }
    ]},
    { group: 'Tools & Platforms', items: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Figma', icon: 'figma' },
      { name: 'VS Code', icon: 'vscode' }
    ]}
  ];

  window.STACK_DATA = {
    DEVICON: n => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${n}/${n}-original.svg`,
    groups: stackGroups,
    // flat list (for the terminal `stack` command on index)
    flat: stackGroups.flatMap(g => g.items.map(i => i.name))
  };
})();
