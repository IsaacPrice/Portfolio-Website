import './App.css'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { HoverLink } from './components/HoverLink'
import { GlowingText } from './components/GlowingText'

function App() {
    return (
        <div className="flex flex-col items-center">
            <div className="blob blob-purple" />
            <div className="blob blob-blue" />
            <h1 className="special">Isaac Price</h1>
            <h2 className="text-3xl">Something important here</h2>

            <div className="flex flex-row flex-wrap gap-8 w-screen justify-center">
                <div className="flex flex-row items-center justify-between align-center gap-4 w-xl">
                    <img src="image.png" alt="Professional Photo of Isaac Price" className="size-sm w-1/2 text-right" />
                    <div className="flex flex-col justify-space-evenly w-1/2">
                        <HoverLink
                            iconPrefix={ <Mail className="size-5 text-gray-300" /> }
                            text="IPrice25250@gmail.com"
                            external={true}
                            href="mailto:iprice25250@gmail.com"
                            variant="underlineAccent"
                            />
                        <HoverLink
                            iconPrefix={ <Phone className="size-5 text-gray-300" /> }
                            text="(574) 377-2752"
                            variant="underlineAccent"
                            />
                        <HoverLink
                            iconPrefix={ <Linkedin className="size-5 text-gray-300" /> }
                            text="LinkedIn"
                            href="https://www.linkedin.com/in/isaac-price-187b3b2a4/"
                            external={true}
                            variant="underlineAccent"
                            />             
                        <HoverLink
                            iconPrefix={ <Github className="size-5 text-gray-300" /> }
                            text="@IsaacPrice"
                            href="https://github.com/IsaacPrice"
                            external={true}
                            variant="underlineAccent"
                            />
                    </div>
                </div>

                <div className="lg:w-xl sm:w-screen flex flex-col items-center">
                    <GlowingText>Work Experience</GlowingText>
                    <h3 className="text-xl">Peakey Enterprises LLC</h3>
                    <p>May 2024 - Current</p>
                    <p>Programming Goblin</p>
                    <p>We work on code for people</p>
                </div>

                <div className="lg:w-xl sm:w-screen flex flex-col items-center">
                    <GlowingText>Projects</GlowingText>
                    <h3 className="text-xl">BRBLL - Fitness app</h3>
                    <p>Typescript, React-Native, C#, Dotnet, AWS</p>
                    <p className="pb-8">Just a pretty generic workout app, but it's mine and I like it. It's closed source and you can checkout the app on google play or the app store (if it ever gets there).</p>
                    <h3 className="text-xl">Mario DS AI</h3>
                    <p>Python, Pytorch</p>
                    <p>An Reinforcement learning algorithim to learn to play <i>New Super Mario Bros</i>, specifically the Rainbow DQN.</p>
                </div>
                
                <div className="lg:w-xl sm:w-screen">
                    <GlowingText className="text-center">Education</GlowingText>
                    <h3 className="text-xl">Purdue University West Lafyette - CS: AI - Currently enrolled</h3>
                    <h3 className="text-xl">Warsaw Public High School - Graduated 2025</h3>
                </div>     

                <div className="lg:w-xl sm:w-screen flex flex-col items-center">
                    <GlowingText>Skills</GlowingText>
                    <p>C's, Java, Python, Javascript / Typescript, HTML, CSS</p>
                    <p>React, React Native, Angular, MUI, .NET, PyTorch</p>
                    <p>Git, VS Code, AWS, NGINX, Neovim</p>
                </div>
            </div>
        </div>
    )
}

export default App
