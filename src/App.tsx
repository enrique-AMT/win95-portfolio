import { AGENTS, ClippyProvider } from "@react95/clippy";
import Login from "./components/Login";
import WindowBar from "./components/WindowBar";
import { useAuth } from "./store/auth";
import DesktopIcon from "./components/DesktopIcon";
import Contact from "./components/Contact";
import { Wordpad, Mail, CdMusic } from "@react95/icons";
import Resume from "./components/Resume";

function App() {
  const authenticated = useAuth((state) => state.authenticated);
  return (
    <div style={{ width: "100%", background: "#098684", minHeight: "100vh", position: "relative" }}>
      {!authenticated && <Login />}

      {authenticated && (
        <ClippyProvider agentName={AGENTS.CLIPPY}>
          <div className="fixed">
            <DesktopIcon icon={<CdMusic variant="32x32_4" />} name="Music Picks">
              <iframe width={560} height={315} src="https://www.youtube.com/embed/videoseries?si=uSnO1tZjFV6JqZF7&amp;controls=0&amp;list=PLzmIFbnRkcrfpP3L-zUB-zrjdGVSdF_V1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>            </DesktopIcon>
            <DesktopIcon width={650} icon={<Wordpad variant="32x32_4" />} name="Resume">
              <Resume />
            </DesktopIcon>
            <DesktopIcon width={400} icon={<Mail variant="32x32_4" />} name="Contact">
              <Contact />
            </DesktopIcon>
          </div>
          <WindowBar />
        </ClippyProvider>
      )}
    </div>
  );
}

export default App;
