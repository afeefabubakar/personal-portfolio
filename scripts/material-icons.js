import { registerIconLibrary } from 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.14.0/cdn/utilities/icon-library.js';

registerIconLibrary('material', {
  resolver: (name) => {
    const match = name.match(/^(.*?)(_(round|sharp))?$/);
    return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/${
      match[1]
    }/${match[3] || 'outline'}.svg`;
  },
  mutator: (svg) => svg.setAttribute('fill', 'currentColor'),
});
