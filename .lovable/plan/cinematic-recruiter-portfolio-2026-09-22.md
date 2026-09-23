# Cinematic Recruiter Portfolio

## Goal
Rebuild Shivpal Rathod’s portfolio as a premium, cinematic, recruiter-first single-page experience using the uploaded personal video and only facts and links verified in the uploaded HTML.

## Build
- Create a full-viewport film-frame hero with the optimized autoplaying video, restrained overlays, immediate recruiter details, work/contact actions, and verified social links.
- Add a compact responsive navigation with active-section state and an accessible mobile menu.
- Recompose the page as an editorial story: About, Engineering DNA, Featured Work, Experience, Skills, Proof of Work, Certifications, Current Focus, and Contact.
- Present all five real projects as large alternating product showcases. Add accessible project-detail overlays using only source-supported content; omit unsupported case-study claims and unavailable live demos.
- Turn the Bluestock internship into a cinematic timeline and preserve all verified education, skills, certifications, achievements, contact details, and links.
- Add restrained scroll reveals, subtle desktop parallax, purposeful project interactions, a desktop project cursor, reduced-motion fallbacks, visible focus states, and touch-safe behavior.
- Use the charcoal, warm-white, restrained orange/gold, and subtle mint visual system with editorial sans-serif typography and selective mono labels.

## Technical details
- Keep the TanStack Start structure and implement the portfolio at `/` with React and Tailwind v4 semantic tokens.
- Serve the uploaded MP4 and generated poster through project assets; use `preload="metadata"`, muted autoplay, inline playback, looping, and no controls.
- Use lightweight native browser APIs for motion and section tracking rather than adding a heavy animation library.
- Add unique home-page metadata, font links, and production accessibility semantics.
- Validate the live page at desktop and mobile sizes, verify interactions, and check for build/runtime errors.
