console.log("JS Loaded");

const startButton = document.getElementById("start-btn");
const landingPage = document.getElementById("landing-page");
const bootScreen = document.getElementById("boot-screen");
const terminal = document.getElementById("terminal");
const desktop = document.getElementById("desktop");

const loginWindow = document.getElementById("login-window");
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const loginResult = document.getElementById("login-result");

const progress = document.getElementById("progress");
const caseProgress = document.getElementById("case-progress");

const caseIcon = document.getElementById("case-icon");
const evidenceIcon = document.getElementById("evidence-icon");
const terminalIcon = document.getElementById("terminal-icon");
const memoryIcon = document.getElementById("memory-icon");
const networkIcon = document.getElementById("network-icon");
const vaultIcon = document.getElementById("vault-icon");
const emailIcon = document.getElementById("email-icon");
const resumeIcon = document.getElementById("resume-icon");

const caseWindow = document.getElementById("case-window");
const evidenceWindow = document.getElementById("evidence-window");
const terminalWindow = document.getElementById("terminal-window");
const memoryWindow = document.getElementById("memory-window");
const networkWindow = document.getElementById("network-window");
const vaultWindow = document.getElementById("vault-window");
const emailWindow = document.getElementById("email-window");
const resumeWindow = document.getElementById("resume-window");
const logWindow = document.getElementById("log-window");

const closeCase = document.getElementById("close-case");
const closeEvidence = document.getElementById("close-evidence");
const closeTerminal = document.getElementById("close-terminal");
const closeMemory = document.getElementById("close-memory");
const closeNetwork = document.getElementById("close-network");
const closeVault = document.getElementById("close-vault");
const closeEmail = document.getElementById("close-email");
const closeResume = document.getElementById("close-resume");
const closeLog = document.getElementById("close-log");

const logFile = document.getElementById("log-file");

const terminalInput = document.getElementById("terminal-input");
const terminalOutput = document.getElementById("terminal-output");

const router = document.getElementById("router");
const laptop = document.getElementById("laptop");
const server = document.getElementById("server");
const attacker = document.getElementById("attacker");

const deviceInfo = document.getElementById("device-info");
const answerNetwork = document.getElementById("answer-network");
const networkResult = document.getElementById("network-result");

const unlockPassword = document.getElementById("unlock-password");
const passwordInput = document.getElementById("password-input");
const vaultResult = document.getElementById("vault-result");

const emailResult = document.getElementById("email-result");
const phishAnswers = document.querySelectorAll(".phish-answer");

const answers = document.querySelectorAll(".answer");
const result = document.getElementById("result");
const memoryList = document.getElementById("memory-list");
const usbFile = document.getElementById("usb-file");

const usbWindow = document.getElementById("usb-window");

const closeUsb = document.getElementById("close-usb");
const photoFile=document.getElementById("photo-file");

const photoWindow=document.getElementById("photo-window");

const closePhoto=document.getElementById("close-photo");
const noteFile=document.getElementById("note-file");
const noteWindow=document.getElementById("note-window");
const closeNote=document.getElementById("close-note");
let recovery = 0;
let bootFinished = false;
let memoryUnlocked = false;

const bootMessages = [
    "Initializing Recovery Environment...",
    "",
    "Connecting to Recovery Server...",
    "[ OK ]",
    "",
    "Authenticating Investigator...",
    "[ OK ]",
    "",
    "Decrypting Memory Fragments...",
    "[ OK ]",
    "",
    "ACCESS GRANTED",
    "",
    "Press ENTER to continue..."
];

function updateProgress(value){

    recovery = value;

    progress.textContent = recovery + "%";
caseProgress.textContent = recovery + "%";

document.getElementById("progress-fill").style.width =
recovery + "%";
}

function typeText(messages){

    terminal.textContent = "";

    let messageIndex = 0;
    let charIndex = 0;

    function type(){

        if(messageIndex >= messages.length){

            bootFinished = true;
            return;

        }

        const currentMessage = messages[messageIndex];

        if(charIndex < currentMessage.length){

            terminal.textContent += currentMessage.charAt(charIndex);

            charIndex++;

            setTimeout(type,40);

        }

        else{

            terminal.textContent += "\n";

            messageIndex++;

            charIndex = 0;

            setTimeout(type,300);

        }

    }

    type();

}

if(startButton){

startButton.addEventListener("click",function(){

    landingPage.style.display="none";

    bootScreen.style.display="flex";

    typeText(bootMessages);

});

}

document.addEventListener("keydown",function(event){

    if(bootFinished && event.key==="Enter"){

        terminal.textContent += "\n\nLoading Desktop...";

        setTimeout(function(){

            bootScreen.style.display="none";

            if(loginWindow){

                loginWindow.style.display="block";

            }

            else{

                desktop.style.display="block";

            }

        },1200);

    }

});

if(loginBtn){

loginBtn.onclick=function(){

    if(

        username.value==="investigator" &&

        password.value==="breach"

    ){

        loginWindow.style.display="none";

        desktop.style.display="block";

    }

    else{

        loginResult.style.color="red";

        loginResult.innerHTML="Access Denied";

    }

};

}
if(caseIcon){

caseIcon.onclick=function(){

    caseWindow.style.display="block";

};

}

if(evidenceIcon){

evidenceIcon.onclick=function(){

    evidenceWindow.style.display="block";

};

}

if(terminalIcon){

terminalIcon.onclick=function(){

    terminalWindow.style.display="block";

    if(terminalInput){

        terminalInput.focus();

    }

};

}

if(memoryIcon){

memoryIcon.onclick=function(){

    memoryWindow.style.display="block";

};

}

if(networkIcon){

networkIcon.onclick=function(){

    networkWindow.style.display="block";

};

}

if(vaultIcon){

vaultIcon.onclick=function(){

    vaultWindow.style.display="block";

};

}

if(emailIcon){

emailIcon.onclick=function(){

    emailWindow.style.display="block";

};

}

if(resumeIcon && resumeWindow){

resumeIcon.onclick=function(){

    resumeWindow.style.display="block";

};

}

if(logFile){

logFile.onclick=function(){

    logWindow.style.display="block";

};

}

if(closeCase)
closeCase.onclick=function(){
    caseWindow.style.display="none";
};

if(closeEvidence)
closeEvidence.onclick=function(){
    evidenceWindow.style.display="none";
};

if(closeTerminal)
closeTerminal.onclick=function(){
    terminalWindow.style.display="none";
};

if(closeMemory)
closeMemory.onclick=function(){
    memoryWindow.style.display="none";
};

if(closeNetwork)
closeNetwork.onclick=function(){
    networkWindow.style.display="none";
};

if(closeVault)
closeVault.onclick=function(){
    vaultWindow.style.display="none";
};

if(closeEmail)
closeEmail.onclick=function(){
    emailWindow.style.display="none";
};

if(closeResume)
closeResume.onclick=function(){
    resumeWindow.style.display="none";
};

if(closeLog)
closeLog.onclick=function(){
    logWindow.style.display="none";
};
noteFile.onclick=function(){

noteWindow.style.display="block";

};

closeNote.onclick=function(){

noteWindow.style.display="none";

};

if(terminalInput){

terminalInput.addEventListener("keydown",function(event){

    if(event.key!=="Enter") return;

    const command=terminalInput.value.trim().toLowerCase();

    terminalOutput.innerHTML+=
    "<br><span class='green'>&gt;</span> "+command;

    if(command==="help"){

        terminalOutput.innerHTML+=
        "<br><br>Available Commands"+
        "<br>help"+
        "<br>dir"+
        "<br>decrypt"+
        "<br>status"+
        "<br>clear";

    }

    else if(command==="dir"){

        terminalOutput.innerHTML+=
        "<br>CaseFiles/"+
        "<br>Evidence/"+
        "<br>Memory/"+
        "<br>Vault/"+
        "<br>Email/"+
        "<br>Resume.pdf";

    }

    else if(command==="decrypt"){

        terminalOutput.innerHTML+=
        "<br>Decrypting memory fragment..."+
        "<br>Success.";

    }

    else if(command==="status"){

        terminalOutput.innerHTML+=
        "<br>Recovery Progress : "+recovery+"%";

    }

    else if(command==="clear"){

        terminalOutput.innerHTML="";

    }
    else if(command==="scan"){

terminalOutput.innerHTML+=
"<br>Scanning network..." +
"<br>1 infected device found.";

}

else if(command==="whoami"){

terminalOutput.innerHTML+=
"<br>investigator";

}

else if(command==="date"){

terminalOutput.innerHTML+=
"<br>12 July 2026";

}
else if(command==="matrix"){

terminalOutput.innerHTML+=

"<br>Wake up, Investigator...";

}

    else{

        terminalOutput.innerHTML+=
        "<br>Unknown command.";

    }

    terminalInput.value="";

    terminalOutput.scrollTop=
    terminalOutput.scrollHeight;

});

}


answers.forEach(function(button){

button.addEventListener("click",function(){

    const answer=this.dataset.answer;

    if(answer==="usb"){

        result.style.color="lime";

        result.innerHTML=
        "✔ Correct! USB Device introduced the malware.";

        if(!memoryUnlocked){

            memoryUnlocked=true;

            updateProgress(25);

            memoryList.innerHTML=`

            <div class="memory-card">

                <h3>Memory Fragment #1</h3>

                <p><strong>Recovered Skills</strong></p>

                <p>Java</p>

                <p>Python</p>

                <p>C++</p>

                <p>SQL</p>

            </div>

            `;

        }

    }

    else{

        result.style.color="red";

        result.innerHTML=
        "✖ Incorrect. Review the logs again.";

    }

});

});
router.onclick=function(){

    deviceInfo.innerHTML=
    "<h3>Firewall</h3><p>No suspicious activity detected.</p>";

};

server.onclick=function(){

    deviceInfo.innerHTML=
    "<h3>File Server</h3><p>Files were encrypted after malware execution.</p>";

};

attacker.onclick=function(){

    deviceInfo.innerHTML=
    "<h3>Unknown Device</h3><p>External connection detected after infection.</p>";

};

laptop.onclick=function(){

    deviceInfo.innerHTML=
    "<h3>Employee PC</h3><p>USB inserted. Malware executed. Initial compromise started here.</p>";

};
usbFile.onclick = function(){

    usbWindow.style.display = "block";

};
closeUsb.onclick = function(){

    usbWindow.style.display = "none";

};
photoFile.onclick=function(){

    photoWindow.style.display="block";

};
closePhoto.onclick=function(){

    photoWindow.style.display="none";

};

if(answerNetwork){

answerNetwork.onclick=function(){

    networkResult.style.color="lime";

    networkResult.innerHTML=
    "✔ Correct! Employee PC was the first compromised device.";

    if(recovery<50){

        updateProgress(50);

    }

};

}

if(unlockPassword){

unlockPassword.onclick=function(){

    const enteredPassword=passwordInput.value.trim().toLowerCase();

    if(enteredPassword==="java"){

        vaultResult.style.color="lime";

        vaultResult.innerHTML=
        "✔ Vault Successfully Unlocked";

        if(recovery<75){

            updateProgress(75);

        }

        memoryList.innerHTML+=`

        <div class="memory-card">

            <h3>Memory Fragment #2</h3>

            <p><strong>Favorite Language</strong></p>

            <p>Java</p>

        </div>

        `;

    }

    else{

        vaultResult.style.color="red";

        vaultResult.innerHTML=
        "Incorrect Password";

    }

};

}

phishAnswers.forEach(function(button){

button.addEventListener("click",function(){

    if(this.dataset.answer==="sender"){

        emailResult.style.color="lime";

        emailResult.innerHTML=
        "✔ Correct! Fake sender detected. This is a phishing email.";

        updateProgress(100);

        if(resumeIcon){

            resumeIcon.style.opacity="1";

            resumeIcon.style.pointerEvents="auto";

        }

        if(resumeWindow){

            const resumeContent=
            resumeWindow.querySelector(".window-content");

            if(resumeContent){

                resumeContent.innerHTML=`

                <h2>Identity Restored</h2>

                <hr>

                <h3>Rishima Sharma</h3>

                <p><strong>Cyber Security Student</strong></p>

                <p>Java | Python | C++ | SQL</p>

                <p>HTML | CSS | JavaScript</p>

                <p>AWS | Wireshark | Nmap</p>

                <p>Git | GitHub</p>

                <br>

                <p>
                Congratulations Investigator!
                Your digital identity has been restored.
                </p>

                `;

            }

        }

        setTimeout(function(){

            alert(
            "🎉 Investigation Complete!\n\nIdentity Successfully Restored!"
            );

        },500);

    }

    else{

        emailResult.style.color="red";

        emailResult.innerHTML=
        "✖ Incorrect. Inspect the sender and links carefully.";

    }

});

});
let highestZ = 100;

function bringToFront(windowElement){

    if(!windowElement) return;

    highestZ++;

    windowElement.style.zIndex = highestZ;

}

[
caseWindow,
evidenceWindow,
terminalWindow,
logWindow,
memoryWindow,
networkWindow,
vaultWindow,
emailWindow,
resumeWindow,
loginWindow

].forEach(function(win){

    if(!win) return;

    win.addEventListener("mousedown",function(){

        bringToFront(win);

    });

});

function makeDraggable(windowElement){

    if(!windowElement) return;

    const header = windowElement.querySelector(".window-header");

    if(!header) return;

    let offsetX = 0;
    let offsetY = 0;
    let dragging = false;

    header.addEventListener("mousedown",function(e){

        dragging = true;

        bringToFront(windowElement);

        offsetX = e.clientX - windowElement.offsetLeft;
        offsetY = e.clientY - windowElement.offsetTop;

        document.body.style.userSelect = "none";

    });

    document.addEventListener("mousemove",function(e){

        if(!dragging) return;

        windowElement.style.left =
        (e.clientX - offsetX) + "px";

        windowElement.style.top =
        (e.clientY - offsetY) + "px";

    });

    document.addEventListener("mouseup",function(){

        dragging = false;

        document.body.style.userSelect = "auto";

    });

}

makeDraggable(caseWindow);
makeDraggable(evidenceWindow);
makeDraggable(terminalWindow);
makeDraggable(logWindow);
makeDraggable(memoryWindow);
makeDraggable(networkWindow);
makeDraggable(vaultWindow);
makeDraggable(emailWindow);
makeDraggable(resumeWindow);
makeDraggable(loginWindow);
makeDraggable(usbWindow);
makeDraggable(photoWindow);
makeDraggable(noteWindow);
window.onload = function(){

    updateProgress(0);

    if(resumeIcon){

        resumeIcon.style.opacity = "0.4";

        resumeIcon.style.pointerEvents = "none";

    }

};