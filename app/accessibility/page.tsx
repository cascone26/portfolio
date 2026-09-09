import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "BuiltSimple's commitment to web accessibility and WCAG 2.2 AA compliance.",
  alternates: {
    canonical: "https://builtsimple.dev/accessibility",
  },
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b1121] to-[#0f1629] py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Accessibility Statement</h1>
        <p className="text-gray-300 mb-8">BuiltSimple is committed to ensuring digital accessibility for people with disabilities.</p>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Commitment</h2>
            <p className="text-gray-300">We are committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. We aim to comply with the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA standard.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Standards Compliance</h2>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>WCAG 2.2 Level AA compliance</li>
              <li>Keyboard navigation support</li>
              <li>Color contrast ratios meet 4.5:1 standard for normal text</li>
              <li>Respect for user motion preferences (prefers-reduced-motion)</li>
              <li>Semantic HTML structure</li>
              <li>Alt text for images</li>
              <li>Properly labeled form fields</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Accessibility Features</h2>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Full keyboard navigation without relying on mouse</li>
              <li>Skip navigation links</li>
              <li>Readable fonts and adequate spacing</li>
              <li>Animations and transitions respect prefers-reduced-motion</li>
              <li>Focus indicators on all interactive elements</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Known Limitations</h2>
            <p className="text-gray-300 mb-2">We are continually working to improve the accessibility of this website. If you encounter an accessibility issue, please contact us so we can address it.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
            <p className="text-gray-300">If you experience any accessibility issues on this website, please <a href="/contact" className="text-blue-400 hover:text-blue-300">contact us</a> and describe the issue you encountered and the page on which the issue occurred.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Third-Party Content</h2>
            <p className="text-gray-300">This website may contain links to third-party websites and services. BuiltSimple is not responsible for the accessibility of external websites.</p>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">Last updated: September 2026</p>
        </div>
      </div>
    </main>
  );
}
