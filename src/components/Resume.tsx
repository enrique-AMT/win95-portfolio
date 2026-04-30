import { Avatar, Checkbox, Fieldset, ProgressBar, Tab, Tabs } from '@react95/core';

function Resume() {
  return (
    <Tabs defaultActiveTab="About">
      <Tab title="About">
        <h3>About Enrique Marrero</h3>
        <Avatar src="https://media.licdn.com/dms/image/v2/D4E03AQE_K2vbM2RZNQ/profile-displayphoto-scale_400_400/B4EZsBCeLjHUAg-/0/1765248985651?e=1779321600&v=beta&t=3NRtWMC8WhGw4bCcZn4xZ2YisCOeikv915PLaYA7iNY" alt="Profile Picture" size="140px" />

        <p>Software Engineer | Tinkerer | Music Enthusiast</p>
        <Fieldset legend="Synopsis">
          <p>
            I'm a software engineer with experiences ranging from full-stack engineering to hardware & electronics tinkering. Main focuses are efficient and creative code, and providing a learning environment for those less knowledgeable.
          </p>
        </Fieldset>
      </Tab>
      <Tab title="Business Experience">
        <Fieldset legend="Software Engineer II - Indeed (2022 - PRESENT)">
          <p>
            Championed the development of several team and organization-wide initiatives, including:
          </p>
          <Checkbox readOnly checked>
            A tracking website for at-a-glance information on the final 50% migrations from on-premise applications and services to the cloud, reducing costs for the company.
          </Checkbox>
          <Checkbox readOnly checked>
           Improvements to an internal tool to allow for access to relevant business metrics, which reduced usage of unneeded resources by 25%.
          </Checkbox>
          <Checkbox readOnly checked>
           Improvements to an internal AI agent's responses by updating its glossary of terms to include commonly used terms, as well as adjustments to its ability to ask follow-up questions; which increased the reliability of responses by 50%.
          </Checkbox>
        </Fieldset>
        <Fieldset legend="Junior Technical Consultant - Fusionworks (2021 - 2022)">
          <p>
            Leveraged the usage of workflow autiomation tools and general software development skills to: 
          </p>
          <Checkbox readOnly checked>
            Improve and automate client processes
          </Checkbox>
          <Checkbox readOnly checked>
            Provide new experiences to interface with customers of client companies
          </Checkbox>
        </Fieldset>
      </Tab>
      <Tab title="Skills">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <Fieldset legend="Frontend">
            <ul>
              <li className="resume-skills">JavaScript (ES6+)</li>
              <ProgressBar percent={98} width="200px" />
              <li className="resume-skills">TypeScript</li>
              <ProgressBar percent={95} width="200px" />
            </ul>
          </Fieldset>
          <Fieldset legend="Backend">
            <ul>
              <li className="resume-skills">Java</li>
              <ProgressBar percent={100} width="200px" />
              <li className="resume-skills">Kotlin</li>
              <ProgressBar percent={92} width="200px" />
              <li className="resume-skills">Groovy</li>
              <ProgressBar percent={94} width="200px" />
              <li className="resume-skills">Spring</li>
              <ProgressBar percent={85} width="200px" />
              <li className="resume-skills">GraphQL</li>
              <ProgressBar percent={80} width="200px" />
            </ul>
          </Fieldset>
          <Fieldset legend="Development & Operations">
            <ul>
              <li className="resume-skills">Git & GitHub</li>
              <ProgressBar percent={99} width="200px" />
              <li className="resume-skills">Jest</li>
              <ProgressBar percent={80} width="200px" />
              <li className="resume-skills">Docker</li>
              <ProgressBar percent={75} width="200px" />
              <li className="resume-skills">CI/CD</li>
              <ProgressBar percent={70} width="200px" />
            </ul>
          </Fieldset>
          <Fieldset legend="Other">
            <ul>
              <li className="resume-skills">Microsoft Power Automate</li>
              <ProgressBar percent={90} width="200px" />
              <li className="resume-skills">Database Design & SQL</li>
              <ProgressBar percent={80} width="200px" />
            </ul>
          </Fieldset>
        </div>
      </Tab>
      <Tab title="Other">
        <Fieldset legend="More Info">
          <p>
            I am passionate about learning and getting my hands on new technologies and stacks. I've been interested technology and anything related since I was young and have always been interested in following this path.
          </p>
        </Fieldset>
        <Fieldset legend="Hobbies">
          <p>
            Aside from software tinkering, I do my fair share of hardware of hobbyist hardware work, particularly in the realm of electronics repairs. I also enjoy music and practice the guitar and drums in my free time, as well as enjoying amateur photography, specifically nature and architectural photography.
          </p>
        </Fieldset>
      </Tab>
    </Tabs>
  );
}

export default Resume;