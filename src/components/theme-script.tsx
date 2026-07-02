// Runs before paint to apply the persisted theme, avoiding a flash of the
// wrong theme. Dark is the implicit default (base :root tokens); this only
// ever needs to add the .light override class.
const THEME_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    if (stored === "light") {
      document.documentElement.classList.add("light");
    }
  } catch (e) {}
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />;
}
