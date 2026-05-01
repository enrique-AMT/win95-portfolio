import { Fieldset, Tab, Tabs } from '@react95/core';
import { Anchor } from 'react95'

function About() {
    return (
        <Tabs defaultActiveTab="About the website">
            <Tab title="About the website">
                <Fieldset legend="Codebase">
                    <p>
                        Based on the template by
                        <Anchor href='https://github.com/alishirani1384/win95-portfolio' target='_blank'>
                            alishirani1384
                        </Anchor>
                    </p>

                    <p>
                        Additional development by
                        <Anchor href='https://github.com/enrique-amt' target='_blank'>
                            Enrique Marrero
                        </Anchor>

                    </p>
                </Fieldset>
                <Fieldset legend="Styling and Libraries">
                    <p>
                        General styling, icons and design uses the 
                        <Anchor href="https://github.com/React95/React95" target='_blank'>
                            React95</Anchor>
                         component library
                    </p>
                </Fieldset>
            </Tab>
        </Tabs>
    );
}

export default About;